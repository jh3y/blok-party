import T from 'prop-types'
import DynamicBlok from './DynamicBlok'

const Grid = ({ blok }) => {
  if (!blok.columns.length) return null
  return (
    <div className="grid grid-cols-2">
      {blok.columns.map(blok => (
        <DynamicBlok blok={blok} key={blok._uid} />
      ))}
    </div>
  )
}

Grid.propTypes = {
  blok: T.object,
}

export default Grid
