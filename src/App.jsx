import { Route, Router, Routes } from "react-router-dom"
import Home from ''./Pages/Home'
import ResumeStep from './pages/ResumeStep'
import UserForm from './pages/UserForm'
import ViewResume from '/pages/ViewResume'
import Dowlords from './pages/Dowlords'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/steps" element={<ResumeStep/>}/>
        <Route path="/form" element={<UserForm/>}/>
        <Route path="/resume/:id/view" element={<ViewResume/>}/>
        <Route path="/dowlords" element={<Dowlords/>}/>
                <Route path="/" element={<PageNotFound/>}/>

       
      </Routes>
      <Footer/>
    </>
  )
}

export default App
