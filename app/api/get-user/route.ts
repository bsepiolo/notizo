// TODO: Duplicate or move this file outside the `_examples` folder to make it a route

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const cookieList = cookies();
  console.log("COOKIES", cookieList.getAll());
  const supabase = createRouteHandlerClient({ cookies });

  const { data } = await supabase.from("categories").select("*");
  // console.log(data);
  return NextResponse.json(data);
}
