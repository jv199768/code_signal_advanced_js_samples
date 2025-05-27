class Window {
  constructor() {
    this.content = "Default content";
  }

  addTextField(content) {
    this.content = content;
  }

  display() {
    console.log("Window displays: " + this.content);
  }
}
