import { CircleCheck } from "lucide-react";
import { Card } from "./ui/card";
import { ReactNode } from "react";

const PricingCard = ({
  title,
  price,
  text,
  features,
  children,
}: {
  title: string;
  price: number | "Custom";
  text: string;
  features: string[];
  children: ReactNode;
}) => {
  return (
    <Card className="w-[28%] flex flex-col py-6 px-6 gap-4">
      <h4>{title}</h4>
      <h3>
        {price === "Custom" ? (
          <span className="text-4xl font-bold">Custom</span>
        ) : (
          <div className="flex items-end">
            <span className="text-4xl font-bold">${price}</span>{" "}
            <p className="pb-1 mx-1">/ month</p>
          </div>
        )}
      </h3>
      <p className="text-zinc-400">{text}</p>
      <div className="flex flex-col gap-2">
        {features.map((feature) => (
          <div className="flex gap-2 text-sm items-center" key={feature}>
            <CircleCheck className="text-green-400 scale-90" />
            <p className="text-zinc-400">{feature}</p>
          </div>
        ))}
      </div>
      {children}
      {/* <Button>Get started</Button> */}
    </Card>
  );
};

export default PricingCard;
