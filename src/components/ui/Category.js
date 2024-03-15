export default function Category({ category: { id, title, image } }) {
  return (
    <a
      href="#"
      className="flex flex-col w-28 group items-center gap-y-2 text-center p-4 hover:bg-purple-100 rounded transition "
    >
      <img
        src={image}
        alt={title}
        className=" w-12 h-12 rounded border border-gray-200"
      ></img>
      <span className="text-sm font-semibold tracking-tight whitespace-nowrap	text-gray-700 group-hover:text-brand-color">
        {title}
      </span>
    </a>
  );
}
