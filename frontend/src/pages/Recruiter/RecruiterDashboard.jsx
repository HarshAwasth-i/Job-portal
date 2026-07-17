import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import PostJobForm from "../../components/PostJob/PostJobForm";
import ApplicantsList from "../../components/Applicants/ApplicantsList";
import { getAllJobs, deleteJob } from "../../services/jobService";
import { toast } from "react-toastify";

const RecruiterDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [editJob, setEditJob] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await getAllJobs();
      setJobs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    try {
      const response = await deleteJob(id);

  toast.success(response.data.message);

      fetchJobs();
    } catch (error) {
      console.error(error);
   toast.error("Failed to delete job");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-10">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            Recruiter Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your job postings
          </p>
        </div>

        <Button
          onClick={() => {
            setEditJob(null);
            setShowForm(!showForm);
          }}
        >
          {showForm ? "Close Form" : "+ Post New Job"}
        </Button>

      </div>

      {showForm && (
        <PostJobForm
          editJob={editJob}
          fetchJobs={fetchJobs}
          closeForm={() => {
            setShowForm(false);
            setEditJob(null);
          }}
        />
      )}

      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-6">
          Your Posted Jobs
        </h2>

        {jobs.length === 0 ? (

          <div className="bg-white rounded-xl shadow-md p-8">
            No Jobs Posted Yet
          </div>

        ) : (

          <div className="space-y-8">

            {jobs.map((job) => (

              <div
                key={job.id}
                className="bg-white rounded-xl shadow-md p-6"
              >

                {/* Job Info */}
                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-2xl font-bold">
                      {job.title}
                    </h3>

                    <p className="text-blue-600 mt-2">
                      {job.company}
                    </p>

                    <p className="text-gray-500">
                      {job.location}
                    </p>

                    <p className="text-green-600 font-semibold mt-2">
                      {job.salary}
                    </p>

                  </div>

                  <div className="flex gap-3">

                    <Button
                      variant="outline"
                      onClick={() => {
                        setEditJob(job);
                        setShowForm(true);
                      }}
                    >
                      Edit
                    </Button>

                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(job.id)}
                    >
                      Delete
                    </Button>

                  </div>

                </div>

                {/* Applicants */}
                <div className="mt-8 border-t pt-6">

                  <h4 className="text-xl font-semibold mb-4">
                    Applicants
                  </h4>

                  <ApplicantsList jobId={job.id} />

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default RecruiterDashboard;