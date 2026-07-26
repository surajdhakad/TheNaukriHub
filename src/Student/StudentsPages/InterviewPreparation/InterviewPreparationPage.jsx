import "./InterviewPreparationPage.css";

import Navbar from "../../StudentsComponents/Navbar/Navbar";
import Sidebar from "../../StudentsComponents/Sidebar/Sidebar";
import InterviewPreparation from "../../StudentsComponents/InterviewPreparation/InterviewPreparation";

const InterviewPreparationPage = () => {
  return (
    <>
      <Navbar />

      <div className="interview-page">

        <Sidebar />

        <div className="interview-content">
          <InterviewPreparation />
        </div>

      </div>
    </>
  );
};

export default InterviewPreparationPage;