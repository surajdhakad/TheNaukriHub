import { useEffect, useState } from "react";
import "./StudentTable.css";
import { getAllStudents, deleteStudent } from "../../../Api/UserApi";

const StudentTable = () => {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    try {
      const response = await getAllStudents();
      setStudents(response.users);
    } catch (error) {
      console.log(error);
      alert("Unable to fetch students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this student?"
    );

    if (!confirmDelete) return;

    try {

      await deleteStudent(id);

      setStudents((prev) =>
        prev.filter((student) => student._id !== id)
      );

      alert("Student Deleted");

    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }

  };

  if (loading) {
    return <h3>Loading Students...</h3>;
  }

  return (
    <div className="student-table-container">

      <div className="table-header">

        <h2>Students ({students.length})</h2>

      </div>

      <table>

        <thead>

          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Verified</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {students.length === 0 ? (

            <tr>

              <td colSpan="6">
                No Students Found
              </td>

            </tr>

          ) : (

            students.map((student, index) => (

              <tr key={student._id}>

                <td>{index + 1}</td>

                <td>{student.name}</td>

                <td>{student.email}</td>

                <td>{student.phone}</td>

                <td>

                  <span
                    className={
                      student.isVerified
                        ? "status placed"
                        : "status pending"
                    }
                  >
                    {student.isVerified
                      ? "Verified"
                      : "Pending"}
                  </span>

                </td>

                <td>

                  <button className="view">
                    View
                  </button>

                  <button
                    className="delete"
                    onClick={() =>
                      handleDelete(student._id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
};

export default StudentTable;