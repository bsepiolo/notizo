import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const getData = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("categories").select("*");
  return data;
};

export default async function Dashboard() {
  const data = await getData();

  return data?.map((category) => {
    return <div>{category.name}</div>;
  });
}
