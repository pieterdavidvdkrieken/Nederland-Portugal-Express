import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import LangLayout from './i18n/LangLayout'
import RootRedirect from './i18n/RootRedirect'
import RouteFallback from './components/layout/RouteFallback'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const SecureStorage = lazy(() => import('./pages/SecureStorage'))
const VehicleLogistics = lazy(() => import('./pages/VehicleLogistics'))
const InternationalRelocation = lazy(() => import('./pages/InternationalRelocation'))
const Contact = lazy(() => import('./pages/Contact'))
const QuoteRequest = lazy(() => import('./pages/QuoteRequest'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/:lang" element={<LangLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="secure-storage" element={<SecureStorage />} />
          <Route path="vehicle-logistics" element={<VehicleLogistics />} />
          <Route path="international-relocation" element={<InternationalRelocation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="quote-request" element={<QuoteRequest />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<RootRedirect />} />
      </Routes>
    </Suspense>
  )
}
