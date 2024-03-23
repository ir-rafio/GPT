import { Link, useLocation } from "react-router-dom";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { signOut } from "supertokens-web-js/recipe/session";
import { ThemeToggle } from "./theme-toggle";
import { Button, buttonVariants } from "./ui/button";

export const NavBar = () => {
  const session = useSessionContext();
  const isSignedIn = !session.loading && session.doesSessionExist;

  return (
    <div className="flex h-16 w-full items-center gap-4 bg-accent p-4">
      <Link to="/">Goru Party T-shirt</Link>
      <div className="flex-center ml-auto gap-4">
        <ThemeToggle />
        <AuthButton isSignedIn={isSignedIn} />
      </div>
    </div>
  );
};
const AuthButton = ({ isSignedIn }: { isSignedIn: boolean }) => {
  const location = useLocation();
  if (location.pathname === "/auth") return null;

  if (isSignedIn) {
    return (
      <Button
        onClick={async () => {
          await signOut();
        }}
      >
        Logout
      </Button>
    );
  }

  return (
    <Link to="/auth" className={buttonVariants()}>
      Login
    </Link>
  );
};
