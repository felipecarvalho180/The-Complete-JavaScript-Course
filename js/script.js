//mensagem rapida na tela
alert("Hello World!");



//como comentar
 //uma linha só usar duas barras
 /* e se usa
 barra
 + 
 quando você quer pegar mais de 
 uma linha*/




//declarando uma variavel e mostrando ela na tela
var x = 9;



//tipos de variaveis
var a = 10.6565;       //decimmal variable
var name = "Felipe";   //string variable
var b = true;          //boolean variable
var c = null;          //null variable
document.getElementById("a").innerHTML = a;
document.getElementById("name").innerHTML = name;
document.getElementById("b").innerHTML = b;
document.getElementById("c").innerHTML = c;




//concatenando variaveis 
var d = "Felipe";
var e = 21;
document.getElementById("d").innerHTML = "My name is " + d + ", and my age is " + e;




//como criar uma função
function fun1() {
    document.getElementById("f").innerHTML = "This is my function";
}
//chamando a função
fun1();




//função com parametro
function fun2(name1){
    document.getElementById("g").innerHTML = "Good morning and happy birthday " + name1;
}
fun2("Eliane");



//função com mais de um parametro
function fun3(name2, nota, materia) {
    document.getElementById("h").innerHTML = name2 + " your note is " + nota + " in " + materia;
}
fun3("Thainá", "8", "Português");




//função chamando outra função
function fun4() {
    var f = "This is my first function";
    return f;
}
function fun5() {
    document.getElementById("i").innerHTML = fun4() + " inside of my second function";
}
fun5();




//Assignments Operators
var g = 50;
var h = 60;
var i = 70;
var j = 80;
//soma g = g + 10
g += 10;
//subtração h = h - 10
h -= 10;
//multiplicação i = i * 2
i *= 2;
//divisão j = j / 2
j /= 2;
document.getElementById("j").innerHTML = g + " " + h + " " + i + " " + j;




//Math Operators
function fun6() {
    var mat = 8;
    var port = 6;
    var quim = 7;
    var total;
    var media;
    var porcent;
    //calc total
    total = mat + port + quim;
    //calc media
    media = total / 3;
    //calc porcentagem
    porcent = (total / 30) * 100;
    document.getElementById("k").innerHTML = "The total is: " + total + " The avg is: " + media + " The percent is: " + porcent + "%";
}
fun6();



//Using If Statement
function functioif(){
    var age = 85;

    if (age >= 18) {
        document.getElementById("l").innerHTML = "This person is an adult";
    }
    if (age > 80) {
        document.getElementById("l").innerHTML = "This person is old"
    }
}
functioif();




//Using IfElse Statement
function functionifelse() {
    var nota = 3;

    if (nota >= 6) {
        document.getElementById("m").innerHTML = "The student passed the test"
    } else {
        document.getElementById("m").innerHTML = "The student didn't pass the test"
    }
}
functionifelse();



//Nesting
function funNesting() {
    var age = 21;
    var gender = "male";

    if (age == 21) {
        if (gender == "male") {
            document.getElementById("n").innerHTML = "You have 21 years old and you are a man";
        }
        if (gender == "female") {
            document.getElementById("n").innerHTML = "You have 21 years old and you are a woman";
        }
    } else {
        document.getElementById("n").innerHTML = "You don't have 21 years old";
    }
}
funNesting();




//Complex condition
function funAndOr() {
    var first = "Felipe";
    var last = "Carvalho";

    if (first == "Felipe" && last == "Carvalho") {
        document.getElementById("o").innerHTML = "Your first name is Felipe and your last name is Carvalho";
    }else{
        document.getElementById("o").innerHTML = "Your first name isn't Felipe and your last name isn't Carvalho";
    }

    if (first == "Felipe" || last == "Barbosa") {
        document.getElementById("p").innerHTML = "Your first name is Felipe or your last name is Carvalho";
    } else {
        document.getElementById("p").innerHTML = "Your first name isn't Felipe and your last name isn't Barbosa";
    }
}
funAndOr();




//Switch
function funSwitch() {
    var nota = 10;

    switch (nota) {
        case 10:
            document.getElementById("q").innerHTML = "Excellent";
            break;
        
        case 9:
            document.getElementById("q").innerHTML = "You can be better";
            break;
        
        case 8:
            document.getElementById("q").innerHTML = "You need study";
            break;
        
        default:
            break;
    }
}
funSwitch();





//Loop for
function funLoopFor() {
    var x;

    document.writeln("<br> Loop for <br>");
    for (x = 0; x <= 3; x++){
        document.writeln(x + "<br>");
    }
}funLoopFor();




//Loop while
function funLoopWhile() {
    var x = 4;

    document.writeln("<br>Loop while <br>");
    while (x <= 7) {
        document.writeln(x + "<br>");
        x++;
    }
}funLoopWhile();





