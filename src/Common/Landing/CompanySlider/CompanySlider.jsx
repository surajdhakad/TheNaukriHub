import "./CompanySlider.css";

/*
==================================
ROW 1
==================================
*/

const row1 = [
  "HDFC Bank",
  "Axis Bank",
  "ICICI Bank",
  "Aditya Birla Capital",
  "Mahindra Finance",
  "DBS Bank",
  "Yes Bank",
  "Kotak Mahindra Bank",
];

/*
==================================
ROW 2
==================================
*/

const row2 = [
  "State Bank of India",
  "Punjab National Bank",
  "Bank of Baroda",
  "IndusInd Bank",
  "AU Small Finance Bank",
  "Federal Bank",
  "IDFC FIRST Bank",
  "Canara Bank",
];

function CompanySlider() {
  return (
    <section className="company-section">

      <h2>Companies that hire through JobsHub</h2>

      <div className="slider">
        <div className="slide-track left">
          {[...row1, ...row1].map((item, index) => (
            <div className="company-card" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="slider">
        <div className="slide-track right">
          {[...row2, ...row2].map((item, index) => (
            <div className="company-card" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default CompanySlider;