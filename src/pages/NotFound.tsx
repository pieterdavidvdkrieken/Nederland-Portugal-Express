import Button from '../components/ui/Button'
import Divider from '../components/ui/Divider'
import AuroraBackdrop from '../components/ui/AuroraBackdrop'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-noir px-6 text-center">
      <AuroraBackdrop />
      <div className="relative">
        <p className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-6">Off Course</p>
        <h1 className="font-display text-7xl sm:text-8xl text-gradient-gold-static">404</h1>
        <Divider className="my-8" />
        <p className="text-mist font-light max-w-md mx-auto mb-10">
          This route appears to have drifted off the map. Let us guide you back to familiar waters.
        </p>
        <Button to="/">Return Home</Button>
      </div>
    </section>
  )
}
