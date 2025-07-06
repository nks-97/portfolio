import { CodeXml } from "lucide-react";

export default function About(){
  return (
    <div
      className="w-full flex flex-col items-center justify-center text-secondary md:px-64 min-h-screen px-4 py-16"
      id="about"
    >
      <h1 className="text-primary pb-20 text-4xl">
        About <span className="text-secondary">Me</span>
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-20 w-full">
        <div className="flex flex-col items-center text-center text-primary gap-6">
          <h1>lorem</h1>
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
        <div className="flex flex-col justify-evenly gap-4">
          <div className="card-box border border-cardcolor text-secondary card-hover">
            <div className="bg-transparent border border-primary h-14 w-14 rounded-full flex justify-center items-center ">
              <CodeXml className=""/>
            </div>
          </div>
          <div className="card-box border border-cardcolor text-secondary card-hover">
            <div className="bg-transparent border border-primary h-14 w-14 rounded-full flex justify-center items-center ">
              <CodeXml className=""/>
            </div>
          </div>
          <div className="card-box border border-cardcolor text-secondary card-hover">
            <div className="bg-transparent border border-primary h-14 w-14 rounded-full flex justify-center items-center ">
              <CodeXml className=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}