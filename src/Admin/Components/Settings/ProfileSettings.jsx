import React, { useEffect, useState } from "react";
import {
  getSettings,
  updateProfile,
} from "../../../Api/SettingsApi";

const ProfileSettings = () => {
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "Administrator",
    profilePhoto: "",
  });

  // ==========================
  // Load Profile
  // ==========================
  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      setLoading(true);

      const res = await getSettings();

      if (res.data.success) {
        setProfile({
          name: res.data.settings.profile?.name || "",
          email: res.data.settings.profile?.email || "",
          phone: res.data.settings.profile?.phone || "",
          designation:
            res.data.settings.profile?.designation ||
            "Administrator",
          profilePhoto:
            res.data.settings.profile?.profilePhoto || "",
        });
      }
    } catch (error) {
      console.log(error);
      alert("Unable to load profile.");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Input Change
  // ==========================
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================
  // Image Select
  // ==========================
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);

    setProfile((prev) => ({
      ...prev,
      profilePhoto: URL.createObjectURL(file),
    }));
  };

  // ==========================
  // Submit
  // ==========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", profile.name);
      formData.append("email", profile.email);
      formData.append("phone", profile.phone);
      formData.append(
        "designation",
        profile.designation
      );

      if (selectedImage) {
        formData.append(
          "profilePhoto",
          selectedImage
        );
      }

      const res = await updateProfile(formData);

      if (res.data.success) {
        alert("Profile Updated Successfully");

        setSelectedImage(null);

        loadProfile();
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Update Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="settings-card">
      <h3>👤 Profile Settings</h3>

      <form
        className="settings-form"
        onSubmit={handleSubmit}
      >
        <div className="profile-image">

          <img
            src={
              profile.profilePhoto
                ? profile.profilePhoto
                : "https://via.placeholder.com/120"
            }
            alt="Profile"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

        </div>

        <div className="form-group">
          <label>Full Name</label>

          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>

          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Designation</label>

          <input
            type="text"
            name="designation"
            value={profile.designation}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="save-btn"
          disabled={loading}
        >
          {loading
            ? "Saving..."
            : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;