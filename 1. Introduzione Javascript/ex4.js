const c1 = 45, c2 = 20
var divisori_c1 = []

for (let i=1 ; i<=c1 ; i++){
    if(c1 % i == 0){
        divisori_c1.push(i)
    }
}

var flag = false
for (let a of divisori_c1) {
    if(a==c2){
        flag = true
    }
}

if(flag){
    console.log(c2 + " è un divisore di "+c1)
} else {
    console.log(c2 + " NON è un divisore di "+c1)
}