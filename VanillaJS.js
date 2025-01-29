let mainElement = document.createElement("div");
mainElement.setAttribute("class", "mainBlock");
console.log(mainElement);

let topElement = document.createElement("div");
topElement.setAttribute("class", "topBlock");
console.log(topElement);

let image = document.createElement("img");
image.src = "./panda.jpg";
image.width = "300";
image.height = "300";

let bottomElement = document.createElement("div");
bottomElement.setAttribute("class", "bottomBlock");
console.log(bottomElement);

let h1 = document.createElement("h1");
let btn = document.createElement("button");
h1.innerText = "Hye Iam Panda";
btn.innerText = "Button";

document.body.appendChild(mainElement);
mainElement.appendChild(topElement);
mainElement.appendChild(bottomElement);
topElement.appendChild(image);
bottomElement.appendChild(h1);
bottomElement.appendChild(btn);
