import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/menu";
import Projects from "./components/Projects";
import Services from "./components/Services";

function Portfolio() {
    return (
        <>
            <Menu />
            <Hero />
            <Services />
            <Projects />
            <Blog />
            <Contact />
            <Footer />


        </>
    )
}

export default Portfolio;