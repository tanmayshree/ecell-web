import './Hero.css';

const Hero_Section = () => {
    return (
        <header className='hero-page' data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">
            <div className="hero-content">
                <div className="hero-title">ENTREPRENEURSHIP CELL</div>
                <div className="hero-divider"><i class="fa-solid fa-diamond" />
                    <span className='divider-dash' />
                    <i class="fa-solid fa-diamond" /></div>
                <div className="hero-subtitle">National Institute of Technology, Agartala</div>
            </div>
        </header>
    );
}

export default Hero_Section;