import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import MainLayout from "./MainLayout";

const ProtectedRouteLayout = () => {
  return (
    <>
      <SignedIn>
        <MainLayout />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn path="/sign-in" />
      </SignedOut>
    </>
  );
};

export default ProtectedRouteLayout;
