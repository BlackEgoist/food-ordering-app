import hero from "../assets/hero.png";

const Hero = () => {
 return(
    <div>
        <img src={hero} className="w-full max-h-[600] object-cover" alt="Hero image with burger" />
    </div>
 )
}

export default Hero;