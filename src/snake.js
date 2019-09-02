// 3. haciendo la animacion metodo main 🍆🍆🍆

//variables 🐽 
const SPEED = 80,
    SIZE = 10;
//Clase padre
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
        (difx >= 0 || difx < this.size || dify >= 0 || dify < this.size) ? true: false;
    }
};

//heredando de Objetos... 🐥🐥🐥
//creando la clase que va ser el recipiente de nuestro objeto
class Cola extends Objetos {
    constructor(x, y) {
        //llamando al contructor padre
        super();
        //almacenando el valor de x en x ... same y
        this.x = x;
        this.y = y;
    }
    // 5 (branch). create method draw() de forma independiente 🌋🌋🌋
    draw(ctx) {
        //darle Color
        ctx.fillStyle = "#03a9f4"
        //creamos el cuadro que formara nuestra snake
        ctx.fillRect(this.x, this.y, this.size, this.size)
        //p = posicion
        //f = forma en pixeles
        //ctx.fillRect(p en el eje x, p en el eje y, f mas + es mas larga, f mas + es mas ancha )
    }
    // 6_ method setter 💁💁💁 porque no accedemos atraves de el objeto ya creado (new Cola)   
    //creando especie de atributo instanciado
    setxy(x, y) {
        this.x = x;
        this.y = y;
    }
}
//8_ crear comida
class Comida extends Objetos{
    // el punto va tener un posicion random
    constructor() {
        super();
        this.x = this.generete();
        this.y = this.generete();
    }
    generete(){
        //me genera numeros entre 0-580 de diez en diez
        let num = (Math.floor(Math.random()*59))*10;
        return num;
    }
    colocar(){
        // se va llamar con cada colicion
        this.x = generete();
        this.y = generete();
    }
    draw(ctx){
        ctx.fillStyle = "#f25056"
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}

//instanciado de Cola class 🌠🌠🌠
// Objetos del juego
let cabeza = new Cola(20, 20);
let comida = new Comida();
// 6_ Variables de ilucion de movimiento 🙉🙉🙉
// estos boleanos nos permitiran habilitar o bloquear los ejes ¬ de modo que no podamos movernos en el mismo eje
let ejex = true,
    ejey = true;
//  Variables para darle la direccion del movimiento
let xdir = 0,
    ydir = 0;

// 6_ function movimiento
const movimiento = () => {
    // obtenemos la posicion (cabeza.x) y le sumamos el valor de xy direction
    let nx = cabeza.x + xdir,
        ny = cabeza.y + ydir;
    //accedemos al objeto creado
    cabeza.setxy(nx, ny);
}
// 7_ funcion que va ser llamada con los elementos de tecla
const control = (e) =>{
    // esta propiedad (keyCode) nos da el codigo de la tecla
    let cod = e.keyCode
    //revisar doc de switch
    if (ejex) {
        if (cod == 38) {
            ydir = -SIZE;
            xdir = 0;
            ejex = false
            ejey = true
        }
        if (cod == 40) {
            ydir = SIZE;
            xdir = 0;
            ejex = false
            ejey = true
        }
    }
    if (ejey) {
        if (cod == 37) {
            ydir = 0;
            xdir = -SIZE;
            ejey = false
            ejex = true
        }
        if (cod == 39) {
            ydir = 0;
            xdir = SIZE;
            ejey = false
            ejex = true
        }
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
    //dibujando mi cabeza
    cabeza.draw(ctx);
    comida.draw(ctx);

};
// function animate ... main()✊✊ 
const main = () => {
    draw();
    movimiento();
}
setInterval("main()", SPEED)

//Error en la 7_ porque La variable size noestaba definida