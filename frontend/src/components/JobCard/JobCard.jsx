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
    <Card className="rounded-2xl border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-6">

        <div className="flex justify-between items-start">
          <div>

            <p className="text-blue-600 font-semibold">
              {job.company}
            </p>

            <h2 className="text-xl font-bold mt-1">
              {job.title}
            </h2>

          </div>

          <Heart className="cursor-pointer hover:text-red-500 transition" />
        </div>

        <div className="flex flex-wrap gap-4 mt-6 text-gray-600 text-sm">

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

        <p className="mt-4 text-sm text-gray-500">
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