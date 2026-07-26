import { useState } from "react";
import { updateApplicationStatus } from "../../../Api/ApplicationApi";
import "./ApplicationModal.css";

const ApplicationModal = ({ application, onClose, refresh }) => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  const changeStatus = async (status) => {
    try {
      setLoading(true);

      await updateApplicationStatus(
        application._id,
        status,
        token
      );

      alert(`Application ${status}`);

      refresh();

      onClose();

    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">

      <div className="modal-container">

        <div className="modal-header">
          <h2>Student Application</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="modal-body">

          {/* Personal */}

          <div className="section">

            <h3>Personal Information</h3>

            <p><strong>Name :</strong> {application.fullName}</p>

            <p><strong>Email :</strong> {application.email}</p>

            <p><strong>Phone :</strong> {application.phone}</p>

          </div>

          {/* Academic */}

          <div className="section">

            <h3>Academic Details</h3>

            <p>
              <strong>10th :</strong>
              {" "}
              {application.tenthPercentage}%
            </p>

            <p>
              <strong>12th :</strong>
              {" "}
              {application.twelfthPercentage}%
            </p>

            <p>
              <strong>Graduation :</strong>
              {" "}
              {application.graduationPercentage}%
            </p>

            <p>
              <strong>University :</strong>
              {" "}
              {application.university}
            </p>

          </div>

          {/* Documents */}

          <div className="section">

            <h3>Documents</h3>

            <div className="document-grid">

              <div>

                <p>Photo</p>

                <img
                  src={`http://localhost:5000/${application.photo}`}
                  alt="photo"
                />

              </div>

              <div>

                <p>Signature</p>

                <img
                  src={`http://localhost:5000/${application.signature}`}
                  alt="signature"
                />

              </div>

            </div>

            <div className="links">

              <a
                href={`http://localhost:5000/${application.aadharCard}`}
                target="_blank"
                rel="noreferrer"
              >
                View Aadhaar
              </a>

              <a
                href={`http://localhost:5000/${application.panCard}`}
                target="_blank"
                rel="noreferrer"
              >
                View PAN
              </a>

              <a
                href={`http://localhost:5000/${application.resume}`}
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>

            </div>

          </div>

          {/* Status */}

          <div className="section">

            <h3>Status</h3>

            <h2>{application.status}</h2>

          </div>

        </div>

        <div className="modal-footer">

          <button
            className="approve-btn"
            disabled={loading}
            onClick={() => changeStatus("Approved")}
          >
            Approve
          </button>

          <button
            className="reject-btn"
            disabled={loading}
            onClick={() => changeStatus("Rejected")}
          >
            Reject
          </button>

        </div>

      </div>

    </div>
  );
};

export default ApplicationModal;