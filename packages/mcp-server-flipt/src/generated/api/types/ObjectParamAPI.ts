import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { Authentication } from '../models/Authentication';
import { AuthorizeURLResponse } from '../models/AuthorizeURLResponse';
import { BatchEvaluationRequest } from '../models/BatchEvaluationRequest';
import { BatchEvaluationResponse } from '../models/BatchEvaluationResponse';
import { BooleanEvaluationResponse } from '../models/BooleanEvaluationResponse';
import { BulkEvaluationResponse } from '../models/BulkEvaluationResponse';
import { CacheInvalidation } from '../models/CacheInvalidation';
import { CallbackResponse } from '../models/CallbackResponse';
import { Capabilities } from '../models/Capabilities';
import { Constraint } from '../models/Constraint';
import { CreateConstraintRequest } from '../models/CreateConstraintRequest';
import { CreateDistributionRequest } from '../models/CreateDistributionRequest';
import { CreateFlagRequest } from '../models/CreateFlagRequest';
import { CreateNamespaceRequest } from '../models/CreateNamespaceRequest';
import { CreateRolloutRequest } from '../models/CreateRolloutRequest';
import { CreateRuleRequest } from '../models/CreateRuleRequest';
import { CreateSegmentRequest } from '../models/CreateSegmentRequest';
import { CreateTokenRequest } from '../models/CreateTokenRequest';
import { CreateTokenResponse } from '../models/CreateTokenResponse';
import { CreateVariantRequest } from '../models/CreateVariantRequest';
import { Distribution } from '../models/Distribution';
import { ErrorEvaluationResponse } from '../models/ErrorEvaluationResponse';
import { EvaluateBulkRequest } from '../models/EvaluateBulkRequest';
import { EvaluateFlagRequest } from '../models/EvaluateFlagRequest';
import { EvaluatedFlag } from '../models/EvaluatedFlag';
import { EvaluationRequest } from '../models/EvaluationRequest';
import { EvaluationResponse } from '../models/EvaluationResponse';
import { Flag } from '../models/Flag';
import { FlagEvaluation } from '../models/FlagEvaluation';
import { FlagList } from '../models/FlagList';
import { GetProviderConfigurationResponse } from '../models/GetProviderConfigurationResponse';
import { ListAuthenticationsResponse } from '../models/ListAuthenticationsResponse';
import { Namespace } from '../models/Namespace';
import { NamespaceList } from '../models/NamespaceList';
import { OrderRolloutsRequest } from '../models/OrderRolloutsRequest';
import { OrderRulesRequest } from '../models/OrderRulesRequest';
import { Polling } from '../models/Polling';
import { Rollout } from '../models/Rollout';
import { RolloutList } from '../models/RolloutList';
import { RolloutSegment } from '../models/RolloutSegment';
import { RolloutThreshold } from '../models/RolloutThreshold';
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
import { VariantEvaluationResponse } from '../models/VariantEvaluationResponse';
import { VerifyServiceAccountRequest } from '../models/VerifyServiceAccountRequest';
import { VerifyServiceAccountResponse } from '../models/VerifyServiceAccountResponse';

import { ObservableAuthenticationMethodKubernetesServiceApi } from "./ObservableAPI";
import { AuthenticationMethodKubernetesServiceApiRequestFactory, AuthenticationMethodKubernetesServiceApiResponseProcessor} from "../apis/AuthenticationMethodKubernetesServiceApi";

export interface AuthenticationMethodKubernetesServiceApiKubernetesVerifyServiceAccountRequest {
    /**
     * 
     * @type VerifyServiceAccountRequest
     * @memberof AuthenticationMethodKubernetesServiceApikubernetesVerifyServiceAccount
     */
    verifyServiceAccountRequest: VerifyServiceAccountRequest
}

export class ObjectAuthenticationMethodKubernetesServiceApi {
    private api: ObservableAuthenticationMethodKubernetesServiceApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationMethodKubernetesServiceApiRequestFactory, responseProcessor?: AuthenticationMethodKubernetesServiceApiResponseProcessor) {
        this.api = new ObservableAuthenticationMethodKubernetesServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public kubernetesVerifyServiceAccountWithHttpInfo(param: AuthenticationMethodKubernetesServiceApiKubernetesVerifyServiceAccountRequest, options?: ConfigurationOptions): Promise<HttpInfo<VerifyServiceAccountResponse>> {
        return this.api.kubernetesVerifyServiceAccountWithHttpInfo(param.verifyServiceAccountRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public kubernetesVerifyServiceAccount(param: AuthenticationMethodKubernetesServiceApiKubernetesVerifyServiceAccountRequest, options?: ConfigurationOptions): Promise<VerifyServiceAccountResponse> {
        return this.api.kubernetesVerifyServiceAccount(param.verifyServiceAccountRequest,  options).toPromise();
    }

}

import { ObservableAuthenticationMethodOIDCServiceApi } from "./ObservableAPI";
import { AuthenticationMethodOIDCServiceApiRequestFactory, AuthenticationMethodOIDCServiceApiResponseProcessor} from "../apis/AuthenticationMethodOIDCServiceApi";

export interface AuthenticationMethodOIDCServiceApiOidcAuthorizeURLRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationMethodOIDCServiceApioidcAuthorizeURL
     */
    provider: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationMethodOIDCServiceApioidcAuthorizeURL
     */
    state?: string
}

export interface AuthenticationMethodOIDCServiceApiOidcCallbackRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationMethodOIDCServiceApioidcCallback
     */
    provider: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationMethodOIDCServiceApioidcCallback
     */
    code?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationMethodOIDCServiceApioidcCallback
     */
    state?: string
}

