import { useState } from "react";
import { createMaterial } from "../../../Api/InterviewMaterialApi";
import "./AddMaterial.css";

const AddMaterial = ({ onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    category: "Bank",
    title: "",
    description: "",
    pdf: null,
  });

  const companies = [
    "HDFC Bank",
    "Axis Bank",
    "ICICI Bank",
    "State Bank of India",
    "Punjab National Bank",
    "Bank of Baroda",
    "Kotak Mahindra Bank",
    "IDFC First Bank",
    "IndusInd Bank",
    "Yes Bank",
    "DCB Bank",
    "Mahindra Finance",
    "Aditya Birla Capital",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFile = (e) => {
    setFormData((prev) => ({
      ...prev,
      pdf: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      data.append("companyName", formData.companyName);
      data.append("category", formData.category);
      data.append("title", formData.title);
      data.append("description", formData.description);

      if (formData.pdf) {
        data.append("pdf", formData.pdf);
      }

      await createMaterial(data);

      alert("Interview Material Uploaded Successfully");

      onSuccess();
      onClose();

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Upload Failed"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="material-modal">
      <div className="material-content">

        <div className="material-header">
          <h2>Upload Interview Material</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="material-grid">

            <select
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Company
              </option>

              {companies.map((company, index) => (
                <option
                  key={index}
                  value={company}
                >
                  {company}
                </option>
              ))}
            </select>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Bank">Bank</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="Insurance">Insurance</option>
              <option value="BPO">BPO</option>
              <option value="Other">Other</option>
            </select>

          </div>

          <input
            type="text"
            name="title"
            placeholder="Material Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <textarea
            rows="5"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />

          <input
            type="file"
            accept=".pdf"
            onChange={handleFile}
            required
          />

          <div className="material-buttons">

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
                ? "Uploading..."
                : "Upload Material"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default AddMaterial;