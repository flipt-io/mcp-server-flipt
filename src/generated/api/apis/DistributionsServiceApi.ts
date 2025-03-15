// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateDistributionRequest } from '../models/CreateDistributionRequest';
import { Distribution } from '../models/Distribution';
import { UpdateDistributionRequest } from '../models/UpdateDistributionRequest';

/**
 * no description
 */
export class DistributionsServiceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param namespaceKey 
     * @param flagKey 
     * @param ruleId 
     * @param createDistributionRequest 
     */
    public async createDistribution(namespaceKey: string, flagKey: string, ruleId: string, createDistributionRequest: CreateDistributionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("DistributionsServiceApi", "createDistribution", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("DistributionsServiceApi", "createDistribution", "flagKey");
        }


        // verify required parameter 'ruleId' is not null or undefined
        if (ruleId === null || ruleId === undefined) {
            throw new RequiredError("DistributionsServiceApi", "createDistribution", "ruleId");
        }


        // verify required parameter 'createDistributionRequest' is not null or undefined
        if (createDistributionRequest === null || createDistributionRequest === undefined) {
            throw new RequiredError("DistributionsServiceApi", "createDistribution", "createDistributionRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/rules/{ruleId}/distributions'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)))
            .replace('{' + 'flagKey' + '}', encodeURIComponent(String(flagKey)))
            .replace('{' + 'ruleId' + '}', encodeURIComponent(String(ruleId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createDistributionRequest, "CreateDistributionRequest", ""),
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

    /**
     * @param namespaceKey 
     * @param flagKey 
     * @param ruleId 
     * @param id 
     * @param variantId 
     */
    public async deleteDistribution(namespaceKey: string, flagKey: string, ruleId: string, id: string, variantId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("DistributionsServiceApi", "deleteDistribution", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("DistributionsServiceApi", "deleteDistribution", "flagKey");
        }


        // verify required parameter 'ruleId' is not null or undefined
        if (ruleId === null || ruleId === undefined) {
            throw new RequiredError("DistributionsServiceApi", "deleteDistribution", "ruleId");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DistributionsServiceApi", "deleteDistribution", "id");
        }



        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/rules/{ruleId}/distributions/{id}'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)))
            .replace('{' + 'flagKey' + '}', encodeURIComponent(String(flagKey)))
            .replace('{' + 'ruleId' + '}', encodeURIComponent(String(ruleId)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (variantId !== undefined) {
            requestContext.setQueryParam("variantId", ObjectSerializer.serialize(variantId, "string", ""));
        }


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

    /**
     * @param namespaceKey 
     * @param flagKey 
     * @param ruleId 
     * @param id 
     * @param updateDistributionRequest 
     */
    public async updateDistribution(namespaceKey: string, flagKey: string, ruleId: string, id: string, updateDistributionRequest: UpdateDistributionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("DistributionsServiceApi", "updateDistribution", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("DistributionsServiceApi", "updateDistribution", "flagKey");
        }


        // verify required parameter 'ruleId' is not null or undefined
        if (ruleId === null || ruleId === undefined) {
            throw new RequiredError("DistributionsServiceApi", "updateDistribution", "ruleId");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DistributionsServiceApi", "updateDistribution", "id");
        }


        // verify required parameter 'updateDistributionRequest' is not null or undefined
        if (updateDistributionRequest === null || updateDistributionRequest === undefined) {
            throw new RequiredError("DistributionsServiceApi", "updateDistribution", "updateDistributionRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/rules/{ruleId}/distributions/{id}'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)))
            .replace('{' + 'flagKey' + '}', encodeURIComponent(String(flagKey)))
            .replace('{' + 'ruleId' + '}', encodeURIComponent(String(ruleId)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateDistributionRequest, "UpdateDistributionRequest", ""),
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

export class DistributionsServiceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDistribution
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDistributionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Distribution >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Distribution = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Distribution", ""
            ) as Distribution;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Distribution = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Distribution", ""
            ) as Distribution;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDistribution
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDistributionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDistribution
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDistributionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Distribution >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Distribution = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Distribution", ""
            ) as Distribution;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Distribution = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Distribution", ""
            ) as Distribution;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
