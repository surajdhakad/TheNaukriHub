
import "./Application.css";
import { useRef, useState } from "react";

import Navbar from "../../StudentsComponents/Navbar/Navbar";
import { submitApplication } from "../../../Api/ApplicationApi";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  tenthPercentage: "",
  twelfthPercentage: "",
  graduationPercentage: "",
  university: "",
  cibilScore: "",
};

const initialFiles = {
  photo: null,
  signature: null,
  aadharCard: null,
  panCard: null,
  resume: null,
};

const Application = () => {
  const token = localStorage.getItem("token");

  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [files, setFiles] = useState(initialFiles);

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file inputs
  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;

    setFiles((prev) => ({
      ...prev,
      [name]: selectedFiles[0] || null,
    }));
  };

  // Submit application
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      Object.entries(files).forEach(([key, file]) => {
        if (file) {
          data.append(key, file);
        }
      });

      const res = await submitApplication(data, token);

      alert(
        res.data.message || "Application Submitted Successfully"
      );

      setFormData(initialFormData);
      setFiles(initialFiles);

      formRef.current?.reset();

    } catch (err) {
      alert(
        err.response?.data?.message || "Application Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="application-layout">

      {/* STUDENT NAVBAR */}
      <Navbar />

      {/* APPLICATION PAGE */}
      <main className="application-page">

        <div className="application-card">

          {/* HEADER */}
          <div className="application-header">

            <h2>Application Form</h2>

            <p>
              Complete the application form carefully. All fields
              are required for placement registration.
            </p>

          </div>

          {/* FORM BODY */}
          <div className="application-body">

            <form ref={formRef} onSubmit={handleSubmit}>

              {/* PERSONAL INFORMATION */}
              <div className="form-section">

                <h3>👤 Personal Information</h3>

                <div className="grid">

                  <div>
                    <label htmlFor="fullName">Full Name</label>

                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone">Phone</label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      inputMode="numeric"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="cibilScore">CIBIL Score</label>

                    <input
                      id="cibilScore"
                      type="number"
                      name="cibilScore"
                      placeholder="Enter CIBIL score"
                      value={formData.cibilScore}
                      onChange={handleChange}
                      min="0"
                      max="900"
                    />
                  </div>

                </div>
              </div>

              {/* ACADEMIC INFORMATION */}
              <div className="form-section">

                <h3>🎓 Academic Information</h3>

                <div className="grid">

                  <div>
                    <label htmlFor="tenthPercentage">
                      10th Percentage
                    </label>

                    <input
                      id="tenthPercentage"
                      type="number"
                      name="tenthPercentage"
                      placeholder="Enter 10th percentage"
                      value={formData.tenthPercentage}
                      onChange={handleChange}
                      min="0"
                      max="100"
                      step="0.01"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="twelfthPercentage">
                      12th Percentage
                    </label>

                    <input
                      id="twelfthPercentage"
                      type="number"
                      name="twelfthPercentage"
                      placeholder="Enter 12th percentage"
                      value={formData.twelfthPercentage}
                      onChange={handleChange}
                      min="0"
                      max="100"
                      step="0.01"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="graduationPercentage">
                      Graduation Percentage
                    </label>

                    <input
                      id="graduationPercentage"
                      type="number"
                      name="graduationPercentage"
                      placeholder="Enter graduation percentage"
                      value={formData.graduationPercentage}
                      onChange={handleChange}
                      min="0"
                      max="100"
                      step="0.01"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="university">University</label>

                    <input
                      id="university"
                      type="text"
                      name="university"
                      placeholder="Enter university name"
                      value={formData.university}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>
              </div>

              {/* DOCUMENT UPLOAD */}
              <div className="form-section">

                <h3>📄 Upload Documents</h3>

                <div className="grid">

                  <div>
                    <label htmlFor="photo">Photo</label>

                    <input
                      id="photo"
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="signature">Signature</label>

                    <input
                      id="signature"
                      type="file"
                      name="signature"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="aadharCard">
                      Aadhaar Card
                    </label>

                    <input
                      id="aadharCard"
                      type="file"
                      name="aadharCard"
                      accept=".pdf,image/*"
                      onChange={handleFileChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="panCard">PAN Card</label>

                    <input
                      id="panCard"
                      type="file"
                      name="panCard"
                      accept=".pdf,image/*"
                      onChange={handleFileChange}
                      required
                    />
                  </div>

                  <div className="full">
                    <label htmlFor="resume">Resume</label>

                    <input
                      id="resume"
                      type="file"
                      name="resume"
                      accept=".pdf"
                      onChange={handleFileChange}
                      required
                    />
                  </div>

                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="submit-btn"
                disabled={loading}
              >
                {loading
                  ? "Submitting..."
                  : "Submit Application"}
              </button>

            </form>

          </div>
        </div>

      </main>

    </div>
  );
};

export default Application;
