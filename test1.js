function solution(input, target) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i+1; j < input.length; j++) {
      if (input[i] + input[j] === target) {
        return true;
      }
    }
    }
    return false;
}

console.log(solution([1, 3, 5, 7, 16, 4],8))
console.log(solution([1, 3, 5, 7, 16, 4],12))
console.log(solution([1, 3, 5, 7, 16, 4],18))
console.log(solution([12, 17, 14, 11, 19, 8],20))

// thinking process 
// ใช้ การวน for loop โดยเลือก array ที่ index 0 และ เขียน nested for loop อีกชุดเพื่อเลือก array index ที่ 1
// นำ ตัวเลยจาก array index 0 และ 1 มา + กัน และเปรียบเทียบกับ target ถ้าตรงกับ target ให้แสดงค่าเป็น true ถ้าไม่ให้แสดงค่าเป็น false