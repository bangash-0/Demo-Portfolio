/* eslint-disable react/no-unescaped-entities */
import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="bg-emerald-200 py-24">
      <div className="align-element grid md:grid-cols-2 md:items-center gap-8">
        <article>
          <h1 className="capitalize text-7xl font-bold mb-4 tracking-wider md:text-5xl lg:text-7xl">
            I'm <br/> Bilawal Hussain
          </h1>
          <p className=" text-slate-700 text-3xl">Front End Developer</p>
          <p className="capitalize mt-2 text-lg text-slate-700 tracking-wider">
            turning ideas into product
          </p>
          <div className="mt-2 flex gap-x-4">
            <a href="https://github.com/bangash-0">
              <FaGithubSquare className="h-8 w-8 text-slate-700 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/bilawal-hussain-9184a6243/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-slate-700 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-700 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  );
};
export default Hero;
