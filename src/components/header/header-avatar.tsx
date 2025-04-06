import { User } from "lucide-react";

export function HeaderAvatar() {
  return (
    <div className="flex justify-end w-full  ">
      <a href="/profile">
        <User />
      </a>
    </div>
  );
}
