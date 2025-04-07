import { useAuthStore } from "@/stores/useAuthStore";
import { Droplet, LogOutIcon, User } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function HeaderUser() {
  const user = useAuthStore((state) => state.user);
  const LogOut = useAuthStore((state) => state.logout);
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      LogOut();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-end w-full">
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="w-8 h-8">
              <a href="/profile">
                {user.avatar ? (
                  <AvatarImage className="w-full h-full" src={user.avatar} />
                ) : (
                  <AvatarFallback className="w-8 h-8 text-black">
                    {user.username.charAt(0).toUpperCase()}
                  </AvatarFallback>
                )}
              </a>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <a href="/profile">Profile</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex" onClick={handleLogout}>
                Logout
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
