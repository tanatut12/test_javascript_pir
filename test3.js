function solution(input) {
    let inputStr = input.map(input => input.toString())
    for (let i = 0; i < inputStr.length; i++) {
        for (let j = 0; j < inputStr.length - 1 - i; j++) {
            let a = inputStr[j] + inputStr[j + 1]
            let b = inputStr[j + 1] + inputStr[i]
            if (a < b) {
                let temp = inputStr[j]
                inputStr[j] = inputStr[j+1]
                inputStr[j+1] = temp
            }
        }
    }
    let largestNumber = inputStr.join('')
    if (largestNumber[0] === '0') {
        return '0'
    }
    return largestNumber
}

console.log(solution([10, 2, 13, 7]));
console.log(solution( [21, 36, 8, 45]));

// thinking process
// เริ่มจาก การนำ input มาเปลี่ยนเป็น string 
// สร้าง for loop ที่ nested เพื่อ นำ input แต่ละตำแหน่งมาต่อกัน และนำมาเปรียบเทียบ ว่า index 0 + 1 หรือ index 1 + 0 ตัวไหนมีค่ามากกว่า 
// และใช้การสลับที่ เพื่อนำตัวที่มีค่ามากที่สุดมาอยู่ข้างหน้าเสมอ หลังจากเรียงลำดับเสร็จจะนำมา .join เพื่อต่อ string และ return ผลลัพท์ออกมา