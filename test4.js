function findingPrime(input) {
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(n) {
    let sum = 0
    for (let i = 2; i <= n; i++) {
        if (findingPrime(i)) {
            sum += i;
        }
    }
    return sum
}
console.log(solution(10))
console.log(solution(59))

// thinking process
// เริ่มจากการสร้าง function findingPrime เพื่อหาจำนวนเฉพาะ โดยการสร้าง for loop และกำหนดการตรวจสอบ โดยวนตรวจสอบตัวหารที่เป็นไปได้ตั้งแต่ 2 ไปจนถึงรากที่ 2 ของ input
// สร้าง function solution เพื่อคำนวณ ผลรวม ของจำนวนเฉพาะที่หามาได้จาก function ก่อนหน้า 
// โดยสร้างตัวแปร sum ขึ้นมาเพื่อรอรับค่าผลรวม จากนั้นใช้ for loop เพื่อตรวจสอบตัวเลขตั้งแต่ 2 ถึง n สำหรับแต่ละหมายเลข i ซึ่งจะมาการเรียก function findingPrime(i) เพื่อตรวจสอบว่าเป็นจำนวนเฉพาะหรือไม่