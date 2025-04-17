class Rectangle {
    #id;
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.#id = Math.floor(Math.random() * 10e5);
    }

    square(){
        return width * height;
    }

    perimetr(){
        return 2 * (width * height);
    }

    get id(){
        return this.#id;
    }

    set id(value){
        this.#id = value;
    }
}


let rect1 = new Rectangle(20, 30);
console.log(rect1);

rect1.id = 1;
console.log(rect1.id);

