import T from 'prop-types'
import { Fragment } from 'react'

const Codepen = ({ blok: { pen } }) => {
  return (
    <Fragment>
      <p
        className="codepen"
        data-height={365}
        data-theme-id="dark"
        data-default-tab="result"
        data-user="jh3y"
        data-zoom="0.5"
        data-preview={true}
        data-slug-hash={pen.content.id}
        style={{
          height: 365,
          width: 365,
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid',
          margin: '1em 0',
          padding: '1em',
        }}
        data-pen-title={pen.content.title}>
        <span>Loading CodePen...</span>
      </p>
      <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
    </Fragment>
  )
}
Codepen.propTypes = {
  blok: T.shape({
    pen: T.shape({
      content: T.shape({
        title: T.string,
        id: T.string,
      }),
    }),
  }),
}

export default Codepen
