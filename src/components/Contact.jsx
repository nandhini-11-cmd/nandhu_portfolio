import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cr39i3x", // replace with EmailJS Service ID
        "template_6ig9m1l", // replace with EmailJS Template ID
        form.current,
        "ToO6_hmZjKZpDjWqZ" // replace with EmailJS Public Key
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
        
        {/* LEFT: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-black">Get in Touch</h2>
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

        {/* RIGHT: Contact Form */}
        <div>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-black font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 border border-gray-700 bg-blue-100 text-black rounded-lg "
              />
            </div>

            <div>
              <label className="block  font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border border-gray-700 bg-blue-100  rounded-lg "
              />
            </div>

            <div>
              <label className="block  font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
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
    </div>
  );
}