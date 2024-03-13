const body = document.querySelector("body");

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElement = function () {
    if (selector[0] === ".") {
      const divBlock = document.createElement("div");
      divBlock.innerHTML = ``;
      divBlock.className = `${selector.slice(1)}`;
      divBlock.style.cssText = `width:${width}; height:${height}; background:${bg}; font size:${fontSize}`;
      console.log(divBlock);
      document.body.appendChild(divBlock);
    }
    if (selector[0] === "#") {
      const textBlock = document.createElement("p");
      textBlock.innerHTML = ``;
      textBlock.id = `${selector.slice(1)}`;
      textBlock.style.cssText = `width:${width}; height:${height}; background:${bg}; font size:${fontSize}`;
      textBlock.textContent = `id = ${selector.slice(1)}`;
      document.body.append(textBlock);
      console.log(textBlock);
    }
  };
};

const newDomElement = new DomElement(".block", "100px", "100%", "red", "24px");
newDomElement.createElement(".block");
const newDomElement1 = new DomElement(
  "#best",
  "100px",
  "100%",
  "green",
  "24px"
);
newDomElement1.createElement("#best");
