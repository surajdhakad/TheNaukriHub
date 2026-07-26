import "./SelectedStudents.css";
import StudentCard from "./StudentCard";

function SelectedStudents() {

  const students = [

    {
      id:1,
      name:"Rahul Sharma",
      course:"MERN Stack",
      company:"Google",
      package:"18 LPA",
      location:"Bangalore",
    },

    {
      id:2,
      name:"Priya Singh",
      course:"Java Full Stack",
      company:"Microsoft",
      package:"15 LPA",
      location:"Hyderabad",
    },

    {
      id:3,
      name:"Amit Patel",
      course:"React Developer",
      company:"Amazon",
      package:"20 LPA",
      location:"Noida",
    },

  ];

  return (

    <section className="selected-students">

      <div className="section-title">

        <h2>Recently Placed Students</h2>

        <p>Congratulations to our successful students 🎉</p>

      </div>

      <div className="student-grid">

        {students.map((student)=>(
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}

      </div>

    </section>

  );
}

export default SelectedStudents;