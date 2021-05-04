import T from 'prop-types'
import SbEditable from 'storyblok-react'
import Headline from './Headline'
import Codepen from './Codepen'
import Grid from './Grid'

// resolve Storyblok components to Next.js components
const Components = {
  headline: Headline,
  featured_codepen: Codepen,
  grid: Grid,
}

const DynamicBlok = ({ blok }) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    // wrap with SbEditable for visual editing
    return (
      <SbEditable content={blok}>
        <Component blok={blok} />
      </SbEditable>
    )
  }

  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  )
}

DynamicBlok.propTypes = {
  blok: T.object,
}

export default DynamicBlok
