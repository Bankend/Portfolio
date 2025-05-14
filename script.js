// script.js
let username = "John Doe";
let age = 23;

console.log("ชื่อ:", username);
console.log("อายุ:", age);

function checkAge(age) {
    if (age >= 18) {
        console.log("คุณบรรลุนิติภาวะแล้ว");
    } else {
        console.log("คุณยังไม่บรรลุนิติภาวะ");
    }
}

checkAge(15);
checkAge(25);

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // ไม่ให้รีเฟรชหน้าเว็บ

    let name = document.getElementById("nameInput").value;
    let message = document.getElementById("messageInput").value;

    showResponse(name, message);
});

function showResponse(name, message) {
    let response = `ขอบคุณ คุณ ${name} ที่ส่งข้อความ: "${message}"`;
    document.getElementById("response").textContent = response;
}