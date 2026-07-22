import { Route, Routes } from 'react-router-dom'
import LangLayout from './i18n/LangLayout'
import RootRedirect from './i18n/RootRedirect'
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
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/:lang" element={<LangLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="secure-storage" element={<SecureStorage />} />
        <Route path="international-removals" element={<InternationalRemovals />} />
        <Route path="contact" element={<Contact />} />
        <Route path="quote-request" element={<QuoteRequest />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<RootRedirect />} />
    </Routes>
  )
}
