const img = document.getElementById('img_test')
const text = document.getElementById('text')
var h = document.documentElement.clientWidth
x = ["a1.png","a2.png","a3.png","a4.png"]
t = ["1.กดSTARTแล้วแก้โจทย์ปัญหาที่ให้มา","2.คลิกที่ปุ่มบริเวณมุมขวาล่างแล้วใส่คำตอบที่คิดจากโจทย์","3.คลิกปุ่ม FLIP เพื่อกลับหัวคำตอบแล้วแปลงเป็นคำศัพท์อังกฤษ",""]
get = 0
sum = 0

//ต้องการเพิ่มคําอธิบายใหม่ให้เพิ่มภาพที่่xและเพิ่มคําอธิบายที่t xและtต้องเท่ากัน

for (let i = 0, len = x.length; i < len; i++) {
    sum = i
}

function cilckback() { //เปลี่ยนภาพไปขกลับ
    console.log(get)
    get -= 1
    if (get < 0) {
        get = sum - 1
    }

    img.src = 'img/' + x[get]
    text.innerHTML = t[get]
}

function cilcknext() { //เปลี่ยนภาพไปข้างหน้า
    console.log(get)
    get += 1
    if (get > sum) {
        get = 0
    }
    if (get == sum) {
        window.location = "https://jiratchaya93.github.io/emptry/comment_decode-main/Decodemath.html";    
    }
    img.src = 'img/' + x[get]
    text.innerHTML = t[get]
    if (h < 800 && get == 2) {
        img.src = 'img/Pa3.png'
        text.innerHTML = "3.กลับหัวโทรศัพท์แล้วแปลงตัวเลขเป็นคำศัพท์อังกฤษ"
      }
}