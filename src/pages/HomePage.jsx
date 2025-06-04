import CardBox from "../components/card/Card"
import Contact from "../components/contact/Contact"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import HeroSection from "../components/heroSection/HeroSection"

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <CardBox />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage