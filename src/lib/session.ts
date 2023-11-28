import PocketBase from "pocketbase";
import { env } from "$env/dynamic/public"

export const pb = new PocketBase("https://sinlui.pockethost.io")
