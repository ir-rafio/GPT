import Session from "supertokens-auth-react/recipe/session";
import ThirdParty, { Google } from "supertokens-auth-react/recipe/thirdparty";

import supertokensCSS from "@/css/supertokens.css?inline";
import { SuperTokensConfig } from "supertokens-auth-react/lib/build/types";
import { Env } from "./env";

export const supertokensConfig: SuperTokensConfig = {
  appInfo: {
    appName: Env.supertokens.appName,
    apiDomain: Env.backendUrl + "/api",
    websiteDomain: Env.domain,
    apiBasePath: "/api/auth",
    websiteBasePath: "/auth"
  },
  recipeList: [
    ThirdParty.init({
      style: supertokensCSS,
      signInAndUpFeature: {
        providers: [Google.init()]
      }
    }),
    Session.init()
  ]
};
