import { ExternalLink } from "lucide-react";

const projList = [
  {
    projName: "Pendant Configurator",
    img: "/portfolio/projects/configurator.webp",
    description:
      "A custom pendant design tool built with React for product visualization.",
    link: "https://ilawatbp.github.io/configurator/",
    createBy: ["JavaScript", "React", "HTML"],
  },
  {
    projName: "Inventory Dashboard",
    img: "/portfolio/projects/configurator.webp",
    description:
      "Manage stock, filter items, and generate reports using a simple UI.",
    link: "https://ilawatbp.github.io/configurator/",
    createBy: ["JavaScript", "React", "HTML"],
  },
  {
    projName: "UI Component Library",
    img: "/portfolio/projects/configurator.webp",
    description:
      "Reusable and responsive components built for scalable front-end apps.",
    link: "https://ilawatbp.github.io/configurator/",
    createBy: ["JavaScript", "React", "HTML"],
  },
  {
    projName: "Static Website Portfolio",
    img: "/portfolio/projects/configurator.webp",
    description:
      "Responsive portfolio with modern UI, animation, and interactive features.",
    link: "https://ilawatbp.github.io/configurator/",
    createBy: ["JavaScript", "React", "HTML"],
  },
];

export default function Projects() {
  return (
    <div
      id="project"
      className="w-full px-4 py-16 md:px-12 lg:px-20 2xl:px-64 flex flex-col items-center justify-center text-secondary min-h-screen"
    >
      {/* Header */}
      <div className="text-center w-full max-w-4xl">
        <h1 className="pt-10 pb-4 text-primary text-4xl">
          Featured <span className="text-secondary">Projects</span>
        </h1>
        <p className="pb-20 text-primary text-sm md:text-base">
          Here are some of my recent works. These projects demonstrate my skills in front-end development, design, and application logic.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {projList.map(({ projName, img, description, link, createBy }, index) => (
          <div
            key={index}
            className="relative card-hover rounded-lg overflow-hidden text-primary bg-cardbg shadow-md hover:shadow-lg transition duration-300"
          >
            {/* Image */}
            <img
              src={img}
              alt={projName}
              className="w-full h-auto object-cover aspect-video"
            />

            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-2 py-4 text-xs text-secondary">
              {createBy.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-muted rounded-full border border-cardcolor"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="px-4 pt-2 pb-16 text-center">
              <h2 className="text-xl font-semibold text-secondary">
                {projName}
              </h2>
              <p className="text-xs py-2 text-primary">{description}</p>
            </div>

            {/* External Link Icon */}
            <a
              className="absolute bottom-4 left-4 text-primary hover:text-secondary transition"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
