import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaDiscord, FaSlack } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const toastId = toast.loading("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("Message sent to Adrienne!");
          toast.dismiss(toastId);
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message.");
          toast.dismiss(toastId);
        },
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 py-16 md:px-20">

      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 mt-16 text-white text-center text-4xl font-bold">
          Get in Touch
        </h2>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="mb-10 flex flex-col gap-4 rounded-lg bg-slate-800 p-6 shadow-md"
        >
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="rounded-md border border-slate-600 bg-slate-900 p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message to Adrienne"
            className="rounded-md border border-slate-600 bg-slate-900 p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-purple-600 px-4 py-2 font-semibold text-white transition hover:bg-purple-700"
          >
            Send Message
          </button>

          {status && <p className="text-center text-sm">{status}</p>}
        </form>

        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/adriennerdaniels/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition hover:text-purple-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://profile.indeed.com/p/adrienned-kxpwg90"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition hover:text-purple-400"
            aria-label="Indeed Resume"
          >
            <SiIndeed />
          </a>
          <a
            href="https://github.com/Adrienner1988"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition hover:text-purple-400"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://discordapp.com/users/967326248558809090"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition hover:text-purple-400"
            aria-label="Discord"
          >
            <FaDiscord />
          </a>
          <a
            href="https://adriennedev.slack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition hover:text-purple-400"
            aria-label="Slack"
          >
            <FaSlack />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
