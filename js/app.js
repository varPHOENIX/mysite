// let bg = document.querySelector('.mouse-parallax-bg');
// window.addEventListener('mousemove', function(e) {
//     let x = e.clientX / window.innerWidth;
//     let y = e.clientY / window.innerHeight;
//     bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
// });
// window.onload = function() {
//     const parallax = document.querySelector('.paralaxx');

//     if (parallax) {
//         const content = document.querySelector('.parallax__container');
//         const clouds = document.querySelector('.images-parallax__clouds');
//         const mountains = document.querySelector('.images-parallax__mountains');
//         const human = document.querySelector('.images-parallax__human');

//         const forClouds = 40;
//         const forMountains = 20;
//         const forHuman = 10;

//         const speed = 0.05;

//         let positionX = 0,
//             positionY = 0;
//         let coordXprocent = 0,
//             coordYprocent = 0;

//         function setMouseParallaxStyle() {
//             const distX = coordXprocent - positionX;
//             const distY = coordYprocent - positionY;

//             positionX = positionX + (distX * speed)
//             positionY = positionY + (distY * speed)

//             requestAnimationFrame(SettMoudeParallaxStyle);
//         }


// }
// }