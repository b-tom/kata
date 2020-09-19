function search(budget, prices) {
    affString = ''
    affordable = prices.filter(price => price<= budget).sort(function(a, b){return a-b})
    affordable.forEach(ele => affString += `${ele},`)
    return affString.slice(0, affString.length -1)
    }