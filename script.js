// ข้อมูลจำลอง
let balance = 0;
let wishlist = [];

// 1. ระบบ Login
function checkLogin() {
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    
    if (u === 'p' && p === '2172568') {
        showPage('main-page');
    } else {
        document.getElementById('login-error').innerText = "รหัสไม่ถูก!";
    }
}

// 2. เปลี่ยนหน้าพร้อม Animation
function showPage(pageId) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// 3. ระบบจำลอง AI สแกนเงิน (Smart Scanner)
function scanMoneySimulation() {
    // ในความเป็นจริงจะใช้กล้อง แต่ที่นี้เราจำลอง Logic
    let detectedAmount = Math.floor(Math.random() * 900) + 100; // สุ่มยอดเงินที่เจอ
    alert(`AI ตรวจพบ: แบงก์ร้อย ${detectedAmount/100} ใบ ยอดรวม ${detectedAmount} บาท`);
    return detectedAmount;
}

// 4. ระบบ AI ผู้ช่วย (Smart Advisor)
function askAI() {
    const input = document.getElementById('ai-input').value;
    const chatBox = document.getElementById('ai-messages');
    
    // จำลองคำตอบ AI ฉลาดๆ
    let response = "จากการวิเคราะห์เงินของคุณ ถ้าคุณลดค่ากาแฟลง 10% คุณจะซื้อของที่อยากได้เร็วขึ้น 2 สัปดาห์ครับ!";
    
    chatBox.innerHTML += `<p><b>คุณ:</b> ${input}</p>`;
    chatBox.innerHTML += `<p style="color:var(--accent)"><b>AI:</b> ${response}</p>`;
    document.getElementById('ai-input').value = "";
}

// ฟังก์ชันอื่นๆ เช่น การแบ่งเงิน % จะถูกเพิ่มตามการคลิกสร้างรายการ