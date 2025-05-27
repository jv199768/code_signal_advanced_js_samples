class ContentManager {
  constructor(content = "Default content") {
    this.content = content;
  }

  updateContent(newContent) {
    this.content = newContent;
  }

  getContent() {
    return this.content;
  }
}

class Window {
  constructor() {
    this.manager = new ContentManager();
  }

  display() {
    console.log("Window displays: " + this.manager.getContent());
  }

  changeContent(newContent) {
    this.manager.updateContent(newContent);
  }
}
