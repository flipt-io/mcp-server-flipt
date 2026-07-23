import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AuthenticationMethodKubernetesServiceApiRequestFactory, AuthenticationMethodKubernetesServiceApiResponseProcessor} from "../apis/AuthenticationMethodKubernetesServiceApi";
export class ObservableAuthenticationMethodKubernetesServiceApi {
    private requestFactory: AuthenticationMethodKubernetesServiceApiRequestFactory;
    private responseProcessor: AuthenticationMethodKubernetesServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationMethodKubernetesServiceApiRequestFactory,
        responseProcessor?: AuthenticationMethodKubernetesServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationMethodKubernetesServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationMethodKubernetesServiceApiResponseProcessor();
    }

    /**
     * @param verifyServiceAccountRequest
     */
    public kubernetesVerifyServiceAccountWithHttpInfo(verifyServiceAccountRequest: VerifyServiceAccountRequest, _options?: ConfigurationOptions): Observable<HttpInfo<VerifyServiceAccountResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.kubernetesVerifyServiceAccount(verifyServiceAccountRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.kubernetesVerifyServiceAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param verifyServiceAccountRequest
     */
    public kubernetesVerifyServiceAccount(verifyServiceAccountRequest: VerifyServiceAccountRequest, _options?: ConfigurationOptions): Observable<VerifyServiceAccountResponse> {
        return this.kubernetesVerifyServiceAccountWithHttpInfo(verifyServiceAccountRequest, _options).pipe(map((apiResponse: HttpInfo<VerifyServiceAccountResponse>) => apiResponse.data));
    }

}

