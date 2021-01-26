

let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

//////////////////////////////  Linhas básicas -->



// ctx.moveTo(0,0);  //Inicia em 0,0
// ctx.lineTo(250,250); //Termina em 0,0
// // ctx.lineWidth = 5; --> Expessura da linha
// // ctx.strokeStyle = "blue" --> Estilo da linha
// ctx.lineTo(500,0)
// ctx.stroke();



////////////////////////////////  Fill e Stroke -->



// usando fill = objeto preenchido
// usando stroke = objeto não preenchido

// ctx.fillStyle = "blue"; //Cor do elemento
// ctx.fillRect(10,10 ,100,200); // Os dois 1º = margem
//                               // Os dois 2º = Larg.Alt
// ctx.strokeStyle = "green";
// ctx.strokeRect(390,10, 100,200);



///////////////////////////////// Preenchimento e fechamento de linha -->



// ctx.beginPath(); // cria nova linha

// ctx.lineWidth = 4;
// ctx.strokeStyle = "red";
// ctx.moveTo(0,0);
// ctx.lineTo(250,250);
// ctx.stroke();



// ctx.beginPath(); // cria nova linha

// ctx.lineWidth = 7;
// ctx.strokeStyle = "green"; // colore a borda
// ctx.fillStyle = "pink"; // colore por dentro
// ctx.moveTo(400,200);
// ctx.lineTo(300,300);
// ctx.lineTo(200,300);
// ctx.closePath(); // fecha o caminho da linha
// ctx.stroke();
// ctx.fill();



///////////////////////////////////// Círculos -->


let x = 250;
let y = 250;
let raio = 200;

let inicio = 0;
let fim = 2 * Math.PI;


ctx.beginPath();
ctx.strokeStyle = "red"; // cor borda
ctx.lineWidth = 5;
ctx.fillStyle = "green"; // cor dentro

ctx.arc(x, y, raio, inicio, fim)

ctx.fill();
ctx.stroke();








