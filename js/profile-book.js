document.addEventListener('DOMContentLoaded', function () {
    const bookEl    = document.getElementById('book');
    const prevBtn   = document.getElementById('prevBtn');
    const nextBtn   = document.getElementById('nextBtn');
    const pgNum     = document.getElementById('pgNum');
    const pgTotal   = document.getElementById('pgTotal');

    const W = window.innerWidth;
    let bw = 440, bh = 620;
    if (W < 1100) { bw = 390; bh = 560; }
    if (W < 768)  { bw = 320; bh = 480; }
    if (W < 480)  { bw = 280; bh = 420; }

    const pages = document.querySelectorAll('.page');
    pgTotal.textContent = pages.length;

    const pf = new St.PageFlip(bookEl, {
        width: bw, height: bh,
        size: 'fixed',
        minWidth: 260, maxWidth: 520,
        minHeight: 380, maxHeight: 720,
        maxShadowOpacity: 0.45,
        showCover: true,
        mobileScrollSupport: false,
        usePortrait: false
    });

    pf.loadFromHTML(pages);

    pf.on('flip', e => {
        pgNum.textContent = e.data + 1;
        prevBtn.disabled = e.data === 0;
        nextBtn.disabled = e.data >= pages.length - 1;
    });

    prevBtn.addEventListener('click', () => pf.flipPrev());
    nextBtn.addEventListener('click', () => pf.flipNext());

    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   pf.flipPrev();
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown')  pf.flipNext();
    });

    prevBtn.disabled = true;
    // --- Interactive Enhancements ---
    // 1. Page Flip Sound
    const flipSound = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_7306260c6d.mp3?filename=turning-pages-103251.mp3');
    flipSound.volume = 0.4;
    
    pf.on('flip', (e) => {
        // Play sound on flip
        flipSound.currentTime = 0;
        flipSound.play().catch(e => console.log('Audio play prevented by browser'));
        
        // Add active classes to animate elements inside the current pages
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
        setTimeout(() => {
            document.querySelectorAll('.page.st-page--active').forEach(p => p.classList.add('active-page'));
        }, 300);
    });

    // 2. Click Ripple Effect on Book
    bookEl.addEventListener('mousedown', function (e) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        const rect = bookEl.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        bookEl.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });


    // --- Entrance Animation ---
    // Start VERY large and hidden
    bookEl.style.transform = 'scale(3) translateY(50px)';
    bookEl.style.opacity = '0';
    bookEl.style.transition = 'transform 1.2s cubic-bezier(0.2, 0.9, 0.2, 1), opacity 1s ease-out';
    
    // Snap into place strongly
    setTimeout(() => {
        bookEl.style.transform = 'scale(1) translateY(0)';
        bookEl.style.opacity = '1';
    }, 100);
});
