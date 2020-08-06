import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <Head>
      <title>Sosik-Hamor Networks</title>
      <meta property="og:title" content="Sosik-Hamor Networks" key="title" />
    </Head>

    <h1>SHN.nu — Sosik-Hamor Networks</h1>

    <h3>Sean's Lab for learning <a href="https://nextjs.org/">Next.js</a> and <a href="https://jamstack.org/">Jamstack</a> on <a href="https://www.netlify.com/">Netlify</a>.</h3>

    <p><a href="https://www.hamorhollow.com/">Hamor Hollow Hedgehogs</a> | <a href="https://hamor.com/">Hamor Photography</a> | <a href="https://seansosikhamor.github.io/">Sean on GitHub</a></p>

    <p>Other labs can be found at <a href="https://seansosikhamor.github.io/">SeanSosikHamor.GitHub.io</a>.</p>

    <style jsx>{`
      :global(html,body) {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      :global(body) {
        font-size: calc(10px + 1vmin);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
          'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #282c34;
        color: white;
      }

      a {
        color: pink;
        text-decoration: none;
      }

      .content {
        padding: 0 32px;
      }
    `}</style>
  </div>
)

export default Home
