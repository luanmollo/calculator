let num = document.getElementsByClassName("num");

let operation = [];
let actual = "";
let term1 = "";
let term2 = "";
let result;

for(i = 0; i < num.length; i++){
	num[i].addEventListener("click", press);
}

let screen = document.getElementById("screen");

function press(){

	switch(this.id){
		case "num1":
			screen.innerHTML += "1";
			actual += 1;
			this.blur();
			break;
		case "num2":
			screen.innerHTML += "2";
			actual += 2;
			this.blur();
			break;
		case "num3":
			screen.innerHTML += "3";
			actual += 3;
			this.blur();
			break;
		case "num4":
			screen.innerHTML += "4";
			actual += 4;
			this.blur();
			break;
		case "num5":
			screen.innerHTML += "5";
			actual += 5;
			this.blur();
			break;
		case "num6":
			screen.innerHTML += "6";
			actual += 6;
			this.blur();
			break;
		case "num7":
			screen.innerHTML += "7";
			actual += 7;
			this.blur();
			break;
		case "num8":
			screen.innerHTML += "8";
			actual += 8;
			this.blur();
			break;
		case "num9":
			screen.innerHTML += "9";
			actual += 9;
			this.blur();
			break;
		case "num0":
			screen.innerHTML += "0";
			actual += 0;
			this.blur();
			break;
		case "add":
			operation.push("+");
			screen.innerHTML += operation[0];
			if(!!term1 == false){
				term1 = parseInt(actual);
			}
			else{
				term2 = parseInt(actual);
			}
			actual = "";
			this.blur();
			break;
		case "subtract":
			operation.push("-");
			screen.innerHTML += operation[0];
			if(!!term1 == false){
				term1 = parseInt(actual);
			}
			else{
				term2 = parseInt(actual);
			}
			actual = "";
			this.blur();
			break;
		case "multiply":
			operation.push("*");
			screen.innerHTML += operation[0];
			if(!!term1 == false){
				term1 = parseInt(actual);
			}
			else{
				term2 = parseInt(actual);
			}
			actual = "";
			this.blur();
			break;
		case "divide":
			operation.push("/");
			screen.innerHTML += operation[0];
			if(!!term1 == false){
				term1 = parseInt(actual);
			}
			else{
				term2 = parseInt(actual);
			}
			actual = "";
			this.blur();
			break;
		case "equal":
			if(operation.length > 1){
				alert("Lo siento. No puedes ingresar más de 2 términos.");
				actual = "";
				operation = [];
				term1 = "";
				term2 = "";
				result = "";
				screen.innerHTML = "";
			}
			else{
				if(!!term1 == false){
					term1 = parseInt(actual);
				}
				else{
					term2 = parseInt(actual);
				}
				if(operation[0] == "+"){
					result = add(term1, term2);
					screen.innerHTML = result;
				}
				else if(operation[0] == "-"){
					result = subtract(term1, term2);
					screen.innerHTML = result;
				}	
				else if(operation[0] == "*"){
					result = multiply(term1, term2);
					screen.innerHTML = result;
				}
				else if(operation[0] == "/"){
					result = divide(term1, term2);
					screen.innerHTML = result;
				}
			}
			operation = [];
			term1 = result;
			break;
		case "clear":
			actual = "";
			operation = [];
			term1 = "";
			term2 = "";
			result = "";
			screen.innerHTML = "";
			break;

	}
}

function add(term1, term2){
	return (term1 + term2);	
}

function subtract(term1, term2){
	return (term1 - term2);	
}

function multiply(term1, term2){
	return (term1 * term2);	
}

function divide(term1, term2){
	return (term1 / term2);	
}

let k = window.addEventListener("keyup", keyboard);

function keyboard(event){
	switch(event.keyCode){
		case 96:
			event.preventDefault();
			document.getElementById("num0").click();
			break;
		case 97:
			event.preventDefault();
			document.getElementById("num1").click();
			break;
		case 98:
			event.preventDefault();
			document.getElementById("num2").click();
			break;
		case 99:
			event.preventDefault();
			document.getElementById("num3").click();
			break;
		case 100:
			event.preventDefault();
			document.getElementById("num4").click();
			break;
		case 101:
			event.preventDefault();
			document.getElementById("num5").click();
			break;
		case 102:
			event.preventDefault();
			document.getElementById("num6").click();
			break;
		case 103:
			event.preventDefault();
			document.getElementById("num7").click();
			break;
		case 104:
			event.preventDefault();
			document.getElementById("num8").click();
			break;
		case 105:
			event.preventDefault();
			document.getElementById("num9").click();
			break;
		case 107:
			event.preventDefault();
			document.getElementById("add").click();
			break;
		case 109:
			event.preventDefault();
			document.getElementById("subtract").click();
			break;
		case 106:
			event.preventDefault();
			document.getElementById("multiply").click();
			break;
		case 111:
			event.preventDefault();
			document.getElementById("divide").click();
			break;
		case 13:
			event.preventDefault();

			document.getElementById("equal").click();
			break;
		case 8:
			event.preventDefault();
			document.getElementById("clear").click();
			break;
	}
}