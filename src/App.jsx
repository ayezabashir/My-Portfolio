import About from "./components/about/About"
import Cursor from "./components/cursor/Cursor"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/mainintro/Main"
import Projects from "./components/projects/Projects"

function App() {
  return (
    <>
      <Header />
      <div className="blank"></div>
      <Main />
      <About />
      <Projects />
      <Footer />
      <Cursor />
    </>
  )
}

export default App
