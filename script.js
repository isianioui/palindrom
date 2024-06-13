const str0 = document.getElementById("inpt")

const longueur = str0.length
console.log(longueur)

function reversString(str){
    return str.split("").reverse().join("")
}

function check(){
    const value = str0.value
     const reverse = reversString(value)
     if (value === reverse){
        alert("the word you entered is reversable")
     }
     else{
        alert(" the word you entered is not reversable")
     }
     str0.value=""
}