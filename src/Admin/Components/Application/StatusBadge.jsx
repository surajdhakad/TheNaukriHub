const StatusBadge = ({ status }) => {
  const getStatusClass = () => {
    switch (status) {
      case "Approved":
        return "status approved";

      case "Rejected":
        return "status rejected";

      default:
        return "status pending";
    }
  };

  return (
    <span className={getStatusClass()}>
      {status}
    </span>
  );
};

export default StatusBadge;