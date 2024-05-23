"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateProject } from "@/lib/server";
import { Project } from "@prisma/client";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useToast } from "./ui/use-toast";

const SettingsForm = ({ project }: { project: Project }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  return (
    <>
      <form
        className="lg:w-2/3 w-3/4 mx-auto px-4 py-6 overflow-y-auto flex flex-col gap-4"
        action={async (data: FormData) => {
          setLoading(() => true);
          await updateProject(data).then(() => {
            setLoading(() => false);
          });
        }}
      >
        <input className="hidden" name="id" value={project.id} />
        <h1 className="header">Settings</h1>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={project.name}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Description</Label>
          <Textarea
            name="description"
            defaultValue={project.description}
            className="resize-none"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="repo">GitHub repository</Label>
          <Input
            type="text"
            name="repo"
            placeholder="https://github.com/john/apples.git"
            defaultValue={project.repo ?? ""}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="website">Website</Label>
          <Input
            type="text"
            name="website"
            placeholder="https://mywebsite.com"
            defaultValue={project.website ?? ""}
          />
        </div>
        {!loading ? (
          <Button
            className="w-[7%]"
            onClick={() => {
              toast({
                title: "Settings saved",
                description: "Your settings have been updated",
              });
            }}
          >
            Save
          </Button>
        ) : (
          <Button disabled className="w-[7%]">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        )}
      </form>
    </>
  );
};

export default SettingsForm;
