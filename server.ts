import {ConnInfo, serve} from "https://deno.land/std@0.136.0/http/server.ts";
import {notFound, success} from "./mod.ts";

export const usernameTxtFile: string = await Deno.readTextFile("./assets/gamertags.txt");
export const usernames: string[] = usernameTxtFile.split('\n');
export const generateRandomUsername = () => usernames[Math.floor(Math.random() * usernames.length)];

const handle = (req: Request): Response => {
    const pathname = new URL(req.url).pathname;
    switch(req.method) {
        case "GET":
            if (pathname === "/username") return success(generateRandomUsername());
            return notFound;
        default:
            return notFound;
    }
}

serve(handle, {port: 8002});