import { LandingPage } from "./page.client";
import { connection } from "next/server";
import { getNotionDatabaseRowCount } from "~/lib/utils";
import { NOTION_DB_ID } from "~/lib/notion";

export const dyamic = "force-dynamic";

export default async function Home() {
  const [waitlistPeople] = await Promise.all([
    getNotionDatabaseRowCount(NOTION_DB_ID),
    // forces the page to be dyamically rendered
    connection(),
  ]);

  return <LandingPage waitlistPeople={waitlistPeople} />;
}
