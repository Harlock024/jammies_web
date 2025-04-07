import { useAuthStore } from "@/stores/useAuthStore";
import { User } from "lucide-react";
import { Button } from "../ui/button";

export function HeaderUser() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="flex justify-end w-full  ">
      {user ? (
        <a href="/profile">
          <User />
        </a>
      ) : (
        <div className="flex gap-2">
          <Button onClick={() => (window.location.href = "/auth/sign-up")}>
            Sign up
          </Button>
          <Button onClick={() => (window.location.href = "/auth/sign-in")}>
            Sign in
          </Button>
        </div>
      )}
    </div>
  );
}
