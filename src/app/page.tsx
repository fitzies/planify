import { ClientAuth } from "@/components/client";
import Footer from "@/components/footer";
import PricingCard from "@/components/pricing-card";
import Screen from "@/components/screen";
import SplitHomeView from "@/components/split-home-view";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const Page = async ({ params }: { params: { slug: string } }) => {
  const user = await getKindeServerSession().getUser();

  return (
    <>
      <div className="w-screen flex flex-col items-center py-12 gap-4">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] mt-16 h-[250vh] w-[110vw]"
          )}
        />
        <Badge
          className="scale-110 inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
          variant={"secondary"}
        >
          <span>✨ Introducing Planify</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </Badge>
        <h1 className="font-bold lg:text-7xl text-5xl text-center py-2">
          Never leave any of your <br /> projects unfinished again!
        </h1>
        <p className="lg:w-[40%] w-3/4 lg:text-md text-sm text-center text-zinc-300">
          Planify helps you stay on top of your side projects by tracking,
          maintaining, and streamlining every detail, ensuring you stay
          organized and productive till the very to end.
        </p>
        <div className="flex gap-2 py-2 items-start">
          {user ? (
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          ) : (
            <ClientAuth text="Get started" />
          )}
          <Button variant={"secondary"}>
            Join our Discord <ArrowRight className="scale-75" />
          </Button>
        </div>
        <Screen />
        <SplitHomeView />
        <div className="py-16 w-2/3 flex flex-col items-center gap-4">
          <h2 className="lg:text-6xl font-bold">Pricing</h2>
          <p className="lg:w-2/3 lg:text-md text-sm text-center text-zinc-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam
            cupiditate excepturi, quam labore facere?
          </p>
          <div className="flex w-full justify-center gap-8 py-4">
            <PricingCard
              title="Free"
              price={0}
              text="Essential features you need to ghet started"
              features={[
                "Unlimited projects",
                "Integrated note taking",
                "Share with anyone",
              ]}
            >
              <ClientAuth text="Sign in to start" className="mt-8" />
            </PricingCard>
            <PricingCard
              title="Pro"
              price={5}
              text="Perfect for owners of small & medium businessess"
              features={[
                "Everything in the free plan",
                "Task assignment",
                "Group calender",
              ]}
            >
              <Button className="mt-8">Upgrade now</Button>
            </PricingCard>
            <PricingCard
              title="Enterprise"
              price="Custom"
              text="Perfect for owners of small & medium businessess"
              features={[
                "Everything in the free plan",
                "Task assignment",
                "Group calender",
              ]}
            >
              <Button className="mt-8">Upgrade now</Button>
            </PricingCard>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;

{
  /* {user ? <Link href={"/dashboard"}>Dashboard</Link> : <ClientAuth />} */
}
