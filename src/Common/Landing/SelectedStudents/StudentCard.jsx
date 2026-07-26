import "./SelectedStudents.css";

function StudentCard({ student }) {
  return (
    <div className="student-card">

      <div className="student-top">

        <div className="student-image">
          {student.name.charAt(0)}
        </div>

        <div>
          <h3>{student.name}</h3>
          <p>{student.course}</p>
        </div>

      </div>

      <div className="student-details">

        <p><strong>Company :</strong> {student.company}</p>

        <p><strong>Package :</strong> {student.package}</p>

        <p><strong>Location :</strong> {student.location}</p>

      </div>

      <span className="placed-badge">
        Placed
      </span>

    </div>
  );
}

export default StudentCard;