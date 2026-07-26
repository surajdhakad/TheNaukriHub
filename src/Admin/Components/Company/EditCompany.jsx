import { useState, useEffect } from "react";
import { updateCompany } from "../../../Api/CompanyApi";
import "./EditCompany.css";

const EditCompany = ({ company, onClose, onSuccess }) => {
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

  useEffect(() => {
    if (company) {
      setFormData(company);
    }
  }, [company]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "status" ? value === "true" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateCompany(company._id, formData);

      alert("Company Updated Successfully");

      onSuccess();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Update Failed"
      );
    }
  };

  return (
    <div className="company-modal">

      <div className="company-modal-content">

        <div className="company-modal-header">
          <h2>Edit Company</h2>

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
              value={formData.name}
              onChange={handleChange}
              placeholder="Company Name"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />

            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Website"
            />

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              required
            />

            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              placeholder="Industry"
            />

            <input
              type="text"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              placeholder="Logo URL"
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
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
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
            >
              Update Company
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditCompany;