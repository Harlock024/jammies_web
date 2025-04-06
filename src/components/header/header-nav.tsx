import { Home, Search, Plus, Bell, CirclePlus, Library } from "lucide-react";

export function HeaderNav() {
  return (
    <nav className="flex w-full mx-auto justify-center items-center ">
      <ul className="flex flex-row gap-10">
        <li>
          <a href="/">
            <Home />
          </a>
        </li>
        <li>
          <a href="/search">
            <Search />
          </a>
        </li>
        <li>
          <a href="/upload">
            <CirclePlus />
          </a>
        </li>
        <li>
          <a href="/library">
            <Library />
          </a>
        </li>
        <li>
          <a href="/notification">
            <Bell />
          </a>
        </li>
      </ul>
    </nav>
  );
}
