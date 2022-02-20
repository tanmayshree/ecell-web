import Section_Title from '../../components/Title';
import './About.css'
import image from "./../../assets/about.png"

const About = () => {
  return (
    <div className='about-page'>
      <Section_Title title={"About E-Cell"} />
      <div className='about-wrapper'>
        <p className='about-content'>The Entrepreneurship Cell(E-Cell), NIT Agartala is a non-profit organization run by students of National Institute of Technology,Agartala that aims at manifesting the latent entrepreneurial spirit of the young students. It is the most sought after club for students to reflect upon entrepreneurial ideas and manifest their ideas into reality. E-Cell aims at promoting the start up culture in Agartala as well as North-East India. With various undergoing projects, few successful startups, a lot of failures and the flagship 'Carpedieum E-Summit', E-Cell has transformed itself from a small community established by budding entrepreneurs in 2017 to full-fledged organization with multi-talented like-minded people striving to solve the various problems with an entrepreneurial mindset. Hence, we believe in building entrepreneurs by providing them with necessary incentives such as mentors, consultancy, the seed fund and networking opportunities. In short, every single thing that a student entrepreneur could plausibly need.</p>
        <img className="about-image" src={image} alt="" />
      </div>
    </div>
  );
}

export default About;