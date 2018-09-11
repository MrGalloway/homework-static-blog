import React from 'react'
import { withSiteData, withRouteData, Link, Head } from 'react-static'
//import Post from '../containers/Post';
//
import logoImg from '../logo.png'

const ascii = [
  "███   █    ██   ▄▄▄▄▄▄   ▄█    ▄▄▄▄▀ ▀▄    ▄",
  "█  █  █    █ █ ▀   ▄▄▀   ██ ▀▀▀ █      █  █ ",
  "█ ▀ ▄ █    █▄▄█ ▄▀▀   ▄▀ ██     █       ▀█  ",
  "█  ▄▀ ███▄ █  █ ▀▀▀▀▀▀   ▐█    █        █   ",
  "███       ▀   █           ▐   ▀       ▄▀    ",
  "             █                              ",
  "            ▀                               "
].join("\n")

const postsToShow = 5;
export default withRouteData(withSiteData(({ title, posts }) => (

  

  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <h1 style={{ textAlign: 'center' }}>Welcome to {title}</h1>
    <pre className="no-space">
      {ascii}      
    </pre>
    <ul className="front-posts">
      {posts.slice(0,postsToShow).map(post => (
        <li key={post.id}>
          <Link to={`/post/${post.id}/`}>{post.title}</Link>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
    <Link className="more-link" to={`/blog`}>see more posts</Link>
  </div>
)))