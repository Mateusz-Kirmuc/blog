const loader = document.querySelector('.loader');

loader.addEventListener('mousemove', function(event) {
    const circle = event.target.closest('.loader');
    const rect = circle.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    // Przesunięcie kąta tak, aby 0 stopni było na górze
    angle = angle + 90;

    // Zamiana kąta na zakres 0-360
    if (angle < 0) {
        angle += 360;
    }
    loader.style.transform = `rotate(${angle.toFixed(2)}deg)`;
    // loader.style.rotate = `${angle.toFixed(2)}deg`;

    // document.getElementById('angle').innerText = `${angle.toFixed(0)} deg`;
});

loader.addEventListener('mouseenter', (event) => {
    loader.style.animationName = 'unset';
    // loader.style.animationDuration = '0s';

})

loader.addEventListener('mouseleave', (event) => {
    loader.style.animationName = 'spinning';
    loader.style.animationDuration = '15s';
})
