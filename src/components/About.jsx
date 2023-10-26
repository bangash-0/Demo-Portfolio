/* eslint-disable react/no-unescaped-entities */
import about from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className=" bg-white py-20" id="about">
      <div className="align-element">
        <div className="grid gap-16 items-center md:grid-cols-2">
          <img src={about} alt="about img" className="w-full h-64" />
          <div>
            <SectionTitle text="Code and Coffee" />
            <p className="text-slate-500 mt-4 leading-loose">
              I'm a Front End Developer for 2 years. I have serious passion for
              UI effects, animations and creating intuitive, dynamic user
              experiences. Let's make something special.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
