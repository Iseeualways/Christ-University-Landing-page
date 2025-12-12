
$('.card-carousel').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 700,
    cssEase: 'ease',

    responsive: [
        {
            breakpoint: 992,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 576,
            settings: { slidesToShow: 1, centerPadding: '0px' }
        }
    ]
});


const line = document.querySelector(".timeline-line");
const points = document.querySelectorAll(".point");
const steps = document.querySelectorAll(".step");

window.addEventListener("scroll", () => {
    const sec = document.querySelector(".timeline-section");
    const rect = sec.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.9;
    let progress = (triggerPoint - rect.top) / (rect.height);
    progress = Math.max(0, Math.min(1, progress));
    line.style.width = (progress * 100) + "%";
    let active = Math.floor(progress * points.length);
    points.forEach((p, i) => p.classList.toggle("active", i < active));
    steps.forEach((s, i) => s.classList.toggle("active", i < active));
});



var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },

    slidesPerView: 1,

    breakpoints: {
        480: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
        1400: {
            slidesPerView: 5
        }
    }
});



function countUpAnimation() {
    const counters = document.querySelectorAll('.stat-counter');
    const targetValues = [520, 38, 40, 339053, 90000];
    const duration = 2000; // 2 seconds

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');

                counters.forEach((counter, index) => {
                    const target = targetValues[index];
                    const increment = target / (duration / 16);
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            counter.textContent = target.toLocaleString() + "+";
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.floor(current).toLocaleString();
                        }
                    }, 16);
                });
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-section');
    observer.observe(statsSection);
}

document.addEventListener('DOMContentLoaded', countUpAnimation);
