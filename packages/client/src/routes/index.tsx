import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
import { ThirdPartyPreBuiltUI } from "supertokens-auth-react/recipe/thirdparty/prebuiltui";

import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { PrivateRoute } from "./privateRoute";

const Home = React.lazy(() => import("@/pages/home"));
const Test = React.lazy(() => import("@/pages/test"));

export const RouteComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [
          ThirdPartyPreBuiltUI
        ])}

        {/* Public Routes */}
        <Route path="/test" element={<Test />} />
        {/* Public Routes */}

        <Route element={<PrivateRoute />}>
          {/* Private Routes */}
          <Route path="/" element={<Home />} />
          {/* Private Routes */}
        </Route>
      </Routes>
    </Suspense>
  );
};
