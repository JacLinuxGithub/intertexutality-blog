function revealPosts() {
    document.querySelectorAll('.post').forEach(post => {
        const rect = post.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            post.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', () => {
    revealPosts();

    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('load', revealPosts);