import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./singer";
import Books from "./books";
function App() {
  // const actors = ["Rajjak", "Jashim", "BappaRaj"];
  // const singers = [
  //   { id: 1, name: "Abu Ubayda", age: 32 },
  //   { id: 2, name: "Shafin Ahmed", age: 45 },
  //   { id: 3, name: "Badruzzamana", age: 30 },
  // ];

  const books = [
    { name: "Bangla", Price: 370 },
    { name: "Islamic History", Price: 350 },
    { name: "Civics", Price: 320 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      {/* {actors.map((actor,i) => (
        <Actor key={i} actor={actor}></Actor>
      ))} */}
      <Books books={books}></Books>

      {/* <Todo isHungry={true}  food="Sweet"></Todo>
      <Todo isHungry={false} food="Doi"></Todo>
      <Todo isHungry={true}  food="Shemai"></Todo> */}
    </>
  );

  // function Salami({ evenet, amount = 0 }) {
  //   return (
  //     <div>
  //       <h2>Evenent:{evenet} </h2>
  //       <h3>Amount: {amount}</h3>
  //     </div>
  //   );
  // }
  // function Developer(props) {
  //   return (
  //     <div className="developer">
  //       <p>Name: {props.name}</p>
  //       <p>Tech: {props.tech}</p>
  //     </div>
  //   );
  // }
  // function Student(props) {
  //   return (
  //     <div className="student">
  //       <p>Versity Name: {props.name}</p>
  //       <p>Depertment:{props.dept}</p>
  //     </div>
  //   );
  // }

  // function New() {
  //   const name = "Siddikur Rahman";
  //   const age = 18;

  //   return (
  //     <>
  //       <h2>My Name Is : {name}, </h2>
  //       <h2>My Age Is :{age}</h2>
  //       <Cricket></Cricket>
  //     </>
  //   );
  // }
  // function Cricket() {
  //   return (
  //     <>
  //       <h2>CRICKET</h2>
  //     </>
  //   );
  // }
  // function Playing() {
  //   return (
  //     <>
  //       <h2>We are playing cricket </h2>
  //     </>
  //   );
  // }
}

export default App;
