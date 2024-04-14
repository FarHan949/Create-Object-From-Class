const mysym = Symbol('king')

const company = {
    name: 'Alibaba',
    market_cap : '1.41 trillion',
    what_do : 'global wholesale marketplace',
    revenue :  134.567,

    [mysym] : 5,
    Yearly_revenue : function(yearly){
        return (this.name, `annual revenue for 2022 was $${yearly}B.`)  
    },
    owner : function (own){
      this.name
      return `${this.name} group owner ${own} `
    },
    net_profit : function(profit){
        this.revenue = this.revenue - profit
        return this.revenue
    }
}
// console.log(typeof mysym)
console.log(typeof company[mysym])
console.log(company[mysym])

const report =  company.Yearly_revenue(134.567)
// console.log(report)

const ownerShip = company.owner('Jack Ma Yun')
// console.log(ownerShip)

const net_income = company.net_profit(9.774)
// console.log(net_income)
// console.log(company)