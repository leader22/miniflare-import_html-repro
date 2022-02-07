import HTML from "bad.html";

export default {
  async fetch() {
    return new Response(HTML, { headers: { "Content-Type": "text/html;charset=UTF-8" }});
  }
}
