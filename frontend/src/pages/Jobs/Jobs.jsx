import { useEffect, useState } from "react";
import { getAllJobs } from "../../services/jobService";
import JobCard from "../../components/JobCard/JobCard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchJobs(search, jobType, location);
  }, [search, jobType, location]);

  const fetchJobs = async (
    searchText = "",
    selectedType = "",
    selectedLocation = ""
  ) => {
    try {
      setLoading(true);

      const response = await getAllJobs(
        searchText,
        selectedType,
        selectedLocation
      );

      setJobs(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Available Jobs
      </h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
        />

        {/* Job Type */}
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
        >
          <option value="">All Job Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>

        {/* Location */}
        <input
          type="text"
          placeholder="📍 Filter by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
        />

      </div>

      {/* Loading */}
      {loading ? (
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
            Loading jobs...
          </h2>
        </div>
      ) : jobs.length === 0 ? (
        <h2 className="text-center text-xl text-gray-500 dark:text-gray-400">
          No Jobs Found
        </h2>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

    </div>
  );
};

export default Jobs;