import { useEffect, useState } from "react";
import "./InterviewPreparation.css";
import MaterialCard from "./MaterialCard";
import { getMaterials } from "../../../Api/InterviewMaterialApi";

const InterviewPreparation = () => {
  const [materials, setMaterials] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Fetch Materials
  const fetchMaterials = async () => {
    try {
      setLoading(true);

      const res = await getMaterials();

      setMaterials(res.data.materials || []);
      setFiltered(res.data.materials || []);
    } catch (err) {
      console.log(err);
      alert("Unable to fetch interview materials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  // Filter
  useEffect(() => {
    let data = [...materials];

    if (category !== "All") {
      data = data.filter((item) => item.category === category);
    }

    if (search.trim() !== "") {
      data = data.filter((item) =>
        item.companyName.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(data);
  }, [search, category, materials]);

  return (
    <div className="interview-container">

      <div className="interview-header">
        <div>
          <h2>Interview Preparation</h2>
          <p>Prepare for your dream company interviews</p>
        </div>
      </div>

      <div className="filter-section">

        <input
          type="text"
          placeholder="Search Company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>IT</option>
          <option>Bank</option>
          <option>Finance</option>
          <option>Insurance</option>
          <option>BPO</option>
          <option>Other</option>
        </select>

      </div>

      {loading ? (
        <div className="loading">
          Loading Interview Materials...
        </div>
      ) : filtered.length === 0 ? (
        <div className="no-material">
          No Interview Material Found
        </div>
      ) : (
        <div className="material-grid">

          {filtered.map((item) => (
            <MaterialCard key={item._id} item={item} />
          ))}

        </div>
      )}
    </div>
  );
};

export default InterviewPreparation;