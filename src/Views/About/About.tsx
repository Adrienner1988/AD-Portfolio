// import workImg from "../../assets/work.jpg";
// import skateImg from "../../assets/skate.jpg";
// import travelImg from "../../assets/travel.jpg";
// import meetupImg from "../../assets/meetup.jpg";

const developer = {
  firstName: "Adrienne",
  lastName: "Daniels",
  title: "Full Stack Developer",
  location: "Tampa, FL",
  loves: ["UX", "accessibility", "collaboration"],
  hobbies: ["traveling", "roller skating", "coding for fun"],
};

const About = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white">
      {/* JSON Block */}
      <div className="flex max-w-full flex-col items-center justify-center gap-8 overflow-x-auto px-6 py-12 md:flex-row">
        <pre
          className="max-w-full whitespace-pre-wrap rounded border border-gray-700 bg-gray-900 p-6 font-mono text-green-400 md:max-w-2xl"
          style={{ whiteSpace: "pre-wrap" }}
        >
          <code> const About = () =&gt; {JSON.stringify(developer, null, 2)}</code>
        </pre>
      </div>

      {/* Photo Grid */}
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 pb-12 sm:grid-cols-4">
        <img
          // src={workImg}
          alt="Coding setup"
          className="h-32 w-full rounded object-cover shadow-md sm:h-40"
        />
        <img
          // src={skateImg}
          alt="Roller skating"
          className="h-32 w-full rounded object-cover shadow-md sm:h-40"
        />
        <img
          // src={travelImg}
          alt="Travel"
          className="h-32 w-full rounded object-cover shadow-md sm:h-40"
        />
        <img
          // src={meetupImg}
          alt="Tech meetup"
          className="h-32 w-full rounded object-cover shadow-md sm:h-40"
        />
      </div>

      {/* Written About Section */}
      <div className="mx-auto max-w-3xl space-y-6 px-6 pb-16 text-lg text-white">
        <h2 className="mb-2 text-2xl font-bold">About Me</h2>
        <p>
          I love being able to bring designer ideas and wireframes to life, and
          build solutions that solve real problems and help people in meaningful
          ways.
        </p>
        <p>
          I'm especially excited by projects in travel, entertainment, and
          hospitality — industries that thrive on creativity and human
          connection. I enjoy collaborating on fun, engaging teams but also love
          focused time to work independently, share ideas, and grow.
        </p>
        <p>
          After working in hospitality for over 10 years, I lost my job in 2020
          and decided to pursue a career that offered more growth and stability.
          I began self-teaching code, and two years later enrolled in a coding
          bootcamp to sharpen my skills and take the leap into tech.
        </p>
        <p>
          Outside of work, you’ll probably find me at the skating rink,
          traveling, exploring the arts, or deep in a makeup or fashion rabbit
          hole. I also love crafting and have a strong appreciation for
          creativity in all forms.
        </p>
        <p>
          People often tell me I have a gift for communication and can connect
          with just about anyone — a quality I think makes me a great teammate.
        </p>
      </div>
    </section>
  );
};

export default About;
