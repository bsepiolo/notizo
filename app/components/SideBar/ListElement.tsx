"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/types/supabase";
import { useState } from "react";

type Note = Database["public"]["Tables"]["notes"]["Row"];
type Group = Database["public"]["Tables"]["groups"]["Row"];
import { toast } from "react-hot-toast";

function Icon({
  className,
  iconClass,
}: {
  className?: string;
  iconClass: string;
}) {
  return (
    <div
      className={`${className} text-[22px] w-6 h-6 items-center justify-center`}
    >
      <i className={iconClass}></i>
    </div>
  );
}
function ListNested({ notes }: { notes: Partial<Note>[] }) {
  return (
    <div className="flex items-stretch">
      <div className="mr-3 w-6 relative before:block before:absolute before:w-2px before:h-full before:left-0 before:right-0 before:m-auto before:bg-gray-100"></div>
      <ul>
        {notes.map((note) => {
          return <li>{note.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default function ListElement({ group }: { group: Group }) {
  const [notes, setNotes] = useState<Partial<Note>[] | null>(null);
  const [itemState, setItemState] = useState<"active" | "inactive">("active");
  const fetchNotes = async (groupId: number) => {
    const supabase = createClientComponentClient<Database>();
    const { data, error } = await supabase
      .from("notes")
      .select("group_id, name, id")
      .eq("group_id", groupId);

    if (error) {
      toast.error("Data fetching error");
      return;
    }
    setNotes(data);
  };

  const onClickHandler = async (groupId: number) => {
    setItemState("active");
    if (notes?.length) return;
    await fetchNotes(groupId);
  };
  const stateClasses = {
    active: "text-black",
    inactive: "text-secondary",
  };
  return (
    <li
      key={group.id}
      className="flex flex-col"
      onClick={() => onClickHandler(group.id)}
    >
      <div
        className={`${stateClasses[itemState]} flex space-x-3 cursor-pointer py-1 px-1.5 rounded-2sm group hover:bg-gray-200 hover:text-black`}
      >
        <Icon iconClass="eva eva-folder-outline" />
        <div className="flex-grow">{group.name}</div>
        <Icon
          className="group-hover:flex hidden"
          iconClass="eva eva-plus-outline"
        />
      </div>
      {!!notes?.length && itemState === "active" && (
        <ListNested notes={notes} />
      )}
    </li>
  );
}
