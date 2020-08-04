import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <h1>SHN.nu — Sosik-Hamor Networks</h1>

    <h3>Sean's Lab for learning <a href="https://nextjs.org/">Next.js</a> and <a href="https://jamstack.org/">JAMstack</a> on <a href="https://www.netlify.com/">Netlify</a>.</h3>

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
