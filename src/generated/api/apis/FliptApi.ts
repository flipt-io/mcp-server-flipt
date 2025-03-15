// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Constraint } from '../models/Constraint';
import { CreateConstraintRequest } from '../models/CreateConstraintRequest';
import { CreateDistributionRequest } from '../models/CreateDistributionRequest';
import { CreateFlagRequest } from '../models/CreateFlagRequest';
import { CreateNamespaceRequest } from '../models/CreateNamespaceRequest';
import { CreateRolloutRequest } from '../models/CreateRolloutRequest';
import { CreateRuleRequest } from '../models/CreateRuleRequest';
import { CreateSegmentRequest } from '../models/CreateSegmentRequest';
import { CreateVariantRequest } from '../models/CreateVariantRequest';
import { Distribution } from '../models/Distribution';
import { Flag } from '../models/Flag';
import { FlagList } from '../models/FlagList';
import { Namespace } from '../models/Namespace';
import { NamespaceList } from '../models/NamespaceList';
import { OrderRolloutsRequest } from '../models/OrderRolloutsRequest';
import { OrderRulesRequest } from '../models/OrderRulesRequest';
import { Rollout } from '../models/Rollout';
import { RolloutList } from '../models/RolloutList';
import { Rule } from '../models/Rule';
import { RuleList } from '../models/RuleList';
import { Segment } from '../models/Segment';
import { SegmentList } from '../models/SegmentList';
import { UpdateConstraintRequest } from '../models/UpdateConstraintRequest';
import { UpdateDistributionRequest } from '../models/UpdateDistributionRequest';
import { UpdateFlagRequest } from '../models/UpdateFlagRequest';
import { UpdateNamespaceRequest } from '../models/UpdateNamespaceRequest';
import { UpdateRolloutRequest } from '../models/UpdateRolloutRequest';
import { UpdateRuleRequest } from '../models/UpdateRuleRequest';
import { UpdateSegmentRequest } from '../models/UpdateSegmentRequest';
import { UpdateVariantRequest } from '../models/UpdateVariantRequest';
import { Variant } from '../models/Variant';

/**
 * no description
 */
