function studentScore(number) {
    if (number < 0 || number > 100) return console.log("invalid") 
    
    if (number >= 80 && number <= 100) {
        console.log("A")
    } else if (number >= 65) {
        console.log("B+")
    } else if (number >= 50) { 
        console.log("B") 
    }
    else if (number >= 35) {
        console.log("C")
    } else if (number >= 0) {
        console.log("D")
    } return number
}


studentScore(64)
studentScore(65)
studentScore(49)
studentScore(-1)
studentScore(101)
// input
let score = 101
console.log(studentScore(score)) // Nilai A