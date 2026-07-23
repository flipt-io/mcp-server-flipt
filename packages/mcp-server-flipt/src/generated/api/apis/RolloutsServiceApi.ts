// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateRolloutRequest } from '../models/CreateRolloutRequest';
import { OrderRolloutsRequest } from '../models/OrderRolloutsRequest';
import { Rollout } from '../models/Rollout';
import { RolloutList } from '../models/RolloutList';
import { UpdateRolloutRequest } from '../models/UpdateRolloutRequest';

/**
 * no description
 */
export class RolloutsServiceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param namespaceKey 
     * @param flagKey 
     * @param createRolloutRequest 
     */
    public async createRollout(namespaceKey: string, flagKey: string, createRolloutRequest: CreateRolloutRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("RolloutsServiceApi", "createRollout", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("RolloutsServiceApi", "createRollout", "flagKey");
        }


        // verify required parameter 'createRolloutRequest' is not null or undefined
        if (createRolloutRequest === null || createRolloutRequest === undefined) {
            throw new RequiredError("RolloutsServiceApi", "createRollout", "createRolloutRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/rollouts'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)))
            .replace('{' + 'flagKey' + '}', encodeURIComponent(String(flagKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createRolloutRequest, "CreateRolloutRequest", ""),
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
     * @param id 
     */
    public async deleteRollout(namespaceKey: string, flagKey: string, id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("RolloutsServiceApi", "deleteRollout", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("RolloutsServiceApi", "deleteRollout", "flagKey");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("RolloutsServiceApi", "deleteRollout", "id");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/rollouts/{id}'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)))
            .replace('{' + 'flagKey' + '}', encodeURIComponent(String(flagKey)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * @param id 
     * @param reference 
     */
    public async getRollout(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("RolloutsServiceApi", "getRollout", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("RolloutsServiceApi", "getRollout", "flagKey");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("RolloutsServiceApi", "getRollout", "id");
        }



        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/rollouts/{id}'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)))
            .replace('{' + 'flagKey' + '}', encodeURIComponent(String(flagKey)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (reference !== undefined) {
            requestContext.setQueryParam("reference", ObjectSerializer.serialize(reference, "string", ""));
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
     * @param limit 
     * @param pageToken 
     * @param reference 
     */
    public async listRollouts(namespaceKey: string, flagKey: string, limit?: number, pageToken?: string, reference?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("RolloutsServiceApi", "listRollouts", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("RolloutsServiceApi", "listRollouts", "flagKey");
        }





        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/rollouts'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)))
            .replace('{' + 'flagKey' + '}', encodeURIComponent(String(flagKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("pageToken", ObjectSerializer.serialize(pageToken, "string", ""));
        }

        // Query Params
        if (reference !== undefined) {
            requestContext.setQueryParam("reference", ObjectSerializer.serialize(reference, "string", ""));
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
     * @param orderRolloutsRequest 
     */
    public async orderRollouts(namespaceKey: string, flagKey: string, orderRolloutsRequest: OrderRolloutsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("RolloutsServiceApi", "orderRollouts", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("RolloutsServiceApi", "orderRollouts", "flagKey");
        }


        // verify required parameter 'orderRolloutsRequest' is not null or undefined
        if (orderRolloutsRequest === null || orderRolloutsRequest === undefined) {
            throw new RequiredError("RolloutsServiceApi", "orderRollouts", "orderRolloutsRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/rollouts/order'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)))
            .replace('{' + 'flagKey' + '}', encodeURIComponent(String(flagKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(orderRolloutsRequest, "OrderRolloutsRequest", ""),
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
     * @param id 
     * @param updateRolloutRequest 
     */
    public async updateRollout(namespaceKey: string, flagKey: string, id: string, updateRolloutRequest: UpdateRolloutRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("RolloutsServiceApi", "updateRollout", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("RolloutsServiceApi", "updateRollout", "flagKey");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("RolloutsServiceApi", "updateRollout", "id");
        }


        // verify required parameter 'updateRolloutRequest' is not null or undefined
        if (updateRolloutRequest === null || updateRolloutRequest === undefined) {
            throw new RequiredError("RolloutsServiceApi", "updateRollout", "updateRolloutRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/rollouts/{id}'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)))
            .replace('{' + 'flagKey' + '}', encodeURIComponent(String(flagKey)))
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
            ObjectSerializer.serialize(updateRolloutRequest, "UpdateRolloutRequest", ""),
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

export class RolloutsServiceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRollout
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createRolloutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Rollout >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Rollout = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Rollout", ""
            ) as Rollout;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Rollout = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Rollout", ""
            ) as Rollout;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRollout
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteRolloutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to getRollout
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRolloutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Rollout >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Rollout = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Rollout", ""
            ) as Rollout;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Rollout = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Rollout", ""
            ) as Rollout;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRollouts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRolloutsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RolloutList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RolloutList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RolloutList", ""
            ) as RolloutList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RolloutList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RolloutList", ""
            ) as RolloutList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderRollouts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderRolloutsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to updateRollout
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateRolloutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Rollout >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Rollout = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Rollout", ""
            ) as Rollout;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Rollout = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Rollout", ""
            ) as Rollout;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
