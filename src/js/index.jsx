import { render, h } from "preact";

import App from "~/app";

export const main = (appId = "app") => {
  // Mount the application into appId
  const appEl = document.getElementById("app");
  render(<App />, appEl, appEl.children[0]);
};
