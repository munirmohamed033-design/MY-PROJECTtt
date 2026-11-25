// 1. تفعيل قائمة الموبايل (Mobile Menu)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// إغلاق القائمة عند الضغط على أي رابط
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 2. تشغيل معرض الصور المكبر (Lightbox)
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    const imgSrc = element.querySelector('img').src;
    const captionText = element.querySelector('.overlay span').innerText;

    lightboxImg.src = imgSrc;
    lightboxCaption.innerText = captionText;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// 3. إرسال بيانات نموذج الحجز مباشرة إلى واتساب أ/ محمد منير
const whatsappForm = document.getElementById('whatsappForm');

whatsappForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('studentName').value;
    const phone = document.getElementById('studentPhone').value;
    const course = document.getElementById('courseSelect').value;

    const academyNumber = "201141057651"; // رقم الواتساب بكود الدولة

    const message = `السلام عليكم أستاذ محمد منير، أرغب في حجز كورس:%0A` +
                    `👤 *الاسم:* ${name}%0A` +
                    `📱 *الموبايل:* ${phone}%0A` +
                    `📚 *الكورس المطلوب:* ${course}`;

    const whatsappURL = `https://wa.me/${academyNumber}?text=${message}`;

    // فتح واتساب في نافذة جديدة
    window.open(whatsappURL, '_blank');
});