export class ObjectAuthenticationMethodOIDCServiceApi {
    private api: ObservableAuthenticationMethodOIDCServiceApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationMethodOIDCServiceApiRequestFactory, responseProcessor?: AuthenticationMethodOIDCServiceApiResponseProcessor) {
        this.api = new ObservableAuthenticationMethodOIDCServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public oidcAuthorizeURLWithHttpInfo(param: AuthenticationMethodOIDCServiceApiOidcAuthorizeURLRequest, options?: ConfigurationOptions): Promise<HttpInfo<AuthorizeURLResponse>> {
        return this.api.oidcAuthorizeURLWithHttpInfo(param.provider, param.state,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public oidcAuthorizeURL(param: AuthenticationMethodOIDCServiceApiOidcAuthorizeURLRequest, options?: ConfigurationOptions): Promise<AuthorizeURLResponse> {
        return this.api.oidcAuthorizeURL(param.provider, param.state,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public oidcCallbackWithHttpInfo(param: AuthenticationMethodOIDCServiceApiOidcCallbackRequest, options?: ConfigurationOptions): Promise<HttpInfo<CallbackResponse>> {
        return this.api.oidcCallbackWithHttpInfo(param.provider, param.code, param.state,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public oidcCallback(param: AuthenticationMethodOIDCServiceApiOidcCallbackRequest, options?: ConfigurationOptions): Promise<CallbackResponse> {
        return this.api.oidcCallback(param.provider, param.code, param.state,  options).toPromise();
    }

}

import { ObservableAuthenticationMethodTokenServiceApi } from "./ObservableAPI";
import { AuthenticationMethodTokenServiceApiRequestFactory, AuthenticationMethodTokenServiceApiResponseProcessor} from "../apis/AuthenticationMethodTokenServiceApi";

export interface AuthenticationMethodTokenServiceApiCreateMethodTokenRequest {
    /**
     * 
     * @type CreateTokenRequest
     * @memberof AuthenticationMethodTokenServiceApicreateMethodToken
     */
    createTokenRequest: CreateTokenRequest
}

export class ObjectAuthenticationMethodTokenServiceApi {
    private api: ObservableAuthenticationMethodTokenServiceApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationMethodTokenServiceApiRequestFactory, responseProcessor?: AuthenticationMethodTokenServiceApiResponseProcessor) {
        this.api = new ObservableAuthenticationMethodTokenServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createMethodTokenWithHttpInfo(param: AuthenticationMethodTokenServiceApiCreateMethodTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateTokenResponse>> {
        return this.api.createMethodTokenWithHttpInfo(param.createTokenRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createMethodToken(param: AuthenticationMethodTokenServiceApiCreateMethodTokenRequest, options?: ConfigurationOptions): Promise<CreateTokenResponse> {
        return this.api.createMethodToken(param.createTokenRequest,  options).toPromise();
    }

}

import { ObservableAuthenticationServiceApi } from "./ObservableAPI";
import { AuthenticationServiceApiRequestFactory, AuthenticationServiceApiResponseProcessor} from "../apis/AuthenticationServiceApi";

export interface AuthenticationServiceApiDeleteAuthTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationServiceApideleteAuthToken
     */
    id: string
}

export interface AuthenticationServiceApiExpireAuthSelfRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof AuthenticationServiceApiexpireAuthSelf
     */
    expiresAt?: Date
}

export interface AuthenticationServiceApiGetAuthSelfRequest {
}

export interface AuthenticationServiceApiGetAuthTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationServiceApigetAuthToken
     */
    id: string
}

export interface AuthenticationServiceApiListAuthTokensRequest {
    /**
     * 
     * Defaults to: undefined
     * @type &#39;METHOD_NONE&#39; | &#39;METHOD_TOKEN&#39; | &#39;METHOD_OIDC&#39; | &#39;METHOD_KUBERNETES&#39; | &#39;METHOD_GITHUB&#39; | &#39;METHOD_JWT&#39; | &#39;METHOD_CLOUD&#39;
     * @memberof AuthenticationServiceApilistAuthTokens
     */
    method?: 'METHOD_NONE' | 'METHOD_TOKEN' | 'METHOD_OIDC' | 'METHOD_KUBERNETES' | 'METHOD_GITHUB' | 'METHOD_JWT' | 'METHOD_CLOUD'
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthenticationServiceApilistAuthTokens
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationServiceApilistAuthTokens
     */
    pageToken?: string
}

export class ObjectAuthenticationServiceApi {
    private api: ObservableAuthenticationServiceApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationServiceApiRequestFactory, responseProcessor?: AuthenticationServiceApiResponseProcessor) {
        this.api = new ObservableAuthenticationServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public deleteAuthTokenWithHttpInfo(param: AuthenticationServiceApiDeleteAuthTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteAuthTokenWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteAuthToken(param: AuthenticationServiceApiDeleteAuthTokenRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteAuthToken(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public expireAuthSelfWithHttpInfo(param: AuthenticationServiceApiExpireAuthSelfRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.expireAuthSelfWithHttpInfo(param.expiresAt,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public expireAuthSelf(param: AuthenticationServiceApiExpireAuthSelfRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.expireAuthSelf(param.expiresAt,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAuthSelfWithHttpInfo(param: AuthenticationServiceApiGetAuthSelfRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Authentication>> {
        return this.api.getAuthSelfWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAuthSelf(param: AuthenticationServiceApiGetAuthSelfRequest = {}, options?: ConfigurationOptions): Promise<Authentication> {
        return this.api.getAuthSelf( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAuthTokenWithHttpInfo(param: AuthenticationServiceApiGetAuthTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<Authentication>> {
        return this.api.getAuthTokenWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAuthToken(param: AuthenticationServiceApiGetAuthTokenRequest, options?: ConfigurationOptions): Promise<Authentication> {
        return this.api.getAuthToken(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listAuthTokensWithHttpInfo(param: AuthenticationServiceApiListAuthTokensRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListAuthenticationsResponse>> {
        return this.api.listAuthTokensWithHttpInfo(param.method, param.limit, param.pageToken,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listAuthTokens(param: AuthenticationServiceApiListAuthTokensRequest = {}, options?: ConfigurationOptions): Promise<ListAuthenticationsResponse> {
        return this.api.listAuthTokens(param.method, param.limit, param.pageToken,  options).toPromise();
    }

}

import { ObservableConstraintsServiceApi } from "./ObservableAPI";
import { ConstraintsServiceApiRequestFactory, ConstraintsServiceApiResponseProcessor} from "../apis/ConstraintsServiceApi";

export interface ConstraintsServiceApiCreateConstraintRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ConstraintsServiceApicreateConstraint
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ConstraintsServiceApicreateConstraint
     */
    segmentKey: string
    /**
     * 
     * @type CreateConstraintRequest
     * @memberof ConstraintsServiceApicreateConstraint
     */
    createConstraintRequest: CreateConstraintRequest
}

export interface ConstraintsServiceApiDeleteConstraintRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ConstraintsServiceApideleteConstraint
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ConstraintsServiceApideleteConstraint
     */
    segmentKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ConstraintsServiceApideleteConstraint
     */
    id: string
}

export interface ConstraintsServiceApiUpdateConstraintRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ConstraintsServiceApiupdateConstraint
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ConstraintsServiceApiupdateConstraint
     */
    segmentKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ConstraintsServiceApiupdateConstraint
     */
    id: string
    /**
     * 
     * @type UpdateConstraintRequest
     * @memberof ConstraintsServiceApiupdateConstraint
     */
    updateConstraintRequest: UpdateConstraintRequest
}

export class ObjectConstraintsServiceApi {
    private api: ObservableConstraintsServiceApi

    public constructor(configuration: Configuration, requestFactory?: ConstraintsServiceApiRequestFactory, responseProcessor?: ConstraintsServiceApiResponseProcessor) {
        this.api = new ObservableConstraintsServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createConstraintWithHttpInfo(param: ConstraintsServiceApiCreateConstraintRequest, options?: ConfigurationOptions): Promise<HttpInfo<Constraint>> {
        return this.api.createConstraintWithHttpInfo(param.namespaceKey, param.segmentKey, param.createConstraintRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createConstraint(param: ConstraintsServiceApiCreateConstraintRequest, options?: ConfigurationOptions): Promise<Constraint> {
        return this.api.createConstraint(param.namespaceKey, param.segmentKey, param.createConstraintRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteConstraintWithHttpInfo(param: ConstraintsServiceApiDeleteConstraintRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteConstraintWithHttpInfo(param.namespaceKey, param.segmentKey, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteConstraint(param: ConstraintsServiceApiDeleteConstraintRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteConstraint(param.namespaceKey, param.segmentKey, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateConstraintWithHttpInfo(param: ConstraintsServiceApiUpdateConstraintRequest, options?: ConfigurationOptions): Promise<HttpInfo<Constraint>> {
        return this.api.updateConstraintWithHttpInfo(param.namespaceKey, param.segmentKey, param.id, param.updateConstraintRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateConstraint(param: ConstraintsServiceApiUpdateConstraintRequest, options?: ConfigurationOptions): Promise<Constraint> {
        return this.api.updateConstraint(param.namespaceKey, param.segmentKey, param.id, param.updateConstraintRequest,  options).toPromise();
    }

}

import { ObservableDistributionsServiceApi } from "./ObservableAPI";
import { DistributionsServiceApiRequestFactory, DistributionsServiceApiResponseProcessor} from "../apis/DistributionsServiceApi";

export interface DistributionsServiceApiCreateDistributionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DistributionsServiceApicreateDistribution
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DistributionsServiceApicreateDistribution
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DistributionsServiceApicreateDistribution
     */
    ruleId: string
    /**
     * 
     * @type CreateDistributionRequest
     * @memberof DistributionsServiceApicreateDistribution
     */
    createDistributionRequest: CreateDistributionRequest
}

export interface DistributionsServiceApiDeleteDistributionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DistributionsServiceApideleteDistribution
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DistributionsServiceApideleteDistribution
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DistributionsServiceApideleteDistribution
     */
    ruleId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DistributionsServiceApideleteDistribution
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DistributionsServiceApideleteDistribution
     */
    variantId?: string
}

export interface DistributionsServiceApiUpdateDistributionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DistributionsServiceApiupdateDistribution
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DistributionsServiceApiupdateDistribution
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DistributionsServiceApiupdateDistribution
     */
    ruleId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DistributionsServiceApiupdateDistribution
     */
    id: string
    /**
     * 
     * @type UpdateDistributionRequest
     * @memberof DistributionsServiceApiupdateDistribution
     */
    updateDistributionRequest: UpdateDistributionRequest
}

export class ObjectDistributionsServiceApi {
    private api: ObservableDistributionsServiceApi

    public constructor(configuration: Configuration, requestFactory?: DistributionsServiceApiRequestFactory, responseProcessor?: DistributionsServiceApiResponseProcessor) {
        this.api = new ObservableDistributionsServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createDistributionWithHttpInfo(param: DistributionsServiceApiCreateDistributionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Distribution>> {
        return this.api.createDistributionWithHttpInfo(param.namespaceKey, param.flagKey, param.ruleId, param.createDistributionRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createDistribution(param: DistributionsServiceApiCreateDistributionRequest, options?: ConfigurationOptions): Promise<Distribution> {
        return this.api.createDistribution(param.namespaceKey, param.flagKey, param.ruleId, param.createDistributionRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteDistributionWithHttpInfo(param: DistributionsServiceApiDeleteDistributionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteDistributionWithHttpInfo(param.namespaceKey, param.flagKey, param.ruleId, param.id, param.variantId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteDistribution(param: DistributionsServiceApiDeleteDistributionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteDistribution(param.namespaceKey, param.flagKey, param.ruleId, param.id, param.variantId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateDistributionWithHttpInfo(param: DistributionsServiceApiUpdateDistributionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Distribution>> {
        return this.api.updateDistributionWithHttpInfo(param.namespaceKey, param.flagKey, param.ruleId, param.id, param.updateDistributionRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateDistribution(param: DistributionsServiceApiUpdateDistributionRequest, options?: ConfigurationOptions): Promise<Distribution> {
        return this.api.updateDistribution(param.namespaceKey, param.flagKey, param.ruleId, param.id, param.updateDistributionRequest,  options).toPromise();
    }

}

import { ObservableEvaluationServiceApi } from "./ObservableAPI";
import { EvaluationServiceApiRequestFactory, EvaluationServiceApiResponseProcessor} from "../apis/EvaluationServiceApi";

export interface EvaluationServiceApiEvaluateBatchRequest {
    /**
     * 
     * @type BatchEvaluationRequest
     * @memberof EvaluationServiceApievaluateBatch
     */
    batchEvaluationRequest: BatchEvaluationRequest
}

export interface EvaluationServiceApiEvaluateBooleanRequest {
    /**
     * 
     * @type EvaluationRequest
     * @memberof EvaluationServiceApievaluateBoolean
     */
    evaluationRequest: EvaluationRequest
}

export interface EvaluationServiceApiEvaluateVariantRequest {
    /**
     * 
     * @type EvaluationRequest
     * @memberof EvaluationServiceApievaluateVariant
     */
    evaluationRequest: EvaluationRequest
}

export class ObjectEvaluationServiceApi {
    private api: ObservableEvaluationServiceApi

    public constructor(configuration: Configuration, requestFactory?: EvaluationServiceApiRequestFactory, responseProcessor?: EvaluationServiceApiResponseProcessor) {
        this.api = new ObservableEvaluationServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public evaluateBatchWithHttpInfo(param: EvaluationServiceApiEvaluateBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchEvaluationResponse>> {
        return this.api.evaluateBatchWithHttpInfo(param.batchEvaluationRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public evaluateBatch(param: EvaluationServiceApiEvaluateBatchRequest, options?: ConfigurationOptions): Promise<BatchEvaluationResponse> {
        return this.api.evaluateBatch(param.batchEvaluationRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public evaluateBooleanWithHttpInfo(param: EvaluationServiceApiEvaluateBooleanRequest, options?: ConfigurationOptions): Promise<HttpInfo<BooleanEvaluationResponse>> {
        return this.api.evaluateBooleanWithHttpInfo(param.evaluationRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public evaluateBoolean(param: EvaluationServiceApiEvaluateBooleanRequest, options?: ConfigurationOptions): Promise<BooleanEvaluationResponse> {
        return this.api.evaluateBoolean(param.evaluationRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public evaluateVariantWithHttpInfo(param: EvaluationServiceApiEvaluateVariantRequest, options?: ConfigurationOptions): Promise<HttpInfo<VariantEvaluationResponse>> {
        return this.api.evaluateVariantWithHttpInfo(param.evaluationRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public evaluateVariant(param: EvaluationServiceApiEvaluateVariantRequest, options?: ConfigurationOptions): Promise<VariantEvaluationResponse> {
        return this.api.evaluateVariant(param.evaluationRequest,  options).toPromise();
    }

}

import { ObservableFlagsServiceApi } from "./ObservableAPI";
import { FlagsServiceApiRequestFactory, FlagsServiceApiResponseProcessor} from "../apis/FlagsServiceApi";

export interface FlagsServiceApiCreateFlagRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FlagsServiceApicreateFlag
     */
    namespaceKey: string
    /**
     * 
     * @type CreateFlagRequest
     * @memberof FlagsServiceApicreateFlag
     */
    createFlagRequest: CreateFlagRequest
}

export interface FlagsServiceApiDeleteFlagRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FlagsServiceApideleteFlag
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FlagsServiceApideleteFlag
     */
    key: string
}

export interface FlagsServiceApiGetFlagRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FlagsServiceApigetFlag
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FlagsServiceApigetFlag
     */
    key: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FlagsServiceApigetFlag
     */
    reference?: string
}

export interface FlagsServiceApiListFlagsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FlagsServiceApilistFlags
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FlagsServiceApilistFlags
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FlagsServiceApilistFlags
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FlagsServiceApilistFlags
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FlagsServiceApilistFlags
     */
    reference?: string
}

export interface FlagsServiceApiUpdateFlagRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FlagsServiceApiupdateFlag
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FlagsServiceApiupdateFlag
     */
    key: string
    /**
     * 
     * @type UpdateFlagRequest
     * @memberof FlagsServiceApiupdateFlag
     */
    updateFlagRequest: UpdateFlagRequest
}

export class ObjectFlagsServiceApi {
    private api: ObservableFlagsServiceApi

    public constructor(configuration: Configuration, requestFactory?: FlagsServiceApiRequestFactory, responseProcessor?: FlagsServiceApiResponseProcessor) {
        this.api = new ObservableFlagsServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createFlagWithHttpInfo(param: FlagsServiceApiCreateFlagRequest, options?: ConfigurationOptions): Promise<HttpInfo<Flag>> {
        return this.api.createFlagWithHttpInfo(param.namespaceKey, param.createFlagRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createFlag(param: FlagsServiceApiCreateFlagRequest, options?: ConfigurationOptions): Promise<Flag> {
        return this.api.createFlag(param.namespaceKey, param.createFlagRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteFlagWithHttpInfo(param: FlagsServiceApiDeleteFlagRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteFlagWithHttpInfo(param.namespaceKey, param.key,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteFlag(param: FlagsServiceApiDeleteFlagRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteFlag(param.namespaceKey, param.key,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getFlagWithHttpInfo(param: FlagsServiceApiGetFlagRequest, options?: ConfigurationOptions): Promise<HttpInfo<Flag>> {
        return this.api.getFlagWithHttpInfo(param.namespaceKey, param.key, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getFlag(param: FlagsServiceApiGetFlagRequest, options?: ConfigurationOptions): Promise<Flag> {
        return this.api.getFlag(param.namespaceKey, param.key, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listFlagsWithHttpInfo(param: FlagsServiceApiListFlagsRequest, options?: ConfigurationOptions): Promise<HttpInfo<FlagList>> {
        return this.api.listFlagsWithHttpInfo(param.namespaceKey, param.limit, param.offset, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listFlags(param: FlagsServiceApiListFlagsRequest, options?: ConfigurationOptions): Promise<FlagList> {
        return this.api.listFlags(param.namespaceKey, param.limit, param.offset, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateFlagWithHttpInfo(param: FlagsServiceApiUpdateFlagRequest, options?: ConfigurationOptions): Promise<HttpInfo<Flag>> {
        return this.api.updateFlagWithHttpInfo(param.namespaceKey, param.key, param.updateFlagRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateFlag(param: FlagsServiceApiUpdateFlagRequest, options?: ConfigurationOptions): Promise<Flag> {
        return this.api.updateFlag(param.namespaceKey, param.key, param.updateFlagRequest,  options).toPromise();
    }

}

import { ObservableFliptApi } from "./ObservableAPI";
import { FliptApiRequestFactory, FliptApiResponseProcessor} from "../apis/FliptApi";

export interface FliptApiCreateConstraintRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApicreateConstraint
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApicreateConstraint
     */
    segmentKey: string
    /**
     * 
     * @type CreateConstraintRequest
     * @memberof FliptApicreateConstraint
     */
    createConstraintRequest: CreateConstraintRequest
}

export interface FliptApiCreateDistributionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApicreateDistribution
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApicreateDistribution
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApicreateDistribution
     */
    ruleId: string
    /**
     * 
     * @type CreateDistributionRequest
     * @memberof FliptApicreateDistribution
     */
    createDistributionRequest: CreateDistributionRequest
}

export interface FliptApiCreateFlagRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApicreateFlag
     */
    namespaceKey: string
    /**
     * 
     * @type CreateFlagRequest
     * @memberof FliptApicreateFlag
     */
    createFlagRequest: CreateFlagRequest
}

export interface FliptApiCreateNamespaceRequest {
    /**
     * 
     * @type CreateNamespaceRequest
     * @memberof FliptApicreateNamespace
     */
    createNamespaceRequest: CreateNamespaceRequest
}

export interface FliptApiCreateRolloutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApicreateRollout
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApicreateRollout
     */
    flagKey: string
    /**
     * 
     * @type CreateRolloutRequest
     * @memberof FliptApicreateRollout
     */
    createRolloutRequest: CreateRolloutRequest
}

export interface FliptApiCreateRuleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApicreateRule
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApicreateRule
     */
    flagKey: string
    /**
     * 
     * @type CreateRuleRequest
     * @memberof FliptApicreateRule
     */
    createRuleRequest: CreateRuleRequest
}

export interface FliptApiCreateSegmentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApicreateSegment
     */
    namespaceKey: string
    /**
     * 
     * @type CreateSegmentRequest
     * @memberof FliptApicreateSegment
     */
    createSegmentRequest: CreateSegmentRequest
}

export interface FliptApiCreateVariantRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApicreateVariant
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApicreateVariant
     */
    flagKey: string
    /**
     * 
     * @type CreateVariantRequest
     * @memberof FliptApicreateVariant
     */
    createVariantRequest: CreateVariantRequest
}

export interface FliptApiDeleteConstraintRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteConstraint
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteConstraint
     */
    segmentKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteConstraint
     */
    id: string
}

export interface FliptApiDeleteDistributionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteDistribution
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteDistribution
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteDistribution
     */
    ruleId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteDistribution
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteDistribution
     */
    variantId?: string
}

export interface FliptApiDeleteFlagRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteFlag
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteFlag
     */
    key: string
}

export interface FliptApiDeleteNamespaceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteNamespace
     */
    key: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof FliptApideleteNamespace
     */
    force?: boolean
}

export interface FliptApiDeleteRolloutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteRollout
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteRollout
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteRollout
     */
    id: string
}

export interface FliptApiDeleteRuleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteRule
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteRule
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteRule
     */
    id: string
}

export interface FliptApiDeleteSegmentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteSegment
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteSegment
     */
    key: string
}

export interface FliptApiDeleteVariantRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteVariant
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteVariant
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApideleteVariant
     */
    id: string
}

export interface FliptApiGetFlagRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApigetFlag
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApigetFlag
     */
    key: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApigetFlag
     */
    reference?: string
}

export interface FliptApiGetNamespaceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApigetNamespace
     */
    key: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApigetNamespace
     */
    reference?: string
}

export interface FliptApiGetRolloutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApigetRollout
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApigetRollout
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApigetRollout
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApigetRollout
     */
    reference?: string
}

export interface FliptApiGetRuleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApigetRule
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApigetRule
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApigetRule
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApigetRule
     */
    reference?: string
}

export interface FliptApiGetSegmentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApigetSegment
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApigetSegment
     */
    key: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApigetSegment
     */
    reference?: string
}

export interface FliptApiListFlagsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApilistFlags
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FliptApilistFlags
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FliptApilistFlags
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApilistFlags
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApilistFlags
     */
    reference?: string
}

export interface FliptApiListNamespacesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FliptApilistNamespaces
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FliptApilistNamespaces
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApilistNamespaces
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApilistNamespaces
     */
    reference?: string
}

export interface FliptApiListRolloutsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApilistRollouts
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApilistRollouts
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FliptApilistRollouts
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApilistRollouts
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApilistRollouts
     */
    reference?: string
}

export interface FliptApiListRulesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApilistRules
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApilistRules
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FliptApilistRules
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FliptApilistRules
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApilistRules
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApilistRules
     */
    reference?: string
}

export interface FliptApiListSegmentsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApilistSegments
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FliptApilistSegments
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FliptApilistSegments
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApilistSegments
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApilistSegments
     */
    reference?: string
}

export interface FliptApiOrderRolloutsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiorderRollouts
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiorderRollouts
     */
    flagKey: string
    /**
     * 
     * @type OrderRolloutsRequest
     * @memberof FliptApiorderRollouts
     */
    orderRolloutsRequest: OrderRolloutsRequest
}

export interface FliptApiOrderRulesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiorderRules
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiorderRules
     */
    flagKey: string
    /**
     * 
     * @type OrderRulesRequest
     * @memberof FliptApiorderRules
     */
    orderRulesRequest: OrderRulesRequest
}

export interface FliptApiUpdateConstraintRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateConstraint
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateConstraint
     */
    segmentKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateConstraint
     */
    id: string
    /**
     * 
     * @type UpdateConstraintRequest
     * @memberof FliptApiupdateConstraint
     */
    updateConstraintRequest: UpdateConstraintRequest
}

export interface FliptApiUpdateDistributionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateDistribution
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateDistribution
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateDistribution
     */
    ruleId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateDistribution
     */
    id: string
    /**
     * 
     * @type UpdateDistributionRequest
     * @memberof FliptApiupdateDistribution
     */
    updateDistributionRequest: UpdateDistributionRequest
}

export interface FliptApiUpdateFlagRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateFlag
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateFlag
     */
    key: string
    /**
     * 
     * @type UpdateFlagRequest
     * @memberof FliptApiupdateFlag
     */
    updateFlagRequest: UpdateFlagRequest
}

export interface FliptApiUpdateNamespaceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateNamespace
     */
    key: string
    /**
     * 
     * @type UpdateNamespaceRequest
     * @memberof FliptApiupdateNamespace
     */
    updateNamespaceRequest: UpdateNamespaceRequest
}

export interface FliptApiUpdateRolloutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateRollout
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateRollout
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateRollout
     */
    id: string
    /**
     * 
     * @type UpdateRolloutRequest
     * @memberof FliptApiupdateRollout
     */
    updateRolloutRequest: UpdateRolloutRequest
}

export interface FliptApiUpdateRuleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateRule
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateRule
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateRule
     */
    id: string
    /**
     * 
     * @type UpdateRuleRequest
     * @memberof FliptApiupdateRule
     */
    updateRuleRequest: UpdateRuleRequest
}

export interface FliptApiUpdateSegmentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateSegment
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateSegment
     */
    key: string
    /**
     * 
     * @type UpdateSegmentRequest
     * @memberof FliptApiupdateSegment
     */
    updateSegmentRequest: UpdateSegmentRequest
}

export interface FliptApiUpdateVariantRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateVariant
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateVariant
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FliptApiupdateVariant
     */
    id: string
    /**
     * 
     * @type UpdateVariantRequest
     * @memberof FliptApiupdateVariant
     */
    updateVariantRequest: UpdateVariantRequest
}

export class ObjectFliptApi {
    private api: ObservableFliptApi

    public constructor(configuration: Configuration, requestFactory?: FliptApiRequestFactory, responseProcessor?: FliptApiResponseProcessor) {
        this.api = new ObservableFliptApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createConstraintWithHttpInfo(param: FliptApiCreateConstraintRequest, options?: ConfigurationOptions): Promise<HttpInfo<Constraint>> {
        return this.api.createConstraintWithHttpInfo(param.namespaceKey, param.segmentKey, param.createConstraintRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createConstraint(param: FliptApiCreateConstraintRequest, options?: ConfigurationOptions): Promise<Constraint> {
        return this.api.createConstraint(param.namespaceKey, param.segmentKey, param.createConstraintRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createDistributionWithHttpInfo(param: FliptApiCreateDistributionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Distribution>> {
        return this.api.createDistributionWithHttpInfo(param.namespaceKey, param.flagKey, param.ruleId, param.createDistributionRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createDistribution(param: FliptApiCreateDistributionRequest, options?: ConfigurationOptions): Promise<Distribution> {
        return this.api.createDistribution(param.namespaceKey, param.flagKey, param.ruleId, param.createDistributionRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createFlagWithHttpInfo(param: FliptApiCreateFlagRequest, options?: ConfigurationOptions): Promise<HttpInfo<Flag>> {
        return this.api.createFlagWithHttpInfo(param.namespaceKey, param.createFlagRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createFlag(param: FliptApiCreateFlagRequest, options?: ConfigurationOptions): Promise<Flag> {
        return this.api.createFlag(param.namespaceKey, param.createFlagRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createNamespaceWithHttpInfo(param: FliptApiCreateNamespaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<Namespace>> {
        return this.api.createNamespaceWithHttpInfo(param.createNamespaceRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createNamespace(param: FliptApiCreateNamespaceRequest, options?: ConfigurationOptions): Promise<Namespace> {
        return this.api.createNamespace(param.createNamespaceRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createRolloutWithHttpInfo(param: FliptApiCreateRolloutRequest, options?: ConfigurationOptions): Promise<HttpInfo<Rollout>> {
        return this.api.createRolloutWithHttpInfo(param.namespaceKey, param.flagKey, param.createRolloutRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createRollout(param: FliptApiCreateRolloutRequest, options?: ConfigurationOptions): Promise<Rollout> {
        return this.api.createRollout(param.namespaceKey, param.flagKey, param.createRolloutRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createRuleWithHttpInfo(param: FliptApiCreateRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<Rule>> {
        return this.api.createRuleWithHttpInfo(param.namespaceKey, param.flagKey, param.createRuleRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createRule(param: FliptApiCreateRuleRequest, options?: ConfigurationOptions): Promise<Rule> {
        return this.api.createRule(param.namespaceKey, param.flagKey, param.createRuleRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createSegmentWithHttpInfo(param: FliptApiCreateSegmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<Segment>> {
        return this.api.createSegmentWithHttpInfo(param.namespaceKey, param.createSegmentRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createSegment(param: FliptApiCreateSegmentRequest, options?: ConfigurationOptions): Promise<Segment> {
        return this.api.createSegment(param.namespaceKey, param.createSegmentRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createVariantWithHttpInfo(param: FliptApiCreateVariantRequest, options?: ConfigurationOptions): Promise<HttpInfo<Variant>> {
        return this.api.createVariantWithHttpInfo(param.namespaceKey, param.flagKey, param.createVariantRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createVariant(param: FliptApiCreateVariantRequest, options?: ConfigurationOptions): Promise<Variant> {
        return this.api.createVariant(param.namespaceKey, param.flagKey, param.createVariantRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteConstraintWithHttpInfo(param: FliptApiDeleteConstraintRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteConstraintWithHttpInfo(param.namespaceKey, param.segmentKey, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteConstraint(param: FliptApiDeleteConstraintRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteConstraint(param.namespaceKey, param.segmentKey, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteDistributionWithHttpInfo(param: FliptApiDeleteDistributionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteDistributionWithHttpInfo(param.namespaceKey, param.flagKey, param.ruleId, param.id, param.variantId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteDistribution(param: FliptApiDeleteDistributionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteDistribution(param.namespaceKey, param.flagKey, param.ruleId, param.id, param.variantId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteFlagWithHttpInfo(param: FliptApiDeleteFlagRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteFlagWithHttpInfo(param.namespaceKey, param.key,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteFlag(param: FliptApiDeleteFlagRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteFlag(param.namespaceKey, param.key,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteNamespaceWithHttpInfo(param: FliptApiDeleteNamespaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteNamespaceWithHttpInfo(param.key, param.force,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteNamespace(param: FliptApiDeleteNamespaceRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteNamespace(param.key, param.force,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteRolloutWithHttpInfo(param: FliptApiDeleteRolloutRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteRolloutWithHttpInfo(param.namespaceKey, param.flagKey, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteRollout(param: FliptApiDeleteRolloutRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteRollout(param.namespaceKey, param.flagKey, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteRuleWithHttpInfo(param: FliptApiDeleteRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteRuleWithHttpInfo(param.namespaceKey, param.flagKey, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteRule(param: FliptApiDeleteRuleRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteRule(param.namespaceKey, param.flagKey, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteSegmentWithHttpInfo(param: FliptApiDeleteSegmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteSegmentWithHttpInfo(param.namespaceKey, param.key,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteSegment(param: FliptApiDeleteSegmentRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteSegment(param.namespaceKey, param.key,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteVariantWithHttpInfo(param: FliptApiDeleteVariantRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteVariantWithHttpInfo(param.namespaceKey, param.flagKey, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteVariant(param: FliptApiDeleteVariantRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteVariant(param.namespaceKey, param.flagKey, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getFlagWithHttpInfo(param: FliptApiGetFlagRequest, options?: ConfigurationOptions): Promise<HttpInfo<Flag>> {
        return this.api.getFlagWithHttpInfo(param.namespaceKey, param.key, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getFlag(param: FliptApiGetFlagRequest, options?: ConfigurationOptions): Promise<Flag> {
        return this.api.getFlag(param.namespaceKey, param.key, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getNamespaceWithHttpInfo(param: FliptApiGetNamespaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<Namespace>> {
        return this.api.getNamespaceWithHttpInfo(param.key, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getNamespace(param: FliptApiGetNamespaceRequest, options?: ConfigurationOptions): Promise<Namespace> {
        return this.api.getNamespace(param.key, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getRolloutWithHttpInfo(param: FliptApiGetRolloutRequest, options?: ConfigurationOptions): Promise<HttpInfo<Rollout>> {
        return this.api.getRolloutWithHttpInfo(param.namespaceKey, param.flagKey, param.id, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getRollout(param: FliptApiGetRolloutRequest, options?: ConfigurationOptions): Promise<Rollout> {
        return this.api.getRollout(param.namespaceKey, param.flagKey, param.id, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getRuleWithHttpInfo(param: FliptApiGetRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<Rule>> {
        return this.api.getRuleWithHttpInfo(param.namespaceKey, param.flagKey, param.id, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getRule(param: FliptApiGetRuleRequest, options?: ConfigurationOptions): Promise<Rule> {
        return this.api.getRule(param.namespaceKey, param.flagKey, param.id, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getSegmentWithHttpInfo(param: FliptApiGetSegmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<Segment>> {
        return this.api.getSegmentWithHttpInfo(param.namespaceKey, param.key, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getSegment(param: FliptApiGetSegmentRequest, options?: ConfigurationOptions): Promise<Segment> {
        return this.api.getSegment(param.namespaceKey, param.key, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listFlagsWithHttpInfo(param: FliptApiListFlagsRequest, options?: ConfigurationOptions): Promise<HttpInfo<FlagList>> {
        return this.api.listFlagsWithHttpInfo(param.namespaceKey, param.limit, param.offset, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listFlags(param: FliptApiListFlagsRequest, options?: ConfigurationOptions): Promise<FlagList> {
        return this.api.listFlags(param.namespaceKey, param.limit, param.offset, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listNamespacesWithHttpInfo(param: FliptApiListNamespacesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<NamespaceList>> {
        return this.api.listNamespacesWithHttpInfo(param.limit, param.offset, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listNamespaces(param: FliptApiListNamespacesRequest = {}, options?: ConfigurationOptions): Promise<NamespaceList> {
        return this.api.listNamespaces(param.limit, param.offset, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listRolloutsWithHttpInfo(param: FliptApiListRolloutsRequest, options?: ConfigurationOptions): Promise<HttpInfo<RolloutList>> {
        return this.api.listRolloutsWithHttpInfo(param.namespaceKey, param.flagKey, param.limit, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listRollouts(param: FliptApiListRolloutsRequest, options?: ConfigurationOptions): Promise<RolloutList> {
        return this.api.listRollouts(param.namespaceKey, param.flagKey, param.limit, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listRulesWithHttpInfo(param: FliptApiListRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<RuleList>> {
        return this.api.listRulesWithHttpInfo(param.namespaceKey, param.flagKey, param.limit, param.offset, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listRules(param: FliptApiListRulesRequest, options?: ConfigurationOptions): Promise<RuleList> {
        return this.api.listRules(param.namespaceKey, param.flagKey, param.limit, param.offset, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listSegmentsWithHttpInfo(param: FliptApiListSegmentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<SegmentList>> {
        return this.api.listSegmentsWithHttpInfo(param.namespaceKey, param.limit, param.offset, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listSegments(param: FliptApiListSegmentsRequest, options?: ConfigurationOptions): Promise<SegmentList> {
        return this.api.listSegments(param.namespaceKey, param.limit, param.offset, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public orderRolloutsWithHttpInfo(param: FliptApiOrderRolloutsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.orderRolloutsWithHttpInfo(param.namespaceKey, param.flagKey, param.orderRolloutsRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public orderRollouts(param: FliptApiOrderRolloutsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.orderRollouts(param.namespaceKey, param.flagKey, param.orderRolloutsRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public orderRulesWithHttpInfo(param: FliptApiOrderRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.orderRulesWithHttpInfo(param.namespaceKey, param.flagKey, param.orderRulesRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public orderRules(param: FliptApiOrderRulesRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.orderRules(param.namespaceKey, param.flagKey, param.orderRulesRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateConstraintWithHttpInfo(param: FliptApiUpdateConstraintRequest, options?: ConfigurationOptions): Promise<HttpInfo<Constraint>> {
        return this.api.updateConstraintWithHttpInfo(param.namespaceKey, param.segmentKey, param.id, param.updateConstraintRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateConstraint(param: FliptApiUpdateConstraintRequest, options?: ConfigurationOptions): Promise<Constraint> {
        return this.api.updateConstraint(param.namespaceKey, param.segmentKey, param.id, param.updateConstraintRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateDistributionWithHttpInfo(param: FliptApiUpdateDistributionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Distribution>> {
        return this.api.updateDistributionWithHttpInfo(param.namespaceKey, param.flagKey, param.ruleId, param.id, param.updateDistributionRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateDistribution(param: FliptApiUpdateDistributionRequest, options?: ConfigurationOptions): Promise<Distribution> {
        return this.api.updateDistribution(param.namespaceKey, param.flagKey, param.ruleId, param.id, param.updateDistributionRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateFlagWithHttpInfo(param: FliptApiUpdateFlagRequest, options?: ConfigurationOptions): Promise<HttpInfo<Flag>> {
        return this.api.updateFlagWithHttpInfo(param.namespaceKey, param.key, param.updateFlagRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateFlag(param: FliptApiUpdateFlagRequest, options?: ConfigurationOptions): Promise<Flag> {
        return this.api.updateFlag(param.namespaceKey, param.key, param.updateFlagRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateNamespaceWithHttpInfo(param: FliptApiUpdateNamespaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<Namespace>> {
        return this.api.updateNamespaceWithHttpInfo(param.key, param.updateNamespaceRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateNamespace(param: FliptApiUpdateNamespaceRequest, options?: ConfigurationOptions): Promise<Namespace> {
        return this.api.updateNamespace(param.key, param.updateNamespaceRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateRolloutWithHttpInfo(param: FliptApiUpdateRolloutRequest, options?: ConfigurationOptions): Promise<HttpInfo<Rollout>> {
        return this.api.updateRolloutWithHttpInfo(param.namespaceKey, param.flagKey, param.id, param.updateRolloutRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateRollout(param: FliptApiUpdateRolloutRequest, options?: ConfigurationOptions): Promise<Rollout> {
        return this.api.updateRollout(param.namespaceKey, param.flagKey, param.id, param.updateRolloutRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateRuleWithHttpInfo(param: FliptApiUpdateRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<Rule>> {
        return this.api.updateRuleWithHttpInfo(param.namespaceKey, param.flagKey, param.id, param.updateRuleRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateRule(param: FliptApiUpdateRuleRequest, options?: ConfigurationOptions): Promise<Rule> {
        return this.api.updateRule(param.namespaceKey, param.flagKey, param.id, param.updateRuleRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateSegmentWithHttpInfo(param: FliptApiUpdateSegmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<Segment>> {
        return this.api.updateSegmentWithHttpInfo(param.namespaceKey, param.key, param.updateSegmentRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateSegment(param: FliptApiUpdateSegmentRequest, options?: ConfigurationOptions): Promise<Segment> {
        return this.api.updateSegment(param.namespaceKey, param.key, param.updateSegmentRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateVariantWithHttpInfo(param: FliptApiUpdateVariantRequest, options?: ConfigurationOptions): Promise<HttpInfo<Variant>> {
        return this.api.updateVariantWithHttpInfo(param.namespaceKey, param.flagKey, param.id, param.updateVariantRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateVariant(param: FliptApiUpdateVariantRequest, options?: ConfigurationOptions): Promise<Variant> {
        return this.api.updateVariant(param.namespaceKey, param.flagKey, param.id, param.updateVariantRequest,  options).toPromise();
    }

}

import { ObservableNamespacesServiceApi } from "./ObservableAPI";
import { NamespacesServiceApiRequestFactory, NamespacesServiceApiResponseProcessor} from "../apis/NamespacesServiceApi";

export interface NamespacesServiceApiCreateNamespaceRequest {
    /**
     * 
     * @type CreateNamespaceRequest
     * @memberof NamespacesServiceApicreateNamespace
     */
    createNamespaceRequest: CreateNamespaceRequest
}

export interface NamespacesServiceApiDeleteNamespaceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NamespacesServiceApideleteNamespace
     */
    key: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof NamespacesServiceApideleteNamespace
     */
    force?: boolean
}

export interface NamespacesServiceApiGetNamespaceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NamespacesServiceApigetNamespace
     */
    key: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NamespacesServiceApigetNamespace
     */
    reference?: string
}

export interface NamespacesServiceApiListNamespacesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof NamespacesServiceApilistNamespaces
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof NamespacesServiceApilistNamespaces
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NamespacesServiceApilistNamespaces
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NamespacesServiceApilistNamespaces
     */
    reference?: string
}

export interface NamespacesServiceApiUpdateNamespaceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NamespacesServiceApiupdateNamespace
     */
    key: string
    /**
     * 
     * @type UpdateNamespaceRequest
     * @memberof NamespacesServiceApiupdateNamespace
     */
    updateNamespaceRequest: UpdateNamespaceRequest
}

export class ObjectNamespacesServiceApi {
    private api: ObservableNamespacesServiceApi

    public constructor(configuration: Configuration, requestFactory?: NamespacesServiceApiRequestFactory, responseProcessor?: NamespacesServiceApiResponseProcessor) {
        this.api = new ObservableNamespacesServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createNamespaceWithHttpInfo(param: NamespacesServiceApiCreateNamespaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<Namespace>> {
        return this.api.createNamespaceWithHttpInfo(param.createNamespaceRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createNamespace(param: NamespacesServiceApiCreateNamespaceRequest, options?: ConfigurationOptions): Promise<Namespace> {
        return this.api.createNamespace(param.createNamespaceRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteNamespaceWithHttpInfo(param: NamespacesServiceApiDeleteNamespaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteNamespaceWithHttpInfo(param.key, param.force,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteNamespace(param: NamespacesServiceApiDeleteNamespaceRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteNamespace(param.key, param.force,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getNamespaceWithHttpInfo(param: NamespacesServiceApiGetNamespaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<Namespace>> {
        return this.api.getNamespaceWithHttpInfo(param.key, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getNamespace(param: NamespacesServiceApiGetNamespaceRequest, options?: ConfigurationOptions): Promise<Namespace> {
        return this.api.getNamespace(param.key, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listNamespacesWithHttpInfo(param: NamespacesServiceApiListNamespacesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<NamespaceList>> {
        return this.api.listNamespacesWithHttpInfo(param.limit, param.offset, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listNamespaces(param: NamespacesServiceApiListNamespacesRequest = {}, options?: ConfigurationOptions): Promise<NamespaceList> {
        return this.api.listNamespaces(param.limit, param.offset, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateNamespaceWithHttpInfo(param: NamespacesServiceApiUpdateNamespaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<Namespace>> {
        return this.api.updateNamespaceWithHttpInfo(param.key, param.updateNamespaceRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateNamespace(param: NamespacesServiceApiUpdateNamespaceRequest, options?: ConfigurationOptions): Promise<Namespace> {
        return this.api.updateNamespace(param.key, param.updateNamespaceRequest,  options).toPromise();
    }

}

import { ObservableOFREPServiceApi } from "./ObservableAPI";
import { OFREPServiceApiRequestFactory, OFREPServiceApiResponseProcessor} from "../apis/OFREPServiceApi";

export interface OFREPServiceApiOfrepConfigurationRequest {
}

export interface OFREPServiceApiOfrepEvaluateBulkRequest {
    /**
     * 
     * @type EvaluateBulkRequest
     * @memberof OFREPServiceApiofrepEvaluateBulk
     */
    evaluateBulkRequest: EvaluateBulkRequest
}

export interface OFREPServiceApiOfrepEvaluateFlagRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OFREPServiceApiofrepEvaluateFlag
     */
    key: string
    /**
     * 
     * @type EvaluateFlagRequest
     * @memberof OFREPServiceApiofrepEvaluateFlag
     */
    evaluateFlagRequest: EvaluateFlagRequest
}

export class ObjectOFREPServiceApi {
    private api: ObservableOFREPServiceApi

    public constructor(configuration: Configuration, requestFactory?: OFREPServiceApiRequestFactory, responseProcessor?: OFREPServiceApiResponseProcessor) {
        this.api = new ObservableOFREPServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * OFREP provider configuration
     * @param param the request object
     */
    public ofrepConfigurationWithHttpInfo(param: OFREPServiceApiOfrepConfigurationRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetProviderConfigurationResponse>> {
        return this.api.ofrepConfigurationWithHttpInfo( options).toPromise();
    }

    /**
     * OFREP provider configuration
     * @param param the request object
     */
    public ofrepConfiguration(param: OFREPServiceApiOfrepConfigurationRequest = {}, options?: ConfigurationOptions): Promise<GetProviderConfigurationResponse> {
        return this.api.ofrepConfiguration( options).toPromise();
    }

    /**
     * OFREP bulk flag evaluation
     * @param param the request object
     */
    public ofrepEvaluateBulkWithHttpInfo(param: OFREPServiceApiOfrepEvaluateBulkRequest, options?: ConfigurationOptions): Promise<HttpInfo<BulkEvaluationResponse>> {
        return this.api.ofrepEvaluateBulkWithHttpInfo(param.evaluateBulkRequest,  options).toPromise();
    }

    /**
     * OFREP bulk flag evaluation
     * @param param the request object
     */
    public ofrepEvaluateBulk(param: OFREPServiceApiOfrepEvaluateBulkRequest, options?: ConfigurationOptions): Promise<BulkEvaluationResponse> {
        return this.api.ofrepEvaluateBulk(param.evaluateBulkRequest,  options).toPromise();
    }

    /**
     * OFREP single flag evaluation
     * @param param the request object
     */
    public ofrepEvaluateFlagWithHttpInfo(param: OFREPServiceApiOfrepEvaluateFlagRequest, options?: ConfigurationOptions): Promise<HttpInfo<EvaluatedFlag>> {
        return this.api.ofrepEvaluateFlagWithHttpInfo(param.key, param.evaluateFlagRequest,  options).toPromise();
    }

    /**
     * OFREP single flag evaluation
     * @param param the request object
     */
    public ofrepEvaluateFlag(param: OFREPServiceApiOfrepEvaluateFlagRequest, options?: ConfigurationOptions): Promise<EvaluatedFlag> {
        return this.api.ofrepEvaluateFlag(param.key, param.evaluateFlagRequest,  options).toPromise();
    }

}

import { ObservableRolloutsServiceApi } from "./ObservableAPI";
import { RolloutsServiceApiRequestFactory, RolloutsServiceApiResponseProcessor} from "../apis/RolloutsServiceApi";

export interface RolloutsServiceApiCreateRolloutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApicreateRollout
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApicreateRollout
     */
    flagKey: string
    /**
     * 
     * @type CreateRolloutRequest
     * @memberof RolloutsServiceApicreateRollout
     */
    createRolloutRequest: CreateRolloutRequest
}

export interface RolloutsServiceApiDeleteRolloutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApideleteRollout
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApideleteRollout
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApideleteRollout
     */
    id: string
}

export interface RolloutsServiceApiGetRolloutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApigetRollout
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApigetRollout
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApigetRollout
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApigetRollout
     */
    reference?: string
}

export interface RolloutsServiceApiListRolloutsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApilistRollouts
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApilistRollouts
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RolloutsServiceApilistRollouts
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApilistRollouts
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApilistRollouts
     */
    reference?: string
}

export interface RolloutsServiceApiOrderRolloutsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApiorderRollouts
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApiorderRollouts
     */
    flagKey: string
    /**
     * 
     * @type OrderRolloutsRequest
     * @memberof RolloutsServiceApiorderRollouts
     */
    orderRolloutsRequest: OrderRolloutsRequest
}

export interface RolloutsServiceApiUpdateRolloutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApiupdateRollout
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApiupdateRollout
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RolloutsServiceApiupdateRollout
     */
    id: string
    /**
     * 
     * @type UpdateRolloutRequest
     * @memberof RolloutsServiceApiupdateRollout
     */
    updateRolloutRequest: UpdateRolloutRequest
}

export class ObjectRolloutsServiceApi {
    private api: ObservableRolloutsServiceApi

    public constructor(configuration: Configuration, requestFactory?: RolloutsServiceApiRequestFactory, responseProcessor?: RolloutsServiceApiResponseProcessor) {
        this.api = new ObservableRolloutsServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createRolloutWithHttpInfo(param: RolloutsServiceApiCreateRolloutRequest, options?: ConfigurationOptions): Promise<HttpInfo<Rollout>> {
        return this.api.createRolloutWithHttpInfo(param.namespaceKey, param.flagKey, param.createRolloutRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createRollout(param: RolloutsServiceApiCreateRolloutRequest, options?: ConfigurationOptions): Promise<Rollout> {
        return this.api.createRollout(param.namespaceKey, param.flagKey, param.createRolloutRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteRolloutWithHttpInfo(param: RolloutsServiceApiDeleteRolloutRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteRolloutWithHttpInfo(param.namespaceKey, param.flagKey, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteRollout(param: RolloutsServiceApiDeleteRolloutRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteRollout(param.namespaceKey, param.flagKey, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getRolloutWithHttpInfo(param: RolloutsServiceApiGetRolloutRequest, options?: ConfigurationOptions): Promise<HttpInfo<Rollout>> {
        return this.api.getRolloutWithHttpInfo(param.namespaceKey, param.flagKey, param.id, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getRollout(param: RolloutsServiceApiGetRolloutRequest, options?: ConfigurationOptions): Promise<Rollout> {
        return this.api.getRollout(param.namespaceKey, param.flagKey, param.id, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listRolloutsWithHttpInfo(param: RolloutsServiceApiListRolloutsRequest, options?: ConfigurationOptions): Promise<HttpInfo<RolloutList>> {
        return this.api.listRolloutsWithHttpInfo(param.namespaceKey, param.flagKey, param.limit, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listRollouts(param: RolloutsServiceApiListRolloutsRequest, options?: ConfigurationOptions): Promise<RolloutList> {
        return this.api.listRollouts(param.namespaceKey, param.flagKey, param.limit, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public orderRolloutsWithHttpInfo(param: RolloutsServiceApiOrderRolloutsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.orderRolloutsWithHttpInfo(param.namespaceKey, param.flagKey, param.orderRolloutsRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public orderRollouts(param: RolloutsServiceApiOrderRolloutsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.orderRollouts(param.namespaceKey, param.flagKey, param.orderRolloutsRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateRolloutWithHttpInfo(param: RolloutsServiceApiUpdateRolloutRequest, options?: ConfigurationOptions): Promise<HttpInfo<Rollout>> {
        return this.api.updateRolloutWithHttpInfo(param.namespaceKey, param.flagKey, param.id, param.updateRolloutRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateRollout(param: RolloutsServiceApiUpdateRolloutRequest, options?: ConfigurationOptions): Promise<Rollout> {
        return this.api.updateRollout(param.namespaceKey, param.flagKey, param.id, param.updateRolloutRequest,  options).toPromise();
    }

}

import { ObservableRulesServiceApi } from "./ObservableAPI";
import { RulesServiceApiRequestFactory, RulesServiceApiResponseProcessor} from "../apis/RulesServiceApi";

export interface RulesServiceApiCreateRuleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApicreateRule
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApicreateRule
     */
    flagKey: string
    /**
     * 
     * @type CreateRuleRequest
     * @memberof RulesServiceApicreateRule
     */
    createRuleRequest: CreateRuleRequest
}

export interface RulesServiceApiDeleteRuleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApideleteRule
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApideleteRule
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApideleteRule
     */
    id: string
}

export interface RulesServiceApiGetRuleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApigetRule
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApigetRule
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApigetRule
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApigetRule
     */
    reference?: string
}

export interface RulesServiceApiListRulesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApilistRules
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApilistRules
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RulesServiceApilistRules
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RulesServiceApilistRules
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApilistRules
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApilistRules
     */
    reference?: string
}

export interface RulesServiceApiOrderRulesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApiorderRules
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApiorderRules
     */
    flagKey: string
    /**
     * 
     * @type OrderRulesRequest
     * @memberof RulesServiceApiorderRules
     */
    orderRulesRequest: OrderRulesRequest
}

export interface RulesServiceApiUpdateRuleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApiupdateRule
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApiupdateRule
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RulesServiceApiupdateRule
     */
    id: string
    /**
     * 
     * @type UpdateRuleRequest
     * @memberof RulesServiceApiupdateRule
     */
    updateRuleRequest: UpdateRuleRequest
}

export class ObjectRulesServiceApi {
    private api: ObservableRulesServiceApi

    public constructor(configuration: Configuration, requestFactory?: RulesServiceApiRequestFactory, responseProcessor?: RulesServiceApiResponseProcessor) {
        this.api = new ObservableRulesServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createRuleWithHttpInfo(param: RulesServiceApiCreateRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<Rule>> {
        return this.api.createRuleWithHttpInfo(param.namespaceKey, param.flagKey, param.createRuleRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createRule(param: RulesServiceApiCreateRuleRequest, options?: ConfigurationOptions): Promise<Rule> {
        return this.api.createRule(param.namespaceKey, param.flagKey, param.createRuleRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteRuleWithHttpInfo(param: RulesServiceApiDeleteRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteRuleWithHttpInfo(param.namespaceKey, param.flagKey, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteRule(param: RulesServiceApiDeleteRuleRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteRule(param.namespaceKey, param.flagKey, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getRuleWithHttpInfo(param: RulesServiceApiGetRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<Rule>> {
        return this.api.getRuleWithHttpInfo(param.namespaceKey, param.flagKey, param.id, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getRule(param: RulesServiceApiGetRuleRequest, options?: ConfigurationOptions): Promise<Rule> {
        return this.api.getRule(param.namespaceKey, param.flagKey, param.id, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listRulesWithHttpInfo(param: RulesServiceApiListRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<RuleList>> {
        return this.api.listRulesWithHttpInfo(param.namespaceKey, param.flagKey, param.limit, param.offset, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listRules(param: RulesServiceApiListRulesRequest, options?: ConfigurationOptions): Promise<RuleList> {
        return this.api.listRules(param.namespaceKey, param.flagKey, param.limit, param.offset, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public orderRulesWithHttpInfo(param: RulesServiceApiOrderRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.orderRulesWithHttpInfo(param.namespaceKey, param.flagKey, param.orderRulesRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public orderRules(param: RulesServiceApiOrderRulesRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.orderRules(param.namespaceKey, param.flagKey, param.orderRulesRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateRuleWithHttpInfo(param: RulesServiceApiUpdateRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<Rule>> {
        return this.api.updateRuleWithHttpInfo(param.namespaceKey, param.flagKey, param.id, param.updateRuleRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateRule(param: RulesServiceApiUpdateRuleRequest, options?: ConfigurationOptions): Promise<Rule> {
        return this.api.updateRule(param.namespaceKey, param.flagKey, param.id, param.updateRuleRequest,  options).toPromise();
    }

}

import { ObservableSegmentsServiceApi } from "./ObservableAPI";
import { SegmentsServiceApiRequestFactory, SegmentsServiceApiResponseProcessor} from "../apis/SegmentsServiceApi";

export interface SegmentsServiceApiCreateSegmentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SegmentsServiceApicreateSegment
     */
    namespaceKey: string
    /**
     * 
     * @type CreateSegmentRequest
     * @memberof SegmentsServiceApicreateSegment
     */
    createSegmentRequest: CreateSegmentRequest
}

export interface SegmentsServiceApiDeleteSegmentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SegmentsServiceApideleteSegment
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SegmentsServiceApideleteSegment
     */
    key: string
}

export interface SegmentsServiceApiGetSegmentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SegmentsServiceApigetSegment
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SegmentsServiceApigetSegment
     */
    key: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SegmentsServiceApigetSegment
     */
    reference?: string
}

export interface SegmentsServiceApiListSegmentsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SegmentsServiceApilistSegments
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SegmentsServiceApilistSegments
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SegmentsServiceApilistSegments
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SegmentsServiceApilistSegments
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SegmentsServiceApilistSegments
     */
    reference?: string
}

export interface SegmentsServiceApiUpdateSegmentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SegmentsServiceApiupdateSegment
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SegmentsServiceApiupdateSegment
     */
    key: string
    /**
     * 
     * @type UpdateSegmentRequest
     * @memberof SegmentsServiceApiupdateSegment
     */
    updateSegmentRequest: UpdateSegmentRequest
}

export class ObjectSegmentsServiceApi {
    private api: ObservableSegmentsServiceApi

    public constructor(configuration: Configuration, requestFactory?: SegmentsServiceApiRequestFactory, responseProcessor?: SegmentsServiceApiResponseProcessor) {
        this.api = new ObservableSegmentsServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createSegmentWithHttpInfo(param: SegmentsServiceApiCreateSegmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<Segment>> {
        return this.api.createSegmentWithHttpInfo(param.namespaceKey, param.createSegmentRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createSegment(param: SegmentsServiceApiCreateSegmentRequest, options?: ConfigurationOptions): Promise<Segment> {
        return this.api.createSegment(param.namespaceKey, param.createSegmentRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteSegmentWithHttpInfo(param: SegmentsServiceApiDeleteSegmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteSegmentWithHttpInfo(param.namespaceKey, param.key,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteSegment(param: SegmentsServiceApiDeleteSegmentRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteSegment(param.namespaceKey, param.key,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getSegmentWithHttpInfo(param: SegmentsServiceApiGetSegmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<Segment>> {
        return this.api.getSegmentWithHttpInfo(param.namespaceKey, param.key, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getSegment(param: SegmentsServiceApiGetSegmentRequest, options?: ConfigurationOptions): Promise<Segment> {
        return this.api.getSegment(param.namespaceKey, param.key, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listSegmentsWithHttpInfo(param: SegmentsServiceApiListSegmentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<SegmentList>> {
        return this.api.listSegmentsWithHttpInfo(param.namespaceKey, param.limit, param.offset, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listSegments(param: SegmentsServiceApiListSegmentsRequest, options?: ConfigurationOptions): Promise<SegmentList> {
        return this.api.listSegments(param.namespaceKey, param.limit, param.offset, param.pageToken, param.reference,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateSegmentWithHttpInfo(param: SegmentsServiceApiUpdateSegmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<Segment>> {
        return this.api.updateSegmentWithHttpInfo(param.namespaceKey, param.key, param.updateSegmentRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateSegment(param: SegmentsServiceApiUpdateSegmentRequest, options?: ConfigurationOptions): Promise<Segment> {
        return this.api.updateSegment(param.namespaceKey, param.key, param.updateSegmentRequest,  options).toPromise();
    }

}

import { ObservableVariantsServiceApi } from "./ObservableAPI";
import { VariantsServiceApiRequestFactory, VariantsServiceApiResponseProcessor} from "../apis/VariantsServiceApi";

export interface VariantsServiceApiCreateVariantRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof VariantsServiceApicreateVariant
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof VariantsServiceApicreateVariant
     */
    flagKey: string
    /**
     * 
     * @type CreateVariantRequest
     * @memberof VariantsServiceApicreateVariant
     */
    createVariantRequest: CreateVariantRequest
}

export interface VariantsServiceApiDeleteVariantRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof VariantsServiceApideleteVariant
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof VariantsServiceApideleteVariant
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof VariantsServiceApideleteVariant
     */
    id: string
}

export interface VariantsServiceApiUpdateVariantRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof VariantsServiceApiupdateVariant
     */
    namespaceKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof VariantsServiceApiupdateVariant
     */
    flagKey: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof VariantsServiceApiupdateVariant
     */
    id: string
    /**
     * 
     * @type UpdateVariantRequest
     * @memberof VariantsServiceApiupdateVariant
     */
    updateVariantRequest: UpdateVariantRequest
}

export class ObjectVariantsServiceApi {
    private api: ObservableVariantsServiceApi

    public constructor(configuration: Configuration, requestFactory?: VariantsServiceApiRequestFactory, responseProcessor?: VariantsServiceApiResponseProcessor) {
        this.api = new ObservableVariantsServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createVariantWithHttpInfo(param: VariantsServiceApiCreateVariantRequest, options?: ConfigurationOptions): Promise<HttpInfo<Variant>> {
        return this.api.createVariantWithHttpInfo(param.namespaceKey, param.flagKey, param.createVariantRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createVariant(param: VariantsServiceApiCreateVariantRequest, options?: ConfigurationOptions): Promise<Variant> {
        return this.api.createVariant(param.namespaceKey, param.flagKey, param.createVariantRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteVariantWithHttpInfo(param: VariantsServiceApiDeleteVariantRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteVariantWithHttpInfo(param.namespaceKey, param.flagKey, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteVariant(param: VariantsServiceApiDeleteVariantRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteVariant(param.namespaceKey, param.flagKey, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateVariantWithHttpInfo(param: VariantsServiceApiUpdateVariantRequest, options?: ConfigurationOptions): Promise<HttpInfo<Variant>> {
        return this.api.updateVariantWithHttpInfo(param.namespaceKey, param.flagKey, param.id, param.updateVariantRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateVariant(param: VariantsServiceApiUpdateVariantRequest, options?: ConfigurationOptions): Promise<Variant> {
        return this.api.updateVariant(param.namespaceKey, param.flagKey, param.id, param.updateVariantRequest,  options).toPromise();
    }

}
