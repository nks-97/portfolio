export default function About(){
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center text-secondary  px-10 md:px-64"
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
        <div className="flex flex-col justify-evenly">
          <div className="card-box border border-cardcolor text-secondary card-hover"></div>
          <div className="card-box border border-cardcolor text-secondary card-hover"></div>
          <div className="card-box border border-cardcolor text-secondary card-hover"></div>
        </div>
      </div>
    </div>
  );
}