import About from "./components/about/About"
import ContactForm from "./components/contactform/ContactForm"
import Cursor from "./components/cursor/Cursor"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/mainintro/Main"
import Projects from "./components/projects/Projects"

function App() {
  return (
    <>
      <Cursor />
      <Header />
      <div className="blank"></div>
      <Main />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
