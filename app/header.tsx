import { SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Authenticated, Unauthenticated } from "convex/react";
import { HeaderActions } from "./header-actions";

export function Header() {
  return (
    <div className="bg-purple-900 py-4 px-4">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2  text-2xl">
          <img src="/Knowlex-logo.svg" className="rounded" />
          Knowlex
        </div>

        <div className="flex gap-4 items-center">
          <ModeToggle />
          <HeaderActions />
        </div>
      </div>
    </div>
  );
}
