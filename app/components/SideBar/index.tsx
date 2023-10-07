import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { getLocale, Locales } from "@/app/[lang]/locales";
import TextBox from "@/app/components/ui/TextBox";
import Button from "@/app/components/ui/Button";
import ListElement from "@/app/components/SideBar/ListElement";
const fetchGroups = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("groups").select("*");
  return data;
};

async function AddGroupForm() {
  return (
    <form className="flex">
      <TextBox
        id="email"
        name="email"
        type="email"
        placeholder="Nazwa kategorii"
      />
      <Button type="submit" icon className="ml-2 flex-shrink-0" size="sm">
        <i className="eva eva-plus-outline "></i>
      </Button>
    </form>
  );
}

async function AddFolderButton() {
  return (
    <button className="group flex w-full items-center space-x-3 py-1 px-1.5 hover:bg-gray-200">
      <div className="text-[22px] w-6 h-6 flex items-center justify-center text-gray-100 group-hover:text-black">
        <i className="eva eva-folder-add-outline"></i>
      </div>
      <span className="text-secondary group-hover:text-black">
        Add new group
      </span>
    </button>
  );
}
async function GroupList() {
  const groups = await fetchGroups();

  return (
    <ul className="space-y-1">
      {groups?.map((group) => {
        return (
          <ListElement group={group} />
          // <li key={group.id} className="flex flex-col">
          //   <div className="flex space-x-3 cursor-pointer py-1 px-1.5 rounded-2sm group hover:bg-gray-200">
          //     <div className="text-[22px] w-6 h-6 flex items-center justify-center">
          //       <i className="eva eva-folder-outline"></i>
          //     </div>
          //     <div className="flex-grow">{group.name}</div>
          //     <div className="group-hover:flex text-[22px] w-6 h-6 hidden items-center justify-center">
          //       <i className="eva eva-plus-outline"></i>
          //     </div>
          //   </div>
          //   <div className="flex items-stretch">
          //     <div className="mr-3 w-6 relative before:block before:absolute before:w-2px before:h-full before:left-0 before:right-0 before:m-auto before:bg-gray-100"></div>
          //     <ul>
          //       <li>Test</li>
          //       <li>Test</li>
          //       <li>Test</li>
          //     </ul>
          //   </div>
          // </li>
        );
      })}
    </ul>
  );
}

export default async function SideBar() {
  return (
    <aside className="w-[260px] bg-gray-400 h-full px-5 py-2">
      <div className="py-4 text-2xl font-istok-web">Notizo</div>
      <GroupList />
      <div className="h-px bg-gray-200 w-full my-4"></div>
      <AddFolderButton />
      {/* <AddGroupForm /> */}
    </aside>
  );
}
