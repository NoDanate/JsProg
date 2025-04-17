class PrintMachine{
    constructor(fontSize, fontColor, fontFamily){
        this.fontSize = fontSize;
        this.fontColor = fontColor;
        this.fontFamily = fontFamily;
    }

    print(text){
        document.writeln(`<p style="font-size: ${this.fontSize}px; color: ${this.fontColor}; font-family: ${this.fontFamily}">${text}</p>`)
    }
}


const printMach = new PrintMachine(24, 'purple', 'Arial');

printMach.print('Изгиб гитары жёлтый ты обнимешь нежно. Струна осколком эха пронзит тугую высь');