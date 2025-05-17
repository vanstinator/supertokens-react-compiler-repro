import RecipeImplementation from "./interceptor";

declare let global: any;

/**
 * @class AuthHttpRequest
 * @description wrapper for common http methods.
 */
export default class AuthHttpRequest {
    static refreshTokenUrl: string;
    static signOutUrl: string;
    static initCalled = false;
    static rid: string;
    static env: any;

    static init(options: any) {
        AuthHttpRequest.env = global;

        if (AuthHttpRequest.env.__supertokensOriginalFetch === undefined) {
            AuthHttpRequest.env.__supertokensOriginalFetch = AuthHttpRequest.env.fetch.bind(AuthHttpRequest.env);
            AuthHttpRequest.env.fetch = RecipeImplementation().addFetchInterceptorsAndReturnModifiedFetch();
        }
        AuthHttpRequest.initCalled = true;
    }

    static doRequest = async (
        param: any
    ): Promise<Response> => {
        return new Promise((resolve, reject) => {
            resolve(new Response("Hello, world!"));
        });
    };
}
