document.getElementById('gotoPageButton')?.addEventListener('click', function() {
    window.location.href = 'page.html';
});

document.getElementById('gotoMainButton')?.addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.querySelectorAll('.info-box').forEach(function(box) {
    box.addEventListener('click', function() {
        document.getElementById('popup').style.display = 'flex';
        let text = '';
        if (this.id === 'aboutBox') {
            text = 'Tentang lu yang suka main judi online dan pencari janda';
        } else if (this.id === 'educationBox') {
            text = 'Pendidikan lu S teh, S batu S 6 kampus di Planet Mars';
        } else if (this.id === 'workBox') {
            text = 'kerja dipemerintahan banyak duit karna korupsi';
        }
        document.getElementById('popupText').innerText = text;
    });
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.5}s`;
    });
	document.getElementById('gotoPageButton').style.animationDelay = '0s';
    document.querySelectorAll('.small-photos img').forEach((img, index) => {
        img.style.animationDelay = `${index * 0.5}s`;
    });
    document.querySelectorAll('.info-box').forEach((box, index) => {
        //@gry
		box.style.animationDelay = `${index * 0.5}s`;
    });
});