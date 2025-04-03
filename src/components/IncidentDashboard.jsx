import { useState } from "react";
import { mockIncidents } from "../mockData";

const IncidentDashboard = () => {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [filter, setFilter] = useState("All"); // Default filter

  // Function to filter incidents based on severity
  const filteredIncidents = incidents.filter((incident) =>
    filter === "All" ? true : incident.severity === filter
  );

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Safety Incident Dashboard</h1>

      {/* Filter Dropdown */}
      <div className="mb-4">
        <label className="font-semibold mr-2">Filter by Severity:</label>
        <select
          className="border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      {/* Incident List */}
      <ul>
        {filteredIncidents.map((incident) => (
          <li key={incident.id} className="border p-3 mb-2 rounded shadow">
            <h2 className="text-lg font-semibold">{incident.title}</h2>
            <p className="text-sm text-gray-600">
              Severity: {incident.severity} | Reported:{" "}
              {new Date(incident.reported_at).toDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncidentDashboard;

