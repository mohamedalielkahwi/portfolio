import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

/* ─── DATA ──────────────────────────────────────────────── */
const SKILLS = [
  { id: "html", label: "HTML5", icon: "fa-brands fa-html5", color: "#EF6939" },
  { id: "css", label: "CSS3", icon: "fa-brands fa-css3-alt", color: "#35A8E8" },
  { id: "js", label: "JavaScript", icon: "fa-brands fa-js", color: "#F7DF1E" },
  { id: "react", label: "React", icon: "fa-brands fa-react", color: "#61DAFB" },
  {
    id: "node",
    label: "Node JS",
    icon: "fa-brands fa-node-js",
    color: "#83CD29",
  },
  {
    id: "mongodb",
    label: "MongoDB",
    icon: "devicon-mongodb-plain",
    color: "#47A248",
  },
  { id: "php", label: "PHP", icon: "fa-brands fa-php", color: "purple" },
  { id: "sql", label: "SQL", icon: "fa-solid fa-database", color: "#FFC23C" },
  {
    id: "flutter",
    label: "Flutter",
    icon: "devicon-flutter-plain",
    color: "#02569B",
  },
  { id: "java", label: "Java", icon: "fa-brands fa-java", color: "#E82E2D" },
  { id: "c", label: "C", icon: "fa-brands fa-cuttlefish", color: "#085E9F" },
  {
    id: "python",
    label: "Python",
    icon: "fa-brands fa-python",
    color: "#39719C",
  },
  { id: "git", label: "Git", icon: "fa-brands fa-github", color: "#F05032" },
  { id: "linux", label: "Linux", icon: "fa-brands fa-linux", color: "black" },
  {
    id: "arduino",
    label: "Arduino",
    icon: "devicon-arduino-plain",
    color: "#00979D",
  },
  {
    id: "nestjs",
    label: "NestJS",
    icon: "devicon-nestjs-plain",
    color: "#E0234E",
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    icon: "devicon-postgresql-plain",
    color: "#336791",
  },
  {
    id: "prisma",
    label: "Prisma",
    icon: "devicon-prisma-original",
    color: "#5A67D8",
  },
];

const BASE = import.meta.env.BASE_URL; // '/portfolio/' on GitHub Pages, '/' locally

const PROJECTS = [
  {
    id: "p1",
    title: "Carte",
    img: `${BASE}project img/Carte.png`,
    url: "https://mohamedalielkahwi.github.io/Carte/",
  },
  {
    id: "p2",
    title: "Modern Sport",
    img: `${BASE}project img/Modern-Sport.png`,
    url: "https://mohamedalielkahwi.github.io/Modern-Sport/",
  },
  {
    id: "p3",
    title: "Microsoft",
    img: `${BASE}project img/Microsoft.png`,
    url: "https://mohamedalielkahwi.github.io/Microsoft/",
  },
  {
    id: "p4",
    title: "JavaScript in Action",
    img: `${BASE}project img/JavaScript-in-Action-Visual-Code-Demo.png`,
    url: "https://mohamedalielkahwi.github.io/JavaScript-in-Action-Visual-Code-Demo/",
  },
  {
    id: "p5",
    title: "MFR Auto",
    img: `${BASE}project img/MFR Auto.png`,
    url: "https://mfr-auto.great-site.net/",
  },
];

const EDUCATIONS = [
  {
    date: "June 2023",
    title: "Bacalaureate of computer science",
    place: "houcine bouzaiene gafsa",
  },
  {
    date: "September 2023 – present",
    title: "Embedded Systems and Internet of Things",
    place: "ISSAT Sousse",
  },
];

const EXPERIENCES = [
  {
    date: "September 2023",
    title: "Active Member at Microsoft ISSATSo Club",
    place: "ISSAT Sousse",
  },
  { date: "August 2024", title: "Front-End Developer", place: "ISSAT Sousse" },
  {
    date: "September 2024",
    title: "Basic Web Instructor",
    place: "Club Microsoft",
  },
  { date: "July 2025", title: "Full-Stack Developer", place: "ISSAT Sousse" },
  { date: "August 2025", title: "Technical Lead", place: "Club Microsoft" },
  {
    date: "September 2025",
    title: "Flutter Developer",
    place: "Club Microsoft",
  },
];

