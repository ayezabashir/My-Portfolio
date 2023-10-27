import About from "./components/about/About"
import ContactForm from "./components/contactform/ContactForm"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Projects from "./components/projects/Projects"

function App() {
  return (
    <>
      <Header />
      <div className="blank"></div>
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
