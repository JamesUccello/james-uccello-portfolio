const projects = [
  {
    title: 'NEC Exam Prep – CA',
    type: 'Published iOS Application',
    description:
      'Published iOS quiz application designed to help California electrical trainees prepare for NEC certification exams with mobile-first quiz functionality.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Capacitor'],
    highlights: [
      'Published on the Apple App Store',
      'Mobile-first touch-optimized interface',
      'JSON-based question database',
      'Quiz logic, scoring, and answer tracking',
      'Full product lifecycle from design to deployment',
    ],
    image: 'assets/projects/nec-app.jpg',
    live: 'https://apps.apple.com/us/app/nec-exam-prep-ca/id6748654051',
    github: 'https://github.com/JamesUccello',
  },

  {
    title: 'Uccello Foundation',
    type: 'Front-End Website',
    description:
      'Responsive front-end website project focused on clean content structure, visual layout, and accessible presentation.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Responsive page layout',
      'Structured content sections',
      'Front-end UI presentation',
    ],
    image: 'assets/projects/uccello-foundation.jpg',
    live: 'https://jamesuccello.github.io/uccellofoundation/index.html',
    github: 'https://github.com/JamesUccello/uccellofoundation',
  },

  {
    title: 'Taniti Island Project',
    type: 'UX / Front-End Project',
    description:
      'Tourism website prototype focused on usability, page flow, navigation, and responsive front-end design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Multi-page prototype',
      'Navigation flow and usability testing',
      'Responsive page structure',
      'Tourism-focused content organization',
    ],
    image: 'assets/projects/taniti.jpg',
    live: 'https://jamesuccello.github.io/taniti-island-project/',
    github: 'https://github.com/JamesUccello/taniti-island-project',
  },

  {
    title: 'TinDog',
    type: 'Responsive Landing Page',
    description:
      'Responsive landing page project using Bootstrap layout patterns and modern front-end design principles.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    highlights: [
      'Responsive landing page',
      'Bootstrap layout system',
      'Mobile-first design practice',
    ],
    image: 'assets/projects/tindog.jpg',
    live: 'https://jamesuccello.github.io/Tindog/',
    github: 'https://github.com/JamesUccello/Tindog',
  },

  {
    title: 'Boutique Frenchies',
    type: 'Front-End Website',
    description:
      'Front-end website project focused on branding, responsive sections, and clean visual presentation.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Responsive website layout',
      'Brand-focused UI design',
      'Structured visual sections',
    ],
    image: 'assets/projects/boutique.jpg',
    live: 'https://jamesuccello.github.io/boutiquefrenchies/',
    github: 'https://github.com/JamesUccello/boutiquefrenchies',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Bootstrap',
  'React',
  'Tailwind CSS',
  'Python',
  'Git',
  'GitHub',
  'Responsive Design',
  'Mobile-First UI',
  'REST APIs',
  'JSON',
  'Capacitor',
]

const projectsGrid = document.getElementById('projectsGrid')
const skillsGrid = document.getElementById('skillsGrid')
const backToTop = document.getElementById('backToTop')

projectsGrid.innerHTML = projects
  .map(
    (project) => `
    <div class="col-lg-6">
      <article class="project-card">

        <div class="project-content">

          <p class="project-type">${project.type}</p>

          <h3>${project.title}</h3>

          <p class="mt-3">${project.description}</p>

          <div class="mt-4">
            ${project.tech
              .map((item) => `<span class="tech-badge">${item}</span>`)
              .join('')}
          </div>

          <ul class="mt-4">
            ${project.highlights
              .map((item) => `<li>${item}</li>`)
              .join('')}
          </ul>

          <div class="project-links">
            ${
              project.live
                ? `<a href="${project.live}" target="_blank" class="btn btn-primary">Live Project</a>`
                : ''
            }

            <a
              href="${project.github}"
              target="_blank"
              class="btn btn-outline-light"
            >
              GitHub
            </a>
          </div>

        </div>

        <img
          src="${project.image}"
          alt="${project.title}"
          class="project-thumbnail"
        >

      </article>
    </div>
  `
  )
  .join('')

skillsGrid.innerHTML = skills
  .map((skill) => `<span class="skill-pill">${skill}</span>`)
  .join('')

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const navbar = document.getElementById('portfolioNav')

    if (navbar.classList.contains('show')) {
      bootstrap.Collapse.getInstance(navbar).hide()
    }
  })
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
})

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})