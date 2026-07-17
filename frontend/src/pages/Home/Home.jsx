import { Button } from "@/components/ui/button";
import JobCard from "@/components/JobCard/JobCard";
import CompanyCard from "@/components/CompanyCard/CompanyCard";

import jobs from "@/utils/jobsData";
import companies from "@/utils/companyData";

import { Search, BriefcaseBusiness, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">
            🚀 India's Fastest Growing Job Portal
          </span>

          <h1 className="text-6xl md:text-7xl font-extrabold mt-8 leading-tight">
            Find Your
            <span className="text-blue-600"> Dream Career</span>
          </h1>

          <p className="mt-6 text-gray-600 text-xl max-w-3xl mx-auto">
            Discover thousands of opportunities from top companies
            and take the next step in your career.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-5 flex-wrap">
            <Link to="/jobs">
              <Button className="px-8 py-6 text-lg">
                Browse Jobs
              </Button>
            </Link>

            <Link to="/dashboard">
              <Button
                variant="outline"
                className="px-8 py-6 text-lg"
              >
                Recruiter Dashboard
              </Button>
            </Link>
          </div>

          {/* Search */}
          <div className="max-w-3xl mx-auto mt-14 flex items-center bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border dark:border-gray-700">
            <Search className="ml-5 text-gray-400" size={22} />

            <input
              type="text"
              placeholder="Search jobs, companies, skills..."
              className="flex-1 px-4 py-5 outline-none bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400"
            />

            <Button className="rounded-none px-8 h-full">
              Search
            </Button>
          </div>

          {/* Trending Skills */}
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            {[
              "React",
              "Node.js",
              "Python",
              "Java",
              "AI",
              "SQL",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-sm px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition border dark:border-gray-700">
            <BriefcaseBusiness
              className="mx-auto text-blue-600"
              size={45}
            />
            <h2 className="text-5xl font-bold mt-5">
              10K+
            </h2>
            <p className="text-gray-500 mt-2">
              Active Jobs
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition border dark:border-gray-700">
            <Building2
              className="mx-auto text-green-600"
              size={45}
            />
            <h2 className="text-5xl font-bold mt-5">
              500+
            </h2>
            <p className="text-gray-500 mt-2">
              Companies
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition border dark:border-gray-700">
            <Users
              className="mx-auto text-purple-600"
              size={45}
            />
            <h2 className="text-5xl font-bold mt-5">
              50K+
            </h2>
            <p className="text-gray-500 mt-2">
              Candidates
            </p>
          </div>

        </div>
      </section>

      {/* Featured Jobs */}
      <section className="max-w-7xl mx-auto px-4 py-16">

        <h2 className="text-4xl font-bold text-center mb-3">
          Featured Jobs
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
          Explore the latest opportunities from top companies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}
        </div>

      </section>

      {/* Top Companies */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-3">
            Top Companies Hiring
          </h2>

          <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
            Trusted by leading companies across India.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
              />
            ))}
          </div>

        </div>

      </section>

      {/* Call To Action */}
      <section className="bg-blue-600 dark:bg-blue-700 py-20 text-white transition-colors duration-300">

        <div className="max-w-4xl mx-auto text-center px-4">

          <h2 className="text-5xl font-bold">
            Ready to Start Your Career?
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Join thousands of professionals finding their dream jobs every day.
          </p>

          <Link to="/jobs">
            <Button
              variant="secondary"
              className="mt-8 px-10 py-6 text-lg"
            >
              Explore Jobs
            </Button>
          </Link>

        </div>

      </section>
    </>
  );
};

export default Home;