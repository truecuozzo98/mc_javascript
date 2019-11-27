let arr = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"]

for(let i = 1 ; i<=31 ; i=i+7){
    arr.forEach(printElement);
    function printElement(value, j){
        if(j+i <= 31){
            console.log(value+" "+(j+i)+" Ottobre 2018")
        }
    }
}
