import { Card } from "./ui/card";
import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const SplitHomeView = () => {
  return (
    <div className="my-16 flex w-2/3 px-3">
      <div className="lg:w-1/2 w-full flex flex-col gap-6 pt-10">
        <h2 className="lg:text-3xl text-2xl font-bold">
          An endless yet unfinished side project directory?
        </h2>
        <p className="text-zinc-400">
          Transform your incomplete side project directory into a streamlined,
          completed portfolio with Planify.
        </p>
        <div className="py-2 lg:px-4 flex flex-col gap-8">
          <p className="text-zinc-400">
            <span className="font-semibold text-md text-white">
              Share projects and collaborate with team members.
            </span>{" "}
            Effortlessly collaborate and share projects with team members,
            fostering seamless teamwork and boosting productivity with
            Planify&apos;s intuitive features.
          </p>
          <p className="text-zinc-400">
            <span className="font-semibold text-md text-white">
              Streamline all side projects in one intuitive dashboard.
            </span>{" "}
            Manage all your side projects effortlessly with one intuitive
            dashboard, streamlining your workflow and keeping everything
            organized in one place.
          </p>
          <p className="text-zinc-400">
            <span className="font-semibold text-md text-white">
              Stay motivated with visible progress and organized tasks.
            </span>{" "}
            Keep your motivation high with visible progress and well-organized
            tasks, ensuring every step towards your goal is clear and
            manageable.
          </p>
        </div>
      </div>
      <Card className="w-[43%] aspect-square mx-auto hidden lg:block">
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </Card>
    </div>
  );
};

export default SplitHomeView;
