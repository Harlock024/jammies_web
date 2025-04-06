import { User } from "@/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ProfileActions } from "./profile-actions";

function ProfileAvatar({ user }: { user: User }) {
  return (
    <Avatar className="w-auto h-auto">
      <AvatarImage
        src={user.avatar}
        alt={user.name}
        className="w-32 h-32 rounded-full bg-gray-300"
      />
      <AvatarFallback className="bg-gray-300">
        {user.name[0].toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}

function ProfileFollowers({ user }: { user: User }) {
  return (
    <div className="flex justify-center space-x-4">
      <div>
        <span className="font-medium">{user.following}</span>{" "}
        <span className="text-muted-foreground">Following</span>
      </div>
      <div>
        <span className="font-medium">{user.followers}</span>{" "}
        <span className="text-muted-foreground">Followers</span>
      </div>
    </div>
  );
}

function ProfileName({ user }: { user: User }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold">Alex Johnson</h1>
      <p className="text-sm text-muted-foreground mb-2">@alexj</p>
    </div>
  );
}
function ProfileLinks({ user }: { user: User }) {
  return (
    <div className="flex justify-center m-5  space-x-10">
      {user.links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={link.url}
            alt={link.label}
            className=" rounded-lg px-2 bg-gray-300"
          />
        </a>
      ))}
    </div>
  );
}
function ProfileBio({ user }: { user: User }) {
  return <div className="text-sm text-center mb-4 max-w-md">{user.bio}</div>;
}
export function ProfileBanner() {
  const user: User = {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    avatar: "https://avatars.githubusercontent.com/u/144747775?s=96&v=4",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    following: 10,
    followers: 20,
    links: [
      {
        id: 1,
        url: "https://github.com/johndoe",
        label: "GitHub",
        user_id: 1,
      },
      {
        id: 2,
        url: "https://linkedin.com/in/johndoe",
        label: "LinkedIn",
        user_id: 1,
      },
    ],
  };
  return (
    <div className="flex flex-col m-10 items-center">
      <ProfileAvatar user={user} />
      <div className="flex flex-col">
        <ProfileName user={user} />
        <ProfileBio user={user} />
        <ProfileLinks user={user} />
        <ProfileFollowers user={user} />
      </div>
      <div>
        <ProfileActions user={user} />
      </div>
    </div>
  );
}
