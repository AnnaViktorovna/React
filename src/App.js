

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
        {props.semestr1}
      </p>
      <p>
        {props.semestr2}
      </p>
      <p>
        {props.semestr3}
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
  const s1 = p1 + ' ' + ex1;
  const s2 = p2 + ' ' + ex2;
  const s3 = p3 + ' ' + ex3;
 

  return (
    <div>
     <Header course={course}/>
     <Content semestr1={s1} semestr2={ s2} semestr3={ s3}/>
     <Total number={n}/>
      </div>
  )
}

export default App

