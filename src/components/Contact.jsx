import {
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

const contactDetails = [
  { icon: Mail, detail: "nikosarmiento1@gmail.com" },
  { icon: Phone, detail: "0917 - 315 - 3604" },
  { icon: MapPin, detail: "Calvario, Meycauayan, Bulacan" },
];

export default function Contact() {
  return (
    <div
      id="contact"
      className="w-full flex flex-col items-center justify-center text-secondary min-h-screen px-4 md:px-12 lg:px-24 py-16"
    >
      <div className="w-full max-w-7xl text-center">
        <h1 className="pb-16 text-primary text-4xl">
          Get in <span className="text-secondary">Touch</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-primary">
          {/* Contact Information */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="flex flex-col gap-6">
                {contactDetails.map(({ icon: Icon, detail }, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="min-h-[48px] min-w-[48px] rounded-full bg-cardbg flex justify-center items-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p>{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Socials</h2>
              <div className="flex gap-6 justify-center">
                {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                  <Icon
                    key={i}
                    className="w-6 h-6 hover:text-secondary transition-colors duration-200 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cardbg rounded-2xl shadow-lg p-6 flex flex-col gap-4 text-left">
            <h2 className="text-secondary text-xl font-semibold mb-2">
              Send a Message
            </h2>

            <label className="flex flex-col gap-1">
              <span>Name</span>
              <input
                type="text"
                className="h-10 rounded-full px-4 bg-[#dfdddc] text-black focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span>Email</span>
              <input
                type="email"
                className="h-10 rounded-full px-4 bg-[#dfdddc] text-black focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span>Message</span>
              <textarea
                rows="5"
                className="rounded-xl px-4 py-2 bg-[#dfdddc] text-black focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </label>

            <button className="border border-secondary text-primary rounded-full py-2 card-hover hover:bg-secondary hover:text-black transition">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
