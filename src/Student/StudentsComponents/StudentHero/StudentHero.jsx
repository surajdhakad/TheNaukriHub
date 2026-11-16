import "./StudentHero.css";

function StudentHero({ image = "/images/student-hero.jpg" }) {
  return (
    <section
      className="student-hero"
      style={{ "--hero-image": `url("${image}")` }}
    >
      <div className="student-hero__content">
        <h1>
          <span className="student-hero__orange">Build Your</span>
          <br />
          Future
          <br />
          With
          <br />
          <span className="student-hero__blue">TheNaukriHub</span>
        </h1>

        <p>
          TheNaukriHub helps students and fresh graduates discover verified
          opportunities and take their next step with confidence.
        </p>
      </div>

      <div className="student-hero__art" aria-hidden="true">
        <span className="student-hero__shape student-hero__shape--large" />
        <span className="student-hero__shape student-hero__shape--small" />
        <span className="student-hero__shape student-hero__shape--orange" />
      </div>
    </section>
  );
}

export default StudentHero;