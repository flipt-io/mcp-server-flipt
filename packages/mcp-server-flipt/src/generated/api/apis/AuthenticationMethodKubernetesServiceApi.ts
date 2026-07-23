// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { VerifyServiceAccountRequest } from '../models/VerifyServiceAccountRequest';
import { VerifyServiceAccountResponse } from '../models/VerifyServiceAccountResponse';

/**
 * no description
 */
export class AuthenticationMethodKubernetesServiceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param verifyServiceAccountRequest 
     */
    public async kubernetesVerifyServiceAccount(verifyServiceAccountRequest: VerifyServiceAccountRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'verifyServiceAccountRequest' is not null or undefined
        if (verifyServiceAccountRequest === null || verifyServiceAccountRequest === undefined) {
            throw new RequiredError("AuthenticationMethodKubernetesServiceApi", "kubernetesVerifyServiceAccount", "verifyServiceAccountRequest");
        }


        // Path Params
        const localVarPath = '/auth/v1/method/kubernetes/serviceaccount';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(verifyServiceAccountRequest, "VerifyServiceAccountRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AuthenticationMethodKubernetesServiceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to kubernetesVerifyServiceAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async kubernetesVerifyServiceAccountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VerifyServiceAccountResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerifyServiceAccountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyServiceAccountResponse", ""
            ) as VerifyServiceAccountResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VerifyServiceAccountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyServiceAccountResponse", ""
            ) as VerifyServiceAccountResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
