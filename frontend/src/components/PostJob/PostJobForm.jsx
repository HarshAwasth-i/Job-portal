import { useState } from "react";
import { createJob, updateJob } from "../../services/jobService";

const PostJobForm = ({
  editJob = null,
  fetchJobs,
  closeForm,
}) => {
  const [job, setJob] = useState(
    editJob || {
      title: "",
      company: "",
      location: "",
      salary: "",
      job_type: "Full-time",
      experience: "",
      description: "",
      skills: "",
    }
  );

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editJob) {
        const response = await updateJob(editJob.id, job);
        alert(response.data.message);
      } else {
        const response = await createJob({
          ...job,
          recruiter_id: 1,
        });

        alert(response.data.message);
      }

      if (fetchJobs) {
        fetchJobs();
      }

      if (closeForm) {
        closeForm();
      }

      setJob({
        title: "",
        company: "",
        location: "",
        salary: "",
        job_type: "Full-time",
        experience: "",
        description: "",
        skills: "",
      });

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-8 mt-8"
    >
      <h2 className="text-2xl font-bold mb-6">
        {editJob ? "Edit Job" : "Post a New Job"}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={job.company}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={job.experience}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <select
          name="job_type"
          value={job.job_type}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>

      </div>

      <textarea
        name="description"
        placeholder="Job Description"
        value={job.description}
        onChange={handleChange}
        rows="5"
        className="border rounded-lg p-3 w-full mt-4"
      />

      <textarea
        name="skills"
        placeholder="Skills (comma separated)"
        value={job.skills}
        onChange={handleChange}
        rows="3"
        className="border rounded-lg p-3 w-full mt-4"
      />

      <button
        type="submit"
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        {editJob ? "Update Job" : "Post Job"}
      </button>
    </form>
  );
};

export default PostJobForm;