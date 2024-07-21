document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.querySelector('.timeline-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    timelineContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - timelineContainer.offsetLeft;
        scrollLeft = timelineContainer.scrollLeft;
    });

    timelineContainer.addEventListener('mouseleave', () => {
        isDown = false;
    });

    timelineContainer.addEventListener('mouseup', () => {
        isDown = false;
    });

    timelineContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - timelineContainer.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        timelineContainer.scrollLeft = scrollLeft - walk;
    });

    timelineContainer.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - timelineContainer.offsetLeft;
        scrollLeft = timelineContainer.scrollLeft;
    });

    timelineContainer.addEventListener('touchend', () => {
        isDown = false;
    });

    timelineContainer.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - timelineContainer.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        timelineContainer.scrollLeft = scrollLeft - walk;
    });
});
