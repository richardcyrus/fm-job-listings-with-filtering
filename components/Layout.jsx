import Head from 'next/head'

import Heading from './Heading'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Job Listings | Frontend Mentor</title>
        <meta
          name="description"
          content="This is a solution to the Job listings with filtering challenge on Frontend Mentor"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/modern-css-reset/dist/reset.min.css"
        />
      </Head>
      <div className="container">
        <Heading />
        <main id="main-content">{children}</main>
        <footer>
          <div className="attribution">
            Challenge by{' '}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              rel="noreferrer"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="https://www.richardcyrus.com">Richard Cyrus</a>.
          </div>
        </footer>
      </div>
    </>
  )
}
