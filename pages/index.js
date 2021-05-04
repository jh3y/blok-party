import T from 'prop-types'
import DynamicBlok from '../components/DynamicBlok'
import useStoryblok from '../lib/storyblok-hook'
import Storyblok from '../lib/storyblok'

const Layout = ({ children }) => (
  <main className="flex items-center flex-col text-center bg-blue-50 p-6 min-h-screen">
    {children}
  </main>
)
Layout.propTypes = {
  children: T.node,
}

export default function Home({ story, preview }) {
  story = useStoryblok(story, preview)
  return (
    <Layout>
      {story
        ? story.content.body
            .filter(blok => blok.component !== 'seo')
            .map(blok => <DynamicBlok blok={blok} key={blok._uid} />)
        : null}
    </Layout>
  )
}
Home.propTypes = {
  story: T.object,
  preview: T.bool,
}

export async function getStaticProps(context) {
  let slug = 'home'
  // Allow override with NODE_ENV
  const draft = process.env.NODE_ENV === 'development' || context.preview

  let params = {
    version: draft ? 'draft' : 'published',
    ...(context.preview && { cv: Date.now() }),
    resolve_relations: 'featured_codepen.pen',
  }

  // Use the CDN.
  const { data } = await Storyblok.get(`cdn/stories/${slug}`, params)
  // Use the API.

  return {
    props: {
      story: data ? data.story : false,
      preview: draft || false,
    },
    revalidate: 10,
  }
}
