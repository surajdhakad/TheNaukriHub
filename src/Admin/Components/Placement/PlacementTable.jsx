import { useEffect, useState } from "react";
import {
  getPlacements,
  deletePlacement,
} from "../../../Api/PlacementApi";

import AddPlacement from "./AddPlacement";
import EditPlacement from "./EditPlacement";

import "./PlacementTable.css";

const PlacementTable = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [selectedPlacement, setSelectedPlacement] =
    useState(null);

  // ===========================
  // Fetch Placements
  // ===========================

  const fetchPlacements = async () => {
    try {
      setLoading(true);

      const res = await getPlacements();

      setPlacements(res.data.placements);
    } catch (error) {
      console.log(error);
      alert("Unable to fetch placements");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlacements();
  }, []);

  // ===========================
  // Delete Placement
  // ===========================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this placement?"
    );

    if (!confirmDelete) return;

    try {
      await deletePlacement(id);

      alert("Placement Deleted");

      fetchPlacements();
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
      <div className="placement-table-container">

        <div className="placement-header">

          <h2>Placed Students</h2>

          <button
            className="add-placement-btn"
            onClick={() => setShowAdd(true)}
          >
            + Add Placement
          </button>

        </div>

        {loading ? (

          <h3 className="loading">
            Loading Placements...
          </h3>

        ) : (

          <table>

            <thead>

              <tr>

                <th>#</th>

                <th>Photo</th>

                <th>Student</th>

                <th>Company</th>

                <th>Role</th>

                <th>Package</th>

                <th>Location</th>

                <th>Year</th>

                <th>Status</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {placements.length === 0 ? (

                <tr>

                  <td colSpan="10">
                    No Placements Found
                  </td>

                </tr>

              ) : (

                placements.map((item, index) => (

                  <tr key={item._id}>

                    <td>{index + 1}</td>

                    <td>

                      <img
                        className="student-photo"
                        src={
                          item.photo
                            ? `http://localhost:5000/uploads/placements/${item.photo}`
                            : "https://via.placeholder.com/50"
                        }
                        alt=""
                      />

                    </td>

                    <td>{item.studentName}</td>

                    <td>{item.companyName}</td>

                    <td>{item.designation}</td>

                    <td>{item.package}</td>

                    <td>{item.location}</td>

                    <td>{item.passingYear}</td>

                    <td>

                      <span
                        className={
                          item.status
                            ? "active"
                            : "inactive"
                        }
                      >
                        {item.status
                          ? "Active"
                          : "Inactive"}
                      </span>

                    </td>

                    <td>

                      <button
                        className="edit-btn"
                        onClick={() => {
                          setSelectedPlacement(item);
                          setShowEdit(true);
                        }}
                      >
                        Edit
                      </button>

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

      {/* Add Placement */}

      {showAdd && (

        <AddPlacement
          onClose={() => setShowAdd(false)}
          onSuccess={() => {
            fetchPlacements();
            setShowAdd(false);
          }}
        />

      )}

      {/* Edit Placement */}

      {showEdit && (

        <EditPlacement
          placement={selectedPlacement}
          onClose={() => setShowEdit(false)}
          onSuccess={() => {
            fetchPlacements();
            setShowEdit(false);
          }}
        />

      )}
    </>
  );
};

export default PlacementTable;