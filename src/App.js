
const Header = (props) => {
  return (
    <div>
      <h3>Course name: {props.course}</h3>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {
        props.exercises3}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.number}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const p1 = 'Fundamentals of React'
  const ex1 = 10;
  const p2 = 'Using props to pass data'
  const ex2 = 7;
  const p3 = 'State of a component'
  const ex3 = 14;
  const n = ex1 + ex2 + ex3;


  return (
    <div>
     <Header course={course}/>
     <Content part1={p1} exercises1={ex2} part2={p2} exercises2={ex2} part3={p3} exercises3={ex3}/>
     <Total number={n}/>
      </div>
  )
}

export default App

