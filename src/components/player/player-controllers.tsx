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
        <button aria-label="Previous Track">
          <ChevronFirst />
        </button>
        <button aria-label="Play/Pause" onClick={togglePlayPause}>
          {isPaused ? <Play /> : <Pause />}
        </button>
        <button aria-label="Next Track">
          <ChevronLast />
        </button>
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
