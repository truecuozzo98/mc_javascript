/*let print1 = function sum() {
    console.log("1")
}

let print3 = function sum() {
    console.log("33")
}

let print5 = function sum() {
    console.log("555")
}

let print7 = function sum() {
    console.log("7777")
}

let print9 = function sum() {
    console.log("99999")
}

print1()
print3()
print5()
print7()
print9()*/



for(let i=1 ; i<=9 ; i++){
    if(i%2 != 0){
        console.log(print(i))
    }
}

function print(i){
    let s = ""
    for(let j=0 ; j<=i/2 ; j++){
        s += i
    }
    return s
}