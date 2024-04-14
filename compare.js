// const first = { a : 2 } 
// const second = { a : 2} 
// if( first === second){
//     console.log('they are same')
// } 
// else{
//     console.log('different')
// }


const first = { a: 2, c: 9, h: 5 }
const second = { a: 2, c: 9, h: 6 }

function compareObject(first, second) {
    const firstKey = Object.keys(first)
    const secondKey = Object.keys(second)
    if (firstKey.length === secondKey.length) {

        for (const key of firstKey) {
            if (first[key] !== second[key])
                return false
        }
    }
    return true
}

console.log(compareObject(first, second))