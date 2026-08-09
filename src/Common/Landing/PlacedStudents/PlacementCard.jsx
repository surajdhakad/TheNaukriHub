import "./PlacementCard.css";

const PlacementCard = ({ placement }) => {
  const image = placement.photo
    ? `http://localhost:5000/uploads/${placement.photo}`
    : `https://ui-avatars.com/api/?background=2563eb&color=fff&name=${encodeURIComponent(
        placement.studentName || "Student"
      )}`;

  return (
    <div className="placement-card">
      <div className="placement-image">
        <img
          src={image}
          alt={placement.studentName}
          loading="lazy"
        />

        <div className="company-badge">
          🏢 {placement.companyName}
        </div>
      </div>

      <div className="placement-body">

        <h3>{placement.studentName}</h3>

        <div className="designation">
          💼 {placement.designation}
        </div>

        <div className="placement-details">

          <div className="detail-box">
            <span>💰</span>
            <p>{placement.package}</p>
          </div>

          <div className="detail-box">
            <span>📍</span>
            <p>{placement.location}</p>
          </div>

          <div className="detail-box">
            <span>🎓</span>
            <p>{placement.course}</p>
          </div>

          <div className="detail-box">
            <span>🏫</span>
            <p>{placement.branch}</p>
          </div>

        </div>

        <div className="placement-footer">

          <span>{placement.passingYear}</span>

          <button>
            View →
          </button>

        </div>

      </div>
    </div>
  );
};

export default PlacementCard;