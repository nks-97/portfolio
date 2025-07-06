import { useState } from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleSelectCategory = (event) => {
    const selected = event.target.name;
    setActiveCategory(selected);
  };

  const skills = [
    // Frontend
    { name: "HTML", level: 95, category: "frontend" },
    { name: "CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },

    // Backend
    { name: "PHP", level: 65, category: "backend" },
    { name: "MySql", level: 60, category: "backend" },
    { name: "MS SQL", level: 60, category: "backend" },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
    { name: "Photoshop", level: 95, category: "tools" },
    { name: "Premier Pro", level: 95, category: "tools" },

    // Other
    { name: "Networking", level: 95, category: "other" },
  ];

  const skillCategories = [
    { name: "all", key: "all" },
    { name: "frontend", key: "frontend" },
    { name: "backend", key: "backend" },
    { name: "tools", key: "tools" },
    { name: "other", key: "other" },
  ];

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <div
      id="skills"
      className="flex flex-col items-center w-full min-h-screen px-4 py-16 md:px-12 lg:px-20 2xl:px-64"
    >
      <h1 className="py-10 text-primary text-4xl text-center">
        My <span className="text-secondary">Skills</span>
      </h1>

      {/* Category Filters */}
      <div className="text-primary flex flex-wrap justify-center gap-4 pb-10">
        {skillCategories.map(({ name, key }) => (
          <button
            key={key}
            name={name}
            onClick={handleSelectCategory}
            className={`capitalize px-4 py-2 cursor-pointer transition-all border-b-2 ${
              activeCategory === name
                ? "border-b-secondary text-secondary"
                : "border-b-transparent hover:text-secondary"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {filteredSkills.map(({ name }, index) => (
            <div
              key={index}
              className="card-box border border-cardcolor text-secondary card-hover p-6 rounded-lg text-center font-medium hover:shadow-lg transition duration-300"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
