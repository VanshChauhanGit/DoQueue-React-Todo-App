import React from "react";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden bg-background isolate">
      <div className="absolute inset-0 -z-10 h-full w-full animate-aurora [background-image:radial-gradient(125%_125%_at_50%_10%,theme(colors.white)_40%,theme(colors.indigo.100)_100%)] dark:[background-image:radial-gradient(125%_125%_at_50%_10%,theme(colors.slate.950)_40%,theme(colors.indigo.900)_100%)]"></div>
      <div>
        <SignIn routing="virtual" afterSignInUrl={"/dashboard"} />
      </div>
    </div>
  );
};

export default Login;
