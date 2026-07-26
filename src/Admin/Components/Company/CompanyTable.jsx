import { useEffect, useState } from "react";
import { getCompanies, deleteCompany } from "../../../Api/CompanyApi";
import AddCompany from "./AddCompany";
import "./CompanyTable.css";

const CompanyTable = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddCompany, setShowAddCompany] = useState(false);

  // ===========================
  // Fetch Companies
  // ===========================
  const fetchCompanies = async () => {
    try {
      setLoading(true);

      console.log("Fetching Companies...");
      console.log("Token:", localStorage.getItem("token"));

      const res = await getCompanies();

      console.log("API Response:", res.data);

      if (res.data.success) {
        setCompanies(res.data.companies);
      } else {
        alert("Unable to load companies");
      }
    } catch (error) {
      console.log("========== COMPANY ERROR ==========");
      console.log(error);
      console.log("Status:", error.response?.status);
      console.log("Response:", error.response?.data);
      console.log("URL:", error.config?.url);
      console.log("===================================");

      alert(
        error.response?.data?.message || "Unable to fetch companies"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  // ===========================
  // Delete Company
  // ===========================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this company?"
    );

    if (!confirmDelete) return;

    try {
      await deleteCompany(id);

      alert("Company Deleted Successfully");

      fetchCompanies();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Delete Failed"
      );
    }
  };

  // ===========================
  // Loading
  // ===========================
  if (loading) {
    return (
      <div className="company-table-container">
        <h2>Loading Companies...</h2>
      </div>
    );
  }

  return (
    <>
      <div className="company-table-container">

        <div className="company-header">
          <h2>Companies</h2>

          <button
            className="add-company-btn"
            onClick={() => setShowAddCompany(true)}
          >
            + Add Company
          </button>
        </div>

        <table>

          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {companies.length === 0 ? (

              <tr>
                <td colSpan="7">
                  No Companies Found
                </td>
              </tr>

            ) : (

              companies.map((company, index) => (

                <tr key={company._id}>

                  <td>{index + 1}</td>

                  <td>{company.name}</td>

                  <td>{company.email}</td>

                  <td>
                    {company.website ? (
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>

                  <td>{company.location}</td>

                  <td>
                    {company.status ? (
                      <span style={{ color: "green" }}>
                        Active
                      </span>
                    ) : (
                      <span style={{ color: "red" }}>
                        Inactive
                      </span>
                    )}
                  </td>

                  <td>

                    <button className="edit-btn">
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(company._id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

      {showAddCompany && (
        <AddCompany
          onClose={() => setShowAddCompany(false)}
          onSuccess={() => {
            fetchCompanies();
            setShowAddCompany(false);
          }}
        />
      )}
    </>
  );
};

export default CompanyTable;