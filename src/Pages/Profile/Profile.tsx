import { Button } from "@/components/ui/button";
import { useGetMeQuery, useUpdateUserMutation } from "@/Redux/features/user/user.api";
import { useState } from "react";
import ProfilePictureUploader from "./ProfilePictureUploader";
import { toast } from "sonner";

const Profile = () => {
  const [updateProfile, setUpdateProfile] = useState(false);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const { data: userData, isLoading, isError } = useGetMeQuery(undefined);

  const [updateUser] = useUpdateUserMutation();

  if (isLoading) return <h2 className="text-center mt-10">Loading profile...</h2>;
  if (isError) return <h2 className="text-center mt-10">Failed to load profile.</h2>;

  const user = userData?.data;

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("file", profilePicture as File);

    const userData = {
      bio: e.target.bio.value,
      location: e.target.location.value,
    };

    formData.append("data", JSON.stringify(userData));
    const toastId = toast.success("Updating your profile");
    try {
      const res = await updateUser({
        userId: user._id as string,
        data: formData,
      }).unwrap();
      if (res.success) {
        toast.success("User Updated Successfully", { id: toastId });
        console.log("responseee", res);
        setUpdateProfile(false);
      }
    } catch (error) {
      toast.error(error.message);
    }
    console.log("from formdata", formData.get("data"));
    console.log("from formdata", formData.get("file"));
    // Send to backend
  };

  return (
    <div className="max-w-xl mx-auto ">
      <h1 className="font-bold text-3xl mb-6">My Profile</h1>

      <div className="p-6 border border-gray-300 bg-gray-50 rounded-lg shadow-sm flex items-center justify-center flex-col">
        {user?.profilePicture && (
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img src={user.profilePicture} alt="Profile" className="w-full h-full object-cover" />
          </div>
        )}

        <p className="mb-2">
          <strong>Name:</strong> {user?.name || "N/A"}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {user?.email || "N/A"}
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> {user?.phone || "Not Added"}
        </p>
        <p className="mb-2">
          <strong>Location:</strong> {user?.location || "Not Added"}
        </p>
        <p>
          <strong>Bio:</strong> {user?.bio || "No bio added yet."}
        </p>

        <Button className="mt-6" onClick={() => setUpdateProfile(true)}>
          Update Profile
        </Button>
      </div>

      {/* UPDATE PROFILE FORM */}
      {updateProfile && (
        <div className="mt-8 p-6 border rounded-lg shadow-sm">
          <h2 className="font-semibold text-xl mb-4">Update Your Profile</h2>

          <form onSubmit={handleUpdateSubmit} className="space-y-5">
            {/* Bio */}
            <div>
              <label className="font-medium">Bio</label>
              <textarea name="bio" defaultValue={user?.bio} className="w-full mt-2 p-2 border rounded" rows="3"></textarea>
            </div>

            {/* Location */}
            <div>
              <label className="font-medium">Location</label>
              <input name="location" defaultValue={user?.location} className="w-full mt-2 p-2 border rounded" type="text" />
            </div>

            {/* Profile Picture Upload */}
            <ProfilePictureUploader
              initialProfilePicture={user?.profilePicture as string | null}
              onChange={setProfilePicture}
            ></ProfilePictureUploader>

            <Button type="submit" className="w-full">
              Update Profile
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
