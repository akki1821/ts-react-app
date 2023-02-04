import React from 'react';

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface NormalCoursePart extends CoursePartBase {
  type: "normal";
  description: string;
}

interface GroupProjectCoursePart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

interface SubmissionCoursePart extends CoursePartBase {
  type: "submission";
  description: string;
  exerciseSubmissionLink: string;
}

type CoursePart = NormalCoursePart | GroupProjectCoursePart | SubmissionCoursePart;

const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is an awesome course part",
    type: "normal"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3,
    type: "groupProject"
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    type: "submission"
  }
];

const App: React.FC = () => {
  return (
    <div>
      {courseParts.map(part => {
        switch (part.type) {
          case "normal":
            return (
              <div key={part.name}>
                <h3>{part.name}</h3>
                <p>{part.exerciseCount} exercises</p>
                <p>{(part as NormalCoursePart).description}</p>
              </div>
            );
          case "groupProject":
            return (
              <div key={part.name}>
                <h3>{part.name}</h3>
                <p>{part.exerciseCount} exercises</p>
                <p>
                  {(part as GroupProjectCoursePart).groupProjectCount} group
                  projects
                </p>
              </div>
            );
          case "submission":
            return (
              <div key={part.name}>
                <h3>{part.name}</h3>
                <p>{part.exerciseCount} exercises</p>
                <p>{(part as SubmissionCoursePart).description}</p>
                <p>
                  Submit your exercises at:{" "}
                  <a href={(part as SubmissionCoursePart).exerciseSubmissionLink}>
                    {(part as SubmissionCoursePart).exerciseSubmissionLink}
                  </a>
                </p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default App;
