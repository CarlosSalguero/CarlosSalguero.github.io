// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state){

   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function imprimePosicion(location, state, control){

	if (state[1] == "DIRTY" && state[2] == "DIRTY" && location == "A"){
		document.getElementById("log").innerHTML+="<br><br>Estado[1]| ".concat(states[1]).concat("|").concat(states[2]).concat("| Location -> ").concat(location);
		control[0] = 1;
		
	}else if (state[1] == "DIRTY" && state[2] == "DIRTY" && location == "B"){
		document.getElementById("log").innerHTML+="<br><br>Estado[2]| ".concat(states[1]).concat("|").concat(states[2]).concat("| Location -> ").concat(location);
		control[1] = 2;
		
	}else if (state[1] == "CLEAN" && state[2] == "DIRTY" && location == "A"){
		document.getElementById("log").innerHTML+="<br><br>Estado[3]| ".concat(states[1]).concat("|").concat(states[2]).concat("| Location -> ").concat(location);
		control[2] = 3;
		
	}else if (state[1] == "CLEAN" && state[2] == "DIRTY" && location == "B"){
		document.getElementById("log").innerHTML+="<br><br>Estado[4]| ".concat(states[1]).concat("|").concat(states[2]).concat("| Location -> ").concat(location);
		control[3] = 4;
		
	}else if (state[1] == "DIRTY" && state[2] == "CLEAN" && location == "A"){
		document.getElementById("log").innerHTML+="<br><br>Estado[5]| ".concat(states[1]).concat("|").concat(states[2]).concat("| Location -> ").concat(location);
		control[4] = 5;
		
	}else if (state[1] == "DIRTY" && state[2] == "CLEAN" && location == "B"){
		document.getElementById("log").innerHTML+="<br><br>Estado[6]| ".concat(states[1]).concat("|").concat(states[2]).concat("| Location -> ").concat(location);
		control[5] = 6;
		
	}else if (state[1] == "CLEAN" && state[2] == "CLEAN" && location == "A"){
		document.getElementById("log").innerHTML+="<br><br>Estado[7]| ".concat(states[1]).concat("|").concat(states[2]).concat("| Location -> ").concat(location);
		control[6] = 7;
		
	}else if (state[1] == "CLEAN" && state[2] == "CLEAN" && location == "B"){
		document.getElementById("log").innerHTML+="<br><br>Estado[8]| ".concat(states[1]).concat("|").concat(states[2]).concat("| Location -> ").concat(location);
		control[7] = 8;
		
	}

	
}

function validaEstados(control){

	let tmp = 0;
	for (let i = 1; i < 8; i++) {
		
		if(control[i-1] != i){
			
			console.log("aun no se completa");
			return "DOING";
		}else {
			console.log("control: " + i);
		}
	 }
	 
	 console.log("Se visitaron todos los estados");
	 document.getElementById("log").innerHTML+="<br><br>Se visitaron todos los ESTADOS ";
	 return "DONE";

}

function test(states, control){
		
		
      	var location = states[0];	

				
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
		imprimePosicion(location, states, control);
      	//document.getElementById("log").innerHTML+="<br><br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
      	if (action_result == "CLEAN"){
        	if (location == "A") states[1] = "CLEAN";
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";
		  
		 
		//let valida = validaEstados(control);

		let rmd =  Math.floor((Math.random() * (100-2)) + 1); 
		if (rmd < 50 ){
			  if (location == "A"){
				  console.log('Dirty A -> '+ rmd);
				  states[1] = "DIRTY"
			  }else{
				  console.log('Dirty B -> '+ rmd);	
				  states[2] = "DIRTY"
			  }
	  }
	  

		  if (validaEstados(control) != "DONE"){
			setTimeout(function(){ test(states,control); }, 2000);
		  }
	
}



var states = ["A","DIRTY","DIRTY"];
var control = [1,1,1,1,1,1,1,1,1];

test(states,control);
