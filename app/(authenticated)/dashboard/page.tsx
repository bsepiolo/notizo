import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const revalidate = 0; // revalidate at most every hour

const getData = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("categories").select("*");
  return data;
};
export default async function Dashboard() {
  const data = await getData();
  console.log("aaa", data);

  return data?.map((category) => {
    return <div>{category.name}</div>;
  });
}
