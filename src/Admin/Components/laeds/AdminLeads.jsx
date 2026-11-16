import { useEffect, useState } from "react";
import Api from "../../../Api/Api";
import "./AdminLeads.css";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "../../Css/Dashboard.css";

function AdminLeads() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const { data } = await Api.get("/leads");
      setLeads(data.leads || data || []);
    } catch (error) {
      console.error("Failed to fetch leads:", error);
    }
  };

  const filteredLeads = leads.filter((lead) =>
    `${lead.name || ""} ${lead.phone || ""} ${lead.college || ""} ${
      lead.district || ""
    }`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="admin-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar search={search} setSearch={setSearch} />

        <section className="admin-leads">
          <div className="lead-header">
            <div>
              <h2>Lead Management</h2>
              <p>Total Leads: {filteredLeads.length}</p>
            </div>
          </div>

          <div className="lead-table-wrapper">
            <table className="lead-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>College</th>
                  <th>District</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="no-data">
                      No Leads Found
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead._id}>
                      <td>{lead.name || "-"}</td>
                      <td>{lead.phone || "-"}</td>
                      <td>{lead.college || "-"}</td>
                      <td>{lead.district || "-"}</td>
                      <td>
                        {lead.createdAt
                          ? new Date(lead.createdAt).toLocaleDateString("en-IN")
                          : "-"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminLeads;