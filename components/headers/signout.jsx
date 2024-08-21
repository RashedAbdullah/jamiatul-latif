"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

const SignoutComp = () => {
  return (
    <Button variant="outline" className="text-red-500"
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/signin" })}
    >
      লগ আউট করুন
    </Button>
  );
};

export default SignoutComp;