//Creating Objects
function funCreaObjects() {
    //Creating constructor
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    //Creating instances
    var pessoa1 = new person("Felipe", 21);
    var pessoa2 = new person("Eliane", 50);
    //Using the objects
    document.writeln("<br>Creating Objects: <br>");
    document.writeln("Your name is " + pessoa1.name + "<br>");
    document.writeln("The age of " + pessoa2.name + " is " + pessoa2.age + "<br>");
}funCreaObjects();





//Initializing Objects
function funInitiObjects() {
    var pessoa1 = {name:"Felipe", age:21}
    var pessoa2 = {name:"Eliane", age:50}

    document.writeln("<br>Initializing Objects: <br>");
    document.writeln(pessoa1.name + "<br>");
    document.writeln(pessoa2.age + "<br>");
}funInitiObjects();





//Adding Methods to Objects
function funAddMetObj() {
    function person(name, age) {
        this.name = name;
        this.age = age;
        this.yearsleft = yearsleft;
    }
    function yearsleft() {
        var lessyears = 65 - this.age;
        return lessyears;
    }

    var person = new person("Felipe", 21);

    document.writeln("<br>Adding Methods to Objects: <br>");
    document.writeln(person.yearsleft() + "<br>");
}funAddMetObj();






//Array
function funArray() {
    var name = new Array("Felipe", "Eliane", "Sidnei");

    document.writeln("<br>Array:<br>");
    document.writeln(name[1] + "<br>");
}funArray();




//Creating arrays by others methods
function funArray2() {
    var name = new Array(3);
    name[0] = "Felipe";
    name[1] = "Eliane";
    name[2] = "Sidnei";

    document.writeln("<br>Other Array:<br>");
    document.writeln(name[0] + "<br>");
}funArray2();





//Array lenght
function funArrayLen() {
    var name = new Array("Felipe", "Eliane", "Sidnei");

    document.writeln("<br>Array Lenght:<br>");
    document.writeln(name.length + "<br>");
}funArrayLen();





//Join and POP
function funJoinPop() {
    var str = new Array("1", "2", "3");
    var string = str.join(" + ");

    document.write("<br>Join:<br>");
    document.write(string + "<br>");

    document.write("<br>POP:<br>");
    str.pop();
    document.write(str[2] + "<br>");

}funJoinPop();





//Reverse
function funReverse() {
    var string = new Array("C", "B", "A");
    string.reverse();
    var string1 = string.join();

    document.writeln("<br>Reverse:<br>");
    document.writeln(string1 + "<br>");
}funReverse();





//Sort
function funSort() {
    var string = new Array("A", "B", "A", "F", "B");
    string.sort();
    var string1 = string.join();

    document.writeln("<br>Sort:<br>");
    document.writeln(string1 + "<br>");
}funSort();




//Push
function funPush() {
    var string = new Array("A", "B", "A", "F", "B");
    string.push("E");
    var string1 = string.join();

    document.writeln("<br>Push:<br>");
    document.writeln(string1 + "<br>");
}funPush();





//Printing Array
function funPrintAr() {
    var x = new Array("1", "2", "3", "4", "5");
    var string = x.join("-");

    document.writeln("<br>Printing Array:<br>");
    for (var i = 0; i < string.length; i++) {
        
        document.writeln(string[i]);
        
    }
    document.write("<br>");
}funPrintAr();





//Array Associate
function funAssociaAr() {
    var x = new Array();
    x["color"] = "Blue";

    document.writeln("<br>Array Associate:<br>");
    document.writeln(x["color"] + "<br>");
}funAssociaAr();




//Math Objects
function funMath() {
    var number = prompt("Choose a number for the square root", "");
    var result = Math.sqrt(number);
    
    alert(result);
}




//Date Object
function funDate() {
    var now = new Date();
    var hour = now.getHours();
    var mins = now.getMinutes();
    var secs = now.getSeconds();
    var data = hour + ":" + mins + ":" + secs;

    alert(data);
}





//Element input
function funFormul() {
    var user = document.form.user.value;
    var pass = document.form.password.value;

    document.getElementById("r1").innerHTML = "Your user is " + user + " and your password is " + pass;
}





//Checkbox Checked
function funChecked() {
    if (document.check.box.checked) {
        document.getElementById("s1").innerHTML = "It is checked";
    } else {
        document.getElementById("s1").innerHTML = "It isn't checked";
    }
}





//Simple Calculator
function calculate() {
    p = document.getElementById("princ").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("year").value;
    result = document.getElementById("result");
    result.innerHTML = ((p*r*y)/100);
}




//Progress Bar
function move() {
    var bar = document.getElementById("myBar");
    var width = 0;
    var plus = setInterval(frame, 50);

    function frame() {
        if (width == 100) {
            clearInterval(plus);
        } else {
            width++;
            bar.style.width = width + '%';
        }
    }
}