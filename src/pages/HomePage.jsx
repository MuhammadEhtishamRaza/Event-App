import CardBox from "../components/card/Card"
import Contact from "../components/contact/Contact"
import Header from "../components/header/Header"
import HeroSection from "../components/heroSection/HeroSection"

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <CardBox />
            <Contact />
        </div>
    )
}

export default HomePage