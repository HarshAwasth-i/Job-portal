import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  MapPin,
  BriefcaseBusiness,
  IndianRupee,
  Heart,
} from "lucide-react";

const JobCard = ({ job }) => {
  return (
    <Card className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-blue-600 font-semibold">
              {job.company}
            </p>

            <h2 className="text-xl font-bold mt-1 text-gray-900 dark:text-white">
              {job.title}
            </h2>
          </div>

          <Heart className="cursor-pointer text-gray-500 dark:text-gray-300 hover:text-red-500 transition" />
        </div>

        <div className="flex flex-wrap gap-4 mt-6 text-gray-600 dark:text-gray-300 text-sm">
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            {job.location}
          </div>

          <div className="flex items-center gap-1">
            <BriefcaseBusiness size={16} />
            {job.job_type || job.type}
          </div>

          <div className="flex items-center gap-1">
            <IndianRupee size={16} />
            {job.salary}
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Experience: {job.experience}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {job.skills &&
            (Array.isArray(job.skills)
              ? job.skills
              : job.skills.split(",")
            ).map((skill) => (
              <Badge
                key={skill.trim()}
                variant="secondary"
                className="dark:bg-gray-700 dark:text-gray-200"
              >
                {skill.trim()}
              </Badge>
            ))}
        </div>

        <div className="mt-6">
          <Link to={`/job/${job.id}`}>
            <Button className="w-full">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;