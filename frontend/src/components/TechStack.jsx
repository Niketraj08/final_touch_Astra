import { useState } from "react";

const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "React", icon: "fab fa-react", color: "#61DAFB" },
      { name: "Vue.js", icon: "fab fa-vuejs", color: "#4FC08D" },
      { name: "Angular", icon: "fab fa-angular", color: "#DD0031" },
      { name: "Svelte", icon: "fas fa-code", color: "#FF3E00" },
      { name: "JavaScript", icon: "fab fa-js-square", color: "#F7DF1E" },
      { name: "TypeScript", icon: "fab fa-js-square", color: "#3178C6" },
      { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
      { name: "SASS/SCSS", icon: "fab fa-sass", color: "#CC6699" },
      { name: "Tailwind CSS", icon: "fas fa-palette", color: "#06B6D4" },
      { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
      { name: "Material-UI", icon: "fas fa-palette", color: "#0081CB" },
      { name: "Chakra UI", icon: "fas fa-palette", color: "#319795" },
      { name: "Styled Components", icon: "fas fa-paint-brush", color: "#DB7093" },
      { name: "Framer Motion", icon: "fas fa-wind", color: "#0055FF" },
      { name: "Three.js", icon: "fas fa-cube", color: "#049EF4" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
      { name: "Express", icon: "fas fa-server", color: "#000000" },
      { name: "Fastify", icon: "fas fa-bolt", color: "#000000" },
      { name: "Django", icon: "fab fa-python", color: "#092E20" },
      { name: "Flask", icon: "fas fa-flask", color: "#000000" },
      { name: "FastAPI", icon: "fas fa-rocket", color: "#009688" },
      { name: "Python", icon: "fab fa-python", color: "#3776AB" },
      { name: "Java", icon: "fab fa-java", color: "#ED8B00" },
      { name: "Spring Boot", icon: "fas fa-leaf", color: "#6DB33F" },
      { name: "PHP", icon: "fab fa-php", color: "#777BB4" },
      { name: "Laravel", icon: "fab fa-laravel", color: "#FF2D20" },
      { name: "Symfony", icon: "fab fa-php", color: "#000000" },
      { name: "Ruby on Rails", icon: "fas fa-gem", color: "#CC0000" },
      { name: ".NET Core", icon: "fab fa-microsoft", color: "#512BD4" },
      { name: "Go", icon: "fas fa-code", color: "#00ADD8" },
      { name: "Rust", icon: "fas fa-cog", color: "#000000" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: [
      { name: "React Native", icon: "fab fa-react", color: "#61DAFB" },
      { name: "Flutter", icon: "fas fa-mobile-alt", color: "#02569B" },
      { name: "Ionic", icon: "fas fa-mobile", color: "#3880FF" },
      { name: "Xamarin", icon: "fab fa-microsoft", color: "#3498DB" },
      { name: "Swift", icon: "fab fa-swift", color: "#FA7343" },
      { name: "Kotlin", icon: "fab fa-android", color: "#7F52FF" },
      { name: "Cordova", icon: "fas fa-mobile", color: "#E8E8E8" },
      { name: "Capacitor", icon: "fas fa-bolt", color: "#119EFF" },
      { name: "Expo", icon: "fas fa-rocket", color: "#000020" },
    ],
  },
  {
    id: "ai_ml",
    label: "AI/ML",
    items: [
      { name: "TensorFlow", icon: "fas fa-brain", color: "#FF6F00" },
      { name: "PyTorch", icon: "fas fa-fire", color: "#EE4C2C" },
      { name: "Scikit-learn", icon: "fas fa-robot", color: "#F7931E" },
      { name: "Pandas", icon: "fas fa-table", color: "#150458" },
      { name: "NumPy", icon: "fas fa-calculator", color: "#013243" },
      { name: "Keras", icon: "fas fa-layer-group", color: "#D00000" },
      { name: "Jupyter", icon: "fas fa-book", color: "#F37626" },
      { name: "OpenCV", icon: "fas fa-eye", color: "#5C3EE8" },
      { name: "Matplotlib", icon: "fas fa-chart-line", color: "#11557C" },
      { name: "Seaborn", icon: "fas fa-chart-bar", color: "#3778BF" },
      { name: "NLTK", icon: "fas fa-language", color: "#154360" },
      { name: "spaCy", icon: "fas fa-comment-dots", color: "#09A3D5" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    items: [
      { name: "Docker", icon: "fab fa-docker", color: "#2496ED" },
      { name: "Kubernetes", icon: "fas fa-dharmachakra", color: "#326CE5" },
      { name: "Jenkins", icon: "fas fa-cogs", color: "#D24939" },
      { name: "GitHub Actions", icon: "fab fa-github", color: "#2088FF" },
      { name: "GitLab CI", icon: "fab fa-gitlab", color: "#FC6D26" },
      { name: "CircleCI", icon: "fas fa-circle", color: "#343434" },
      { name: "Terraform", icon: "fas fa-infinity", color: "#623CE4" },
      { name: "Ansible", icon: "fas fa-tasks", color: "#EE0000" },
      { name: "Prometheus", icon: "fas fa-chart-line", color: "#E6522C" },
      { name: "Grafana", icon: "fas fa-chart-area", color: "#F46800" },
      { name: "ELK Stack", icon: "fas fa-search", color: "#005571" },
      { name: "Nginx", icon: "fas fa-server", color: "#009639" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    items: [
      { name: "AWS", icon: "fab fa-aws", color: "#FF9900" },
      { name: "Azure", icon: "fab fa-microsoft", color: "#0078D4" },
      { name: "Google Cloud", icon: "fab fa-google", color: "#4285F4" },
      { name: "Firebase", icon: "fas fa-fire", color: "#FFCA28" },
      { name: "Heroku", icon: "fas fa-cloud", color: "#430098" },
      { name: "DigitalOcean", icon: "fas fa-water", color: "#0080FF" },
      { name: "Vercel", icon: "fas fa-v", color: "#000000" },
      { name: "Netlify", icon: "fas fa-bolt", color: "#00C46A" },
      { name: "Cloudflare", icon: "fas fa-cloud", color: "#F38020" },
      { name: "Linode", icon: "fas fa-server", color: "#00B894" },
      { name: "Vultr", icon: "fas fa-cloud", color: "#007BFC" },
      { name: "Railway", icon: "fas fa-train", color: "#0B0D0E" },
    ],
  },
  {
    id: "database",
    label: "Database",
    items: [
      { name: "PostgreSQL", icon: "fas fa-database", color: "#4169E1" },
      { name: "MongoDB", icon: "fas fa-leaf", color: "#47A248" },
      { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
      { name: "Redis", icon: "fas fa-database", color: "#DC382D" },
      { name: "SQLite", icon: "fas fa-database", color: "#003B57" },
      { name: "Firebase DB", icon: "fas fa-fire", color: "#FFCA28" },
      { name: "DynamoDB", icon: "fas fa-database", color: "#4053D6" },
      { name: "MariaDB", icon: "fas fa-database", color: "#003545" },
      { name: "Cassandra", icon: "fas fa-database", color: "#1287B1" },
      { name: "Elasticsearch", icon: "fas fa-search", color: "#005571" },
      { name: "Oracle DB", icon: "fas fa-database", color: "#F00000" },
      { name: "SQL Server", icon: "fab fa-microsoft", color: "#CC2927" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
      { name: "VS Code", icon: "fas fa-code", color: "#007ACC" },
      { name: "IntelliJ IDEA", icon: "fas fa-code", color: "#000000" },
      { name: "Postman", icon: "fas fa-envelope", color: "#FF6C37" },
      { name: "Insomnia", icon: "fas fa-moon", color: "#5849BE" },
      { name: "Figma", icon: "fab fa-figma", color: "#F24E1E" },
      { name: "Adobe XD", icon: "fab fa-adobe", color: "#FF61F6" },
      { name: "Sketch", icon: "fas fa-pencil-alt", color: "#F7B84B" },
      { name: "Jira", icon: "fab fa-atlassian", color: "#0052CC" },
      { name: "Trello", icon: "fab fa-trello", color: "#0079BF" },
      { name: "Slack", icon: "fab fa-slack", color: "#4A154B" },
      { name: "Discord", icon: "fab fa-discord", color: "#5865F2" },
      { name: "Notion", icon: "fas fa-sticky-note", color: "#000000" },
      { name: "Miro", icon: "fas fa-project-diagram", color: "#FFCC02" },
    ],
  },
];

function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend");
  const activeCategory = CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section id="careers" className="bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Technologies
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Our Range of Technologies, Tools, and Skill Sets
          </h2>
          <p className="mt-3 text-slate-500">
            Proven expertise across modern front-end, back-end, DevOps, cloud,
            and databases.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-6 border-b border-gray-200">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`relative pb-2 text-sm font-medium transition-colors md:text-base ${
                activeTab === cat.id
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {cat.label}
              {activeTab === cat.id && (
                <span className="absolute inset-x-0 -bottom-[1px] h-[3px] rounded-full bg-blue-600" />
              )}
            </button>
          ))}
        </div>

        {/* Content box */}
        <div className="rounded-3xl bg-gray-50 px-6 py-10 shadow-sm md:px-10">
          <div className="grid grid-cols-2 items-center justify-items-center gap-10 sm:grid-cols-3 md:grid-cols-4">
            {activeCategory?.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                  <i
                    className={`${item.icon} text-3xl`}
                    style={{ color: item.color }}
                    aria-hidden="true"
                  ></i>
                </div>
                <p className="text-sm text-gray-700 md:text-base">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;

