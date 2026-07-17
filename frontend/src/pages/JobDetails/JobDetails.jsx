import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../../services/jobService";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { applyJob } from "../../services/applicationService";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

import {
  MapPin,
  BriefcaseBusiness,
  IndianRupee,
} from "lucide-react";

const JobDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [job, setJob] = useState(null);

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const response = await getJobById(id);
      setJob(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleApply = async () => {
    if (!user) {
      toast.error("Please login first.");
      return;
    }

    try {
      const response = await applyJob({
        user_id: user.id,
        job_id: id,
      });

      toast.success(response.data.message);
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong.");
      }
    }
  };

  if (!job) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10">

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 transition-all duration-300">

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          {job.title}
        </h1>

        <p className="text-2xl text-blue-600 mt-2">
          {job.company}
        </p>

        {/* Job Info */}
        <div className="flex flex-wrap gap-6 mt-8 text-gray-700 dark:text-gray-300">

          <div className="flex items-center gap-2">
            <MapPin size={20} />
            {job.location}
          </div>

          <div className="flex items-center gap-2">
            <BriefcaseBusiness size={20} />
            {job.job_type}
          </div>

          <div className="flex items-center gap-2">
            <IndianRupee size={20} />
            {job.salary}
          </div>

        </div>

        {/* Experience */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Experience
          </h2>

          <p className="mt-3 text-gray-700 dark:text-gray-300">
            {job.experience}
          </p>
        </div>

        {/* Description */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Description
          </h2>

          <p className="mt-4 leading-8 text-gray-600 dark:text-gray-300">
            {job.description}
          </p>
        </div>

        {/* Skills */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Skills Required
          </h2>

          <div className="flex flex-wrap gap-3 mt-5">
            {job.skills.split(",").map((skill) => (
              <Badge
                key={skill.trim()}
                className="dark:bg-gray-700 dark:text-white"
              >
                {skill.trim()}
              </Badge>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <div className="mt-12">
          <Button
            onClick={handleApply}
            className="w-full md:w-auto px-8 py-6 text-lg"
          >
            Apply Now
          </Button>
        </div>

      </div>

    </div>
  );
};

export default JobDetails;