import { useEffect, useState } from "react";
import { createPlacement } from "../../../Api/PlacementApi";
import { getCompanies } from "../../../Api/CompanyApi";
import { getUsers } from "../../../Api/UserApi";
import "./AddPlacement.css";

const AddPlacement = ({ onClose, onSuccess }) => {

  const [students, setStudents] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    student: "",
    company: "",
    designation: "",
    package: "",
    location: "",
    course: "",
    branch: "",
    passingYear: "",
    description: "",
    status: true,
    photo: null,
  });

  // ===========================
  // Fetch Students
  // ===========================

  const fetchStudents = async () => {
    try {

      const res = await getUsers();

      console.log("Students Response :", res);

      setStudents(res.users || []);

    } catch (error) {

      console.log("Student Error :", error);

    }
  };

  // ===========================
  // Fetch Companies
  // ===========================

  const fetchCompanies = async () => {
    try {

      const res = await getCompanies();

      console.log("Company Response :", res.data);

      setCompanies(res.data.companies || []);

    } catch (error) {

      console.log("Company Error :", error);

    }
  };

  useEffect(() => {

    fetchStudents();
    fetchCompanies();

  }, []);

  // ===========================
  // Handle Change
  // ===========================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ===========================
  // Handle Image
  // ===========================

  const handleImage = (e) => {

    setFormData((prev) => ({
      ...prev,
      photo: e.target.files[0],
    }));
  };

  // ===========================
  // Submit
  // ===========================

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const data = new FormData();

      data.append("student", formData.student);
      data.append("company", formData.company);
      data.append("designation", formData.designation);
      data.append("package", formData.package);
      data.append("location", formData.location);
      data.append("course", formData.course);
      data.append("branch", formData.branch);
      data.append("passingYear", formData.passingYear);
      data.append("description", formData.description);
      data.append("status", formData.status);

      if (formData.photo) {
        data.append("photo", formData.photo);
      }

      await createPlacement(data);

      alert("Placement Added Successfully");

      onSuccess();

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Unable To Add Placement"
      );

    } finally {

      setLoading(false);

    }
  };
    return (
    <div className="placement-modal">

      <div className="placement-modal-content">

        <div className="placement-header">
          <h2>Add Placement</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            {/* Student */}

            <select
              name="student"
              value={formData.student}
              onChange={handleChange}
              required
            >
              <option value="">Select Student</option>

              {students.length > 0 ? (
                students.map((student) => (
                  <option
                    key={student._id}
                    value={student._id}
                  >
                    {student.name}
                  </option>
                ))
              ) : (
                <option disabled>No Students Found</option>
              )}

            </select>

            {/* Company */}

            <select
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            >
              <option value="">Select Company</option>

              {companies.length > 0 ? (
                companies.map((company) => (
                  <option
                    key={company._id}
                    value={company._id}
                  >
                    {company.name}
                  </option>
                ))
              ) : (
                <option disabled>No Company Found</option>
              )}

            </select>

            <input
              type="text"
              name="designation"
              placeholder="Designation"
              value={formData.designation}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="package"
              placeholder="Package (8 LPA)"
              value={formData.package}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="course"
              placeholder="Course"
              value={formData.course}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="branch"
              placeholder="Branch"
              value={formData.branch}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="passingYear"
              placeholder="Passing Year"
              value={formData.passingYear}
              onChange={handleChange}
              required
            />

            <select
              name="status"
              value={formData.status}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  status: e.target.value === "true",
                }))
              }
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
            />

          </div>

          <textarea
            name="description"
            rows="5"
            placeholder="Placement Description"
            value={formData.description}
            onChange={handleChange}
          />

          <div className="placement-btn-group">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Placement"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddPlacement;