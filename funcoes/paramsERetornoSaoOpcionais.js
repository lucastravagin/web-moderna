function area(largura,altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido ${area} m2.`)
    } else {
        return area
    }
}

console.log(area(2,2)) //4
console.log(area(2)) //NaN
console.log(area()) //NaN
Console.LOG(2,3,17,3) //6





