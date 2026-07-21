import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import SecureStorage from './pages/SecureStorage'
import InternationalRemovals from './pages/InternationalRemovals'
import Contact from './pages/Contact'
import QuoteRequest from './pages/QuoteRequest'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-noir">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/secure-storage" element={<SecureStorage />} />
          <Route path="/international-removals" element={<InternationalRemovals />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote-request" element={<QuoteRequest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
