import { forwardRef } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { useLang, localizePath } from './localePath'

const LocaleLink = forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...props }, ref) => {
  const lang = useLang()
  const target = typeof to === 'string' ? localizePath(lang, to) : to
  return <Link ref={ref} to={target} {...props} />
})
LocaleLink.displayName = 'LocaleLink'

export default LocaleLink
