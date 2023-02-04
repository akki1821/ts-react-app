type CoursePart = {
  name: string;
  exerciseCount: number;
};

type CourseProps = {
  courseParts: CoursePart[];
};

const Header: React.FC<CourseProps> = (props) => {
  return <h1>{props.courseParts[0].name}</h1>;
};

const Content: React.FC<CourseProps> = (props) => {
  return (
    <>
      {props.courseParts.map((part) => (
        <p>
          {part.name} {part.exerciseCount}
        </p>
      ))}
    </>
  );
};

const Total: React.FC<CourseProps> = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  );
};

const App: React.FC = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <div>
      <Header courseParts={courseParts} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  );
};

export default App;
