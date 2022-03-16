import { getTips } from "./api.js";

const button = document.querySelector("button");

button.addEventListener("click", () => {
    getTips();
});
