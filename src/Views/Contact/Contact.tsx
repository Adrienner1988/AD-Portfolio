import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaEnvelope, FaDiscord, FaSlack } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message.");
        },
      );
  };

  return (
    <section className="contact-section">
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 mt-16 text-center text-4xl font-bold">Get in Touch</h1>

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
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition hover:text-purple-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-white transition hover:text-purple-400"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://discordapp.com/users/yourDiscordID"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition hover:text-purple-400"
            aria-label="Discord"
          >
            <FaDiscord />
          </a>
          <a
            href="https://slack.com/your-workspace"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition hover:text-purple-400"
            aria-label="Slack"
          >
            <FaSlack />
          </a>
        </div>
      </div>
    </motion.div>
    </section>
  );
};

export default Contact;
