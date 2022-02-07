import HTML from "bad.html";
// import { HTML } from "./good.html.mjs";

export default {
  async fetch() {
    return new Response(HTML, { headers: { "Content-Type": "text/html;charset=UTF-8" }});
  }
}
