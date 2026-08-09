import "./CompanySlider.css";
import bgImage from "../../../assets/Images/background-image.png";

// Logos
import hdfc from "../../../assets/Images/banks-logo/hdfc.webp";
import icici from "../../../assets/Images/banks-logo/icic.webp";
import axis from "../../../assets/Images/banks-logo/asix.webp";
import abc from "../../../assets/Images/banks-logo/abc.webp";
import mahindra from "../../../assets/Images/banks-logo/mahendra-finance.webp";
import au from "../../../assets/Images/banks-logo/au.webp";
import idfc from "../../../assets/Images/banks-logo/idfc.webp";
import kotak from "../../../assets/Images/banks-logo/kotak.webp";
import equitas from "../../../assets/Images/banks-logo/equtas.webp";
import dcb from "../../../assets/Images/banks-logo/DCB.webp";

const firstRow = [
  { logo: hdfc, name: "HDFC" },
  { logo: icici, name: "ICICI" },
  { logo: axis, name: "Axis" },
  { logo: abc, name: "ABC" },
  { logo: mahindra, name: "Mahindra" },
];

const secondRow = [
  { logo: kotak, name: "Kotak" },
  { logo: idfc, name: "IDFC" },
  { logo: au, name: "AU" },
  { logo: equitas, name: "Equitas" },
  { logo: dcb, name: "DCB" },
];

export default function CompanySlider() {
  return (
    <section
      className="company-section"
      style={{
        background: `linear-gradient(rgba(8,15,35,.90),rgba(8,15,35,.92)), url(${bgImage}) center/cover no-repeat`,
      }}
    >
      <div className="company-container">

        <div className="company-heading">
          <span>OUR HIRING PARTNERS</span>

          <h2>Companies Hiring Through TheNaukriHub</h2>

          <p>
            Trusted Banking & Financial Companies recruiting through
            TheNaukriHub.
          </p>
        </div>

        <div className="slider">
          <div className="slide-track left">
            {[...firstRow, ...firstRow, ...firstRow, ...firstRow].map(
              (item, index) => (
                <div className="company-card" key={index}>
                  <img src={item.logo} alt={item.name} />
                </div>
              )
            )}
          </div>
        </div>

        <div className="slider">
          <div className="slide-track right">
            {[...secondRow, ...secondRow, ...secondRow, ...secondRow].map(
              (item, index) => (
                <div className="company-card" key={index}>
                  <img src={item.logo} alt={item.name} />
                </div>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
}