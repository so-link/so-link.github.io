// 轮播图功能
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');

    let currentIndex = 0;
    let intervalId = null;
    const intervalTime = 5000; // 5秒自动切换

    // 更新轮播位置
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 20}%)`;

        // 更新指示器
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // 下一张
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    // 上一张
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    // 开始自动轮播
    function startAutoPlay() {
        intervalId = setInterval(nextSlide, intervalTime);
    }

    // 停止自动轮播
    function stopAutoPlay() {
        clearInterval(intervalId);
    }

    // 事件监听
    nextBtn.addEventListener('click', () => {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
    });

    // 指示器点击
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopAutoPlay();
            currentIndex = index;
            updateCarousel();
            startAutoPlay();
        });
    });

    // 鼠标悬停时暂停轮播
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);

    // 初始化
    updateCarousel();
    startAutoPlay();
});