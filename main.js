import { Didact } from "./didact.js";

const element = Didact.createElement(
  "h1",
  { title: "foo" },
  "Hello World",
  "Hi There",
);

const container = document.getElementById("root");

Didact.render(element, container);
