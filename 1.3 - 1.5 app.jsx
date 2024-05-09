// import React from 'react';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
  <div>
    <div>
      <h1>{course.name}</h1>
    </div>
    <div>
      {course.parts.map((part) => (
        <p key={part.name}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
    <div>
      Total Number of Exercises: {' '} 
      {course.parts.reduce((acc, part) => acc + part.exercises,0)}
    </div>
</div>
)};

export default App;

const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
} 

const Content = ({course}) => {
  return (
    <div>
      {course.parts.map((part) => (
        <p key={part.name}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  )};

const Total = ({course}) => {
  const total = course.parts.reduce((acc, part) => acc + part.exercises, 0)
  return (

      <p>Total Number of Exercises{' '}{total}</p>
    
      )
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
};

export default App;














