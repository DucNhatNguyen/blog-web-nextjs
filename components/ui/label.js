export default function Label(props) {
  const color = {
    green: "text-emerald-700",
    blue: "text-blue-600",
    orange: "text-orange-700",
    purple: "text-purple-600",
    pink: "text-pink-600",
  };
  return (
    <span className="inline-block mt-5 text-xs font-medium tracking-wider uppercase text-pink-600">
      {props.children}
    </span>
  );
}
