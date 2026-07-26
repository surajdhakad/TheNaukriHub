import "./InterviewPreparation.css";

const MaterialCard = ({ item }) => {
  return (
    <div className="material-card">

      <div className="material-top">
        <div className="pdf-icon">📄</div>

        <span className="category-badge">
          {item.category}
        </span>
      </div>

      <h3>{item.companyName}</h3>

      <h4>{item.title}</h4>

      <p>{item.description}</p>

      <div className="material-info">
        <span>
          📅 {new Date(item.createdAt).toLocaleDateString()}
        </span>

        {item.uploadedBy && (
          <span>
            👤 {item.uploadedBy.name}
          </span>
        )}
      </div>

      <div className="material-buttons">

        <a
          href={item.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="view-btn"
        >
          View PDF
        </a>

        <a
          href={item.pdf}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="download-btn"
        >
          Download
        </a>

      </div>

    </div>
  );
};

export default MaterialCard;