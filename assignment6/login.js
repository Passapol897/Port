window.onload = function() {
    document.getElementById('myLogin').onsubmit = validateLogin;
};

function validateLogin() {
    const form = document.forms['myLogin'];
    const username = form['username'].value;
    const password = form['password'].value;

    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    // ตรวจสอบว่ากรอกชื่อผู้ใช้และรหัสผ่านหรือไม่
    if (!username || !password) {
        alert('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
        return false;
    }

    // ตรวจสอบว่าข้อมูลตรงกันหรือไม่
    if (username !== savedUsername || password !== savedPassword) {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่');
        return false;
    }

    // แสดงข้อความเข้าสู่ระบบสำเร็จ
    alert('เข้าสู่ระบบสำเร็จ!');
    return true; 
}
