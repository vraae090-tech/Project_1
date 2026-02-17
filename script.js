// spotlight effect - makes a flashlight that follows the mouse

var overlay = document.createElement('div');
overlay.classList.add('spotlight-overlay');
document.body.appendChild(overlay);

document.addEventListener('mousemove', function(e) {
    overlay.style.setProperty('--mouse-x', e.clientX + 'px');
    overlay.style.setProperty('--mouse-y', e.clientY + 'px');
});
