function miFuncion(){
    return true;
}

const asinc = new Promise((resolve, reject) => {
    const myTimeOut = setTimeout(miFuncion, 5000);
    if(true){
        resolve();
    }else{
        reject();
    }
});

asinc 
    .then(() => "Hola soy una promesa");


function* generator(){
    let i;
    i = 0;
    while(true){
        i *= 2;
        if(i === 22){
            return;
        }
        yield i;
    }
}

