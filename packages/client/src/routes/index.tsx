import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
import { ThirdPartyPreBuiltUI } from "supertokens-auth-react/recipe/thirdparty/prebuiltui";

import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { PrivateRoute } from "./privateRoute";
import UserPage from "@/pages/UserPage";

const Home = React.lazy(() => import("@/pages/home"));
const Test = React.lazy(() => import("@/pages/test"));
const Users = React.lazy(() => import("@/pages/UserManager"));

export const RouteComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [
          ThirdPartyPreBuiltUI
        ])}

        {/* Public Routes */}
        <Route path="/test" element={<Test />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserPage />} />
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