export class FliptApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param namespaceKey 
     * @param segmentKey 
     * @param createConstraintRequest 
     */
    public async createConstraint(namespaceKey: string, segmentKey: string, createConstraintRequest: CreateConstraintRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "createConstraint", "namespaceKey");
        }


        // verify required parameter 'segmentKey' is not null or undefined
        if (segmentKey === null || segmentKey === undefined) {
            throw new RequiredError("FliptApi", "createConstraint", "segmentKey");
        }


        // verify required parameter 'createConstraintRequest' is not null or undefined
        if (createConstraintRequest === null || createConstraintRequest === undefined) {
            throw new RequiredError("FliptApi", "createConstraint", "createConstraintRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/segments/{segmentKey}/constraints'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)))
            .replace('{' + 'segmentKey' + '}', encodeURIComponent(String(segmentKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createConstraintRequest, "CreateConstraintRequest", ""),
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
     * @param createDistributionRequest 
     */
    public async createDistribution(namespaceKey: string, flagKey: string, ruleId: string, createDistributionRequest: CreateDistributionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "createDistribution", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "createDistribution", "flagKey");
        }


        // verify required parameter 'ruleId' is not null or undefined
        if (ruleId === null || ruleId === undefined) {
            throw new RequiredError("FliptApi", "createDistribution", "ruleId");
        }


        // verify required parameter 'createDistributionRequest' is not null or undefined
        if (createDistributionRequest === null || createDistributionRequest === undefined) {
            throw new RequiredError("FliptApi", "createDistribution", "createDistributionRequest");
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
     * @param createFlagRequest 
     */
    public async createFlag(namespaceKey: string, createFlagRequest: CreateFlagRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "createFlag", "namespaceKey");
        }


        // verify required parameter 'createFlagRequest' is not null or undefined
        if (createFlagRequest === null || createFlagRequest === undefined) {
            throw new RequiredError("FliptApi", "createFlag", "createFlagRequest");
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
     * @param createNamespaceRequest 
     */
    public async createNamespace(createNamespaceRequest: CreateNamespaceRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createNamespaceRequest' is not null or undefined
        if (createNamespaceRequest === null || createNamespaceRequest === undefined) {
            throw new RequiredError("FliptApi", "createNamespace", "createNamespaceRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createNamespaceRequest, "CreateNamespaceRequest", ""),
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
     * @param createRolloutRequest 
     */
    public async createRollout(namespaceKey: string, flagKey: string, createRolloutRequest: CreateRolloutRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "createRollout", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "createRollout", "flagKey");
        }


        // verify required parameter 'createRolloutRequest' is not null or undefined
        if (createRolloutRequest === null || createRolloutRequest === undefined) {
            throw new RequiredError("FliptApi", "createRollout", "createRolloutRequest");
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
     * @param createRuleRequest 
     */
    public async createRule(namespaceKey: string, flagKey: string, createRuleRequest: CreateRuleRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "createRule", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "createRule", "flagKey");
        }


        // verify required parameter 'createRuleRequest' is not null or undefined
        if (createRuleRequest === null || createRuleRequest === undefined) {
            throw new RequiredError("FliptApi", "createRule", "createRuleRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/rules'
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
            ObjectSerializer.serialize(createRuleRequest, "CreateRuleRequest", ""),
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
     * @param createSegmentRequest 
     */
    public async createSegment(namespaceKey: string, createSegmentRequest: CreateSegmentRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "createSegment", "namespaceKey");
        }


        // verify required parameter 'createSegmentRequest' is not null or undefined
        if (createSegmentRequest === null || createSegmentRequest === undefined) {
            throw new RequiredError("FliptApi", "createSegment", "createSegmentRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/segments'
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
            ObjectSerializer.serialize(createSegmentRequest, "CreateSegmentRequest", ""),
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
     * @param createVariantRequest 
     */
    public async createVariant(namespaceKey: string, flagKey: string, createVariantRequest: CreateVariantRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "createVariant", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "createVariant", "flagKey");
        }


        // verify required parameter 'createVariantRequest' is not null or undefined
        if (createVariantRequest === null || createVariantRequest === undefined) {
            throw new RequiredError("FliptApi", "createVariant", "createVariantRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/variants'
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
            ObjectSerializer.serialize(createVariantRequest, "CreateVariantRequest", ""),
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
     * @param segmentKey 
     * @param id 
     */
    public async deleteConstraint(namespaceKey: string, segmentKey: string, id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "deleteConstraint", "namespaceKey");
        }


        // verify required parameter 'segmentKey' is not null or undefined
        if (segmentKey === null || segmentKey === undefined) {
            throw new RequiredError("FliptApi", "deleteConstraint", "segmentKey");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FliptApi", "deleteConstraint", "id");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/segments/{segmentKey}/constraints/{id}'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)))
            .replace('{' + 'segmentKey' + '}', encodeURIComponent(String(segmentKey)))
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
     * @param ruleId 
     * @param id 
     * @param variantId 
     */
    public async deleteDistribution(namespaceKey: string, flagKey: string, ruleId: string, id: string, variantId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "deleteDistribution", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "deleteDistribution", "flagKey");
        }


        // verify required parameter 'ruleId' is not null or undefined
        if (ruleId === null || ruleId === undefined) {
            throw new RequiredError("FliptApi", "deleteDistribution", "ruleId");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FliptApi", "deleteDistribution", "id");
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
     * @param key 
     */
    public async deleteFlag(namespaceKey: string, key: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "deleteFlag", "namespaceKey");
        }


        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError("FliptApi", "deleteFlag", "key");
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
     * @param key 
     * @param force 
     */
    public async deleteNamespace(key: string, force?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError("FliptApi", "deleteNamespace", "key");
        }



        // Path Params
        const localVarPath = '/api/v1/namespaces/{key}'
            .replace('{' + 'key' + '}', encodeURIComponent(String(key)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam("force", ObjectSerializer.serialize(force, "boolean", ""));
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
     * @param id 
     */
    public async deleteRollout(namespaceKey: string, flagKey: string, id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "deleteRollout", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "deleteRollout", "flagKey");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FliptApi", "deleteRollout", "id");
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
     */
    public async deleteRule(namespaceKey: string, flagKey: string, id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "deleteRule", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "deleteRule", "flagKey");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FliptApi", "deleteRule", "id");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/rules/{id}'
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
     * @param key 
     */
    public async deleteSegment(namespaceKey: string, key: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "deleteSegment", "namespaceKey");
        }


        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError("FliptApi", "deleteSegment", "key");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/segments/{key}'
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
     * @param flagKey 
     * @param id 
     */
    public async deleteVariant(namespaceKey: string, flagKey: string, id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "deleteVariant", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "deleteVariant", "flagKey");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FliptApi", "deleteVariant", "id");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/variants/{id}'
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
     * @param key 
     * @param reference 
     */
    public async getFlag(namespaceKey: string, key: string, reference?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "getFlag", "namespaceKey");
        }


        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError("FliptApi", "getFlag", "key");
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
     * @param key 
     * @param reference 
     */
    public async getNamespace(key: string, reference?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError("FliptApi", "getNamespace", "key");
        }



        // Path Params
        const localVarPath = '/api/v1/namespaces/{key}'
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
     * @param flagKey 
     * @param id 
     * @param reference 
     */
    public async getRollout(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "getRollout", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "getRollout", "flagKey");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FliptApi", "getRollout", "id");
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
     * @param id 
     * @param reference 
     */
    public async getRule(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "getRule", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "getRule", "flagKey");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FliptApi", "getRule", "id");
        }



        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/rules/{id}'
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
     * @param key 
     * @param reference 
     */
    public async getSegment(namespaceKey: string, key: string, reference?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "getSegment", "namespaceKey");
        }


        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError("FliptApi", "getSegment", "key");
        }



        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/segments/{key}'
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
            throw new RequiredError("FliptApi", "listFlags", "namespaceKey");
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
     * @param limit 
     * @param offset 
     * @param pageToken 
     * @param reference 
     */
    public async listNamespaces(limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/api/v1/namespaces';

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
     * @param flagKey 
     * @param limit 
     * @param pageToken 
     * @param reference 
     */
    public async listRollouts(namespaceKey: string, flagKey: string, limit?: number, pageToken?: string, reference?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "listRollouts", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "listRollouts", "flagKey");
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
     * @param limit 
     * @param offset 
     * @param pageToken 
     * @param reference 
     */
    public async listRules(namespaceKey: string, flagKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "listRules", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "listRules", "flagKey");
        }






        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/rules'
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
     * @param limit 
     * @param offset 
     * @param pageToken 
     * @param reference 
     */
    public async listSegments(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "listSegments", "namespaceKey");
        }






        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/segments'
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
     * @param flagKey 
     * @param orderRolloutsRequest 
     */
    public async orderRollouts(namespaceKey: string, flagKey: string, orderRolloutsRequest: OrderRolloutsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "orderRollouts", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "orderRollouts", "flagKey");
        }


        // verify required parameter 'orderRolloutsRequest' is not null or undefined
        if (orderRolloutsRequest === null || orderRolloutsRequest === undefined) {
            throw new RequiredError("FliptApi", "orderRollouts", "orderRolloutsRequest");
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
     * @param orderRulesRequest 
     */
    public async orderRules(namespaceKey: string, flagKey: string, orderRulesRequest: OrderRulesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "orderRules", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "orderRules", "flagKey");
        }


        // verify required parameter 'orderRulesRequest' is not null or undefined
        if (orderRulesRequest === null || orderRulesRequest === undefined) {
            throw new RequiredError("FliptApi", "orderRules", "orderRulesRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/rules/order'
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
            ObjectSerializer.serialize(orderRulesRequest, "OrderRulesRequest", ""),
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
     * @param segmentKey 
     * @param id 
     * @param updateConstraintRequest 
     */
    public async updateConstraint(namespaceKey: string, segmentKey: string, id: string, updateConstraintRequest: UpdateConstraintRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "updateConstraint", "namespaceKey");
        }


        // verify required parameter 'segmentKey' is not null or undefined
        if (segmentKey === null || segmentKey === undefined) {
            throw new RequiredError("FliptApi", "updateConstraint", "segmentKey");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FliptApi", "updateConstraint", "id");
        }


        // verify required parameter 'updateConstraintRequest' is not null or undefined
        if (updateConstraintRequest === null || updateConstraintRequest === undefined) {
            throw new RequiredError("FliptApi", "updateConstraint", "updateConstraintRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/segments/{segmentKey}/constraints/{id}'
            .replace('{' + 'namespaceKey' + '}', encodeURIComponent(String(namespaceKey)))
            .replace('{' + 'segmentKey' + '}', encodeURIComponent(String(segmentKey)))
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
            ObjectSerializer.serialize(updateConstraintRequest, "UpdateConstraintRequest", ""),
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
     * @param updateDistributionRequest 
     */
    public async updateDistribution(namespaceKey: string, flagKey: string, ruleId: string, id: string, updateDistributionRequest: UpdateDistributionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "updateDistribution", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "updateDistribution", "flagKey");
        }


        // verify required parameter 'ruleId' is not null or undefined
        if (ruleId === null || ruleId === undefined) {
            throw new RequiredError("FliptApi", "updateDistribution", "ruleId");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FliptApi", "updateDistribution", "id");
        }


        // verify required parameter 'updateDistributionRequest' is not null or undefined
        if (updateDistributionRequest === null || updateDistributionRequest === undefined) {
            throw new RequiredError("FliptApi", "updateDistribution", "updateDistributionRequest");
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

    /**
     * @param namespaceKey 
     * @param key 
     * @param updateFlagRequest 
     */
    public async updateFlag(namespaceKey: string, key: string, updateFlagRequest: UpdateFlagRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "updateFlag", "namespaceKey");
        }


        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError("FliptApi", "updateFlag", "key");
        }


        // verify required parameter 'updateFlagRequest' is not null or undefined
        if (updateFlagRequest === null || updateFlagRequest === undefined) {
            throw new RequiredError("FliptApi", "updateFlag", "updateFlagRequest");
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

    /**
     * @param key 
     * @param updateNamespaceRequest 
     */
    public async updateNamespace(key: string, updateNamespaceRequest: UpdateNamespaceRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError("FliptApi", "updateNamespace", "key");
        }


        // verify required parameter 'updateNamespaceRequest' is not null or undefined
        if (updateNamespaceRequest === null || updateNamespaceRequest === undefined) {
            throw new RequiredError("FliptApi", "updateNamespace", "updateNamespaceRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{key}'
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
            ObjectSerializer.serialize(updateNamespaceRequest, "UpdateNamespaceRequest", ""),
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
            throw new RequiredError("FliptApi", "updateRollout", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "updateRollout", "flagKey");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FliptApi", "updateRollout", "id");
        }


        // verify required parameter 'updateRolloutRequest' is not null or undefined
        if (updateRolloutRequest === null || updateRolloutRequest === undefined) {
            throw new RequiredError("FliptApi", "updateRollout", "updateRolloutRequest");
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

    /**
     * @param namespaceKey 
     * @param flagKey 
     * @param id 
     * @param updateRuleRequest 
     */
    public async updateRule(namespaceKey: string, flagKey: string, id: string, updateRuleRequest: UpdateRuleRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "updateRule", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "updateRule", "flagKey");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FliptApi", "updateRule", "id");
        }


        // verify required parameter 'updateRuleRequest' is not null or undefined
        if (updateRuleRequest === null || updateRuleRequest === undefined) {
            throw new RequiredError("FliptApi", "updateRule", "updateRuleRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/rules/{id}'
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
            ObjectSerializer.serialize(updateRuleRequest, "UpdateRuleRequest", ""),
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
     * @param updateSegmentRequest 
     */
    public async updateSegment(namespaceKey: string, key: string, updateSegmentRequest: UpdateSegmentRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "updateSegment", "namespaceKey");
        }


        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError("FliptApi", "updateSegment", "key");
        }


        // verify required parameter 'updateSegmentRequest' is not null or undefined
        if (updateSegmentRequest === null || updateSegmentRequest === undefined) {
            throw new RequiredError("FliptApi", "updateSegment", "updateSegmentRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/segments/{key}'
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
            ObjectSerializer.serialize(updateSegmentRequest, "UpdateSegmentRequest", ""),
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
     * @param updateVariantRequest 
     */
    public async updateVariant(namespaceKey: string, flagKey: string, id: string, updateVariantRequest: UpdateVariantRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespaceKey' is not null or undefined
        if (namespaceKey === null || namespaceKey === undefined) {
            throw new RequiredError("FliptApi", "updateVariant", "namespaceKey");
        }


        // verify required parameter 'flagKey' is not null or undefined
        if (flagKey === null || flagKey === undefined) {
            throw new RequiredError("FliptApi", "updateVariant", "flagKey");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FliptApi", "updateVariant", "id");
        }


        // verify required parameter 'updateVariantRequest' is not null or undefined
        if (updateVariantRequest === null || updateVariantRequest === undefined) {
            throw new RequiredError("FliptApi", "updateVariant", "updateVariantRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/namespaces/{namespaceKey}/flags/{flagKey}/variants/{id}'
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
            ObjectSerializer.serialize(updateVariantRequest, "UpdateVariantRequest", ""),
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

export class FliptApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createConstraint
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createConstraintWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Constraint >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Constraint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Constraint", ""
            ) as Constraint;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Constraint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Constraint", ""
            ) as Constraint;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

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
     * @params response Response returned by the server for a request to createNamespace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNamespaceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Namespace >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Namespace = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Namespace", ""
            ) as Namespace;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Namespace = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Namespace", ""
            ) as Namespace;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

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
     * @params response Response returned by the server for a request to createRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createRuleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Rule >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Rule = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Rule", ""
            ) as Rule;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Rule = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Rule", ""
            ) as Rule;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSegment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSegmentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Segment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Segment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Segment", ""
            ) as Segment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Segment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Segment", ""
            ) as Segment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVariant
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVariantWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Variant >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Variant = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Variant", ""
            ) as Variant;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Variant = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Variant", ""
            ) as Variant;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteConstraint
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteConstraintWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to deleteNamespace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteNamespaceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to deleteRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteRuleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to deleteSegment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSegmentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to deleteVariant
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteVariantWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to getNamespace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNamespaceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Namespace >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Namespace = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Namespace", ""
            ) as Namespace;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Namespace = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Namespace", ""
            ) as Namespace;
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
     * @params response Response returned by the server for a request to getRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRuleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Rule >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Rule = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Rule", ""
            ) as Rule;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Rule = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Rule", ""
            ) as Rule;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSegment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSegmentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Segment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Segment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Segment", ""
            ) as Segment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Segment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Segment", ""
            ) as Segment;
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
     * @params response Response returned by the server for a request to listNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<NamespaceList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NamespaceList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NamespaceList", ""
            ) as NamespaceList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NamespaceList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NamespaceList", ""
            ) as NamespaceList;
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
     * @params response Response returned by the server for a request to listRules
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRulesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RuleList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RuleList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuleList", ""
            ) as RuleList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RuleList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuleList", ""
            ) as RuleList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSegments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listSegmentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SegmentList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SegmentList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SegmentList", ""
            ) as SegmentList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SegmentList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SegmentList", ""
            ) as SegmentList;
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
     * @params response Response returned by the server for a request to orderRules
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderRulesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to updateConstraint
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateConstraintWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Constraint >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Constraint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Constraint", ""
            ) as Constraint;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Constraint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Constraint", ""
            ) as Constraint;
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateNamespace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateNamespaceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Namespace >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Namespace = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Namespace", ""
            ) as Namespace;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Namespace = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Namespace", ""
            ) as Namespace;
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateRuleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Rule >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Rule = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Rule", ""
            ) as Rule;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Rule = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Rule", ""
            ) as Rule;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSegment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateSegmentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Segment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Segment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Segment", ""
            ) as Segment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Segment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Segment", ""
            ) as Segment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateVariant
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateVariantWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Variant >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Variant = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Variant", ""
            ) as Variant;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Variant = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Variant", ""
            ) as Variant;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
