import About from './About';
import Hero_Section from './Hero_Section';
import './Home.css';
import Message from './Message';
const Home = () => {
   return (
      <div className="Home">
         <Hero_Section />
         <About />
         <Message />
      </div>
   );
}

export default Home;