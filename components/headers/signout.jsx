"use client";

import { signOut } from "next-auth/react";

const SignoutComp = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/signin" })}
    >
      Sign out
    </button>
  );
};

export default SignoutComp;
