class WebPageElement {
    render() {
        throw new Error("This method should be overridden by subclasses");
    }
}

class Header extends WebPageElement {
    constructor(text) {
        super();
        this.text = text;
    }
    
    render() {
        return `<h1>${this.text}</h1>`;
    }
}

class Paragraph extends WebPageElement {
    constructor(text) {
        super();
        this.text = text;
    }
    
    render() {
        return `<p>${this.text}</p>`;
    }
}

class List extends WebPageElement {
    constructor(items) {
        super();
        this.items = items;
    }
    
    render() {
        const itemsStr = this.items.map(item => `<li>${item}</li>`).join("\n");
        return `<ul>${itemsStr}</ul>`;
    }
}

class WebPage {
    constructor(title) {
        this.title = title;
        this.elements = [];
    }
    
    addElement(element) {
        this.elements.push(element);
    }
    
    display() {
        const elementsStr = this.elements.map(element => element.render()).join("\n");
        return `<html>\n<head>\n  <title>${this.title}</title>\n</head>\n<body>\n  ${elementsStr}\n</body>\n</html>`;
    }
}

// Example usage
const page = new WebPage("My Web Page");
page.addElement(new Header("Welcome to My Web Page"));
page.addElement(new Paragraph("This is a paragraph of text on the web page."));
page.addElement(new List(["Item 1", "Item 2", "Item 3"]));

console.log(page.display());
