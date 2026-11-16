import "./PlacedStudents.css";

function PlacedStudents() {

  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      company: "Google",
      role: "Frontend Developer",
      package: "18 LPA",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Priya Singh",
      company: "Microsoft",
      role: "React Developer",
      package: "15 LPA",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Amit Verma",
      company: "Amazon",
      role: "Software Engineer",
      package: "20 LPA",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "Sneha Patel",
      company: "Infosys",
      role: "Java Developer",
      package: "9 LPA",
      image: "https://i.pravatar.cc/150?img=4",
    },
  ];

  return (
    <section className="placed-section">

      <div className="section-title">
        <h2>Our Placed Students</h2>
        <p>Students placed in top companies</p>
      </div>

      <div className="placed-grid">

        {students.map((student) => (

          <div className="placed-card" key={student.id}>

            <img
              src={student.image}
              alt={student.name}
            />

            <h3>{student.name}</h3>

            <p>{student.role}</p>

            <h4>{student.company}</h4>

            <span>{student.package}</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default PlacedStudents;