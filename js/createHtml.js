const textContainer = document.querySelector(".text");

export const createHtml = (array) => {
    while (textContainer.firstChild) {
        textContainer.removeChild(textContainer.firstChild);
    }
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.classList.add("number");
    p2.classList.add("advice");
    const id = document.createTextNode(`ADVICE #${array.slip.id}`);
    const advice = document.createTextNode(`"${array.slip.advice}"`);
    p1.appendChild(id);
    p2.appendChild(advice);
    textContainer.appendChild(p1);
    textContainer.appendChild(p2);
};
