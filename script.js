const body = document.querySelector("body");

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElement = function () {
    let elem;
    let text;
    if (selector[0] === ".") {
      elem = document.createElement("div");
      text = "div";
      elem.className = `${selector.slice(1)}`;
    }
    if (selector[0] === "#") {
      elem = document.createElement("p");
      text = "paragraph";
      elem.id = `${selector.slice(1)}`;
    }
    elem.innerHTML = ``;
    elem.style.cssText = `width:${width}; height:${height}; background:${bg}; font size:${fontSize}`;
    elem.textContent = `${text} = ${selector.slice(1)}`;
    console.log(elem);
    document.body.append(elem);
  };
};

const newDomElement = new DomElement(".block", "100px", "100%", "red", "24px");
newDomElement.createElement(".block");
const newDomElement1 = new DomElement("#best", "50px", "100%", "green", "24px");
newDomElement1.createElement("#best");
