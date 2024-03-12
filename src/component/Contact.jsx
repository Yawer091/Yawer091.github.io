import React from "react";
const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#001233] text-[#FFF] font-mont p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
    >
      <div className="flex justify-center items-center">
        <div className="nav-link-contact shadow-md bg-gray-900 rounded-md p-6 max-w-md w-full">
          <h2 className="text-4xl mb-4 font-bold">
            What's <span className="text-yellow-300">up?</span>
          </h2>
          <p>
            You can find my contact information here. Feel free to reach out or
            connect with me on social networks.
          </p>
          <div className="list mt-4">
            <ul className="p-[10px]">
              <li>
                <a href="mailto:yaweratique90@gmail.com" id="contact-email">
                  yaweratique90@gmail.com
                </a>
              </li>
              <li className="my-[5px]">
                <a
                  href="https://www.linkedin.com/in/yawer-atique/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin"
                >
                  Linkedin: Yawer Atique
                </a>
              </li>
              <li>
                <a href="tel:+917309786005" id="contact-phone">
                  +91-7309786005
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-icons flex gap-3 mt-4 text-[24px]">
            <a
              href="https://github.com/Yawer091"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-github"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://wa.me/+917309786005"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-whatsapp text-green-700 "></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yawer-atique/"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin"
            >
              <i className="bx bxl-linkedin text-blue-600"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <form
          action="mailto:your-email@example.com"
          method="post"
          encType="text/plain"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="w-full p-4 bg-gray-700 text-white rounded-md mb-4"
            required
          />
          <input
            type="email"
            placeholder="Your Email Address"
            name="email"
            className="w-full p-4 bg-gray-700 text-white rounded-md mb-4"
            required
          />
          <input
            type="tel"
            placeholder="Your Mobile Number"
            name="mobileNumber"
            className="w-full p-4 bg-gray-700 text-white rounded-md mb-4"
            required
          />
          <textarea
            placeholder="How Can I Help You"
            name="message"
            className="w-full p-4 bg-gray-700 text-white rounded-md mb-4 resize-none"
            rows="6"
            required
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="submit inline-block text-gray-800 bg-yellow-500 px-6 py-3 text-lg rounded-md transition-all duration-500 ease-in-out hover:transform hover:scale-110 cursor-pointer"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
