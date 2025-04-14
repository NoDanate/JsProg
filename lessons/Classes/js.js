class Recttangle{
    constructor(width, height){
        width = width;
        height = height;
    }

    square(width, height) {
        return width * height;
    }

    perimetr(width, height){
        return 2 * (width + height);
    }
}

let rect1 = new Recttangle(20, 50);
console.log(rect1.square(), rect1.perimetr());
console.log(rect1);

console.log()