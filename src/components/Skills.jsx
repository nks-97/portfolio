import { useState } from "react";
export default function Skills(){

  const [activeCategory, setActiveCategory] = useState('all')

  function handleSelectCategory(event){
    const selected = event.target.name;
    setActiveCategory(selected)
  }

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
  
  //Other
  { name: "Networking", level: 95, category: "other" },
  { name: "Networking", level: 95, category: "other" },
  { name: "Networking", level: 95, category: "other" },
  { name: "Networking", level: 95, category: "other" },
];

const skillCategories = [
  {name: "all", key:"all"},
  {name: "frontend", key:"frontend"},
  {name: "backend", key:"backend"},
  {name: "tools", key:"tools"},
  {name: "other", key:"other"}
]

const filteredSkills = skills.filter((skill)=> activeCategory === 'all' || skill.category === activeCategory);
  return (
    <div id="skills" className="flex flex-col items-center w-full h-screen px-10 md:px-64">
      <h1 className="py-20 text-primary text-4xl">
        My <span className="text-secondary">Skills</span>
      </h1>
      <div className="text-primary flex flex-row gap-5 pb-20">
        {skillCategories.map(({ name, key }) => (
          <a key={key} name={name} onClick={handleSelectCategory} className={`border border-transparent ${activeCategory===name && "border-b-secondary"}`}>
            {name}
          </a>
        ))}
      </div>
      <div className="w-full">
        <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-20">
          {filteredSkills.map(({ name }) => (
            <div className="card-box border border-cardcolor text-secondary card-hover">
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}