function solution(input) {
    const evenNum = []
    const oddNum = []
    for (i = 0; i < input.length; i++) {
        if (input[i] % 2 !== 0 ){
            oddNum.push(input[i])
        } else 
            evenNum.push(input[i])
            
    }
    oddNum.sort((a,b) => a-b)
    evenNum.sort((a,b) => a-b)
    return oddNum.concat(evenNum)
}
    

console.log(solution([4, 2, 5, 7, 1, 6]))
console.log(solution([25, 40, 14, 91, 31, 22, 49, 13, 6]))

// thinking process
// สร้างตัวแปร ขึ้นมาเพื่อเก็บ array ของเลขคู่และเลขคี่ 
// หาเลขคู่และเลขคี่โดยการ ที่ สร้าง for loop ขึ้นมา และเลือก index ที่ 0 ของ array 
// สร้าง if โดยใส่ condition ว่า เลขที่เข้ามาจะโดนกรองโดย การ ใช้ modulus operator % 
// เพื่อหาเศษจากการหาร ถ้าเป็นเลขคู่ เศษจะเท่ากับ 0 และให้ push เลขคู่เข้าไปใน ตัวแปร array เลขคู่ที่เตรียมไว้
// ถ้าหากเป็นเลขคี่ใช้ else เพื่อ push เลขคี่เข้า ตัวแปร array เลขคี่
// นำทั้งสอง array มา sort โดย กำหนด condition (a,b) => a-b เพื่อเรียงจากน้อยไปมาก
// นำทั้งสอง array มาต่อกัน โดยเริ่มจาก array เลขคี่ก่อนและ concat ต่อด้วย array เลขคู่