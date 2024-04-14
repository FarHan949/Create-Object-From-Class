const iftrai = {iteam: 5, name: ['muglay', 'baguni','khajur','nimki'], price: 200, isCleaned : true, capacity: 4}

const key = Object.keys(iftrai)
// console.log(key)

const values = Object.values(iftrai)
// console.log(values)
Object.seal(iftrai)
delete iftrai.isCleaned
const entries = Object.entries(iftrai)
console.log(entries)