export default function Home() {
    return (
        <div className="w-full h-screen flex items-center px-6 md:px-60 relative">
            <div className="max-w-lg text-white">
                <h2 className="text-3xl sm:text-4xl font-normal md:text-5xl lg:text-6xl leading-tight">Hi,</h2>
                <h1 className="text-5xl sm:text-6xl font-semibold md:text-7xl lg:text-8xl leading-tight">
                    I'm Niko
                </h1>
                <p className="text-lg sm:text-xl mt-4 font-thin">
                    IT Specialist / Web Developer
                </p>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                scroll
            </div>
        </div>
    );
}
