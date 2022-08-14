import "./TeamCard.css";

const TeamCard = ({ props }) => {
  return (
    <div
      className="card-wrapper"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="bottom-bottom"
    >
      <img src={props.image} alt={props.name} />
      <div className="card-content">
        <h3>{props.name}</h3>
        <h4>{props.post}</h4>
      </div>
      <a href={props.linkdUrl} target="_blank">
        <i className="team-sm fab fa-linkedin" />
      </a>
    </div>
  );
};

export default TeamCard;
