import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

export default function Block({
  header,
  title,
  subtitle,
  subtext,
  description,
  children,
}: {
  header?: string;
  title?: string;
  subtitle?: string;
  subtext?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>{header}</CardDescription>
        <CardTitle className="text-4xl">{title}</CardTitle>
        <CardTitle>{subtitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">{subtext}</div>
        <div className="max-w-md text-balance leading-relaxed text-sm">
          {description}
        </div>
      </CardContent>
      <CardFooter>{children}</CardFooter>
    </Card>
  );
}
