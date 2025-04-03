import { Button } from "../../components/ui/button";
import { Slider } from "../ui/slider";
import { Play, Pause, ChevronLast, ChevronFirst } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function PlayerControllers() {
  const [isPaused, setIsPaused] = useState(false);

  function togglePlayPause() {
    setIsPaused(!isPaused);
  }

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex justify-center space-x-3">
        <Button size="icon" variant="ghost" aria-label="Previous Track">
          <ChevronFirst />
        </Button>
        <Button
          size="icon"
          variant="default"
          aria-label="Play/Pause"
          onClick={togglePlayPause}
        >
          {isPaused ? <Play /> : <Pause />}
        </Button>
        <Button size="icon" variant="ghost" aria-label="Next Track">
          <ChevronLast />
        </Button>
      </div>

      <div className="w-[60%]  mt-3 px-4">
        <Slider
          defaultValue={[33]}
          max={100}
          step={1}
          className={cn("w-full", "")}
        />
      </div>
    </div>
  );
}
