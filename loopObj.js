const numbers = [ 45,66,78,55]

for (const number of numbers) {
    console.log(number)
}

const Iftar= {iteam: 5, name: ['muglay', 'baguni','khajur','nimki'], price: 200, isCleaned : true, capacity: 4}

for (const key in Iftar) {
    
        console.log(key, Iftar[key])
    
}