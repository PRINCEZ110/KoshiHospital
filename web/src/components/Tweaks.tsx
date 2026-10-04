import { useState } from "react";
import { useTweaks } from "@/lib/tweaks";

const SCALE_ORDER: ("s" | "m" | "l")[] = ["s", "m", "l"];
const SCALE_LABEL = { s: "Small", m: "Medium", l: "Large" } as const;

export function Tweaks() {
  const { state, update } = useTweaks();
  const [open, setOpen] = useState(false);

  return (
    <div className={`tweaks${open ? " is-open" : ""}`}>
      <button
        className="tweaks__toggle"
        aria-expanded={open}
        aria-label="Tweaks panel"
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 8h10M18 8h2M4 16h2M10 16h10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="16" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="8" cy="16" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </button>

      <div className="tweaks__panel" role="group" aria-label="Tweaks">
        <h2>Tweaks</h2>
        <button
          className="tweaks__opt"
          aria-pressed={state.motion}
          onClick={() => update({ motion: !state.motion })}
        >
          <span>Motion</span>
          <i>{state.motion ? "On" : "Off"}</i>
        </button>
        <button
          className="tweaks__opt"
          aria-pressed={state.scale !== "m"}
          onClick={() =>
            update({
              scale:
                SCALE_ORDER[(SCALE_ORDER.indexOf(state.scale) + 1) % 3],
            })
          }
        >
          <span>Type scale</span>
          <i>{SCALE_LABEL[state.scale]}</i>
        </button>
        <button
          className="tweaks__opt"
          aria-pressed={state.photo === "duotone"}
          onClick={() =>
            update({ photo: state.photo === "color" ? "duotone" : "color" })
          }
        >
          <span>Photos</span>
          <i>{state.photo === "color" ? "Color" : "Duotone"}</i>
        </button>
      </div>
    </div>
  );
}
