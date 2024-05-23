"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { createProject } from "@/lib/server";
import { useState } from "react";
import { toast } from "sonner";
import { Textarea } from "./ui/textarea";

const NewPopup = ({ userId }: { userId: string }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={
          buttonVariants({ variant: "default" }) +
          "aspect-square text-lg font-medium"
        }
        onClick={() => setOpen(() => true)}
      >
        +
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new project</DialogTitle>
          <DialogDescription>
            Begin your project here, click below upon completion to proceed.
          </DialogDescription>
        </DialogHeader>
        <form
          action={async (data) => {
            let res = await createProject(data);
            if (res) {
              setOpen(() => false);
              toast("Your new project has been created.");
            }
          }}
        >
          <input className="hidden" name="userId" value={userId} />
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                name="name"
                minLength={3}
                maxLength={12}
                placeholder="AI Content Generation"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                name="description"
                minLength={10}
                maxLength={92}
                placeholder="A community-driven cryptocurrency for pet owners"
                className="col-span-3 resize-none"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create project</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewPopup;
