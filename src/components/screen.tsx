import { BorderBeam } from "./ui/border-beam";

export default function Screen() {
  return (
    <div className="w-2/3 aspect-video bg-zinc-800 relative rounded-xl my-2">
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
