import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-emerald-200 ">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center">
        <h2 className="font-bold text-3xl">
          Web<span className="text-emerald-600">Dev</span>
        </h2>
        <div className="flex gap-x-4 capitalize ">
          {links.map((item) => {
            const { id, href, text } = item;
            return (
              <a
                href={href}
                key={id}
                className="hover:text-emerald-600 text-lg tracking-wide"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
