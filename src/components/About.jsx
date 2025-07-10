import { CodeXml } from "lucide-react";

export default function About() {
  return (
    <div
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center text-secondary px-4 py-16 md:px-24 lg:px-32 2xl:px-64"
    >
      <h1 className="text-primary text-4xl pb-10 text-center">
        About <span className="text-secondary">Me</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl">
        {/* Left Column */}
        <div className="flex flex-col gap-6 text-primary text-center md:text-left">
          <h2 className="text-2xl font-semibold">Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, vitae
            maxime aliquam ullam necessitatibus quidem ut non! Quisquam sint
            esse iste voluptates, tempora, quasi voluptatibus delectus molestiae
            incidunt est enim?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, vitae
            maxime aliquam ullam necessitatibus quidem ut non! Quisquam sint
            esse iste voluptates, tempora, quasi voluptatibus delectus molestiae
            incidunt est enim?
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center gap-6">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="group card-box border border-cardcolor text-secondary card-hover p-4 rounded-lg flex items-center gap-4"
            >
              <div className="bg-transparent border border-primary h-14 w-14 rounded-full flex justify-center items-center group-hover:jump-in">
                <CodeXml className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm">Some detail or label</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
