

const About = () => {

  const developer = {
    firstName: "Adrienne",
    lastName: "Daniels",
    title: "Full Stack Developer",
    location: "Tampa, FL",
    loves: ["UX", "accessibility", "collaboration"],
    hobbies: ["traveling", "roller skating", "coding for fun"],
  };
  
  return (
    <>
    <section className= "mt-16">
      <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-left">
        <code>{JSON.stringify(developer, null, 2)}</code>
      </pre>

      {/* <div className="rounded-lg bg-gray-900 p-4 font-mono text-green-400">
        <p>{`Developer {`}</p>
        <p className="ml-4">{`firstName: "Adrienne",`}</p>
        <p className="ml-4">{`lastName: "Daniels",`}</p>
        <p className="ml-4">{`title: "Full Stack Developer",`}</p>
        <p className="ml-4">{`loves: ["UX", "accessibility", "collaboration"]`}</p>
        <p>{`}`}</p>
      </div> */}
      </section>
    </>
  );
}

export default About