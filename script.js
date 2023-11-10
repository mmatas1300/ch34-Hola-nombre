function changeNameGreetings(){
   const name = getName();
   document.getElementById("greetings").innerHTML = `Hola ${name}`;
}

function getName(){
    return prompt("¿Cuál es tu nombre?");
}

