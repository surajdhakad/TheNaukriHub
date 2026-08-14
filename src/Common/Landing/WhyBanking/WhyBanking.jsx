import "./WhyBanking.css";

import {
  FaShieldAlt,
  FaChartLine,
  FaMoneyBillWave,
  FaGraduationCap,
  FaGlobeAsia,
  FaUserTie,
} from "react-icons/fa";

const bankingBenefits = [
  {
    id: 1,
    icon: <FaShieldAlt />,
    title: "Job Stability & Security",
    description:
      "Banking sector provides long-term job security and a stable career path, even during economic uncertainty.",
  },
  {
    id: 2,
    icon: <FaChartLine />,
    title: "High Career Growth Opportunities",
    description:
      "Get fast promotions and multiple growth opportunities based on your performance and skills.",
  },
  {
    id: 3,
    icon: <FaMoneyBillWave />,
    title: "Attractive Salary & Incentives",
    description:
      "Earn a competitive salary along with incentives, bonuses, and performance-based rewards.",
  },
  {
    id: 4,
    icon: <FaGraduationCap />,
    title: "No Experience Required (Fresher Friendly)",
    description:
      "Freshers can easily start their career with proper training and guidance — no prior experience needed.",
  },
  {
    id: 5,
    icon: <FaGlobeAsia />,
    title: "PAN India Job Opportunities",
    description:
      "Work in your preferred location with job openings across metro and Tier 2/3 cities all over India.",
  },
  {
    id: 6,
    icon: <FaUserTie />,
    title: "Skill Development & Career Upgrade",
    description:
      "Develop valuable skills like communication, sales, and financial knowledge for long-term career growth.",
  },
];

function WhyBanking() {
  return (
    <section className="why-banking-section">
      <div className="why-banking-container">

        {/* ================= HEADER ================= */}

        <div className="why-banking-header">
          <h2>
            Why Choose the{" "}
            <span>Banking Sector?</span>
          </h2>

          <p>
            A career in Banking, Financial Services, and Insurance (BFSI)
            offers unparalleled stability and growth.
          </p>
        </div>

        {/* ================= CARDS ================= */}

        <div className="why-banking-grid">

          {bankingBenefits.map((item) => (
            <div
              className="why-banking-card"
              key={item.id}
            >

              {/* ICON */}

              <div className="why-banking-icon">
                {item.icon}
              </div>

              {/* TITLE */}

              <h3>
                {item.title}
              </h3>

              {/* DESCRIPTION */}

              <p>
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyBanking;