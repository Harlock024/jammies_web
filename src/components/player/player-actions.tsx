import { Music4, Volume2, MonitorSpeaker } from "lucide-react";
import { Button } from "../ui/button";

export function PlayerActions() {
  return (
    <div className="flex gap-4 items-center justify-between">
      <button>
        <Music4 className=" size-6" />
      </button>
      <button>
        <Volume2 className="size-6" />
      </button>
      <button>
        <MonitorSpeaker className="size-6" />
      </button>
    </div>
  );
}
