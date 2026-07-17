import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getProfile, uploadResume } from "../../services/authService";
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = useAuth();

  const [profile, setProfile] = useState(null);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await getProfile(user.id);
      setProfile(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleResumeUpload = async () => {
    if (!resume) {
      toast.error("Please select a resume.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);

    try {
      const response = await uploadResume(user.id, formData);

      toast.success(response.data.message);

      fetchProfile();
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload resume.");
    }
  };

  if (!profile) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
          Loading Profile...
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10">

      {/* Profile Card */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8 transition-all duration-300">

        <div className="flex flex-col items-center">

          <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold">
            {profile.name.charAt(0).toUpperCase()}
          </div>

          <h1 className="text-3xl font-bold mt-4 text-gray-900 dark:text-white">
            {profile.name}
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {profile.email}
          </p>

          <span className="mt-3 px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium">
            {profile.role}
          </span>

        </div>

      </div>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6 text-center">

          <h2 className="text-gray-500 dark:text-gray-400">
            Applications
          </h2>

          <p className="text-4xl font-bold mt-3 text-gray-900 dark:text-white">
            0
          </p>

        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6 text-center">

          <h2 className="text-gray-500 dark:text-gray-400">
            Jobs Posted
          </h2>

          <p className="text-4xl font-bold mt-3 text-gray-900 dark:text-white">
            0
          </p>

        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6 text-center">

          <h2 className="text-gray-500 dark:text-gray-400">
            Resume
          </h2>

          <p className="text-4xl mt-3">
            {profile.resume ? "✅" : "❌"}
          </p>

        </div>

      </div>

      {/* Resume */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6 mt-8">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Resume
        </h2>

        {profile.resume ? (
          <a
            href={`http://localhost:5000/uploads/${profile.resume}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Uploaded Resume
          </a>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            No resume uploaded
          </p>
        )}

        <div className="mt-6">

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files[0])}
            className="block w-full text-sm text-gray-700 dark:text-gray-300 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700"
          />

          <button
            onClick={handleResumeUpload}
            className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
          >
            Upload Resume
          </button>

        </div>

      </div>

    </div>
  );
};

export default Profile;