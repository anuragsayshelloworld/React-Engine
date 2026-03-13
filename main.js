import { Didact } from "./didact.js";

/** @jsx Didact.createElement */
/** @jsxFrag Didact.Fragment */

const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);

const container = document.getElementById("root");
Didact.render(element, container);
