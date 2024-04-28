import React, { Suspense } from "react";
import * as reactRouterDom from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ThirdPartyPreBuiltUI } from "supertokens-auth-react/recipe/thirdparty/prebuiltui";

import Me from "@/pages/Me";
import UserPage from "@/pages/UserPage";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { PrivateRoute } from "./privateRoute";

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

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="/users/me" element={<Me />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
