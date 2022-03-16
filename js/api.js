const url = "https://api.adviceslip.com/advice";

import { createHtml } from "./createHtml.js";

export async function getTips() {
    try {
        const res = await fetch(url);
        const json = await res.json();
        const tip = json;
        console.log(json);
        createHtml(tip);
    } catch (err) {
        console.log(err);
    }
}
