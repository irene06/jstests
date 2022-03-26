//Escriba una función que permita multiplicar numeros sin usar el signo de multiplicar
const multiply = (a,b) => {
    let resultado = 0 
    const positivo = Math.abs(b) == b
    for (i=0; i<Math.abs(b);i++) {
        resultado = positivo ? resultado + a: resultado - a
    }
    return resultado
}
const a = multiply(50,50)
console.log(a)

const getBiggest = (arr) => arr.reduce((acc,el) => acc > el ? acc:el)
const b = getBiggest([50,-1500,1000,0,1,54])
console.log(b)

// Iterando solo una vez defina una funcion que permita eliminar los undefined,null y 0.
const clean =(arr) => arr.reduce ((acc,el) => {
    if (el) {
        acc.push(el)
    }
    return acc
},[])
const c = clean ([1,undefined,null,0,2,3])
console.log (c)

//Escribir una funcion que aplane los arreglos a un nivel
const arr =[[1,2],[[3,4]],[1,[]]]

//1,2,[3,4], 1,[]

const flatten = arr => arr.reduce ((acc,el)=>acc.concat(el),[])
const d = flatten (arr)
console.log(d)
// Escribir una funcion que cuente la cantidad de veces que se repite una palabra
const repeated = str => {
const lowered = str.toLowerCase()
const splitted =lowered.split('')
const reduced = splitted.reduce((acc,el) => {
    if (acc[el]) {
        acc[el]++
    } else{
        acc[el] =1
    }
    return acc
},{})
return Object.entries(reduced).reduce ((acc,el) => acc[1] >el[1] ? acc : el)
}
const e = repeated ('this is a repeated word test this is a a')
console.log(e)

//Verificar si el string es un palindromo
const isPalindrome =(str) => {
    str = str.replace(/\s/g,'')
    const lowered =str.toLowerCase()
    const splitted =lowered.split('')
    const reversed =splitted.reverse()
    const joined =reversed.join ('')
    return lowered == joined
}
const f = isPalindrome('anna')
console.log(f)
