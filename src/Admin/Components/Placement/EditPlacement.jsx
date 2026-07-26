import { useEffect, useState } from "react";
import { updatePlacement } from "../../../Api/PlacementApi";
import { getCompanies } from "../../../Api/CompanyApi";
import { getUsers } from "../../../Api/UserApi";
import "./EditPlacement.css";

const EditPlacement = ({
  placement,
  onClose,
  onSuccess,
}) => {

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
  // Load Existing Data
  // ===========================

  useEffect(() => {

    if (placement) {

      setFormData({
        student: placement.student?._id || "",
        company: placement.company?._id || "",
        designation: placement.designation || "",
        package: placement.package || "",
        location: placement.location || "",
        course: placement.course || "",
        branch: placement.branch || "",
        passingYear: placement.passingYear || "",
        description: placement.description || "",
        status: placement.status,
        photo: null,
      });

    }

    fetchStudents();
    fetchCompanies();

  }, [placement]);

  // ===========================
  // Students
  // ===========================

  const fetchStudents = async () => {

    try {

      const res = await getUsers();

      setStudents(
        res.data.users.filter(
          (u) => u.role === "student"
        )
      );

    } catch (error) {
      console.log(error);
    }

  };

  // ===========================
  // Companies
  // ===========================

  const fetchCompanies = async () => {

    try {

      const res = await getCompanies();

      setCompanies(res.data.companies);

    } catch (error) {
      console.log(error);
    }

  };

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleImage = (e) => {

    setFormData({
      ...formData,
      photo: e.target.files[0],
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const data = new FormData();

      Object.keys(formData).forEach((key) => {

        if (key !== "photo") {

          data.append(key, formData[key]);

        }

      });

      if (formData.photo) {

        data.append("photo", formData.photo);

      }

      await updatePlacement(
        placement._id,
        data
      );

      alert("Placement Updated Successfully");

      onSuccess();

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Update Failed"
      );

    } finally {

      setLoading(false);

    }

  };
    return (
    <div className="placement-modal">

      <div className="placement-modal-content">

        <div className="placement-header">

          <h2>Edit Placement</h2>

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
              <option value="">
                Select Student
              </option>

              {students.map((student) => (

                <option
                  key={student._id}
                  value={student._id}
                >
                  {student.name}
                </option>

              ))}

            </select>

            {/* Company */}

            <select
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Company
              </option>

              {companies.map((company) => (

                <option
                  key={company._id}
                  value={company._id}
                >
                  {company.name}
                </option>

              ))}

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
              placeholder="Package"
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
                setFormData({
                  ...formData,
                  status: e.target.value === "true",
                })
              }
            >
              <option value={true}>
                Active
              </option>

              <option value={false}>
                Inactive
              </option>

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
              {loading
                ? "Updating..."
                : "Update Placement"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditPlacement;