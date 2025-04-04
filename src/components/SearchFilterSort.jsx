import { Search, Filter, Calendar } from "lucide-react";

const SearchFilterSort = ({ search, setSearch, filter, setFilter, sortOrder, setSortOrder }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6 items-center justify-between bg-white p-4 shadow-md rounded-lg">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search incidents..."
          className="pl-10 border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filter Dropdown */}
      <div className="relative">
        <Filter className="absolute left-3 top-3 text-gray-500" size={20} />
        <select
          className="pl-10 pr-4 border border-gray-300 p-3 rounded-md bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      {/* Sort Dropdown */}
      <div className="relative">
        <Calendar className="absolute left-3 top-3 text-gray-500" size={20} />
        <select
          className="pl-10 pr-4 border border-gray-300 p-3 rounded-md bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilterSort;
