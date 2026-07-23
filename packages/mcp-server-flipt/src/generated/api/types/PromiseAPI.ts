import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

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
import { ObservableAuthenticationMethodKubernetesServiceApi } from './ObservableAPI';

import { AuthenticationMethodKubernetesServiceApiRequestFactory, AuthenticationMethodKubernetesServiceApiResponseProcessor} from "../apis/AuthenticationMethodKubernetesServiceApi";
export class PromiseAuthenticationMethodKubernetesServiceApi {
    private api: ObservableAuthenticationMethodKubernetesServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationMethodKubernetesServiceApiRequestFactory,
        responseProcessor?: AuthenticationMethodKubernetesServiceApiResponseProcessor
    ) {
        this.api = new ObservableAuthenticationMethodKubernetesServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param verifyServiceAccountRequest
     */
    public kubernetesVerifyServiceAccountWithHttpInfo(verifyServiceAccountRequest: VerifyServiceAccountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VerifyServiceAccountResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.kubernetesVerifyServiceAccountWithHttpInfo(verifyServiceAccountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param verifyServiceAccountRequest
     */
    public kubernetesVerifyServiceAccount(verifyServiceAccountRequest: VerifyServiceAccountRequest, _options?: PromiseConfigurationOptions): Promise<VerifyServiceAccountResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.kubernetesVerifyServiceAccount(verifyServiceAccountRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAuthenticationMethodOIDCServiceApi } from './ObservableAPI';

import { AuthenticationMethodOIDCServiceApiRequestFactory, AuthenticationMethodOIDCServiceApiResponseProcessor} from "../apis/AuthenticationMethodOIDCServiceApi";
export class PromiseAuthenticationMethodOIDCServiceApi {
    private api: ObservableAuthenticationMethodOIDCServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationMethodOIDCServiceApiRequestFactory,
        responseProcessor?: AuthenticationMethodOIDCServiceApiResponseProcessor
    ) {
        this.api = new ObservableAuthenticationMethodOIDCServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param provider
     * @param [state]
     */
    public oidcAuthorizeURLWithHttpInfo(provider: string, state?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AuthorizeURLResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.oidcAuthorizeURLWithHttpInfo(provider, state, observableOptions);
        return result.toPromise();
    }

    /**
     * @param provider
     * @param [state]
     */
    public oidcAuthorizeURL(provider: string, state?: string, _options?: PromiseConfigurationOptions): Promise<AuthorizeURLResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.oidcAuthorizeURL(provider, state, observableOptions);
        return result.toPromise();
    }

    /**
     * @param provider
     * @param [code]
     * @param [state]
     */
    public oidcCallbackWithHttpInfo(provider: string, code?: string, state?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CallbackResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.oidcCallbackWithHttpInfo(provider, code, state, observableOptions);
        return result.toPromise();
    }

    /**
     * @param provider
     * @param [code]
     * @param [state]
     */
    public oidcCallback(provider: string, code?: string, state?: string, _options?: PromiseConfigurationOptions): Promise<CallbackResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.oidcCallback(provider, code, state, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAuthenticationMethodTokenServiceApi } from './ObservableAPI';

import { AuthenticationMethodTokenServiceApiRequestFactory, AuthenticationMethodTokenServiceApiResponseProcessor} from "../apis/AuthenticationMethodTokenServiceApi";
export class PromiseAuthenticationMethodTokenServiceApi {
    private api: ObservableAuthenticationMethodTokenServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationMethodTokenServiceApiRequestFactory,
        responseProcessor?: AuthenticationMethodTokenServiceApiResponseProcessor
    ) {
        this.api = new ObservableAuthenticationMethodTokenServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param createTokenRequest
     */
    public createMethodTokenWithHttpInfo(createTokenRequest: CreateTokenRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateTokenResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createMethodTokenWithHttpInfo(createTokenRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createTokenRequest
     */
    public createMethodToken(createTokenRequest: CreateTokenRequest, _options?: PromiseConfigurationOptions): Promise<CreateTokenResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createMethodToken(createTokenRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAuthenticationServiceApi } from './ObservableAPI';

import { AuthenticationServiceApiRequestFactory, AuthenticationServiceApiResponseProcessor} from "../apis/AuthenticationServiceApi";
export class PromiseAuthenticationServiceApi {
    private api: ObservableAuthenticationServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationServiceApiRequestFactory,
        responseProcessor?: AuthenticationServiceApiResponseProcessor
    ) {
        this.api = new ObservableAuthenticationServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id
     */
    public deleteAuthTokenWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteAuthTokenWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deleteAuthToken(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteAuthToken(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [expiresAt]
     */
    public expireAuthSelfWithHttpInfo(expiresAt?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.expireAuthSelfWithHttpInfo(expiresAt, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [expiresAt]
     */
    public expireAuthSelf(expiresAt?: Date, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.expireAuthSelf(expiresAt, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getAuthSelfWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Authentication>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAuthSelfWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getAuthSelf(_options?: PromiseConfigurationOptions): Promise<Authentication> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAuthSelf(observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getAuthTokenWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Authentication>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAuthTokenWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getAuthToken(id: string, _options?: PromiseConfigurationOptions): Promise<Authentication> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAuthToken(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [method]
     * @param [limit]
     * @param [pageToken]
     */
    public listAuthTokensWithHttpInfo(method?: 'METHOD_NONE' | 'METHOD_TOKEN' | 'METHOD_OIDC' | 'METHOD_KUBERNETES' | 'METHOD_GITHUB' | 'METHOD_JWT' | 'METHOD_CLOUD', limit?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAuthenticationsResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listAuthTokensWithHttpInfo(method, limit, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [method]
     * @param [limit]
     * @param [pageToken]
     */
    public listAuthTokens(method?: 'METHOD_NONE' | 'METHOD_TOKEN' | 'METHOD_OIDC' | 'METHOD_KUBERNETES' | 'METHOD_GITHUB' | 'METHOD_JWT' | 'METHOD_CLOUD', limit?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListAuthenticationsResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listAuthTokens(method, limit, pageToken, observableOptions);
        return result.toPromise();
    }


}



import { ObservableConstraintsServiceApi } from './ObservableAPI';

import { ConstraintsServiceApiRequestFactory, ConstraintsServiceApiResponseProcessor} from "../apis/ConstraintsServiceApi";
export class PromiseConstraintsServiceApi {
    private api: ObservableConstraintsServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConstraintsServiceApiRequestFactory,
        responseProcessor?: ConstraintsServiceApiResponseProcessor
    ) {
        this.api = new ObservableConstraintsServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param createConstraintRequest
     */
    public createConstraintWithHttpInfo(namespaceKey: string, segmentKey: string, createConstraintRequest: CreateConstraintRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Constraint>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createConstraintWithHttpInfo(namespaceKey, segmentKey, createConstraintRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param createConstraintRequest
     */
    public createConstraint(namespaceKey: string, segmentKey: string, createConstraintRequest: CreateConstraintRequest, _options?: PromiseConfigurationOptions): Promise<Constraint> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createConstraint(namespaceKey, segmentKey, createConstraintRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param id
     */
    public deleteConstraintWithHttpInfo(namespaceKey: string, segmentKey: string, id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteConstraintWithHttpInfo(namespaceKey, segmentKey, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param id
     */
    public deleteConstraint(namespaceKey: string, segmentKey: string, id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteConstraint(namespaceKey, segmentKey, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param id
     * @param updateConstraintRequest
     */
    public updateConstraintWithHttpInfo(namespaceKey: string, segmentKey: string, id: string, updateConstraintRequest: UpdateConstraintRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Constraint>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateConstraintWithHttpInfo(namespaceKey, segmentKey, id, updateConstraintRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param id
     * @param updateConstraintRequest
     */
    public updateConstraint(namespaceKey: string, segmentKey: string, id: string, updateConstraintRequest: UpdateConstraintRequest, _options?: PromiseConfigurationOptions): Promise<Constraint> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateConstraint(namespaceKey, segmentKey, id, updateConstraintRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDistributionsServiceApi } from './ObservableAPI';

import { DistributionsServiceApiRequestFactory, DistributionsServiceApiResponseProcessor} from "../apis/DistributionsServiceApi";
export class PromiseDistributionsServiceApi {
    private api: ObservableDistributionsServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DistributionsServiceApiRequestFactory,
        responseProcessor?: DistributionsServiceApiResponseProcessor
    ) {
        this.api = new ObservableDistributionsServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param createDistributionRequest
     */
    public createDistributionWithHttpInfo(namespaceKey: string, flagKey: string, ruleId: string, createDistributionRequest: CreateDistributionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Distribution>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createDistributionWithHttpInfo(namespaceKey, flagKey, ruleId, createDistributionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param createDistributionRequest
     */
    public createDistribution(namespaceKey: string, flagKey: string, ruleId: string, createDistributionRequest: CreateDistributionRequest, _options?: PromiseConfigurationOptions): Promise<Distribution> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createDistribution(namespaceKey, flagKey, ruleId, createDistributionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param id
     * @param [variantId]
     */
    public deleteDistributionWithHttpInfo(namespaceKey: string, flagKey: string, ruleId: string, id: string, variantId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteDistributionWithHttpInfo(namespaceKey, flagKey, ruleId, id, variantId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param id
     * @param [variantId]
     */
    public deleteDistribution(namespaceKey: string, flagKey: string, ruleId: string, id: string, variantId?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteDistribution(namespaceKey, flagKey, ruleId, id, variantId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param id
     * @param updateDistributionRequest
     */
    public updateDistributionWithHttpInfo(namespaceKey: string, flagKey: string, ruleId: string, id: string, updateDistributionRequest: UpdateDistributionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Distribution>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateDistributionWithHttpInfo(namespaceKey, flagKey, ruleId, id, updateDistributionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param id
     * @param updateDistributionRequest
     */
    public updateDistribution(namespaceKey: string, flagKey: string, ruleId: string, id: string, updateDistributionRequest: UpdateDistributionRequest, _options?: PromiseConfigurationOptions): Promise<Distribution> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateDistribution(namespaceKey, flagKey, ruleId, id, updateDistributionRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableEvaluationServiceApi } from './ObservableAPI';

import { EvaluationServiceApiRequestFactory, EvaluationServiceApiResponseProcessor} from "../apis/EvaluationServiceApi";
export class PromiseEvaluationServiceApi {
    private api: ObservableEvaluationServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EvaluationServiceApiRequestFactory,
        responseProcessor?: EvaluationServiceApiResponseProcessor
    ) {
        this.api = new ObservableEvaluationServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param batchEvaluationRequest
     */
    public evaluateBatchWithHttpInfo(batchEvaluationRequest: BatchEvaluationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchEvaluationResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.evaluateBatchWithHttpInfo(batchEvaluationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param batchEvaluationRequest
     */
    public evaluateBatch(batchEvaluationRequest: BatchEvaluationRequest, _options?: PromiseConfigurationOptions): Promise<BatchEvaluationResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.evaluateBatch(batchEvaluationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param evaluationRequest
     */
    public evaluateBooleanWithHttpInfo(evaluationRequest: EvaluationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BooleanEvaluationResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.evaluateBooleanWithHttpInfo(evaluationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param evaluationRequest
     */
    public evaluateBoolean(evaluationRequest: EvaluationRequest, _options?: PromiseConfigurationOptions): Promise<BooleanEvaluationResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.evaluateBoolean(evaluationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param evaluationRequest
     */
    public evaluateVariantWithHttpInfo(evaluationRequest: EvaluationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<VariantEvaluationResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.evaluateVariantWithHttpInfo(evaluationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param evaluationRequest
     */
    public evaluateVariant(evaluationRequest: EvaluationRequest, _options?: PromiseConfigurationOptions): Promise<VariantEvaluationResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.evaluateVariant(evaluationRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFlagsServiceApi } from './ObservableAPI';

import { FlagsServiceApiRequestFactory, FlagsServiceApiResponseProcessor} from "../apis/FlagsServiceApi";
export class PromiseFlagsServiceApi {
    private api: ObservableFlagsServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FlagsServiceApiRequestFactory,
        responseProcessor?: FlagsServiceApiResponseProcessor
    ) {
        this.api = new ObservableFlagsServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param namespaceKey
     * @param createFlagRequest
     */
    public createFlagWithHttpInfo(namespaceKey: string, createFlagRequest: CreateFlagRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Flag>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createFlagWithHttpInfo(namespaceKey, createFlagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param createFlagRequest
     */
    public createFlag(namespaceKey: string, createFlagRequest: CreateFlagRequest, _options?: PromiseConfigurationOptions): Promise<Flag> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createFlag(namespaceKey, createFlagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     */
    public deleteFlagWithHttpInfo(namespaceKey: string, key: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteFlagWithHttpInfo(namespaceKey, key, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     */
    public deleteFlag(namespaceKey: string, key: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteFlag(namespaceKey, key, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     * @param [reference]
     */
    public getFlagWithHttpInfo(namespaceKey: string, key: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Flag>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getFlagWithHttpInfo(namespaceKey, key, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     * @param [reference]
     */
    public getFlag(namespaceKey: string, key: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<Flag> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getFlag(namespaceKey, key, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listFlagsWithHttpInfo(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FlagList>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listFlagsWithHttpInfo(namespaceKey, limit, offset, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listFlags(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<FlagList> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listFlags(namespaceKey, limit, offset, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     * @param updateFlagRequest
     */
    public updateFlagWithHttpInfo(namespaceKey: string, key: string, updateFlagRequest: UpdateFlagRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Flag>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateFlagWithHttpInfo(namespaceKey, key, updateFlagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     * @param updateFlagRequest
     */
    public updateFlag(namespaceKey: string, key: string, updateFlagRequest: UpdateFlagRequest, _options?: PromiseConfigurationOptions): Promise<Flag> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateFlag(namespaceKey, key, updateFlagRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFliptApi } from './ObservableAPI';

import { FliptApiRequestFactory, FliptApiResponseProcessor} from "../apis/FliptApi";
export class PromiseFliptApi {
    private api: ObservableFliptApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FliptApiRequestFactory,
        responseProcessor?: FliptApiResponseProcessor
    ) {
        this.api = new ObservableFliptApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param createConstraintRequest
     */
    public createConstraintWithHttpInfo(namespaceKey: string, segmentKey: string, createConstraintRequest: CreateConstraintRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Constraint>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createConstraintWithHttpInfo(namespaceKey, segmentKey, createConstraintRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param createConstraintRequest
     */
    public createConstraint(namespaceKey: string, segmentKey: string, createConstraintRequest: CreateConstraintRequest, _options?: PromiseConfigurationOptions): Promise<Constraint> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createConstraint(namespaceKey, segmentKey, createConstraintRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param createDistributionRequest
     */
    public createDistributionWithHttpInfo(namespaceKey: string, flagKey: string, ruleId: string, createDistributionRequest: CreateDistributionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Distribution>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createDistributionWithHttpInfo(namespaceKey, flagKey, ruleId, createDistributionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param createDistributionRequest
     */
    public createDistribution(namespaceKey: string, flagKey: string, ruleId: string, createDistributionRequest: CreateDistributionRequest, _options?: PromiseConfigurationOptions): Promise<Distribution> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createDistribution(namespaceKey, flagKey, ruleId, createDistributionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param createFlagRequest
     */
    public createFlagWithHttpInfo(namespaceKey: string, createFlagRequest: CreateFlagRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Flag>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createFlagWithHttpInfo(namespaceKey, createFlagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param createFlagRequest
     */
    public createFlag(namespaceKey: string, createFlagRequest: CreateFlagRequest, _options?: PromiseConfigurationOptions): Promise<Flag> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createFlag(namespaceKey, createFlagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createNamespaceRequest
     */
    public createNamespaceWithHttpInfo(createNamespaceRequest: CreateNamespaceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Namespace>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createNamespaceWithHttpInfo(createNamespaceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createNamespaceRequest
     */
    public createNamespace(createNamespaceRequest: CreateNamespaceRequest, _options?: PromiseConfigurationOptions): Promise<Namespace> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createNamespace(createNamespaceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createRolloutRequest
     */
    public createRolloutWithHttpInfo(namespaceKey: string, flagKey: string, createRolloutRequest: CreateRolloutRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Rollout>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createRolloutWithHttpInfo(namespaceKey, flagKey, createRolloutRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createRolloutRequest
     */
    public createRollout(namespaceKey: string, flagKey: string, createRolloutRequest: CreateRolloutRequest, _options?: PromiseConfigurationOptions): Promise<Rollout> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createRollout(namespaceKey, flagKey, createRolloutRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createRuleRequest
     */
    public createRuleWithHttpInfo(namespaceKey: string, flagKey: string, createRuleRequest: CreateRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Rule>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createRuleWithHttpInfo(namespaceKey, flagKey, createRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createRuleRequest
     */
    public createRule(namespaceKey: string, flagKey: string, createRuleRequest: CreateRuleRequest, _options?: PromiseConfigurationOptions): Promise<Rule> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createRule(namespaceKey, flagKey, createRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param createSegmentRequest
     */
    public createSegmentWithHttpInfo(namespaceKey: string, createSegmentRequest: CreateSegmentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Segment>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createSegmentWithHttpInfo(namespaceKey, createSegmentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param createSegmentRequest
     */
    public createSegment(namespaceKey: string, createSegmentRequest: CreateSegmentRequest, _options?: PromiseConfigurationOptions): Promise<Segment> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createSegment(namespaceKey, createSegmentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createVariantRequest
     */
    public createVariantWithHttpInfo(namespaceKey: string, flagKey: string, createVariantRequest: CreateVariantRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Variant>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createVariantWithHttpInfo(namespaceKey, flagKey, createVariantRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createVariantRequest
     */
    public createVariant(namespaceKey: string, flagKey: string, createVariantRequest: CreateVariantRequest, _options?: PromiseConfigurationOptions): Promise<Variant> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createVariant(namespaceKey, flagKey, createVariantRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param id
     */
    public deleteConstraintWithHttpInfo(namespaceKey: string, segmentKey: string, id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteConstraintWithHttpInfo(namespaceKey, segmentKey, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param id
     */
    public deleteConstraint(namespaceKey: string, segmentKey: string, id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteConstraint(namespaceKey, segmentKey, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param id
     * @param [variantId]
     */
    public deleteDistributionWithHttpInfo(namespaceKey: string, flagKey: string, ruleId: string, id: string, variantId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteDistributionWithHttpInfo(namespaceKey, flagKey, ruleId, id, variantId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param id
     * @param [variantId]
     */
    public deleteDistribution(namespaceKey: string, flagKey: string, ruleId: string, id: string, variantId?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteDistribution(namespaceKey, flagKey, ruleId, id, variantId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     */
    public deleteFlagWithHttpInfo(namespaceKey: string, key: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteFlagWithHttpInfo(namespaceKey, key, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     */
    public deleteFlag(namespaceKey: string, key: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteFlag(namespaceKey, key, observableOptions);
        return result.toPromise();
    }

    /**
     * @param key
     * @param [force]
     */
    public deleteNamespaceWithHttpInfo(key: string, force?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteNamespaceWithHttpInfo(key, force, observableOptions);
        return result.toPromise();
    }

    /**
     * @param key
     * @param [force]
     */
    public deleteNamespace(key: string, force?: boolean, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteNamespace(key, force, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteRolloutWithHttpInfo(namespaceKey: string, flagKey: string, id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteRolloutWithHttpInfo(namespaceKey, flagKey, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteRollout(namespaceKey: string, flagKey: string, id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteRollout(namespaceKey, flagKey, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteRuleWithHttpInfo(namespaceKey: string, flagKey: string, id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteRuleWithHttpInfo(namespaceKey, flagKey, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteRule(namespaceKey: string, flagKey: string, id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteRule(namespaceKey, flagKey, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     */
    public deleteSegmentWithHttpInfo(namespaceKey: string, key: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteSegmentWithHttpInfo(namespaceKey, key, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     */
    public deleteSegment(namespaceKey: string, key: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteSegment(namespaceKey, key, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteVariantWithHttpInfo(namespaceKey: string, flagKey: string, id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteVariantWithHttpInfo(namespaceKey, flagKey, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteVariant(namespaceKey: string, flagKey: string, id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteVariant(namespaceKey, flagKey, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     * @param [reference]
     */
    public getFlagWithHttpInfo(namespaceKey: string, key: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Flag>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getFlagWithHttpInfo(namespaceKey, key, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     * @param [reference]
     */
    public getFlag(namespaceKey: string, key: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<Flag> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getFlag(namespaceKey, key, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param key
     * @param [reference]
     */
    public getNamespaceWithHttpInfo(key: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Namespace>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getNamespaceWithHttpInfo(key, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param key
     * @param [reference]
     */
    public getNamespace(key: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<Namespace> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getNamespace(key, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param [reference]
     */
    public getRolloutWithHttpInfo(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Rollout>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getRolloutWithHttpInfo(namespaceKey, flagKey, id, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param [reference]
     */
    public getRollout(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<Rollout> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getRollout(namespaceKey, flagKey, id, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param [reference]
     */
    public getRuleWithHttpInfo(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Rule>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getRuleWithHttpInfo(namespaceKey, flagKey, id, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param [reference]
     */
    public getRule(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<Rule> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getRule(namespaceKey, flagKey, id, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     * @param [reference]
     */
    public getSegmentWithHttpInfo(namespaceKey: string, key: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Segment>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSegmentWithHttpInfo(namespaceKey, key, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     * @param [reference]
     */
    public getSegment(namespaceKey: string, key: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<Segment> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSegment(namespaceKey, key, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listFlagsWithHttpInfo(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FlagList>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listFlagsWithHttpInfo(namespaceKey, limit, offset, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listFlags(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<FlagList> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listFlags(namespaceKey, limit, offset, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listNamespacesWithHttpInfo(limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NamespaceList>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listNamespacesWithHttpInfo(limit, offset, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listNamespaces(limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<NamespaceList> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listNamespaces(limit, offset, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param [limit]
     * @param [pageToken]
     * @param [reference]
     */
    public listRolloutsWithHttpInfo(namespaceKey: string, flagKey: string, limit?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RolloutList>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listRolloutsWithHttpInfo(namespaceKey, flagKey, limit, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param [limit]
     * @param [pageToken]
     * @param [reference]
     */
    public listRollouts(namespaceKey: string, flagKey: string, limit?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<RolloutList> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listRollouts(namespaceKey, flagKey, limit, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listRulesWithHttpInfo(namespaceKey: string, flagKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RuleList>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listRulesWithHttpInfo(namespaceKey, flagKey, limit, offset, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listRules(namespaceKey: string, flagKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<RuleList> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listRules(namespaceKey, flagKey, limit, offset, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listSegmentsWithHttpInfo(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SegmentList>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listSegmentsWithHttpInfo(namespaceKey, limit, offset, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listSegments(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<SegmentList> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listSegments(namespaceKey, limit, offset, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param orderRolloutsRequest
     */
    public orderRolloutsWithHttpInfo(namespaceKey: string, flagKey: string, orderRolloutsRequest: OrderRolloutsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.orderRolloutsWithHttpInfo(namespaceKey, flagKey, orderRolloutsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param orderRolloutsRequest
     */
    public orderRollouts(namespaceKey: string, flagKey: string, orderRolloutsRequest: OrderRolloutsRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.orderRollouts(namespaceKey, flagKey, orderRolloutsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param orderRulesRequest
     */
    public orderRulesWithHttpInfo(namespaceKey: string, flagKey: string, orderRulesRequest: OrderRulesRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.orderRulesWithHttpInfo(namespaceKey, flagKey, orderRulesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param orderRulesRequest
     */
    public orderRules(namespaceKey: string, flagKey: string, orderRulesRequest: OrderRulesRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.orderRules(namespaceKey, flagKey, orderRulesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param id
     * @param updateConstraintRequest
     */
    public updateConstraintWithHttpInfo(namespaceKey: string, segmentKey: string, id: string, updateConstraintRequest: UpdateConstraintRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Constraint>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateConstraintWithHttpInfo(namespaceKey, segmentKey, id, updateConstraintRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param id
     * @param updateConstraintRequest
     */
    public updateConstraint(namespaceKey: string, segmentKey: string, id: string, updateConstraintRequest: UpdateConstraintRequest, _options?: PromiseConfigurationOptions): Promise<Constraint> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateConstraint(namespaceKey, segmentKey, id, updateConstraintRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param id
     * @param updateDistributionRequest
     */
    public updateDistributionWithHttpInfo(namespaceKey: string, flagKey: string, ruleId: string, id: string, updateDistributionRequest: UpdateDistributionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Distribution>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateDistributionWithHttpInfo(namespaceKey, flagKey, ruleId, id, updateDistributionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param id
     * @param updateDistributionRequest
     */
    public updateDistribution(namespaceKey: string, flagKey: string, ruleId: string, id: string, updateDistributionRequest: UpdateDistributionRequest, _options?: PromiseConfigurationOptions): Promise<Distribution> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateDistribution(namespaceKey, flagKey, ruleId, id, updateDistributionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     * @param updateFlagRequest
     */
    public updateFlagWithHttpInfo(namespaceKey: string, key: string, updateFlagRequest: UpdateFlagRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Flag>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateFlagWithHttpInfo(namespaceKey, key, updateFlagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     * @param updateFlagRequest
     */
    public updateFlag(namespaceKey: string, key: string, updateFlagRequest: UpdateFlagRequest, _options?: PromiseConfigurationOptions): Promise<Flag> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateFlag(namespaceKey, key, updateFlagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param key
     * @param updateNamespaceRequest
     */
    public updateNamespaceWithHttpInfo(key: string, updateNamespaceRequest: UpdateNamespaceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Namespace>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateNamespaceWithHttpInfo(key, updateNamespaceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param key
     * @param updateNamespaceRequest
     */
    public updateNamespace(key: string, updateNamespaceRequest: UpdateNamespaceRequest, _options?: PromiseConfigurationOptions): Promise<Namespace> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateNamespace(key, updateNamespaceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateRolloutRequest
     */
    public updateRolloutWithHttpInfo(namespaceKey: string, flagKey: string, id: string, updateRolloutRequest: UpdateRolloutRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Rollout>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateRolloutWithHttpInfo(namespaceKey, flagKey, id, updateRolloutRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateRolloutRequest
     */
    public updateRollout(namespaceKey: string, flagKey: string, id: string, updateRolloutRequest: UpdateRolloutRequest, _options?: PromiseConfigurationOptions): Promise<Rollout> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateRollout(namespaceKey, flagKey, id, updateRolloutRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateRuleRequest
     */
    public updateRuleWithHttpInfo(namespaceKey: string, flagKey: string, id: string, updateRuleRequest: UpdateRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Rule>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateRuleWithHttpInfo(namespaceKey, flagKey, id, updateRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateRuleRequest
     */
    public updateRule(namespaceKey: string, flagKey: string, id: string, updateRuleRequest: UpdateRuleRequest, _options?: PromiseConfigurationOptions): Promise<Rule> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateRule(namespaceKey, flagKey, id, updateRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     * @param updateSegmentRequest
     */
    public updateSegmentWithHttpInfo(namespaceKey: string, key: string, updateSegmentRequest: UpdateSegmentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Segment>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateSegmentWithHttpInfo(namespaceKey, key, updateSegmentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     * @param updateSegmentRequest
     */
    public updateSegment(namespaceKey: string, key: string, updateSegmentRequest: UpdateSegmentRequest, _options?: PromiseConfigurationOptions): Promise<Segment> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateSegment(namespaceKey, key, updateSegmentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateVariantRequest
     */
    public updateVariantWithHttpInfo(namespaceKey: string, flagKey: string, id: string, updateVariantRequest: UpdateVariantRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Variant>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateVariantWithHttpInfo(namespaceKey, flagKey, id, updateVariantRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateVariantRequest
     */
    public updateVariant(namespaceKey: string, flagKey: string, id: string, updateVariantRequest: UpdateVariantRequest, _options?: PromiseConfigurationOptions): Promise<Variant> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateVariant(namespaceKey, flagKey, id, updateVariantRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableNamespacesServiceApi } from './ObservableAPI';

import { NamespacesServiceApiRequestFactory, NamespacesServiceApiResponseProcessor} from "../apis/NamespacesServiceApi";
export class PromiseNamespacesServiceApi {
    private api: ObservableNamespacesServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NamespacesServiceApiRequestFactory,
        responseProcessor?: NamespacesServiceApiResponseProcessor
    ) {
        this.api = new ObservableNamespacesServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param createNamespaceRequest
     */
    public createNamespaceWithHttpInfo(createNamespaceRequest: CreateNamespaceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Namespace>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createNamespaceWithHttpInfo(createNamespaceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createNamespaceRequest
     */
    public createNamespace(createNamespaceRequest: CreateNamespaceRequest, _options?: PromiseConfigurationOptions): Promise<Namespace> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createNamespace(createNamespaceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param key
     * @param [force]
     */
    public deleteNamespaceWithHttpInfo(key: string, force?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteNamespaceWithHttpInfo(key, force, observableOptions);
        return result.toPromise();
    }

    /**
     * @param key
     * @param [force]
     */
    public deleteNamespace(key: string, force?: boolean, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteNamespace(key, force, observableOptions);
        return result.toPromise();
    }

    /**
     * @param key
     * @param [reference]
     */
    public getNamespaceWithHttpInfo(key: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Namespace>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getNamespaceWithHttpInfo(key, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param key
     * @param [reference]
     */
    public getNamespace(key: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<Namespace> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getNamespace(key, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listNamespacesWithHttpInfo(limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NamespaceList>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listNamespacesWithHttpInfo(limit, offset, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listNamespaces(limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<NamespaceList> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listNamespaces(limit, offset, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param key
     * @param updateNamespaceRequest
     */
    public updateNamespaceWithHttpInfo(key: string, updateNamespaceRequest: UpdateNamespaceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Namespace>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateNamespaceWithHttpInfo(key, updateNamespaceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param key
     * @param updateNamespaceRequest
     */
    public updateNamespace(key: string, updateNamespaceRequest: UpdateNamespaceRequest, _options?: PromiseConfigurationOptions): Promise<Namespace> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateNamespace(key, updateNamespaceRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOFREPServiceApi } from './ObservableAPI';

import { OFREPServiceApiRequestFactory, OFREPServiceApiResponseProcessor} from "../apis/OFREPServiceApi";
export class PromiseOFREPServiceApi {
    private api: ObservableOFREPServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OFREPServiceApiRequestFactory,
        responseProcessor?: OFREPServiceApiResponseProcessor
    ) {
        this.api = new ObservableOFREPServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * OFREP provider configuration
     */
    public ofrepConfigurationWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<GetProviderConfigurationResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.ofrepConfigurationWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * OFREP provider configuration
     */
    public ofrepConfiguration(_options?: PromiseConfigurationOptions): Promise<GetProviderConfigurationResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.ofrepConfiguration(observableOptions);
        return result.toPromise();
    }

    /**
     * OFREP bulk flag evaluation
     * @param evaluateBulkRequest
     */
    public ofrepEvaluateBulkWithHttpInfo(evaluateBulkRequest: EvaluateBulkRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BulkEvaluationResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.ofrepEvaluateBulkWithHttpInfo(evaluateBulkRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * OFREP bulk flag evaluation
     * @param evaluateBulkRequest
     */
    public ofrepEvaluateBulk(evaluateBulkRequest: EvaluateBulkRequest, _options?: PromiseConfigurationOptions): Promise<BulkEvaluationResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.ofrepEvaluateBulk(evaluateBulkRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * OFREP single flag evaluation
     * @param key
     * @param evaluateFlagRequest
     */
    public ofrepEvaluateFlagWithHttpInfo(key: string, evaluateFlagRequest: EvaluateFlagRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EvaluatedFlag>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.ofrepEvaluateFlagWithHttpInfo(key, evaluateFlagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * OFREP single flag evaluation
     * @param key
     * @param evaluateFlagRequest
     */
    public ofrepEvaluateFlag(key: string, evaluateFlagRequest: EvaluateFlagRequest, _options?: PromiseConfigurationOptions): Promise<EvaluatedFlag> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.ofrepEvaluateFlag(key, evaluateFlagRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableRolloutsServiceApi } from './ObservableAPI';

import { RolloutsServiceApiRequestFactory, RolloutsServiceApiResponseProcessor} from "../apis/RolloutsServiceApi";
export class PromiseRolloutsServiceApi {
    private api: ObservableRolloutsServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RolloutsServiceApiRequestFactory,
        responseProcessor?: RolloutsServiceApiResponseProcessor
    ) {
        this.api = new ObservableRolloutsServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createRolloutRequest
     */
    public createRolloutWithHttpInfo(namespaceKey: string, flagKey: string, createRolloutRequest: CreateRolloutRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Rollout>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createRolloutWithHttpInfo(namespaceKey, flagKey, createRolloutRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createRolloutRequest
     */
    public createRollout(namespaceKey: string, flagKey: string, createRolloutRequest: CreateRolloutRequest, _options?: PromiseConfigurationOptions): Promise<Rollout> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createRollout(namespaceKey, flagKey, createRolloutRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteRolloutWithHttpInfo(namespaceKey: string, flagKey: string, id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteRolloutWithHttpInfo(namespaceKey, flagKey, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteRollout(namespaceKey: string, flagKey: string, id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteRollout(namespaceKey, flagKey, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param [reference]
     */
    public getRolloutWithHttpInfo(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Rollout>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getRolloutWithHttpInfo(namespaceKey, flagKey, id, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param [reference]
     */
    public getRollout(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<Rollout> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getRollout(namespaceKey, flagKey, id, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param [limit]
     * @param [pageToken]
     * @param [reference]
     */
    public listRolloutsWithHttpInfo(namespaceKey: string, flagKey: string, limit?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RolloutList>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listRolloutsWithHttpInfo(namespaceKey, flagKey, limit, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param [limit]
     * @param [pageToken]
     * @param [reference]
     */
    public listRollouts(namespaceKey: string, flagKey: string, limit?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<RolloutList> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listRollouts(namespaceKey, flagKey, limit, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param orderRolloutsRequest
     */
    public orderRolloutsWithHttpInfo(namespaceKey: string, flagKey: string, orderRolloutsRequest: OrderRolloutsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.orderRolloutsWithHttpInfo(namespaceKey, flagKey, orderRolloutsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param orderRolloutsRequest
     */
    public orderRollouts(namespaceKey: string, flagKey: string, orderRolloutsRequest: OrderRolloutsRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.orderRollouts(namespaceKey, flagKey, orderRolloutsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateRolloutRequest
     */
    public updateRolloutWithHttpInfo(namespaceKey: string, flagKey: string, id: string, updateRolloutRequest: UpdateRolloutRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Rollout>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateRolloutWithHttpInfo(namespaceKey, flagKey, id, updateRolloutRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateRolloutRequest
     */
    public updateRollout(namespaceKey: string, flagKey: string, id: string, updateRolloutRequest: UpdateRolloutRequest, _options?: PromiseConfigurationOptions): Promise<Rollout> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateRollout(namespaceKey, flagKey, id, updateRolloutRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableRulesServiceApi } from './ObservableAPI';

import { RulesServiceApiRequestFactory, RulesServiceApiResponseProcessor} from "../apis/RulesServiceApi";
export class PromiseRulesServiceApi {
    private api: ObservableRulesServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RulesServiceApiRequestFactory,
        responseProcessor?: RulesServiceApiResponseProcessor
    ) {
        this.api = new ObservableRulesServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createRuleRequest
     */
    public createRuleWithHttpInfo(namespaceKey: string, flagKey: string, createRuleRequest: CreateRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Rule>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createRuleWithHttpInfo(namespaceKey, flagKey, createRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createRuleRequest
     */
    public createRule(namespaceKey: string, flagKey: string, createRuleRequest: CreateRuleRequest, _options?: PromiseConfigurationOptions): Promise<Rule> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createRule(namespaceKey, flagKey, createRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteRuleWithHttpInfo(namespaceKey: string, flagKey: string, id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteRuleWithHttpInfo(namespaceKey, flagKey, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteRule(namespaceKey: string, flagKey: string, id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteRule(namespaceKey, flagKey, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param [reference]
     */
    public getRuleWithHttpInfo(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Rule>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getRuleWithHttpInfo(namespaceKey, flagKey, id, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param [reference]
     */
    public getRule(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<Rule> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getRule(namespaceKey, flagKey, id, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listRulesWithHttpInfo(namespaceKey: string, flagKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RuleList>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listRulesWithHttpInfo(namespaceKey, flagKey, limit, offset, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listRules(namespaceKey: string, flagKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<RuleList> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listRules(namespaceKey, flagKey, limit, offset, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param orderRulesRequest
     */
    public orderRulesWithHttpInfo(namespaceKey: string, flagKey: string, orderRulesRequest: OrderRulesRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.orderRulesWithHttpInfo(namespaceKey, flagKey, orderRulesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param orderRulesRequest
     */
    public orderRules(namespaceKey: string, flagKey: string, orderRulesRequest: OrderRulesRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.orderRules(namespaceKey, flagKey, orderRulesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateRuleRequest
     */
    public updateRuleWithHttpInfo(namespaceKey: string, flagKey: string, id: string, updateRuleRequest: UpdateRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Rule>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateRuleWithHttpInfo(namespaceKey, flagKey, id, updateRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateRuleRequest
     */
    public updateRule(namespaceKey: string, flagKey: string, id: string, updateRuleRequest: UpdateRuleRequest, _options?: PromiseConfigurationOptions): Promise<Rule> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateRule(namespaceKey, flagKey, id, updateRuleRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSegmentsServiceApi } from './ObservableAPI';

import { SegmentsServiceApiRequestFactory, SegmentsServiceApiResponseProcessor} from "../apis/SegmentsServiceApi";
export class PromiseSegmentsServiceApi {
    private api: ObservableSegmentsServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SegmentsServiceApiRequestFactory,
        responseProcessor?: SegmentsServiceApiResponseProcessor
    ) {
        this.api = new ObservableSegmentsServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param namespaceKey
     * @param createSegmentRequest
     */
    public createSegmentWithHttpInfo(namespaceKey: string, createSegmentRequest: CreateSegmentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Segment>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createSegmentWithHttpInfo(namespaceKey, createSegmentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param createSegmentRequest
     */
    public createSegment(namespaceKey: string, createSegmentRequest: CreateSegmentRequest, _options?: PromiseConfigurationOptions): Promise<Segment> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createSegment(namespaceKey, createSegmentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     */
    public deleteSegmentWithHttpInfo(namespaceKey: string, key: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteSegmentWithHttpInfo(namespaceKey, key, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     */
    public deleteSegment(namespaceKey: string, key: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteSegment(namespaceKey, key, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     * @param [reference]
     */
    public getSegmentWithHttpInfo(namespaceKey: string, key: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Segment>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSegmentWithHttpInfo(namespaceKey, key, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     * @param [reference]
     */
    public getSegment(namespaceKey: string, key: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<Segment> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSegment(namespaceKey, key, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listSegmentsWithHttpInfo(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SegmentList>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listSegmentsWithHttpInfo(namespaceKey, limit, offset, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listSegments(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: PromiseConfigurationOptions): Promise<SegmentList> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listSegments(namespaceKey, limit, offset, pageToken, reference, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     * @param updateSegmentRequest
     */
    public updateSegmentWithHttpInfo(namespaceKey: string, key: string, updateSegmentRequest: UpdateSegmentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Segment>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateSegmentWithHttpInfo(namespaceKey, key, updateSegmentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param key
     * @param updateSegmentRequest
     */
    public updateSegment(namespaceKey: string, key: string, updateSegmentRequest: UpdateSegmentRequest, _options?: PromiseConfigurationOptions): Promise<Segment> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateSegment(namespaceKey, key, updateSegmentRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableVariantsServiceApi } from './ObservableAPI';

import { VariantsServiceApiRequestFactory, VariantsServiceApiResponseProcessor} from "../apis/VariantsServiceApi";
export class PromiseVariantsServiceApi {
    private api: ObservableVariantsServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VariantsServiceApiRequestFactory,
        responseProcessor?: VariantsServiceApiResponseProcessor
    ) {
        this.api = new ObservableVariantsServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createVariantRequest
     */
    public createVariantWithHttpInfo(namespaceKey: string, flagKey: string, createVariantRequest: CreateVariantRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Variant>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createVariantWithHttpInfo(namespaceKey, flagKey, createVariantRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createVariantRequest
     */
    public createVariant(namespaceKey: string, flagKey: string, createVariantRequest: CreateVariantRequest, _options?: PromiseConfigurationOptions): Promise<Variant> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createVariant(namespaceKey, flagKey, createVariantRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteVariantWithHttpInfo(namespaceKey: string, flagKey: string, id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteVariantWithHttpInfo(namespaceKey, flagKey, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteVariant(namespaceKey: string, flagKey: string, id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteVariant(namespaceKey, flagKey, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateVariantRequest
     */
    public updateVariantWithHttpInfo(namespaceKey: string, flagKey: string, id: string, updateVariantRequest: UpdateVariantRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Variant>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateVariantWithHttpInfo(namespaceKey, flagKey, id, updateVariantRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateVariantRequest
     */
    public updateVariant(namespaceKey: string, flagKey: string, id: string, updateVariantRequest: UpdateVariantRequest, _options?: PromiseConfigurationOptions): Promise<Variant> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateVariant(namespaceKey, flagKey, id, updateVariantRequest, observableOptions);
        return result.toPromise();
    }


}



