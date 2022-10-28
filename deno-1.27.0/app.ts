import { serve } from "https://deno.land/std@0.119.0/http/server.ts";

const port = 3030;

function handler(_req: Request): Response {
  return new Response("Hello World!");
}

console.log("Listening on http://localhost:3030");
serve(handler, { port });
