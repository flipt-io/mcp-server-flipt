// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateFlagRequest } from '../models/CreateFlagRequest';
import { Flag } from '../models/Flag';
import { FlagList } from '../models/FlagList';
import { UpdateFlagRequest } from '../models/UpdateFlagRequest';

/**
 * no description
 */
export class FlagsServiceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param namespaceKey 
     * @param createFlagRequest 
     */
    public async createFlag(namespaceKey: string, createFlagRequest: CreateFlagRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FlagsServiceApi", "createFlag", "namespaceKey");
        }


        // verify required parameter 'createFlagRequest' is not null or undefined
        if (createFlagRequest === null || createFlagRequest === undefined) {
            throw new RequiredError("FlagsServiceApi", "createFlag", "createFlagRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createFlagRequest, "CreateFlagRequest", ""),
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
     * @param key 
     */
    public async deleteFlag(namespaceKey: string, key: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FlagsServiceApi", "deleteFlag", "namespaceKey");
        }


        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError("FlagsServiceApi", "deleteFlag", "key");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{key}'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)))
            .replace('{' + 'key' + '}', encodeURIComponent(String(key)));

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
     * @param key 
     * @param reference 
     */
    public async getFlag(namespaceKey: string, key: string, reference?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FlagsServiceApi", "getFlag", "namespaceKey");
        }


        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError("FlagsServiceApi", "getFlag", "key");
        }



        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{key}'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)))
            .replace('{' + 'key' + '}', encodeURIComponent(String(key)));

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
     * @param limit 
     * @param offset 
     * @param pageToken 
     * @param reference 
     */
    public async listFlags(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FlagsServiceApi", "listFlags", "namespaceKey");
        }






        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int32"));
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
     * @param key 
     * @param updateFlagRequest 
     */
    public async updateFlag(namespaceKey: string, key: string, updateFlagRequest: UpdateFlagRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FlagsServiceApi", "updateFlag", "namespaceKey");
        }


        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError("FlagsServiceApi", "updateFlag", "key");
        }


        // verify required parameter 'updateFlagRequest' is not null or undefined
        if (updateFlagRequest === null || updateFlagRequest === undefined) {
            throw new RequiredError("FlagsServiceApi", "updateFlag", "updateFlagRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{key}'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)))
            .replace('{' + 'key' + '}', encodeURIComponent(String(key)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateFlagRequest, "UpdateFlagRequest", ""),
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

export class FlagsServiceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createFlag
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createFlagWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Flag >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Flag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flag", ""
            ) as Flag;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Flag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flag", ""
            ) as Flag;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteFlag
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteFlagWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to getFlag
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFlagWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Flag >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Flag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flag", ""
            ) as Flag;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Flag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flag", ""
            ) as Flag;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFlags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listFlagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FlagList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FlagList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FlagList", ""
            ) as FlagList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: FlagList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FlagList", ""
            ) as FlagList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateFlag
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateFlagWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Flag >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Flag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flag", ""
            ) as Flag;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Flag = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flag", ""
            ) as Flag;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
