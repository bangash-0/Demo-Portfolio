// eslint-disable-next-line react/prop-types
const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-gray-200 mb-8">
      <h1 className="capitalize tracking-wider text-3xl font-medium">{text}</h1>
    </div>
  );
};
export default SectionTitle;
