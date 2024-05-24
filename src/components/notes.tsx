"use client";

import { clearCache, updateNotes } from "@/lib/server";
import { Project } from "@prisma/client";
import { Textarea } from "./ui/textarea";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { formatText } from "@/components/format-text";

const Notes = ({ project }: { project: Project }) => {
  const [notes, setNotes] = useState(project.notes ?? "");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [editMode, setEditMode] = useState<boolean>(false);

  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(() => {
      if (submitButtonRef.current && notes.length > 0) {
        submitButtonRef.current.click();
        console.log("Notes saved");
        setLoading(() => false);
        clearCache(`/project/${project.id}/notes`);
      }
    }, 1000);

    setTimeoutId(id);
    setLoading(() => true);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [notes]);

  return (
    <>
      <Card className="flex items-center justify-between px-4 w-full !bg-transparent !border-transparent py-1">
        <div className="flex items-center space-x-2">
          <Switch
            id="edit-mode"
            checked={editMode}
            onCheckedChange={(res) => {
              if (loading && editMode) {
                return;
              }
              setEditMode(() => res);
            }}
          />
          <Label htmlFor="edit-mode">Edit mode</Label>
        </div>
        {!editMode ? (
          <Button variant={"secondary"}>Generate tasks</Button>
        ) : (
          <Button variant={"secondary"} disabled>
            Generate tasks
          </Button>
        )}
      </Card>
      <form action={updateNotes} className="h-full relative">
        <input className="hidden" name="id" value={project!.id} />
        {editMode ? (
          <Textarea
            className="h-5/6 resize-none !bg-transparent !border-transparent"
            placeholder="Begin your notes here"
            autoFocus
            name="notes"
            value={notes}
            onChange={(e) => setNotes(() => e.target.value)}
          />
        ) : (
          <div className="text-area-non-edit-mode border border-transparent">
            {formatText(notes)}
          </div>
        )}
        <button type="submit" className="hidden" ref={submitButtonRef}></button>
        {loading ? (
          <Button variant={"ghost"}>
            <Loader2 className="animate-spin" />
          </Button>
        ) : null}
      </form>
    </>
  );
};

export default Notes;
