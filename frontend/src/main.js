// @ts-nocheck
import { mount } from "svelte";

import "./app.css";

import App from "./App.svelte";

/**
 * ==========================================
 * APPLICATION ENTRY
 * ==========================================
 */

const app = mount(App, {
    target: document.getElementById("app"),
});

export default app;