import { useEffect, useState } from "react";
import { createJob } from "../../../Api/JobApi";
import { getCompanies } from "../../../Api/CompanyApi";
import "./AddJob.css";

const AddJob = ({ onClose, onSuccess }) => {
  const [companies, setCompanies] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    package: "",
    location: "",
    experience: "Fresher",
    jobType: "Full Time",
    lastDate: "",
    skills: "",
    description: "",
    status: true,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const res = await getCompanies();
      setCompanies(res.data.companies || []);
    } catch (error) {
      console.log(error);
      alert("Unable to load companies");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        ...formData,

        skills: formData.skills
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== ""),
      };

      await createJob(payload);

      alert("Job Added Successfully");

      onSuccess();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Unable to Add Job"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="job-modal">
      <div className="job-modal-content">

        <div className="job-modal-header">

          <h2>Add New Job</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={formData.title}
              onChange={handleChange}
              required
            />

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
              name="package"
              placeholder="Package (Ex. 8 LPA)"
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

            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            >
              <option>Fresher</option>
              <option>1 Year</option>
              <option>2 Years</option>
              <option>3 Years</option>
              <option>5+ Years</option>
            </select>

            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
            >
              <option>Full Time</option>
              <option>Internship</option>
              <option>Part Time</option>
            </select>

            <input
              type="date"
              name="lastDate"
              value={formData.lastDate}
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
                        <textarea
              name="skills"
              placeholder="React, Node.js, MongoDB, Express"
              rows="3"
              value={formData.skills}
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Job Description"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              required
            />

          </div>

          <div className="job-btn-group">

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
              {loading ? "Saving..." : "Save Job"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default AddJob;