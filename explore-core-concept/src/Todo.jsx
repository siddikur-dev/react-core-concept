// export default function ({ task }) {
//   return (
//     <div>
//       <h2>Task:{task} </h2>
//     </div>
//   );
// }

// export default function ({ task, isDone }) {
//   if (isDone) {
//     return (
//       <h3>
//         Done: {isDone} {task}
//       </h3>
//     );
//   } else {
//     return <h3>Pending: {task}</h3>;
//   }
// }

export default function Todo({ isHungry, food }) {
  if (isHungry) {
    return <h3>already Eaten: {food}</h3>;
  } else {
    return <h3>Eat Now: {food}</h3>;
  }
}
