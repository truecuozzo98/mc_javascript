let string = "ciaosciaorciao", max = ""

for (let i = 0 ; i < string.length ; i++) {
    for(let j = i+1 ; j<string.length ; j++ ){
        max = longest_substring(i, j, max)
    }
}

console.log("La sottostringa più lunga di " +string+" è "+max)



function longest_substring(i, j, max){
    let test = ""
    if(string.charAt(i) == string.charAt(j)){
        do{
            test += string.charAt(i)
            i++
            j++
        } while (string.charAt(i) == string.charAt(j))
    }

    return return_max(test, max)
}

function return_max(s1, s2){
    if(s1.length > s2.length){
        return s1
    } else {
        return s2
    }
}
