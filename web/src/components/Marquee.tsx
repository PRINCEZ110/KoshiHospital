import { marqueeItems } from "@/lib/data";

export function Marquee() {
  const run = (keyPrefix: string) =>
    marqueeItems.flatMap((item) => [
      <span key={`${keyPrefix}-${item}`}>{item}</span>,
      <b key={`${keyPrefix}-${item}-sep`}>+</b>,
    ]);

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {run("a")}
        {run("b")}
      </div>
    </div>
  );
}
