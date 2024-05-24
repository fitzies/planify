import Image from "next/image";
import { BorderBeam } from "./ui/border-beam";

export default function Screen() {
  return (
    <div className="w-2/3 bg-zinc-800 relative rounded-xl my-2">
      <img
        src={"https://i.ibb.co/rdW5HD2/Screenshot-2024-05-25-015731.png"}
        alt=""
        className="w-full rounded-xl"
      />
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
