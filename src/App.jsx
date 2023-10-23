import About from "./components/about/About"
import ContactForm from "./components/contactform/ContactForm"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

function App() {
  return (
    <>
      <Header />
      <div className="blank"></div>
      <About />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
