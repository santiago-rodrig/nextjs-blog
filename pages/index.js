import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm Santiago, a full-stack web developer specialized in Ruby
          on Rails, I studied in the Microverse school for remote
          software developers where I crafted dozens of nifty web
          applications.
        </p>
        <p>
          (This is a sample website - you'll be building a site like{' '}
          this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
