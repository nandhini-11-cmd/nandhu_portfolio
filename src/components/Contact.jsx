import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cr39i3x",
        "template_6ig9m1l",
        form.current,
        "ToO6_hmZjKZpDjWqZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-10">
      <div className="
        max-w-6xl w-full 
        grid grid-cols-1 md:grid-cols-2 
        gap-10 
        
        bg-gradient-to-r from-gray-200 via-yellow-100 to-emerald-200
        shadow-lg rounded-2xl p-6 sm:p-10
        hover:shadow-xl hover:scale-105 
        transform transition-all duration-300
      ">

        {/* LEFT SIDE */}
        <div className="space-y-6 sm:space-y-8 mt-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            💬 Say Hello
          </h2>

          <p className="text-black text-xl sm:text-2xl font-semibold leading-snug">
            Big ideas or small sparks—let’s connect and create together!
          </p>

          <div className="space-y-4 text-black">
            <p className="text-lg">
              📧 <span className="font-semibold">Email:</span> nandhini.ks11@gmail.com
            </p>

            <p className="text-lg">
              📍 <span className="font-semibold">Location:</span> Erode, India
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-5 pt-2 sm:pt-4 ml-1 sm:ml-2">
              
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nandhiniks-mern/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30" height="30"
                  className="sm:w-9 sm:h-9"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5s-2-.9-2-2 1-2 2-2 1.98.9 1.98 2zM.5 8.5h5v15h-5v-15zm7 0h4.8v2h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8v9.7h-5v-8.6c0-2 0-4.6-3-4.6-3 0-3.5 2.2-3.5 4.5v8.7h-5v-17z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/nandhini-11-cmd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-black transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30" height="30"
                  className="sm:w-9 sm:h-9"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.85 10.95c.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.55-3.87-1.55-.52-1.32-1.28-1.67-1.28-1.67-1.05-.7.08-.68.08-.68 1.17.08 1.78 1.2 1.78 1.2 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.72-1.55-2.55-.3-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.2-3.1-.12-.3-.52-1.5.12-3.15 0 0 .98-.32 3.2 1.2a10.7 10.7 0 0 1 5.8 0c2.2-1.52 3.18-1.2 3.18-1.2.65 1.65.25 2.85.12 3.15.75.82 1.2 1.84 1.2 3.1 0 4.45-2.7 5.38-5.25 5.68.42.38.78 1.12.78 2.25v3.32c0 .3.2.65.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-black font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name..."
                required
                className="w-full p-3 border border-gray-700 rounded-lg text-black"
              />
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                required
                className="w-full p-3 border border-gray-700 rounded-lg"
              />
            </div>

            <div>
              <label className="block font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Write your message..."
                className="w-full p-3 border border-gray-700 rounded-lg"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-200 text-white font-semibold py-3 rounded-lg hover:bg-emerald-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* BACK TO TOP BUTTON */}
      <a
        href="#home"
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </a>
    </div>
  );
}
