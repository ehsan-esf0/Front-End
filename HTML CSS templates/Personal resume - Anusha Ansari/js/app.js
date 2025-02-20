const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const herobtn = document.querySelector("#hero-btn");
const h4hero = document.querySelector("#h4hero");
const heroinfo = document.querySelector("#hero-info");

// add fixed class to navbar
window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});

// show sidebar
navBtn.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar");
});

// close sidebar
closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});

herobtn.addEventListener("click" , function () {
    h4hero.textContent = "انوشه انصاری (زادهٔ ۲۱ شهریور ۱۳۴۵ در مشهد)، کاوشگر، مهندس و کارآفرین ایرانی-آمریکایی و رئیس انجمن گردانندگان شرکت فناوری ارتباط از راه دور (TTI) است. انوشه انصاری، اولین زن گردشگر فضایی، اولین ایرانی‌تبار، دومین فضانورد فارسی‌زبان پس از عبدالاحد مومند و اولین زن مسلمانی است که به فضا سفر کرده است. و چهارمین نفری است که هزینه سفر فضایی خود را پرداخت کرده است. در سال ۲۰۱۵ میلادی، جامعه ملّی فضای آمریکا جایزهٔ «پیشگام فضا» را به انصاری-نخستین زن گردشگر فضایی-اهدا کرد. او در سخنرانی خود در تداکس‌تهران جوانان، دربارهٔ رؤیای سفر به فضا سخنرانی کرد.";
    herobtn.remove();
});