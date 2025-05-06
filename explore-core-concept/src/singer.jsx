import "./App.css";
import "./App.css";

export default function Singer({ singer }) {
  const { name, age } = singer;
  return (
    <div className="developer">
      <h2>Name:{name}</h2>
      <h5>Age:{age}</h5>
    </div>
  );
}
