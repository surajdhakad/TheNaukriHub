import "./Application.css";
import { useState } from "react";
import { submitApplication } from "../../../Api/ApplicationApi";

const Application = () => {
  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    tenthPercentage: "",
    twelfthPercentage: "",
    graduationPercentage: "",
    university: "",
    cibilScore: "",
  });

  const [files, setFiles] = useState({
    photo: null,
    signature: null,
    aadharCard: null,
    panCard: null,
    resume: null,
  });

  // ==========================
  // Handle Text Input
  // ==========================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================
  // Handle File
  // ==========================

  const handleFileChange = (e) => {
    setFiles({
      ...files,
      [e.target.name]: e.target.files[0],
    });
  };

  // ==========================
  // Submit
  // ==========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      // Text Fields
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      // Files
      Object.keys(files).forEach((key) => {
        if (files[key]) {
          data.append(key, files[key]);
        }
      });

      const res = await submitApplication(data, token);

      alert(res.data.message || "Application Submitted Successfully");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        tenthPercentage: "",
        twelfthPercentage: "",
        graduationPercentage: "",
        university: "",
        cibilScore: "",
      });

      setFiles({
        photo: null,
        signature: null,
        aadharCard: null,
        panCard: null,
        resume: null,
      });

      document.querySelectorAll('input[type="file"]').forEach((input) => {
        input.value = "";
      });
    } catch (err) {
      alert(err.response?.data?.message || "Application Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="application-page">
      <div className="application-card">

        <div className="application-header">
          <h2>Application Form</h2>
          <p>
            Complete the application form carefully. All fields are required
            for placement registration.
          </p>
        </div>

        <div className="application-body">

          <form onSubmit={handleSubmit}>

            {/* Personal */}

            <div className="form-section">
              <h3>👤 Personal Information</h3>

              <div className="grid">

                <div>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>CIBIL Score</label>
                  <input
                    type="number"
                    name="cibilScore"
                    value={formData.cibilScore}
                    onChange={handleChange}
                  />
                </div>

              </div>
            </div>

            {/* Academic */}

            <div className="form-section">
              <h3>🎓 Academic Information</h3>

              <div className="grid">

                <div>
                  <label>10th Percentage</label>
                  <input
                    type="number"
                    name="tenthPercentage"
                    value={formData.tenthPercentage}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>12th Percentage</label>
                  <input
                    type="number"
                    name="twelfthPercentage"
                    value={formData.twelfthPercentage}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Graduation Percentage</label>
                  <input
                    type="number"
                    name="graduationPercentage"
                    value={formData.graduationPercentage}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>University</label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>
            </div>

            {/* Documents */}

            <div className="form-section">
              <h3>📄 Upload Documents</h3>

              <div className="grid">

                <div>
                  <label>Photo</label>
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                  />
                </div>

                <div>
                  <label>Signature</label>
                  <input
                    type="file"
                    name="signature"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                  />
                </div>

                <div>
                  <label>Aadhaar Card</label>
                  <input
                    type="file"
                    name="aadharCard"
                    accept=".pdf,image/*"
                    onChange={handleFileChange}
                    required
                  />
                </div>

                <div>
                  <label>PAN Card</label>
                  <input
                    type="file"
                    name="panCard"
                    accept=".pdf,image/*"
                    onChange={handleFileChange}
                    required
                  />
                </div>

                <div className="full">
                  <label>Resume</label>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf"
                    onChange={handleFileChange}
                    required
                  />
                </div>

              </div>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Application;