import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'

//
import Routes from 'react-static-routes'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Nova+Mono|Share+Tech+Mono|VT323');

  body {
    
    font-family: 'Nova Mono', monospace;
    font-family: 'Share Tech Mono', monospace;
    /* font-family: 'VT323', imonospace;
    font-family: "Courier New", Courier, monospace; */
    color: #83bca9;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    background: #282b28;
  }
`

const AppStyles = styled.div`
  p {
    white-space: pre-line;
  }

  a {
    text-decoration: underline dotted #a24936;
    color: #83bca9;
    /* font-weight: bold; */
  }

  nav {
    width: 100%;
    background: #3e5641;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: stretch;
    

    a {
      color: white;
      background: #83bca9;
      padding: 0.5rem;
      /* margin 1rem; */
      display: inline-block;
      text-decoration: none;
      /* border: dotted 1px #83bca9; */
    }
  }

  .content {
    padding: 1rem;
    max-width: 700px;
    margin: auto;
  }
  //TODO: decide on deleting
  img {
    max-width: 100%;
  }
  
  pre {
    border-bottom: line dotted;
  }
  
  .front-posts {
    list-style-type: none;
    padding: 0rem;
    a {
      font-weight: bold;
      font-size: 15pt;
    }
    p {
      text-align: justify;
    }
  }

  .blog-links {
    list-style-type: lower-greek;
  }

  .more-link {
    font-weight: bold;
    font-size: 30pt;
    display: block;
    text-align: center;
  }

  .no-space {
    font-size: 15pt;
    line-height: 15pt;
    line-spacing: 0pt;
    letter-spacing: -1pt;
    color: #a24936;
    overflow: visible;
    text-align: center;
    @media (max-width: 700px) {
      font-size: 10pt;
      line-height: 10pt;
    }
    @media (max-width: 300px) {
      font-size: 7pt;
      line-height: 7pt;
    }
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <nav>
        <Link exact to="/" style={{background:"#a24936"}}>
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
)

export default App
