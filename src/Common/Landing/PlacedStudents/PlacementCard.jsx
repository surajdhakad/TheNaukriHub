import "./PlacementCard.css";

const PlacementCard = ({ placement }) => {

  const image =
    placement.photo
      ? `http://localhost:5000/uploads/${placement.photo}`
      : "https://ui-avatars.com/api/?name=" +
        encodeURIComponent(placement.studentName || "Student");

  return (
    <div className="placement-card">

      <div className="placement-image">

        <img
          src={image}
          alt={placement.studentName}
        />

      </div>

      <div className="placement-body">

        <h3>
          {placement.studentName}
        </h3>

        <h4>
          {placement.companyName}
        </h4>

        <p className="designation">
          💼 {placement.designation}
        </p>

        <div className="placement-info">

          <span>
            💰 {placement.package}
          </span>

          <span>
            📍 {placement.location}
          </span>

        </div>

        <div className="placement-extra">

          <span>
            🎓 {placement.course}
          </span>

          <span>
            🏫 {placement.branch}
          </span>

        </div>

        <div className="placement-year">

          Passing Year :
          <strong>
            {" "}
            {placement.passingYear}
          </strong>

        </div>

      </div>

    </div>
  );
};

export default PlacementCard;