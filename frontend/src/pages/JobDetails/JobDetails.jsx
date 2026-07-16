import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../../services/jobService";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { applyJob } from "../../services/applicationService";
import { useAuth } from "../../context/AuthContext";

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
    alert("Please login first.");
    return;
  }

  try {
    const response = await applyJob({
      user_id: user.id,
      job_id: id,
    });

    alert(response.data.message);
  } catch (error) {
    if (error.response?.data?.message) {
      alert(error.response.data.message);
    } else {
      alert("Something went wrong.");
    }
  }
};

  if (!job) {
    return (
      <h1 className="text-center text-2xl mt-20">
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10">

      <h1 className="text-5xl font-bold">
        {job.title}
      </h1>

      <p className="text-2xl text-blue-600 mt-2">
        {job.company}
      </p>

      <div className="flex flex-wrap gap-6 mt-8">

        <div className="flex items-center gap-2">
          <MapPin />
          {job.location}
        </div>

        <div className="flex items-center gap-2">
          <BriefcaseBusiness />
          {job.job_type}
        </div>

        <div className="flex items-center gap-2">
          <IndianRupee />
          {job.salary}
        </div>

      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold">
          Experience
        </h2>

        <p className="mt-3">
          {job.experience}
        </p>
      </div>

      <div className="mt-10">

        <h2 className="text-3xl font-bold">
          Description
        </h2>

        <p className="mt-4 text-gray-600 leading-8">
          {job.description}
        </p>

      </div>

      <div className="mt-10">

        <h2 className="text-3xl font-bold">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3 mt-5">

          {job.skills.split(",").map((skill) => (
            <Badge key={skill.trim()}>
              {skill.trim()}
            </Badge>
          ))}

        </div>

      </div>

    <Button
  className="mt-12"
  onClick={handleApply}
>
  Apply Now
</Button>

    </div>
  );
};

export default JobDetails;