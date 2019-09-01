// 3. haciendo la animacion metodo main 🍆🍆🍆

//variables 🐽 
const SPEED = 80,
    SIZE = 10;

//heredando clase para crear => objetos para mi juego  
class Objetos {
    constructor() {
        this.size = SIZE;
    }
    // method choque
    // el choque lo evaluaremos la diferencia entre posiciones X and Y
    choque(obj) {
        let difx = Math.abs(this.x - obj.x);
        let dify = Math.abs(this.y - obj.y);
        //evaluando las diferencias
        (difx >= 0 || difx < this.size || dify >= 0 || dify < this.size) ? true : false;
    }
};
//heredando de Objetos
class Cola extends Objetos{
    constructor(x,y) {
        //almacenando el valor de x en x ... same y
        this.x = x ;
        this.y = y ;
    }
}

//function draw() 🌈
const draw = () => {
    //extrayendo a canvas del html
    let canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d");
    //limpiando campo, estamos haciendo un cuadro de limpieza
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //aqui abajo va todo el dibujo
}
// function animate ... main()✊✊ 
const main = () => {
    draw();

}
setInterval("main()", SPEED)
