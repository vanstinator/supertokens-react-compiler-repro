import AuthHttpRequest from "./fetch";

export default function RecipeImplementation() {
  return {
      addFetchInterceptorsAndReturnModifiedFetch: function() {
        return async function(params: any) {
           return AuthHttpRequest.doRequest(params);
        }
    }
  }
}