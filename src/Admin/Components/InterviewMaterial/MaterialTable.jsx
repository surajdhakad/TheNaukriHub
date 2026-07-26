import { useEffect, useState } from "react";
import {
  getMaterials,
  deleteMaterial,
} from "../../../Api/InterviewMaterialApi";

import AddMaterial from "./AddMaterial";
import "./MaterialTable.css";

const MaterialTable = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddMaterial, setShowAddMaterial] = useState(false);

  // ===============================
  // Fetch Materials
  // ===============================
  const fetchMaterials = async () => {
    try {
      setLoading(true);

      const res = await getMaterials();

      setMaterials(res.data.materials || []);
    } catch (error) {
      console.log(error);
      alert("Unable to fetch interview materials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  // ===============================
  // Delete Material
  // ===============================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this Interview Material?"
    );

    if (!confirmDelete) return;

    try {
      await deleteMaterial(id);

      alert("Material Deleted Successfully");

      fetchMaterials();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Delete Failed"
      );
    }
  };

  return (
    <>
      <div className="material-table-container">

        {/* Header */}

        <div className="material-header">

          <div>
            <h2>Interview Materials</h2>
            <p>Total Materials : {materials.length}</p>
          </div>

          <button
            className="add-material-btn"
            onClick={() => setShowAddMaterial(true)}
          >
            + Upload PDF
          </button>

        </div>

        {/* Table */}

        {loading ? (
          <div className="loading">
            Loading Materials...
          </div>
        ) : (
          <table>

            <thead>

              <tr>
                <th>#</th>
                <th>Company</th>
                <th>Title</th>
                <th>Description</th>
                <th>PDF</th>
                <th>Date</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {materials.length === 0 ? (
                <tr>
                  <td colSpan="7" className="no-data">
                    No Interview Material Found
                  </td>
                </tr>
              ) : (
                materials.map((item, index) => (
                  <tr key={item._id}>

                    <td>{index + 1}</td>

                    <td>
                      {item.companyName}
                    </td>

                    <td>
                      {item.title}
                    </td>

                    <td>
                      {item.description}
                    </td>

                    <td>

                      {item.pdf ? (
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="view-btn"
                        >
                          View PDF
                        </a>
                      ) : (
                        "No PDF"
                      )}

                    </td>

                    <td>
                      {new Date(
                        item.createdAt
                      ).toLocaleDateString()}
                    </td>

                    <td>

                      {item.pdf && (
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          className="download-btn"
                        >
                          Download
                        </a>
                      )}

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(item._id)
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))
              )}

            </tbody>

          </table>
        )}
      </div>

      {showAddMaterial && (
        <AddMaterial
          onClose={() =>
            setShowAddMaterial(false)
          }
          onSuccess={() => {
            fetchMaterials();
            setShowAddMaterial(false);
          }}
        />
      )}
    </>
  );
};

export default MaterialTable;