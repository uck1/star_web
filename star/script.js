document.addEventListener('DOMContentLoaded', () => {
    console.log('Сайт завантажено з ефектом зоряного неба!');

    // Додаємо спалахи зірок при кліку на кожну категорію
    document.querySelectorAll('.category').forEach(category => {
        category.addEventListener('click', (event) => {
            createSpark(event.clientX, event.clientY, category);
        });
    });

    // Запускаємо падаючу зірку через випадкові інтервали
    setInterval(createShootingStar, 3000); // кожні 3 секунди
});

function createSpark(x, y, container) {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    spark.style.left = `${x - container.getBoundingClientRect().left}px`;
    spark.style.top = `${y - container.getBoundingClientRect().top}px`;
    spark.style.width = '10px';
    spark.style.height = '10px';

    container.appendChild(spark);

    // Видаляємо елемент після завершення анімації
    spark.addEventListener('animationend', () => {
        spark.remove();
    });
}

function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');

    // Випадкове розташування початкової точки
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight / 2; // верхня половина екрану
    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    document.body.appendChild(star);

    // Видаляємо зірку після анімації
    star.addEventListener('animationend', () => {
        star.remove();
    });
}
