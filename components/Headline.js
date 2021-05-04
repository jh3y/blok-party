import T from 'prop-types'

const Headline = ({ blok }) => (
  <h1 className="font-bold text-2xl mb-4">{blok.value}</h1>
)
Headline.propTypes = {
  blok: T.object,
}

export default Headline
