document.addEventListener('DOMContentLoaded', () => {
    console.log('Сайт завантажено з ефектом зоряного неба!');


    document.querySelectorAll('.category').forEach(category => {
        category.addEventListener('click', (event) => {
            createSpark(event.clientX, event.clientY, category);
        });
    });

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


    spark.addEventListener('animationend', () => {
        spark.remove();
    });
}

function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');

  
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight / 2; 
    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    document.body.appendChild(star);

    
    star.addEventListener('animationend', () => {
        star.remove();
    });
}
