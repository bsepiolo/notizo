import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { getLocale, Locales } from "@/app/[lang]/locales";
import TextBox from "@/app/components/ui/TextBox";
import Button from "@/app/components/ui/Button";

const getData = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("categories").select("*");
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
  const data = await getData();

  return (
    <ul className="space-y-1">
      {data?.map((category) => {
        return (
          <li
            key={category.id}
            className="flex cursor-pointer items-center space-x-3 py-1 px-1.5 hover:bg-gray-200 "
          >
            <div className="text-[22px] w-6 h-6 flex items-center justify-center">
              <i className="eva eva-folder-outline"></i>
            </div>
            <span>{category.name}</span>
          </li>
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
