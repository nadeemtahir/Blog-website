// pages/contact.js
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="text-gray-800 bg-neutral-200 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-8xl font-bold title-font mb-4 text-gray-900">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
            Feel free to reach out for any inquiries, feedback, or support. Were here to help!
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-800 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-800 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-800 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send Message
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <p className="text-lg font-semibold text-gray-800">Get in touch with us</p>
              <div className="flex justify-center space-x-6 mt-4">
                <a href="mailto:example@email.com" className="text-gray-500 hover:text-indigo-500">
                  <FaEnvelope size={24} />
                </a>
                <a href="tel:+1234567890" className="text-gray-500 hover:text-indigo-500">
                  <FaPhoneAlt size={24} />
                </a>
                <a href="https://www.google.com/maps?q=49+Smith+St.,+Saint+Cloud,+MN" className="text-gray-500 hover:text-indigo-500">
                  <FaMapMarkerAlt size={24} />
                </a>
              </div>
              <p className="leading-normal my-5">
                49 Smith St.
                <br />Saint Cloud, MN 56301
              </p>
              <div className="inline-flex space-x-4">
                <a href="https://twitter.com" className="text-gray-500 hover:text-indigo-500">
                  <FaTwitter size={24} />
                </a>
                <a href="https://facebook.com" className="text-gray-500 hover:text-indigo-500">
                  <FaFacebook size={24} />
                </a>
                <a href="https://instagram.com" className="text-gray-500 hover:text-indigo-500">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
