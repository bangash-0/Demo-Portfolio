/* eslint-disable react/prop-types */
const SkillsCard = ({ title, icon, text }) => {
  return (
    <article className="flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold mb-2 ">{title}</h3>
      <p className="text-slate-500">{text}</p>
    </article>
  );
};
export default SkillsCard;
