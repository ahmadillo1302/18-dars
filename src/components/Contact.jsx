import React from "react";

export default function Contact() {
  return (
    <section className="mt-52 text-white" id="contact">
      <p className="text-4xl text-center font-extrabold p-5">Contact</p>
      <hr />

      <div className="bg-[#6A1E55] px-20 py-32 bg-opacity-50 rounded-lg hover:scale-[103%] ">
        <h2 className="py-10 font-bold">Send Us A Message</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-bold">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 text-black rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-bold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 text-black rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm font-bold">Message</label>
            <textarea
              className="w-full px-4 py-2 mt-2 text-black rounded-lg"
              rows="5"
              placeholder="Your Message"
            />
          </div>
          <button className="bg-[#FF4081] text-white px-6 py-3 mt-4 rounded-lg hover:bg-[#D62F6A]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
