import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

/* eslint-disable react/prop-types */
const ProjectCard = ({ img, title, github, url, text }) => {
  return (
    <article className="overflow-hidden rounded-lg shadow-md block hover:shadow-xl duration-300 pb-8">
      <div className="flex flex-col gap-y-4">
        <img
          src={img}
          alt={title}
          className="w-full h-64 rounded-t-lg object-cover"
        />
        <h3 className="capitalize font-medium text-lg px-4">{title}</h3>
        <p className="px-4 text-slate-500">{text}</p>
        <div className="flex gap-4 px-4">
          <a href={github}>
            <FaGithub className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;
