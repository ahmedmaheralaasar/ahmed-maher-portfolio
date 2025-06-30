// ========== THEME TOGGLE ==========
const body = document.getElementById('pageBody');
const header = document.getElementById('siteHeader');
const toggleBtn = document.getElementById('themeToggle');
let dark = false;

function setIcon() {
    toggleBtn.innerHTML = '';
    const icon = lucide.createElement(dark ? 'Sun' : 'Moon');
    icon.setAttribute('class', 'lucide w-4 h-4');
    toggleBtn.appendChild(icon);
}

toggleBtn.addEventListener('click', () => {
    dark = !dark;
    body.classList.toggle('dark-mode', dark);
    header.classList.toggle('dark-mode', dark);
    setIcon();
});

setIcon();

// ========== PROJECTS ==========
const projects = [
    {
        title: 'MoneyLab University – Editing Showcase',
        desc: 'مونتاج احترافي لمحتوى مالي وتعليمي من قناة MoneyLab.',
        link: 'https://www.youtube.com/watch?v=obhmpJAGRDM',
        thumb: 'https://img.youtube.com/vi/obhmpJAGRDM/hqdefault.jpg',
    },
    {
        title: 'YouTube Short – Final Cut',
        desc: 'فيديو قصير محرر باستخدام تقنيات مونتاج سريعة ومؤثرة.',
        link: 'https://www.youtube.com/shorts/yOUNoUyXfkQ',
        thumb: 'https://img.youtube.com/vi/yOUNoUyXfkQ/hqdefault.jpg',
    },
    {
        title: 'Edit with Panda – YouTube Video',
        desc: 'مونتاج احترافي لفيديو على قناة Edit with Panda يستعرض مهارات القص والتحريك.',
        link: 'https://www.youtube.com/watch?v=yam_xvGVEu8',
        thumb: 'https://img.youtube.com/vi/yam_xvGVEu8/hqdefault.jpg',
    },
    {
        title: 'Deep Work Review – Ali Abdaal',
        desc: 'تحليل مونتاج وتحرير فيديو لمحتوى إنتاجي وتعليمي من قناة علي عبدهال.',
        link: 'https://www.youtube.com/watch?v=wD9hMYbijDA',
        thumb: 'https://img.youtube.com/vi/wD9hMYbijDA/hqdefault.jpg',
    },
    {
        title: 'اصعب سجن في العالم',
        desc: 'Compilation of my latest video editing projects',
        link: 'https://drive.google.com/file/d/14j6vWiJZI7aAlp-nYIkSOn7GGG8VJsl0/view?usp=drive_link',
        thumb: 'https://i.ytimg.com/vi/ZXigpHaDX6g/maxresdefault.jpg',
    },
];

const grid = document.getElementById('projectsGrid');
projects.forEach((p) => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${p.thumb}" class="card-img-top" alt="${p.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text text-muted">${p.desc}</p>
          <a href="${p.link}" target="_blank" class="btn btn-outline-primary mt-auto">View</a>
        </div>
      </div>
    `;
    grid.appendChild(col);
});

// ========== SOCIAL LINKS ==========
const social = [
    { href: 'mailto:ahmedmaheralaasar@gmail.com', label: 'Mail', icon: 'Mail' },
    { href: 'https://www.linkedin.com/in/ahmed-maher-alaasar-0230b4225/', label: 'Linkedin', icon: 'Linkedin' },
    { href: 'https://www.instagram.com/a7med_ma7eer/', label: 'Instagram', icon: 'Instagram' },
    { href: 'https://wa.me/201097692992', label: 'WhatsApp', icon: 'MessageCircle' },
];

const socialLinks = document.getElementById('socialLinks');
social.forEach((s) => {
    const a = document.createElement('a');
    a.href = s.href;
    a.target = '_blank';
    const icon = lucide.createElement(s.icon);
    icon.setAttribute('class', 'lucide w-6 h-6');
    a.appendChild(icon);
    socialLinks.appendChild(a);
});
    