import { useState } from "react";
import { mockIncidents } from "../mockData";
import SearchFilterSort from "./SearchFilterSort";
import IncidentList from "./IncidentList";
import ReportIncident from "./ReportIncident";

const IncidentDashboard = () => {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("Newest");

  const handleAddIncident = (newIncident) => {
    setIncidents((prevIncidents) => [newIncident, ...prevIncidents]);
  };

  const filteredIncidents = incidents
    .filter((incident) =>
      filter === "All" ? true : incident.severity === filter
    )
    .filter((incident) =>
      incident.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "Newest"
        ? new Date(b.reported_at) - new Date(a.reported_at)
        : new Date(a.reported_at) - new Date(b.reported_at)
    );

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-xl rounded-xl border border-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center">
        🚀 AI Safety Incident Dashboard
      </h1>

      {/* Search, Filter, and Sort Section */}
      <div className="mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
        <SearchFilterSort
          search={search} setSearch={setSearch}
          filter={filter} setFilter={setFilter}
          sortOrder={sortOrder} setSortOrder={setSortOrder}
        />
      </div>

      {/* Incident List */}
      <div className="mb-6">
        <IncidentList incidents={filteredIncidents} />
      </div>

      {/* Report New Incident - Styled Form */}
      <div className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-300">
        <ReportIncident onAddIncident={handleAddIncident} />
      </div>
    </div>
  );
};

export default IncidentDashboard;
