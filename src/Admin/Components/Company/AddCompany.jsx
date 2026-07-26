import { useState } from "react";
import { createCompany } from "../../../Api/CompanyApi";
import "./AddCompany.css";

const AddCompany = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    email: "",
    phone: "",
    website: "",
    location: "",
    industry: "",
    description: "",
    status: true,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "status"
          ? value === "true"
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createCompany(formData);

      alert("Company Added Successfully");

      onSuccess();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Unable to Add Company"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="company-modal">

      <div className="company-modal-content">

        <div className="company-modal-header">

          <h2>Add Company</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="company-grid">

            <input
              type="text"
              name="name"
              placeholder="Company Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Company Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleChange}
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
              name="industry"
              placeholder="Industry"
              value={formData.industry}
              onChange={handleChange}
            />

            <input
              type="text"
              name="logo"
              placeholder="Logo URL"
              value={formData.logo}
              onChange={handleChange}
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value={true}>Active</option>
              <option value={false}>Inactive</option>
            </select>

          </div>

          <textarea
            name="description"
            rows="5"
            placeholder="Company Description"
            value={formData.description}
            onChange={handleChange}
          />

          <div className="company-btn-group">

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
              {loading ? "Saving..." : "Save Company"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddCompany;