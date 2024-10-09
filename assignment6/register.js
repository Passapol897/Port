window.onload = function() {
    document.getElementById('myRegister').onsubmit = validateRegistration;
};

function validateRegistration() {
    const form = document.forms['myRegister'];
    const username = form['username'].value;
    const password = form['password'].value;
    const retypePassword = form['retype_password'].value;
    const errorMsg = document.getElementById('errormsg');

    errorMsg.textContent = '';

    // ตรวจสอบว่ากรอกข้อมูลในทุกฟิลด์ที่จำเป็น
    for (let element of form.elements) {
        if (element.hasAttribute('required') && !element.value) {
            errorMsg.textContent = 'กรุณากรอกข้อมูลในฟิลด์ที่จำเป็นทั้งหมด';
            return false;
        }
    }

    // ตรวจสอบว่ารหัสผ่านตรงกันหรือไม่
    if (password !== retypePassword) {
        errorMsg.textContent = 'รหัสผ่านไม่ตรงกัน';
        return false;
    }

    // บันทึกข้อมูลผู้ใช้ 
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

}
