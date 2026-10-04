import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export interface TweaksState {
  motion: boolean;
  scale: "s" | "m" | "l";
  photo: "color" | "duotone";
}

interface TweaksContextValue {
  state: TweaksState;
  update: (patch: Partial<TweaksState>) => void;
}

const DEFAULTS: TweaksState = { motion: true, scale: "m", photo: "color" };
const STORAGE_KEY = "kh-tweaks";

const TweaksContext = createContext<TweaksContextValue | null>(null);

function load(): TweaksState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    /* private mode — fall through to defaults */
  }
  return DEFAULTS;
}

export function TweaksProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<TweaksState>(load);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("motion-off", !state.motion);
    root.dataset.scale = state.scale;
    root.dataset.photo = state.photo;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* private mode */
    }
  }, [state]);

  const update = (patch: Partial<TweaksState>) =>
    setState((prev) => ({ ...prev, ...patch }));

  return (
    <TweaksContext.Provider value={{ state, update }}>
      {children}
    </TweaksContext.Provider>
  );
}

export function useTweaks() {
  const ctx = useContext(TweaksContext);
  if (!ctx) throw new Error("useTweaks must be used within TweaksProvider");
  return ctx;
}
