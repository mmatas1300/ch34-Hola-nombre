function changeName(){
   const name = getName();
   getReferenceGreetings().innerHTML = `Hola ${name}`;
}

function getName(){
    return prompt("¿Cuál es tu nombre?");
}

function getReferenceGreetings(){
    return document.getElementById('"greetings"')
}