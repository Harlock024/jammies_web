import { User } from "@/types/user";
import { useEffect, useState } from "react";

export function ProfileActions({ user }: { user: User }) {
  const [is_owner, setIsOwner] = useState(false);
  const [is_editing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [is_following, setIsFollowing] = useState(false);
  useEffect(() => {
    setIsOwner(user.id === currentUser?.id);
  }, [user, currentUser]);
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        {is_owner && (
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        )}
        {is_editing && (
          <div>
            <input type="text" value={user.name} />
            <button onClick={() => setIsEditing(false)}>Save</button>
          </div>
        )}
      </div>
    </div>
  );
}
