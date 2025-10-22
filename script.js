// Event Humberger
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const mainHeader = document.querySelector('.main-header');
    if (navToggle && navLinks) {
        // Fungsi untuk menutup menu
        function closeMenu(){
            if (navLinks.classList.contains('active')){
                navLinks.classList.remove('active');
                navToggle.querySelector('i').classList.remove('fa-times');
                navToggle.querySelector('i').classList.add('fa-bars');
            }
        }
        // Fungsi untuk membuka/menutup menu
        navToggle.addEventListener('click', (event) => {
            // Menghetikan event agar tidak langsung menyebar ke document  (mencegah penutupan Instan)
            event.stopPropagation();
            navLinks.classList.toggle('active');
            // Mengubah ikon
            const icon = navToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
        // Tutup menu saat link diklik (untuk navigasi ke section)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });
        // Klik diluar menu Otomatis Ketutup
        document.addEventListener('click', (event) => {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickOnToggle = navToggle.contains(event.target);
    
            // Pastikan menggunakan classList.contains()
            if(navLinks.classList.contains('active') && !isClickInsideMenu && !isClickOnToggle){
                closeMenu();
            }
        });
    }
});