import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "a596cf0d-7f98-4a92-9183-98a77d339aa6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message was sent successfully!");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-[length:90%_auto] bg-center bg-no-repeat dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Contact me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center mx-auto max-w-2xl mt-5 mb-12 font-Ovo">
        I&apos;m always looking for new opportunities to collaborate and build
        meaningful projects. If you have a project in mind or just want to say
        hello, please get in touch! :)
      </p>

      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 dark:text-white"
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 dark:text-white"
            name="email"
          />
        </div>
        <textarea
          placeholder="Enter your message"
          required
          rows={6}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 dark:text-white mb-6"
          name="message"
        />
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-300 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Send message
          <Image
            src={assets.right_arrow_white}
            alt="right-arrow-white"
            className="w-4"
          />
        </button>
        {result && <p className="text-center mt-4">{result}</p>}
      </form>
    </div>
  );
};

export default Contact;
