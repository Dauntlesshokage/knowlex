"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";

export function HeaderActions() {
  return (
    <>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>
      <AuthLoading>Loading...</AuthLoading>
    </>
  );
}
