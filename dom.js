//^ Document.getElementById

let element = document.getElementById("demo");
element.innerText = "Hello DOM";
console.log(element);

let div = document.createElement("test");
element.innerHTML = "<h1>Header</h1>";
console.log(div);
