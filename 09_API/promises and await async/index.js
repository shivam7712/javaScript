function shivamAsyncFunc() {

    return new Promise(function(reslove){
        setTimeout(()=>{
            reslove("promise done");
        }, 2000);
    });

}


// .then syntax without async await function

/* function main() {

    const value = shivamAsyncFunc();
    value.then(function() {
    console.log("hi");

    });
}

main(); */

// NOTE : when we write await we get resovled value othervise 
// we get promise({pending}) or promise({"hi"}) if not using setTimeout

async function main() {
    const value  = await shivamAsyncFunc();
    console.log( value );

}


main();

// why we used the main function, reason: await is only written inside async function.

/* const p = new Promise(function(reslove) {
    setTimeout(function() {
        reslove("done");
    }, 1);

});

function callBack() {
    console.log(p);
    
}

for (let i = 0; i<10000000000; ) {
    i++;
}

console.log(p);

p.then(callBack); */