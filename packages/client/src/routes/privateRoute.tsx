import { Outlet } from "react-router-dom";
import { SessionAuth } from "supertokens-auth-react/recipe/session";

export const PrivateRoute = () => {
  return (
    <SessionAuth>
      <Outlet />
    </SessionAuth>
  );
};
