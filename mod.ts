import {Room} from "https://raw.githubusercontent.com/ukaj808/augslink-lib/master/mod.ts";

export const notFound: Response = new Response("", {
    status: 404,
    headers: {"content-type": "application/json",},
});

export const success = (username: string): Response =>
    new Response(username, {status: 200, headers: {"content-type": "text/plain",},});

export const getRandyUsernameFetch = async (id: string, options: { env: "local" | "prod" }): Promise<string> => {
    const url: string = getUrl(options.env).concat("/username");
    const response = await fetch(url);
    return await response.text();
}

const getUrl = (env: string): string => {
    switch (env) {
        case "local":
            return "http://localhost:8002";
        case "prod":
            return "https://augslink-randy.deno.dev";
    }
    return "";
}