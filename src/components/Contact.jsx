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
    <div className="min-h-screen  flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-blue-200 shadow-lg rounded-2xl p-10 hover:shadow-xl hover:scale-105 transform transition-all duration-300">
        
        
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-black">💬 Say Hello</h2>
          <p className="text-black">
            Feel free to reach out by filling the form or using the contact details below.
          </p>

          <div className="space-y-4 text-black">
            <p className="text-lg">
              📧 <span className="font-semibold text-black">Email:</span> nandhini.ks11@gmail.com
            </p>
            <p className="text-lg">
              📞 <span className="font-semibold text-black">Phone:</span> +91 95007 47485
            </p>
            <p className="text-lg">
              📍 <span className="font-semibold text-black">Location:</span> Erode, India
            </p>
            <p className="text-lg">
              💼 <span className="font-semibold text-black">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/nandhiniks-mern/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-bold"
              >
                Connect
              </a>
            </p>
            <p className="text-lg">
              💻 <span className="font-semibold text-black">GitHub:</span>{" "}
              <a
                href="https://github.com/nandhini-11-cmd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold hover:underline"
              >
                Visit
              </a>
            </p>
          </div>
        </div>

        
        <div>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-black font-medium">Name</label>
              <input
                type="text"
                name="name" placeholder="Your name..."
                required
                className="w-full p-3 border border-gray-700 bg-blue-100 text-black rounded-lg "
              />
            </div>

            <div>
              <label className="block  font-medium">Email</label>
              <input
                type="email"
                name="email" placeholder="example@gmail.com"
                required
                className="w-full p-3 border border-gray-700 bg-blue-100  rounded-lg "
              />
            </div>

            <div>
              <label className="block  font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required placeholder="Write your message..."
                className="w-full p-3 border border-gray-700 bg-blue-100  rounded-lg "
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-400 text-white font-semibold py-3 rounded-lg hover:bg-blue-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
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