/* ─── SCROLL-REVEAL HOOK ─────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".view");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hidden");
          } else {
            entry.target.classList.add("hidden");
          }
        });
      },
      { rootMargin: "-150px 0px -150px 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── ACTIVE NAV HOOK ────────────────────────────────────── */
function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = [
      { id: "header", key: "home" },
      { id: "skills", key: "skills" },
      { id: "projects", key: "projects" },
      { id: "educations", key: "education" },
      { id: "contacts", key: "contacts" },
    ];

    const handler = () => {
      let current = "home";
      sections.forEach(({ id, key }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // A section becomes active once its top has crossed 40% down the viewport
        if (rect.top <= window.innerHeight * 0.4) {
          current = key;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return active;
}

/* ─── APP ────────────────────────────────────────────────── */
export default function App() {
  useScrollReveal();
  const activeSection = useActiveSection();
  const [showScroll, setShowScroll] = useState(false);

  /* scroll-to-top button visibility */
  useEffect(() => {
    const handler = () => setShowScroll(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  /* nav links */
  const navLinks = [
    { key: "home", href: "#header", icon: "fa-solid fa-house" },
    { key: "skills", href: "#skills", icon: "fa-solid fa-user-check" },
    { key: "projects", href: "#projects", icon: "fa-solid fa-book" },
    {
      key: "education",
      href: "#educations",
      icon: "fa-solid fa-suitcase-rolling",
    },
    { key: "contacts", href: "#contacts", icon: "fa-solid fa-paper-plane" },
  ];

  return (
    <>
      {/* ── NAV ── */}
      <header>
        <ul>
          {navLinks.map(({ key, href, icon }) => (
            <li key={key} className={activeSection === key ? "active" : ""}>
              <a href={href}>
                <i className={icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </header>

      {/* ── HERO ── */}
      <section id="header">
        <div className="gritting">
          <h1>Hello, I'm Mohamed Ali Elkahwi</h1>
          <p>I am a Full-Stack Developer</p>
        </div>
        <div className="container">
          {/* Social links – left */}
          <SocialLinks />

          {/* Profile image */}
          <div className="image">
            <img
              src={`${BASE}img/Mohamed ali elkahwi(1).png`}
              alt="Mohamed Ali Elkahwi"
            />
          </div>

          {/* Right quick-links */}
          <QuickLinks />
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills">
        <div className="title view">
          <lord-icon
            src="https://cdn.lordicon.com/srupsmbe.json"
            trigger="loop"
            delay="1000"
            colors="primary:#121331,secondary:#08a88a"
            style={{ width: 150, height: 150 }}
          />
          <h2>Skills</h2>
        </div>
        <div className="main">
          <img
            src={`${BASE}img/—Pngtree—3d cute smiling man with_20679195.png`}
            className="view images"
            alt=""
          />
          <div className="skills">
            {SKILLS.map((s) => (
              <SkillCard key={s.id} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects">
        <div className="title view">
          <lord-icon
            src="https://cdn.lordicon.com/gvtjlyjf.json"
            trigger="loop"
            delay="1000"
            style={{ width: 150, height: 150 }}
          />
          <h2>Projects</h2>
        </div>
        <div className="main">
          <div className="projects">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION & EXPERIENCE ── */}
      <section id="educations">
        <div className="title view">
          <lord-icon
            src="https://cdn.lordicon.com/wxnxiano.json"
            trigger="loop"
            delay="2000"
            colors="primary:#3080e8,secondary:#66a1ee"
            style={{ width: 100, height: 100 }}
          />
          <h2>Education &amp; Experience</h2>
        </div>
        <div className="main" style={{ gap: 80, alignItems: "flex-start" }}>
          <div className="educations">
            {EDUCATIONS.map((e) => (
              <div className="education view" key={e.id}>
                <p>{e.date}</p>
                <h3>{e.title}</h3>
                <li>{e.place}</li>
              </div>
            ))}
          </div>
          <div className="experiences">
            {EXPERIENCES.map((e) => (
              <div className="experience view" key={e.id}>
                <p>{e.date}</p>
                <h3>{e.title}</h3>
                <li>{e.place}</li>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section id="contacts">
        <div className="title view">
          <lord-icon
            src="https://cdn.lordicon.com/jdgfsfzr.json"
            trigger="loop"
            delay="1000"
            style={{ width: 150, height: 150 }}
          />
          <h2>Contacts</h2>
        </div>
        <div className="main">
          <div className="left view">
            <img
              src={`${BASE}img/431558565_1802794690166646_5762322810595027899_n.jpg`}
              alt=""
            />
            <div className="contact">
              <a href={`${BASE}My CV.pdf`}>
                <i className="fa-solid fa-file-arrow-down"></i>
              </a>
              <a href="https://www.linkedin.com/in/mohamed-ali-elkahwi-b797392a0/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/mohamedalielkahwi">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="mailto:mohamedalielakhwi@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="tel:+21623448499">
                <i className="fa-solid fa-square-phone"></i>
              </a>
            </div>
          </div>
          <hr className="view" />
          <div className="right view">
            <p>Reach out to me!</p>
            <p>
              Discuss a project or just want to say Hi? My Inbox is open for
              all.
            </p>
            <p>
              A software engineering student, aiming to develop my skills and
              make a great change.
            </p>
          </div>
        </div>
      </section>

      {/* ── SCROLL TO TOP ── */}
      <button
        id="scrolltop"
        className={showScroll ? "activephone" : ""}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </>
  );
}

/* ─── SUB-COMPONENTS ─────────────────────────────────────── */

function SocialLinks() {
  const [hovered, setHovered] = useState(null);
  const items = [
    {
      id: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/mohamedali.elkahwi",
      icon: "fa-brands fa-facebook",
    },
    {
      id: "linkedin",
      label: "Linkedin",
      href: "https://www.linkedin.com/in/mohamed-ali-elkahwi-b797392a0/",
      icon: "fa-brands fa-linkedin",
    },
    {
      id: "github",
      label: "Github",
      href: "https://github.com/mohamedalielkahwi",
      icon: "fa-brands fa-github",
    },
  ];
  return (
    <div id="social-media">
      <ul>
        {items.map(({ id, href, icon }) => (
          <li
            key={id}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            <a href={href}>
              <i className={icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <div className="links">
        {items.map(({ id, label }) => (
          <span key={id} className={hovered === id ? "visible" : ""}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function QuickLinks() {
  const [hovered, setHovered] = useState(null);
  const items = [
    {
      id: "email",
      label: "Email",
      href: "mailto:mohamedalielakhwi@gmail.com",
      icon: "fa-solid fa-envelope",
    },
    {
      id: "cv",
      label: "CV",
      href: `${BASE}My CV.pdf`,
      icon: "fa-solid fa-file",
    },
    {
      id: "certificate",
      label: "Certificate",
      href: "https://drive.google.com/drive/folders/1Bg0SagewLnewoAIGDml628HolonS47tA",
      icon: "fa-solid fa-certificate",
    },
  ];
  return (
    <div id="contact">
      <div className="links">
        {items.map(({ id, label }) => (
          <span key={id} className={hovered === id ? "visible" : ""}>
            {label}
          </span>
        ))}
      </div>
      <ul>
        {items.map(({ id, href, icon }) => (
          <li
            key={id}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            <a href={href}>
              <i className={icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillCard({ label, icon, color }) {
  const [active, setActive] = useState(false);
  return (
    <div
      className="skill view"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <h3 style={{ opacity: active ? 1 : 0 }}>{label}</h3>
      <i className={icon} style={{ color: active ? color : "gray" }}></i>
    </div>
  );
}

SkillCard.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

function ProjectCard({ title, img, url }) {
  return (
    <div className="project view">
      <img src={img} alt={title} />
      <div className="overlay">
        <h2>{title}</h2>
        <a href={url}>
          <lord-icon
            src="https://cdn.lordicon.com/snxksidl.json"
            trigger="loop"
            delay="1000"
            style={{ width: 150, height: 150 }}
          />
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
