import { Music4, Volume2, MonitorSpeaker } from "lucide-react";
import { Button } from "../ui/button";

export function PlayerActions() {
  return (
    <div className="flex items-center justify-between">
      <Button>
        <Music4 />
      </Button>
      <Button>
        <Volume2 />
      </Button>
      <Button>
        <MonitorSpeaker />
      </Button>
    </div>
  );
}
