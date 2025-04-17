class Button {

    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }

    showBtn(){
        document.writeln(`<button style="width: ${this.width}px; height: ${this.height}px;">${this.text}</button>`)
    }
}

const usualButton = new Button(150, 75, "usualButton");
console.log(usualButton)
usualButton.showBtn();


class BootstrapButton extends Button{
    constructor(width, height, text, color){
        super(width, height, text);
        this.color = color;
    }

    showBtn(){
        document.writeln(`<button class="btn btn-${this.color}">${this.text}</button>`)
    }
}

const unusualButton = new BootstrapButton(150, 75, "unusualButton","warning");
console.log(unusualButton)
unusualButton.showBtn();