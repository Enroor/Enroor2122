function miFuncion(){
    return true;
}

async function promesa(){
    return setTimeout(() => console.log("Hola soy una promesa"), 5000);
}

function* generator(){
    let i;
    i = 0;
    while(true){
        yield i + =2;
    }
}

