document.addEventListener('DOMContentLoaded', () => {
    const queryParams = new URLSearchParams(window.location.search);
    const bolum = queryParams.get('bolum');

    const videos = {
        matematik: [
            { title: "Matematik Ders 1", src: "path-to-math-video1.mp4", description: "Matematik Ders 1 açıklaması." },
            { title: "Matematik Ders 2", src: "path-to-math-video2.mp4", description: "Matematik Ders 2 açıklaması." },
        ],
        fizik: [
            { title: "Fizik Ders 1", src: "path-to-physics-video1.mp4", description: "Fizik Ders 1 açıklaması." },
            { title: "Fizik Ders 2", src: "path-to-physics-video2.mp4", description: "Fizik Ders 2 açıklaması." },
        ],
        kimya: [
            { title: "Kimya Ders 1", src: "path-to-chemistry-video1.mp4", description: "Kimya Ders 1 açıklaması." },
            { title: "Kimya Ders 2", src: "path-to-chemistry-video2.mp4", description: "Kimya Ders 2 açıklaması." },
        ],
        biyoloji: [
            { title: "Biyoloji Ders 1", src: "path-to-biology-video1.mp4", description: "Biyoloji Ders 1 açıklaması." },
            { title: "Biyoloji Ders 2", src: "path-to-biology-video2.mp4", description: "Biyoloji Ders 2 açıklaması." },
        ]
    };

    if (bolum && videos[bolum]) {
        const videoListSection = document.querySelector('.video-list');
        videos[bolum].forEach((video, index) => {
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');
            videoItem.innerHTML = `<a href="#" data-src="${video.src}" data-description="${video.description}">${video.title}</a>`;
            videoListSection.appendChild(videoItem);

            if (index === 0) {
                document.getElementById('video-source').src = video.src;
                document.getElementById('video-description').textContent = video.description;
                document.getElementById('main-video').load();
            }
        });

        document.querySelectorAll('.video-item a').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const videoSrc = this.getAttribute('data-src');
                const videoDescription = this.getAttribute('data-description');
                document.getElementById('video-source').src = videoSrc;
                document.getElementById('video-description').textContent = videoDescription;
                document.getElementById('main-video').load();
                document.getElementById('main-video').play();
            });
        });
    } else {
        document.querySelector('h1').textContent = 'Bölüm Bulunamadı';
    }
});
