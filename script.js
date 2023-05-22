function pow (num, degree){
    if(num == 0 && degree == 0) console.log(`It's impossible to raise 0 to the power ${degree}`)
    if(num == 0 || num == 1) return num
    if(degree > 1) return num * pow(num, --degree)
    if(degree < 1) return 1 / num * pow(num, ++degree)
    return num
}

const numder = pow(-3, 2)
console.log(number)