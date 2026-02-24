import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

// Notion database ID for the waitlist entries
// Support both NOTION_DB_ID and NOTION_DB (as documented in README)
export const NOTION_DB_ID = process.env.NOTION_DB_ID || process.env.NOTION_DB || "";

