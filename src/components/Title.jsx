import "./Title.css";

const Section_Title = ({ title }) => {
  return (
    <div>
      <div className="section-title-box">
          <span className="section-title">{title}</span>
      </div>
    </div>
  );
};

export default Section_Title;
