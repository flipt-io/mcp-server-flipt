import { RequestContext } from "../http/http";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies http authentication to the request context.
 */
export class BearerAuthAuthentication implements SecurityAuthentication {
    /**
     * Configures the http authentication with the required details.
     *
     * @param tokenProvider service that can provide the up-to-date token when needed
     */
    public constructor(private tokenProvider: TokenProvider) {}

    public getName(): string {
        return "bearerAuth";
    }

    public async applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Bearer " + await this.tokenProvider.getToken());
    }
}

/**
 * Applies http authentication to the request context.
 */
export class JwtAuthAuthentication implements SecurityAuthentication {

    public getName(): string {
        return "jwtAuth";
    }

    public applySecurityAuthentication(context: RequestContext) {
    }
}


export type AuthMethods = {
    "default"?: SecurityAuthentication,
    "bearerAuth"?: SecurityAuthentication,
    "jwtAuth"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };
export type HttpSignatureConfiguration = unknown; // TODO: Implement

export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication,
    "bearerAuth"?: HttpBearerConfiguration,
    "jwtAuth"?: SecurityAuthentication
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"]

    if (config["bearerAuth"]) {
        authMethods["bearerAuth"] = new BearerAuthAuthentication(
            config["bearerAuth"]["tokenProvider"]
        );
    }

    if (config["jwtAuth"]) {
        authMethods["jwtAuth"] = new JwtAuthAuthentication(
        );
    }

    return authMethods;
}