import { AuthenticationMethodOIDCServiceApiRequestFactory, AuthenticationMethodOIDCServiceApiResponseProcessor} from "../apis/AuthenticationMethodOIDCServiceApi";
export class ObservableAuthenticationMethodOIDCServiceApi {
    private requestFactory: AuthenticationMethodOIDCServiceApiRequestFactory;
    private responseProcessor: AuthenticationMethodOIDCServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationMethodOIDCServiceApiRequestFactory,
        responseProcessor?: AuthenticationMethodOIDCServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationMethodOIDCServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationMethodOIDCServiceApiResponseProcessor();
    }

    /**
     * @param provider
     * @param [state]
     */
    public oidcAuthorizeURLWithHttpInfo(provider: string, state?: string, _options?: ConfigurationOptions): Observable<HttpInfo<AuthorizeURLResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.oidcAuthorizeURL(provider, state, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.oidcAuthorizeURLWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param provider
     * @param [state]
     */
    public oidcAuthorizeURL(provider: string, state?: string, _options?: ConfigurationOptions): Observable<AuthorizeURLResponse> {
        return this.oidcAuthorizeURLWithHttpInfo(provider, state, _options).pipe(map((apiResponse: HttpInfo<AuthorizeURLResponse>) => apiResponse.data));
    }

    /**
     * @param provider
     * @param [code]
     * @param [state]
     */
    public oidcCallbackWithHttpInfo(provider: string, code?: string, state?: string, _options?: ConfigurationOptions): Observable<HttpInfo<CallbackResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.oidcCallback(provider, code, state, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.oidcCallbackWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param provider
     * @param [code]
     * @param [state]
     */
    public oidcCallback(provider: string, code?: string, state?: string, _options?: ConfigurationOptions): Observable<CallbackResponse> {
        return this.oidcCallbackWithHttpInfo(provider, code, state, _options).pipe(map((apiResponse: HttpInfo<CallbackResponse>) => apiResponse.data));
    }

}

import { AuthenticationMethodTokenServiceApiRequestFactory, AuthenticationMethodTokenServiceApiResponseProcessor} from "../apis/AuthenticationMethodTokenServiceApi";
export class ObservableAuthenticationMethodTokenServiceApi {
    private requestFactory: AuthenticationMethodTokenServiceApiRequestFactory;
    private responseProcessor: AuthenticationMethodTokenServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationMethodTokenServiceApiRequestFactory,
        responseProcessor?: AuthenticationMethodTokenServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationMethodTokenServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationMethodTokenServiceApiResponseProcessor();
    }

    /**
     * @param createTokenRequest
     */
    public createMethodTokenWithHttpInfo(createTokenRequest: CreateTokenRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CreateTokenResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createMethodToken(createTokenRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createMethodTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createTokenRequest
     */
    public createMethodToken(createTokenRequest: CreateTokenRequest, _options?: ConfigurationOptions): Observable<CreateTokenResponse> {
        return this.createMethodTokenWithHttpInfo(createTokenRequest, _options).pipe(map((apiResponse: HttpInfo<CreateTokenResponse>) => apiResponse.data));
    }

}

import { AuthenticationServiceApiRequestFactory, AuthenticationServiceApiResponseProcessor} from "../apis/AuthenticationServiceApi";
export class ObservableAuthenticationServiceApi {
    private requestFactory: AuthenticationServiceApiRequestFactory;
    private responseProcessor: AuthenticationServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationServiceApiRequestFactory,
        responseProcessor?: AuthenticationServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationServiceApiResponseProcessor();
    }

    /**
     * @param id
     */
    public deleteAuthTokenWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteAuthToken(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAuthTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public deleteAuthToken(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteAuthTokenWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param [expiresAt]
     */
    public expireAuthSelfWithHttpInfo(expiresAt?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.expireAuthSelf(expiresAt, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.expireAuthSelfWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [expiresAt]
     */
    public expireAuthSelf(expiresAt?: Date, _options?: ConfigurationOptions): Observable<void> {
        return this.expireAuthSelfWithHttpInfo(expiresAt, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public getAuthSelfWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Authentication>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getAuthSelf(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuthSelfWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getAuthSelf(_options?: ConfigurationOptions): Observable<Authentication> {
        return this.getAuthSelfWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Authentication>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public getAuthTokenWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<Authentication>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getAuthToken(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuthTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public getAuthToken(id: string, _options?: ConfigurationOptions): Observable<Authentication> {
        return this.getAuthTokenWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Authentication>) => apiResponse.data));
    }

    /**
     * @param [method]
     * @param [limit]
     * @param [pageToken]
     */
    public listAuthTokensWithHttpInfo(method?: 'METHOD_NONE' | 'METHOD_TOKEN' | 'METHOD_OIDC' | 'METHOD_KUBERNETES' | 'METHOD_GITHUB' | 'METHOD_JWT' | 'METHOD_CLOUD', limit?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListAuthenticationsResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.listAuthTokens(method, limit, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAuthTokensWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [method]
     * @param [limit]
     * @param [pageToken]
     */
    public listAuthTokens(method?: 'METHOD_NONE' | 'METHOD_TOKEN' | 'METHOD_OIDC' | 'METHOD_KUBERNETES' | 'METHOD_GITHUB' | 'METHOD_JWT' | 'METHOD_CLOUD', limit?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListAuthenticationsResponse> {
        return this.listAuthTokensWithHttpInfo(method, limit, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAuthenticationsResponse>) => apiResponse.data));
    }

}

import { ConstraintsServiceApiRequestFactory, ConstraintsServiceApiResponseProcessor} from "../apis/ConstraintsServiceApi";
export class ObservableConstraintsServiceApi {
    private requestFactory: ConstraintsServiceApiRequestFactory;
    private responseProcessor: ConstraintsServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConstraintsServiceApiRequestFactory,
        responseProcessor?: ConstraintsServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConstraintsServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConstraintsServiceApiResponseProcessor();
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param createConstraintRequest
     */
    public createConstraintWithHttpInfo(namespaceKey: string, segmentKey: string, createConstraintRequest: CreateConstraintRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Constraint>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createConstraint(namespaceKey, segmentKey, createConstraintRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createConstraintWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param createConstraintRequest
     */
    public createConstraint(namespaceKey: string, segmentKey: string, createConstraintRequest: CreateConstraintRequest, _options?: ConfigurationOptions): Observable<Constraint> {
        return this.createConstraintWithHttpInfo(namespaceKey, segmentKey, createConstraintRequest, _options).pipe(map((apiResponse: HttpInfo<Constraint>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param id
     */
    public deleteConstraintWithHttpInfo(namespaceKey: string, segmentKey: string, id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteConstraint(namespaceKey, segmentKey, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteConstraintWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param id
     */
    public deleteConstraint(namespaceKey: string, segmentKey: string, id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteConstraintWithHttpInfo(namespaceKey, segmentKey, id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param id
     * @param updateConstraintRequest
     */
    public updateConstraintWithHttpInfo(namespaceKey: string, segmentKey: string, id: string, updateConstraintRequest: UpdateConstraintRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Constraint>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateConstraint(namespaceKey, segmentKey, id, updateConstraintRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateConstraintWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param id
     * @param updateConstraintRequest
     */
    public updateConstraint(namespaceKey: string, segmentKey: string, id: string, updateConstraintRequest: UpdateConstraintRequest, _options?: ConfigurationOptions): Observable<Constraint> {
        return this.updateConstraintWithHttpInfo(namespaceKey, segmentKey, id, updateConstraintRequest, _options).pipe(map((apiResponse: HttpInfo<Constraint>) => apiResponse.data));
    }

}

import { DistributionsServiceApiRequestFactory, DistributionsServiceApiResponseProcessor} from "../apis/DistributionsServiceApi";
export class ObservableDistributionsServiceApi {
    private requestFactory: DistributionsServiceApiRequestFactory;
    private responseProcessor: DistributionsServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DistributionsServiceApiRequestFactory,
        responseProcessor?: DistributionsServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DistributionsServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DistributionsServiceApiResponseProcessor();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param createDistributionRequest
     */
    public createDistributionWithHttpInfo(namespaceKey: string, flagKey: string, ruleId: string, createDistributionRequest: CreateDistributionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Distribution>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createDistribution(namespaceKey, flagKey, ruleId, createDistributionRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDistributionWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param createDistributionRequest
     */
    public createDistribution(namespaceKey: string, flagKey: string, ruleId: string, createDistributionRequest: CreateDistributionRequest, _options?: ConfigurationOptions): Observable<Distribution> {
        return this.createDistributionWithHttpInfo(namespaceKey, flagKey, ruleId, createDistributionRequest, _options).pipe(map((apiResponse: HttpInfo<Distribution>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param id
     * @param [variantId]
     */
    public deleteDistributionWithHttpInfo(namespaceKey: string, flagKey: string, ruleId: string, id: string, variantId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteDistribution(namespaceKey, flagKey, ruleId, id, variantId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDistributionWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param id
     * @param [variantId]
     */
    public deleteDistribution(namespaceKey: string, flagKey: string, ruleId: string, id: string, variantId?: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteDistributionWithHttpInfo(namespaceKey, flagKey, ruleId, id, variantId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param id
     * @param updateDistributionRequest
     */
    public updateDistributionWithHttpInfo(namespaceKey: string, flagKey: string, ruleId: string, id: string, updateDistributionRequest: UpdateDistributionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Distribution>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateDistribution(namespaceKey, flagKey, ruleId, id, updateDistributionRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDistributionWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param id
     * @param updateDistributionRequest
     */
    public updateDistribution(namespaceKey: string, flagKey: string, ruleId: string, id: string, updateDistributionRequest: UpdateDistributionRequest, _options?: ConfigurationOptions): Observable<Distribution> {
        return this.updateDistributionWithHttpInfo(namespaceKey, flagKey, ruleId, id, updateDistributionRequest, _options).pipe(map((apiResponse: HttpInfo<Distribution>) => apiResponse.data));
    }

}

import { EvaluationServiceApiRequestFactory, EvaluationServiceApiResponseProcessor} from "../apis/EvaluationServiceApi";
export class ObservableEvaluationServiceApi {
    private requestFactory: EvaluationServiceApiRequestFactory;
    private responseProcessor: EvaluationServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EvaluationServiceApiRequestFactory,
        responseProcessor?: EvaluationServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EvaluationServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EvaluationServiceApiResponseProcessor();
    }

    /**
     * @param batchEvaluationRequest
     */
    public evaluateBatchWithHttpInfo(batchEvaluationRequest: BatchEvaluationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BatchEvaluationResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.evaluateBatch(batchEvaluationRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.evaluateBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param batchEvaluationRequest
     */
    public evaluateBatch(batchEvaluationRequest: BatchEvaluationRequest, _options?: ConfigurationOptions): Observable<BatchEvaluationResponse> {
        return this.evaluateBatchWithHttpInfo(batchEvaluationRequest, _options).pipe(map((apiResponse: HttpInfo<BatchEvaluationResponse>) => apiResponse.data));
    }

    /**
     * @param evaluationRequest
     */
    public evaluateBooleanWithHttpInfo(evaluationRequest: EvaluationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BooleanEvaluationResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.evaluateBoolean(evaluationRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.evaluateBooleanWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param evaluationRequest
     */
    public evaluateBoolean(evaluationRequest: EvaluationRequest, _options?: ConfigurationOptions): Observable<BooleanEvaluationResponse> {
        return this.evaluateBooleanWithHttpInfo(evaluationRequest, _options).pipe(map((apiResponse: HttpInfo<BooleanEvaluationResponse>) => apiResponse.data));
    }

    /**
     * @param evaluationRequest
     */
    public evaluateVariantWithHttpInfo(evaluationRequest: EvaluationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<VariantEvaluationResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.evaluateVariant(evaluationRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.evaluateVariantWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param evaluationRequest
     */
    public evaluateVariant(evaluationRequest: EvaluationRequest, _options?: ConfigurationOptions): Observable<VariantEvaluationResponse> {
        return this.evaluateVariantWithHttpInfo(evaluationRequest, _options).pipe(map((apiResponse: HttpInfo<VariantEvaluationResponse>) => apiResponse.data));
    }

}

import { FlagsServiceApiRequestFactory, FlagsServiceApiResponseProcessor} from "../apis/FlagsServiceApi";
export class ObservableFlagsServiceApi {
    private requestFactory: FlagsServiceApiRequestFactory;
    private responseProcessor: FlagsServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FlagsServiceApiRequestFactory,
        responseProcessor?: FlagsServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FlagsServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FlagsServiceApiResponseProcessor();
    }

    /**
     * @param namespaceKey
     * @param createFlagRequest
     */
    public createFlagWithHttpInfo(namespaceKey: string, createFlagRequest: CreateFlagRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Flag>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createFlag(namespaceKey, createFlagRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFlagWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param createFlagRequest
     */
    public createFlag(namespaceKey: string, createFlagRequest: CreateFlagRequest, _options?: ConfigurationOptions): Observable<Flag> {
        return this.createFlagWithHttpInfo(namespaceKey, createFlagRequest, _options).pipe(map((apiResponse: HttpInfo<Flag>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param key
     */
    public deleteFlagWithHttpInfo(namespaceKey: string, key: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteFlag(namespaceKey, key, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFlagWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param key
     */
    public deleteFlag(namespaceKey: string, key: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteFlagWithHttpInfo(namespaceKey, key, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param key
     * @param [reference]
     */
    public getFlagWithHttpInfo(namespaceKey: string, key: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Flag>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getFlag(namespaceKey, key, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFlagWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param key
     * @param [reference]
     */
    public getFlag(namespaceKey: string, key: string, reference?: string, _options?: ConfigurationOptions): Observable<Flag> {
        return this.getFlagWithHttpInfo(namespaceKey, key, reference, _options).pipe(map((apiResponse: HttpInfo<Flag>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listFlagsWithHttpInfo(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<FlagList>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.listFlags(namespaceKey, limit, offset, pageToken, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFlagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listFlags(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<FlagList> {
        return this.listFlagsWithHttpInfo(namespaceKey, limit, offset, pageToken, reference, _options).pipe(map((apiResponse: HttpInfo<FlagList>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param key
     * @param updateFlagRequest
     */
    public updateFlagWithHttpInfo(namespaceKey: string, key: string, updateFlagRequest: UpdateFlagRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Flag>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateFlag(namespaceKey, key, updateFlagRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFlagWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param key
     * @param updateFlagRequest
     */
    public updateFlag(namespaceKey: string, key: string, updateFlagRequest: UpdateFlagRequest, _options?: ConfigurationOptions): Observable<Flag> {
        return this.updateFlagWithHttpInfo(namespaceKey, key, updateFlagRequest, _options).pipe(map((apiResponse: HttpInfo<Flag>) => apiResponse.data));
    }

}

import { FliptApiRequestFactory, FliptApiResponseProcessor} from "../apis/FliptApi";
export class ObservableFliptApi {
    private requestFactory: FliptApiRequestFactory;
    private responseProcessor: FliptApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FliptApiRequestFactory,
        responseProcessor?: FliptApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FliptApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FliptApiResponseProcessor();
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param createConstraintRequest
     */
    public createConstraintWithHttpInfo(namespaceKey: string, segmentKey: string, createConstraintRequest: CreateConstraintRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Constraint>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createConstraint(namespaceKey, segmentKey, createConstraintRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createConstraintWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param createConstraintRequest
     */
    public createConstraint(namespaceKey: string, segmentKey: string, createConstraintRequest: CreateConstraintRequest, _options?: ConfigurationOptions): Observable<Constraint> {
        return this.createConstraintWithHttpInfo(namespaceKey, segmentKey, createConstraintRequest, _options).pipe(map((apiResponse: HttpInfo<Constraint>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param createDistributionRequest
     */
    public createDistributionWithHttpInfo(namespaceKey: string, flagKey: string, ruleId: string, createDistributionRequest: CreateDistributionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Distribution>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createDistribution(namespaceKey, flagKey, ruleId, createDistributionRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDistributionWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param createDistributionRequest
     */
    public createDistribution(namespaceKey: string, flagKey: string, ruleId: string, createDistributionRequest: CreateDistributionRequest, _options?: ConfigurationOptions): Observable<Distribution> {
        return this.createDistributionWithHttpInfo(namespaceKey, flagKey, ruleId, createDistributionRequest, _options).pipe(map((apiResponse: HttpInfo<Distribution>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param createFlagRequest
     */
    public createFlagWithHttpInfo(namespaceKey: string, createFlagRequest: CreateFlagRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Flag>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createFlag(namespaceKey, createFlagRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFlagWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param createFlagRequest
     */
    public createFlag(namespaceKey: string, createFlagRequest: CreateFlagRequest, _options?: ConfigurationOptions): Observable<Flag> {
        return this.createFlagWithHttpInfo(namespaceKey, createFlagRequest, _options).pipe(map((apiResponse: HttpInfo<Flag>) => apiResponse.data));
    }

    /**
     * @param createNamespaceRequest
     */
    public createNamespaceWithHttpInfo(createNamespaceRequest: CreateNamespaceRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Namespace>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createNamespace(createNamespaceRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNamespaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createNamespaceRequest
     */
    public createNamespace(createNamespaceRequest: CreateNamespaceRequest, _options?: ConfigurationOptions): Observable<Namespace> {
        return this.createNamespaceWithHttpInfo(createNamespaceRequest, _options).pipe(map((apiResponse: HttpInfo<Namespace>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createRolloutRequest
     */
    public createRolloutWithHttpInfo(namespaceKey: string, flagKey: string, createRolloutRequest: CreateRolloutRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Rollout>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createRollout(namespaceKey, flagKey, createRolloutRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRolloutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createRolloutRequest
     */
    public createRollout(namespaceKey: string, flagKey: string, createRolloutRequest: CreateRolloutRequest, _options?: ConfigurationOptions): Observable<Rollout> {
        return this.createRolloutWithHttpInfo(namespaceKey, flagKey, createRolloutRequest, _options).pipe(map((apiResponse: HttpInfo<Rollout>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createRuleRequest
     */
    public createRuleWithHttpInfo(namespaceKey: string, flagKey: string, createRuleRequest: CreateRuleRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Rule>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createRule(namespaceKey, flagKey, createRuleRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createRuleRequest
     */
    public createRule(namespaceKey: string, flagKey: string, createRuleRequest: CreateRuleRequest, _options?: ConfigurationOptions): Observable<Rule> {
        return this.createRuleWithHttpInfo(namespaceKey, flagKey, createRuleRequest, _options).pipe(map((apiResponse: HttpInfo<Rule>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param createSegmentRequest
     */
    public createSegmentWithHttpInfo(namespaceKey: string, createSegmentRequest: CreateSegmentRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Segment>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createSegment(namespaceKey, createSegmentRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSegmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param createSegmentRequest
     */
    public createSegment(namespaceKey: string, createSegmentRequest: CreateSegmentRequest, _options?: ConfigurationOptions): Observable<Segment> {
        return this.createSegmentWithHttpInfo(namespaceKey, createSegmentRequest, _options).pipe(map((apiResponse: HttpInfo<Segment>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createVariantRequest
     */
    public createVariantWithHttpInfo(namespaceKey: string, flagKey: string, createVariantRequest: CreateVariantRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Variant>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createVariant(namespaceKey, flagKey, createVariantRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVariantWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createVariantRequest
     */
    public createVariant(namespaceKey: string, flagKey: string, createVariantRequest: CreateVariantRequest, _options?: ConfigurationOptions): Observable<Variant> {
        return this.createVariantWithHttpInfo(namespaceKey, flagKey, createVariantRequest, _options).pipe(map((apiResponse: HttpInfo<Variant>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param id
     */
    public deleteConstraintWithHttpInfo(namespaceKey: string, segmentKey: string, id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteConstraint(namespaceKey, segmentKey, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteConstraintWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param id
     */
    public deleteConstraint(namespaceKey: string, segmentKey: string, id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteConstraintWithHttpInfo(namespaceKey, segmentKey, id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param id
     * @param [variantId]
     */
    public deleteDistributionWithHttpInfo(namespaceKey: string, flagKey: string, ruleId: string, id: string, variantId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteDistribution(namespaceKey, flagKey, ruleId, id, variantId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDistributionWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param id
     * @param [variantId]
     */
    public deleteDistribution(namespaceKey: string, flagKey: string, ruleId: string, id: string, variantId?: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteDistributionWithHttpInfo(namespaceKey, flagKey, ruleId, id, variantId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param key
     */
    public deleteFlagWithHttpInfo(namespaceKey: string, key: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteFlag(namespaceKey, key, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFlagWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param key
     */
    public deleteFlag(namespaceKey: string, key: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteFlagWithHttpInfo(namespaceKey, key, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param key
     * @param [force]
     */
    public deleteNamespaceWithHttpInfo(key: string, force?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteNamespace(key, force, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteNamespaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param key
     * @param [force]
     */
    public deleteNamespace(key: string, force?: boolean, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteNamespaceWithHttpInfo(key, force, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteRolloutWithHttpInfo(namespaceKey: string, flagKey: string, id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteRollout(namespaceKey, flagKey, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRolloutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteRollout(namespaceKey: string, flagKey: string, id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteRolloutWithHttpInfo(namespaceKey, flagKey, id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteRuleWithHttpInfo(namespaceKey: string, flagKey: string, id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteRule(namespaceKey, flagKey, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteRule(namespaceKey: string, flagKey: string, id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteRuleWithHttpInfo(namespaceKey, flagKey, id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param key
     */
    public deleteSegmentWithHttpInfo(namespaceKey: string, key: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteSegment(namespaceKey, key, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSegmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param key
     */
    public deleteSegment(namespaceKey: string, key: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteSegmentWithHttpInfo(namespaceKey, key, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteVariantWithHttpInfo(namespaceKey: string, flagKey: string, id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteVariant(namespaceKey, flagKey, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteVariantWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteVariant(namespaceKey: string, flagKey: string, id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteVariantWithHttpInfo(namespaceKey, flagKey, id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param key
     * @param [reference]
     */
    public getFlagWithHttpInfo(namespaceKey: string, key: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Flag>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getFlag(namespaceKey, key, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFlagWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param key
     * @param [reference]
     */
    public getFlag(namespaceKey: string, key: string, reference?: string, _options?: ConfigurationOptions): Observable<Flag> {
        return this.getFlagWithHttpInfo(namespaceKey, key, reference, _options).pipe(map((apiResponse: HttpInfo<Flag>) => apiResponse.data));
    }

    /**
     * @param key
     * @param [reference]
     */
    public getNamespaceWithHttpInfo(key: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Namespace>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getNamespace(key, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNamespaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param key
     * @param [reference]
     */
    public getNamespace(key: string, reference?: string, _options?: ConfigurationOptions): Observable<Namespace> {
        return this.getNamespaceWithHttpInfo(key, reference, _options).pipe(map((apiResponse: HttpInfo<Namespace>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param [reference]
     */
    public getRolloutWithHttpInfo(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Rollout>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getRollout(namespaceKey, flagKey, id, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRolloutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param [reference]
     */
    public getRollout(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: ConfigurationOptions): Observable<Rollout> {
        return this.getRolloutWithHttpInfo(namespaceKey, flagKey, id, reference, _options).pipe(map((apiResponse: HttpInfo<Rollout>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param [reference]
     */
    public getRuleWithHttpInfo(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Rule>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getRule(namespaceKey, flagKey, id, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param [reference]
     */
    public getRule(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: ConfigurationOptions): Observable<Rule> {
        return this.getRuleWithHttpInfo(namespaceKey, flagKey, id, reference, _options).pipe(map((apiResponse: HttpInfo<Rule>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param key
     * @param [reference]
     */
    public getSegmentWithHttpInfo(namespaceKey: string, key: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Segment>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getSegment(namespaceKey, key, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSegmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param key
     * @param [reference]
     */
    public getSegment(namespaceKey: string, key: string, reference?: string, _options?: ConfigurationOptions): Observable<Segment> {
        return this.getSegmentWithHttpInfo(namespaceKey, key, reference, _options).pipe(map((apiResponse: HttpInfo<Segment>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listFlagsWithHttpInfo(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<FlagList>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.listFlags(namespaceKey, limit, offset, pageToken, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFlagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listFlags(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<FlagList> {
        return this.listFlagsWithHttpInfo(namespaceKey, limit, offset, pageToken, reference, _options).pipe(map((apiResponse: HttpInfo<FlagList>) => apiResponse.data));
    }

    /**
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listNamespacesWithHttpInfo(limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<NamespaceList>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.listNamespaces(limit, offset, pageToken, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listNamespacesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listNamespaces(limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<NamespaceList> {
        return this.listNamespacesWithHttpInfo(limit, offset, pageToken, reference, _options).pipe(map((apiResponse: HttpInfo<NamespaceList>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param [limit]
     * @param [pageToken]
     * @param [reference]
     */
    public listRolloutsWithHttpInfo(namespaceKey: string, flagKey: string, limit?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<RolloutList>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.listRollouts(namespaceKey, flagKey, limit, pageToken, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRolloutsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param [limit]
     * @param [pageToken]
     * @param [reference]
     */
    public listRollouts(namespaceKey: string, flagKey: string, limit?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<RolloutList> {
        return this.listRolloutsWithHttpInfo(namespaceKey, flagKey, limit, pageToken, reference, _options).pipe(map((apiResponse: HttpInfo<RolloutList>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listRulesWithHttpInfo(namespaceKey: string, flagKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<RuleList>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.listRules(namespaceKey, flagKey, limit, offset, pageToken, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listRules(namespaceKey: string, flagKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<RuleList> {
        return this.listRulesWithHttpInfo(namespaceKey, flagKey, limit, offset, pageToken, reference, _options).pipe(map((apiResponse: HttpInfo<RuleList>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listSegmentsWithHttpInfo(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<SegmentList>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.listSegments(namespaceKey, limit, offset, pageToken, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSegmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listSegments(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<SegmentList> {
        return this.listSegmentsWithHttpInfo(namespaceKey, limit, offset, pageToken, reference, _options).pipe(map((apiResponse: HttpInfo<SegmentList>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param orderRolloutsRequest
     */
    public orderRolloutsWithHttpInfo(namespaceKey: string, flagKey: string, orderRolloutsRequest: OrderRolloutsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.orderRollouts(namespaceKey, flagKey, orderRolloutsRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderRolloutsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param orderRolloutsRequest
     */
    public orderRollouts(namespaceKey: string, flagKey: string, orderRolloutsRequest: OrderRolloutsRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.orderRolloutsWithHttpInfo(namespaceKey, flagKey, orderRolloutsRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param orderRulesRequest
     */
    public orderRulesWithHttpInfo(namespaceKey: string, flagKey: string, orderRulesRequest: OrderRulesRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.orderRules(namespaceKey, flagKey, orderRulesRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param orderRulesRequest
     */
    public orderRules(namespaceKey: string, flagKey: string, orderRulesRequest: OrderRulesRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.orderRulesWithHttpInfo(namespaceKey, flagKey, orderRulesRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param id
     * @param updateConstraintRequest
     */
    public updateConstraintWithHttpInfo(namespaceKey: string, segmentKey: string, id: string, updateConstraintRequest: UpdateConstraintRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Constraint>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateConstraint(namespaceKey, segmentKey, id, updateConstraintRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateConstraintWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param segmentKey
     * @param id
     * @param updateConstraintRequest
     */
    public updateConstraint(namespaceKey: string, segmentKey: string, id: string, updateConstraintRequest: UpdateConstraintRequest, _options?: ConfigurationOptions): Observable<Constraint> {
        return this.updateConstraintWithHttpInfo(namespaceKey, segmentKey, id, updateConstraintRequest, _options).pipe(map((apiResponse: HttpInfo<Constraint>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param id
     * @param updateDistributionRequest
     */
    public updateDistributionWithHttpInfo(namespaceKey: string, flagKey: string, ruleId: string, id: string, updateDistributionRequest: UpdateDistributionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Distribution>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateDistribution(namespaceKey, flagKey, ruleId, id, updateDistributionRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDistributionWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param ruleId
     * @param id
     * @param updateDistributionRequest
     */
    public updateDistribution(namespaceKey: string, flagKey: string, ruleId: string, id: string, updateDistributionRequest: UpdateDistributionRequest, _options?: ConfigurationOptions): Observable<Distribution> {
        return this.updateDistributionWithHttpInfo(namespaceKey, flagKey, ruleId, id, updateDistributionRequest, _options).pipe(map((apiResponse: HttpInfo<Distribution>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param key
     * @param updateFlagRequest
     */
    public updateFlagWithHttpInfo(namespaceKey: string, key: string, updateFlagRequest: UpdateFlagRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Flag>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateFlag(namespaceKey, key, updateFlagRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFlagWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param key
     * @param updateFlagRequest
     */
    public updateFlag(namespaceKey: string, key: string, updateFlagRequest: UpdateFlagRequest, _options?: ConfigurationOptions): Observable<Flag> {
        return this.updateFlagWithHttpInfo(namespaceKey, key, updateFlagRequest, _options).pipe(map((apiResponse: HttpInfo<Flag>) => apiResponse.data));
    }

    /**
     * @param key
     * @param updateNamespaceRequest
     */
    public updateNamespaceWithHttpInfo(key: string, updateNamespaceRequest: UpdateNamespaceRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Namespace>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateNamespace(key, updateNamespaceRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateNamespaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param key
     * @param updateNamespaceRequest
     */
    public updateNamespace(key: string, updateNamespaceRequest: UpdateNamespaceRequest, _options?: ConfigurationOptions): Observable<Namespace> {
        return this.updateNamespaceWithHttpInfo(key, updateNamespaceRequest, _options).pipe(map((apiResponse: HttpInfo<Namespace>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateRolloutRequest
     */
    public updateRolloutWithHttpInfo(namespaceKey: string, flagKey: string, id: string, updateRolloutRequest: UpdateRolloutRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Rollout>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateRollout(namespaceKey, flagKey, id, updateRolloutRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRolloutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateRolloutRequest
     */
    public updateRollout(namespaceKey: string, flagKey: string, id: string, updateRolloutRequest: UpdateRolloutRequest, _options?: ConfigurationOptions): Observable<Rollout> {
        return this.updateRolloutWithHttpInfo(namespaceKey, flagKey, id, updateRolloutRequest, _options).pipe(map((apiResponse: HttpInfo<Rollout>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateRuleRequest
     */
    public updateRuleWithHttpInfo(namespaceKey: string, flagKey: string, id: string, updateRuleRequest: UpdateRuleRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Rule>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateRule(namespaceKey, flagKey, id, updateRuleRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateRuleRequest
     */
    public updateRule(namespaceKey: string, flagKey: string, id: string, updateRuleRequest: UpdateRuleRequest, _options?: ConfigurationOptions): Observable<Rule> {
        return this.updateRuleWithHttpInfo(namespaceKey, flagKey, id, updateRuleRequest, _options).pipe(map((apiResponse: HttpInfo<Rule>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param key
     * @param updateSegmentRequest
     */
    public updateSegmentWithHttpInfo(namespaceKey: string, key: string, updateSegmentRequest: UpdateSegmentRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Segment>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateSegment(namespaceKey, key, updateSegmentRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSegmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param key
     * @param updateSegmentRequest
     */
    public updateSegment(namespaceKey: string, key: string, updateSegmentRequest: UpdateSegmentRequest, _options?: ConfigurationOptions): Observable<Segment> {
        return this.updateSegmentWithHttpInfo(namespaceKey, key, updateSegmentRequest, _options).pipe(map((apiResponse: HttpInfo<Segment>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateVariantRequest
     */
    public updateVariantWithHttpInfo(namespaceKey: string, flagKey: string, id: string, updateVariantRequest: UpdateVariantRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Variant>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateVariant(namespaceKey, flagKey, id, updateVariantRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateVariantWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateVariantRequest
     */
    public updateVariant(namespaceKey: string, flagKey: string, id: string, updateVariantRequest: UpdateVariantRequest, _options?: ConfigurationOptions): Observable<Variant> {
        return this.updateVariantWithHttpInfo(namespaceKey, flagKey, id, updateVariantRequest, _options).pipe(map((apiResponse: HttpInfo<Variant>) => apiResponse.data));
    }

}

import { NamespacesServiceApiRequestFactory, NamespacesServiceApiResponseProcessor} from "../apis/NamespacesServiceApi";
export class ObservableNamespacesServiceApi {
    private requestFactory: NamespacesServiceApiRequestFactory;
    private responseProcessor: NamespacesServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NamespacesServiceApiRequestFactory,
        responseProcessor?: NamespacesServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NamespacesServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NamespacesServiceApiResponseProcessor();
    }

    /**
     * @param createNamespaceRequest
     */
    public createNamespaceWithHttpInfo(createNamespaceRequest: CreateNamespaceRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Namespace>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createNamespace(createNamespaceRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNamespaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createNamespaceRequest
     */
    public createNamespace(createNamespaceRequest: CreateNamespaceRequest, _options?: ConfigurationOptions): Observable<Namespace> {
        return this.createNamespaceWithHttpInfo(createNamespaceRequest, _options).pipe(map((apiResponse: HttpInfo<Namespace>) => apiResponse.data));
    }

    /**
     * @param key
     * @param [force]
     */
    public deleteNamespaceWithHttpInfo(key: string, force?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteNamespace(key, force, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteNamespaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param key
     * @param [force]
     */
    public deleteNamespace(key: string, force?: boolean, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteNamespaceWithHttpInfo(key, force, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param key
     * @param [reference]
     */
    public getNamespaceWithHttpInfo(key: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Namespace>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getNamespace(key, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNamespaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param key
     * @param [reference]
     */
    public getNamespace(key: string, reference?: string, _options?: ConfigurationOptions): Observable<Namespace> {
        return this.getNamespaceWithHttpInfo(key, reference, _options).pipe(map((apiResponse: HttpInfo<Namespace>) => apiResponse.data));
    }

    /**
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listNamespacesWithHttpInfo(limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<NamespaceList>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.listNamespaces(limit, offset, pageToken, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listNamespacesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listNamespaces(limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<NamespaceList> {
        return this.listNamespacesWithHttpInfo(limit, offset, pageToken, reference, _options).pipe(map((apiResponse: HttpInfo<NamespaceList>) => apiResponse.data));
    }

    /**
     * @param key
     * @param updateNamespaceRequest
     */
    public updateNamespaceWithHttpInfo(key: string, updateNamespaceRequest: UpdateNamespaceRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Namespace>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateNamespace(key, updateNamespaceRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateNamespaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param key
     * @param updateNamespaceRequest
     */
    public updateNamespace(key: string, updateNamespaceRequest: UpdateNamespaceRequest, _options?: ConfigurationOptions): Observable<Namespace> {
        return this.updateNamespaceWithHttpInfo(key, updateNamespaceRequest, _options).pipe(map((apiResponse: HttpInfo<Namespace>) => apiResponse.data));
    }

}

import { OFREPServiceApiRequestFactory, OFREPServiceApiResponseProcessor} from "../apis/OFREPServiceApi";
export class ObservableOFREPServiceApi {
    private requestFactory: OFREPServiceApiRequestFactory;
    private responseProcessor: OFREPServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OFREPServiceApiRequestFactory,
        responseProcessor?: OFREPServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OFREPServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OFREPServiceApiResponseProcessor();
    }

    /**
     * OFREP provider configuration
     */
    public ofrepConfigurationWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<GetProviderConfigurationResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.ofrepConfiguration(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.ofrepConfigurationWithHttpInfo(rsp)));
            }));
    }

    /**
     * OFREP provider configuration
     */
    public ofrepConfiguration(_options?: ConfigurationOptions): Observable<GetProviderConfigurationResponse> {
        return this.ofrepConfigurationWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetProviderConfigurationResponse>) => apiResponse.data));
    }

    /**
     * OFREP bulk flag evaluation
     * @param evaluateBulkRequest
     */
    public ofrepEvaluateBulkWithHttpInfo(evaluateBulkRequest: EvaluateBulkRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BulkEvaluationResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.ofrepEvaluateBulk(evaluateBulkRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.ofrepEvaluateBulkWithHttpInfo(rsp)));
            }));
    }

    /**
     * OFREP bulk flag evaluation
     * @param evaluateBulkRequest
     */
    public ofrepEvaluateBulk(evaluateBulkRequest: EvaluateBulkRequest, _options?: ConfigurationOptions): Observable<BulkEvaluationResponse> {
        return this.ofrepEvaluateBulkWithHttpInfo(evaluateBulkRequest, _options).pipe(map((apiResponse: HttpInfo<BulkEvaluationResponse>) => apiResponse.data));
    }

    /**
     * OFREP single flag evaluation
     * @param key
     * @param evaluateFlagRequest
     */
    public ofrepEvaluateFlagWithHttpInfo(key: string, evaluateFlagRequest: EvaluateFlagRequest, _options?: ConfigurationOptions): Observable<HttpInfo<EvaluatedFlag>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.ofrepEvaluateFlag(key, evaluateFlagRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.ofrepEvaluateFlagWithHttpInfo(rsp)));
            }));
    }

    /**
     * OFREP single flag evaluation
     * @param key
     * @param evaluateFlagRequest
     */
    public ofrepEvaluateFlag(key: string, evaluateFlagRequest: EvaluateFlagRequest, _options?: ConfigurationOptions): Observable<EvaluatedFlag> {
        return this.ofrepEvaluateFlagWithHttpInfo(key, evaluateFlagRequest, _options).pipe(map((apiResponse: HttpInfo<EvaluatedFlag>) => apiResponse.data));
    }

}

import { RolloutsServiceApiRequestFactory, RolloutsServiceApiResponseProcessor} from "../apis/RolloutsServiceApi";
export class ObservableRolloutsServiceApi {
    private requestFactory: RolloutsServiceApiRequestFactory;
    private responseProcessor: RolloutsServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RolloutsServiceApiRequestFactory,
        responseProcessor?: RolloutsServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RolloutsServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RolloutsServiceApiResponseProcessor();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createRolloutRequest
     */
    public createRolloutWithHttpInfo(namespaceKey: string, flagKey: string, createRolloutRequest: CreateRolloutRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Rollout>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createRollout(namespaceKey, flagKey, createRolloutRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRolloutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createRolloutRequest
     */
    public createRollout(namespaceKey: string, flagKey: string, createRolloutRequest: CreateRolloutRequest, _options?: ConfigurationOptions): Observable<Rollout> {
        return this.createRolloutWithHttpInfo(namespaceKey, flagKey, createRolloutRequest, _options).pipe(map((apiResponse: HttpInfo<Rollout>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteRolloutWithHttpInfo(namespaceKey: string, flagKey: string, id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteRollout(namespaceKey, flagKey, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRolloutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteRollout(namespaceKey: string, flagKey: string, id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteRolloutWithHttpInfo(namespaceKey, flagKey, id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param [reference]
     */
    public getRolloutWithHttpInfo(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Rollout>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getRollout(namespaceKey, flagKey, id, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRolloutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param [reference]
     */
    public getRollout(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: ConfigurationOptions): Observable<Rollout> {
        return this.getRolloutWithHttpInfo(namespaceKey, flagKey, id, reference, _options).pipe(map((apiResponse: HttpInfo<Rollout>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param [limit]
     * @param [pageToken]
     * @param [reference]
     */
    public listRolloutsWithHttpInfo(namespaceKey: string, flagKey: string, limit?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<RolloutList>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.listRollouts(namespaceKey, flagKey, limit, pageToken, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRolloutsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param [limit]
     * @param [pageToken]
     * @param [reference]
     */
    public listRollouts(namespaceKey: string, flagKey: string, limit?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<RolloutList> {
        return this.listRolloutsWithHttpInfo(namespaceKey, flagKey, limit, pageToken, reference, _options).pipe(map((apiResponse: HttpInfo<RolloutList>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param orderRolloutsRequest
     */
    public orderRolloutsWithHttpInfo(namespaceKey: string, flagKey: string, orderRolloutsRequest: OrderRolloutsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.orderRollouts(namespaceKey, flagKey, orderRolloutsRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderRolloutsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param orderRolloutsRequest
     */
    public orderRollouts(namespaceKey: string, flagKey: string, orderRolloutsRequest: OrderRolloutsRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.orderRolloutsWithHttpInfo(namespaceKey, flagKey, orderRolloutsRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateRolloutRequest
     */
    public updateRolloutWithHttpInfo(namespaceKey: string, flagKey: string, id: string, updateRolloutRequest: UpdateRolloutRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Rollout>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateRollout(namespaceKey, flagKey, id, updateRolloutRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRolloutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateRolloutRequest
     */
    public updateRollout(namespaceKey: string, flagKey: string, id: string, updateRolloutRequest: UpdateRolloutRequest, _options?: ConfigurationOptions): Observable<Rollout> {
        return this.updateRolloutWithHttpInfo(namespaceKey, flagKey, id, updateRolloutRequest, _options).pipe(map((apiResponse: HttpInfo<Rollout>) => apiResponse.data));
    }

}

import { RulesServiceApiRequestFactory, RulesServiceApiResponseProcessor} from "../apis/RulesServiceApi";
export class ObservableRulesServiceApi {
    private requestFactory: RulesServiceApiRequestFactory;
    private responseProcessor: RulesServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RulesServiceApiRequestFactory,
        responseProcessor?: RulesServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RulesServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RulesServiceApiResponseProcessor();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createRuleRequest
     */
    public createRuleWithHttpInfo(namespaceKey: string, flagKey: string, createRuleRequest: CreateRuleRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Rule>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createRule(namespaceKey, flagKey, createRuleRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createRuleRequest
     */
    public createRule(namespaceKey: string, flagKey: string, createRuleRequest: CreateRuleRequest, _options?: ConfigurationOptions): Observable<Rule> {
        return this.createRuleWithHttpInfo(namespaceKey, flagKey, createRuleRequest, _options).pipe(map((apiResponse: HttpInfo<Rule>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteRuleWithHttpInfo(namespaceKey: string, flagKey: string, id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteRule(namespaceKey, flagKey, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteRule(namespaceKey: string, flagKey: string, id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteRuleWithHttpInfo(namespaceKey, flagKey, id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param [reference]
     */
    public getRuleWithHttpInfo(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Rule>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getRule(namespaceKey, flagKey, id, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param [reference]
     */
    public getRule(namespaceKey: string, flagKey: string, id: string, reference?: string, _options?: ConfigurationOptions): Observable<Rule> {
        return this.getRuleWithHttpInfo(namespaceKey, flagKey, id, reference, _options).pipe(map((apiResponse: HttpInfo<Rule>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listRulesWithHttpInfo(namespaceKey: string, flagKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<RuleList>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.listRules(namespaceKey, flagKey, limit, offset, pageToken, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listRules(namespaceKey: string, flagKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<RuleList> {
        return this.listRulesWithHttpInfo(namespaceKey, flagKey, limit, offset, pageToken, reference, _options).pipe(map((apiResponse: HttpInfo<RuleList>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param orderRulesRequest
     */
    public orderRulesWithHttpInfo(namespaceKey: string, flagKey: string, orderRulesRequest: OrderRulesRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.orderRules(namespaceKey, flagKey, orderRulesRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param orderRulesRequest
     */
    public orderRules(namespaceKey: string, flagKey: string, orderRulesRequest: OrderRulesRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.orderRulesWithHttpInfo(namespaceKey, flagKey, orderRulesRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateRuleRequest
     */
    public updateRuleWithHttpInfo(namespaceKey: string, flagKey: string, id: string, updateRuleRequest: UpdateRuleRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Rule>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateRule(namespaceKey, flagKey, id, updateRuleRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateRuleRequest
     */
    public updateRule(namespaceKey: string, flagKey: string, id: string, updateRuleRequest: UpdateRuleRequest, _options?: ConfigurationOptions): Observable<Rule> {
        return this.updateRuleWithHttpInfo(namespaceKey, flagKey, id, updateRuleRequest, _options).pipe(map((apiResponse: HttpInfo<Rule>) => apiResponse.data));
    }

}

import { SegmentsServiceApiRequestFactory, SegmentsServiceApiResponseProcessor} from "../apis/SegmentsServiceApi";
export class ObservableSegmentsServiceApi {
    private requestFactory: SegmentsServiceApiRequestFactory;
    private responseProcessor: SegmentsServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SegmentsServiceApiRequestFactory,
        responseProcessor?: SegmentsServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SegmentsServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SegmentsServiceApiResponseProcessor();
    }

    /**
     * @param namespaceKey
     * @param createSegmentRequest
     */
    public createSegmentWithHttpInfo(namespaceKey: string, createSegmentRequest: CreateSegmentRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Segment>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createSegment(namespaceKey, createSegmentRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSegmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param createSegmentRequest
     */
    public createSegment(namespaceKey: string, createSegmentRequest: CreateSegmentRequest, _options?: ConfigurationOptions): Observable<Segment> {
        return this.createSegmentWithHttpInfo(namespaceKey, createSegmentRequest, _options).pipe(map((apiResponse: HttpInfo<Segment>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param key
     */
    public deleteSegmentWithHttpInfo(namespaceKey: string, key: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteSegment(namespaceKey, key, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSegmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param key
     */
    public deleteSegment(namespaceKey: string, key: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteSegmentWithHttpInfo(namespaceKey, key, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param key
     * @param [reference]
     */
    public getSegmentWithHttpInfo(namespaceKey: string, key: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Segment>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getSegment(namespaceKey, key, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSegmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param key
     * @param [reference]
     */
    public getSegment(namespaceKey: string, key: string, reference?: string, _options?: ConfigurationOptions): Observable<Segment> {
        return this.getSegmentWithHttpInfo(namespaceKey, key, reference, _options).pipe(map((apiResponse: HttpInfo<Segment>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listSegmentsWithHttpInfo(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<HttpInfo<SegmentList>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.listSegments(namespaceKey, limit, offset, pageToken, reference, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSegmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param [limit]
     * @param [offset]
     * @param [pageToken]
     * @param [reference]
     */
    public listSegments(namespaceKey: string, limit?: number, offset?: number, pageToken?: string, reference?: string, _options?: ConfigurationOptions): Observable<SegmentList> {
        return this.listSegmentsWithHttpInfo(namespaceKey, limit, offset, pageToken, reference, _options).pipe(map((apiResponse: HttpInfo<SegmentList>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param key
     * @param updateSegmentRequest
     */
    public updateSegmentWithHttpInfo(namespaceKey: string, key: string, updateSegmentRequest: UpdateSegmentRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Segment>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateSegment(namespaceKey, key, updateSegmentRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSegmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param key
     * @param updateSegmentRequest
     */
    public updateSegment(namespaceKey: string, key: string, updateSegmentRequest: UpdateSegmentRequest, _options?: ConfigurationOptions): Observable<Segment> {
        return this.updateSegmentWithHttpInfo(namespaceKey, key, updateSegmentRequest, _options).pipe(map((apiResponse: HttpInfo<Segment>) => apiResponse.data));
    }

}

import { VariantsServiceApiRequestFactory, VariantsServiceApiResponseProcessor} from "../apis/VariantsServiceApi";
export class ObservableVariantsServiceApi {
    private requestFactory: VariantsServiceApiRequestFactory;
    private responseProcessor: VariantsServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VariantsServiceApiRequestFactory,
        responseProcessor?: VariantsServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VariantsServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VariantsServiceApiResponseProcessor();
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createVariantRequest
     */
    public createVariantWithHttpInfo(namespaceKey: string, flagKey: string, createVariantRequest: CreateVariantRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Variant>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.createVariant(namespaceKey, flagKey, createVariantRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVariantWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param createVariantRequest
     */
    public createVariant(namespaceKey: string, flagKey: string, createVariantRequest: CreateVariantRequest, _options?: ConfigurationOptions): Observable<Variant> {
        return this.createVariantWithHttpInfo(namespaceKey, flagKey, createVariantRequest, _options).pipe(map((apiResponse: HttpInfo<Variant>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteVariantWithHttpInfo(namespaceKey: string, flagKey: string, id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.deleteVariant(namespaceKey, flagKey, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteVariantWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     */
    public deleteVariant(namespaceKey: string, flagKey: string, id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteVariantWithHttpInfo(namespaceKey, flagKey, id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateVariantRequest
     */
    public updateVariantWithHttpInfo(namespaceKey: string, flagKey: string, id: string, updateVariantRequest: UpdateVariantRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Variant>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateVariant(namespaceKey, flagKey, id, updateVariantRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateVariantWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param namespaceKey
     * @param flagKey
     * @param id
     * @param updateVariantRequest
     */
    public updateVariant(namespaceKey: string, flagKey: string, id: string, updateVariantRequest: UpdateVariantRequest, _options?: ConfigurationOptions): Observable<Variant> {
        return this.updateVariantWithHttpInfo(namespaceKey, flagKey, id, updateVariantRequest, _options).pipe(map((apiResponse: HttpInfo<Variant>) => apiResponse.data));
    }

}
