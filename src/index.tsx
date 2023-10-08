import React from "react";
import ReactDOM from "react-dom/client";
import Root from "@/components/root";

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement!);

root.render(<Root />);
