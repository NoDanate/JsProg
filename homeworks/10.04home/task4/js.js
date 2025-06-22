class HtmlElement {
  constructor(tag, isSelfClosing = false, textContent = "") {
    this.tag = tag;
    this.isSelfClosing = isSelfClosing;
    this.textContent = textContent;
    this.attributes = [];
    this.styles = [];
    this.children = [];
  }

  setAttribute(name, value) {
    this.attributes.push({ name, value });
  }

  setStyle(name, value) {
    this.styles.push({ name, value });
  }

  appendChild(element) {
    this.children.push(element);
  }

  prependChild(element) {
    this.children.unshift(element);
  }

  getHtml() {
    let html = `<${this.tag}`;

    for (const attr of this.attributes) {
      html += ` ${attr.name}="${attr.value}"`;
    }

    if (this.styles.length > 0) {
      const styleValue = this.styles
        .map(style => `${style.name}:${style.value}`)
        .join(";");
      html += ` style="${styleValue}"`;
    }

    if (this.isSelfClosing) {
      html += " />";
    } else {
      html += ">";
      html += this.textContent;

      for (const child of this.children) {
        html += child.getHtml();
      }

      html += `</${this.tag}>`;
    }

    return html;
  }
}



class CssClass {
  constructor(className) {
    this.className = className;
    this.styles = [];
  }

  setStyle(name, value) {
    this.styles.push({ name, value });
  }

  removeStyle(name) {
    this.styles = this.styles.filter(style => style.name !== name);
  }

  getCss() {
    if (this.styles.length === 0) return "";

    const stylesStr = this.styles
      .map(style => `  ${style.name}: ${style.value};`)
      .join("\n");

    return `.${this.className} {\n${stylesStr}\n}`;
  }
}



class HtmlBlock {
  constructor() {
    this.styles = [];
    this.rootElement = null;
  }

  addStyle(cssClass) {
    this.styles.push(cssClass);
  }

  setRootElement(element) {
    this.rootElement = element;
  }

  getCode() {
    let result = "";

    if (this.styles.length > 0) {
      result += "<style>\n";
      for (const style of this.styles) {
        result += style.getCss() + "\n";
      }
      result += "</style>\n";
    }

    if (this.rootElement) {
      result += this.rootElement.getHtml();
    }

    return result;
  }
}

const wrapClass = new CssClass("wrap");
wrapClass.setStyle("display", "flex");

const blockClass = new CssClass("block");
blockClass.setStyle("width", "300px");
blockClass.setStyle("margin", "10px");

const imgClass = new CssClass("img");
imgClass.setStyle("width", "100%");

const textClass = new CssClass("text");
textClass.setStyle("text-align", "justify");

const htmlBlock = new HtmlBlock();
htmlBlock.addStyle(wrapClass);
htmlBlock.addStyle(blockClass);
htmlBlock.addStyle(imgClass);
htmlBlock.addStyle(textClass);

const wrapper = new HtmlElement("div");
wrapper.setAttribute("id", "wrapper");
wrapper.setAttribute("class", "wrap");

const block1 = new HtmlElement("div");
block1.setAttribute("class", "block");

const h3_1 = new HtmlElement("h3");
h3_1.textContent = "What is Lorem Ipsum";

const img1 = new HtmlElement("img", true);
img1.setAttribute("class", "img");
img1.setAttribute("src", "lipsum.jpg");
img1.setAttribute("alt", "Lorem Ipsum");

const p1 = new HtmlElement("p");
p1.setAttribute("class", "text");
p1.textContent = `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." `;

const a1 = new HtmlElement("a");
a1.setAttribute("href", "https://www.lipsum.com/");
a1.setAttribute("target", "_blank");
a1.textContent = "More...";

p1.appendChild(a1);
block1.appendChild(h3_1);
block1.appendChild(img1);
block1.appendChild(p1);

const block2 = new HtmlElement("div");
block2.setAttribute("class", "block");

const h3_2 = new HtmlElement("h3");
h3_2.textContent = "What is Lorem Ipsum";

const img2 = new HtmlElement("img", true);
img2.setAttribute("class", "img");
img2.setAttribute("src", "lipsum.jpg");
img2.setAttribute("alt", "Lorem Ipsum");

const p2 = new HtmlElement("p");
p2.setAttribute("class", "text");
p2.textContent = `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." `;

const a2 = new HtmlElement("a");
a2.setAttribute("href", "https://www.lipsum.com/");
a2.setAttribute("target", "_blank");
a2.textContent = "More...";

p2.appendChild(a2);
block2.appendChild(h3_2);
block2.appendChild(img2);
block2.appendChild(p2);

wrapper.appendChild(block1);
wrapper.appendChild(block2);

htmlBlock.setRootElement(wrapper);

document.write(htmlBlock.getCode());