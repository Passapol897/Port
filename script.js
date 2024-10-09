document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // ลบคลาส active จากทุกลิงก์ใน sidebar
        document.querySelectorAll('.sidebar a').forEach(link => {
            link.classList.remove('active'); // ลบ active จากทุกลิงก์
        });

        // เพิ่มคลาส active ให้กับลิงก์ที่ถูกคลิก
        this.classList.add('active');

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // คำนวณตำแหน่งเพื่อเลื่อนให้กลาง
            const offset = targetElement.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const openPopupBtn = document.getElementById("openPopupBtn");

    openPopupBtn.onclick = function() {
        popup.style.display = "block";
    };

    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    };
});


