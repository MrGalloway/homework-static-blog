import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
//

export default withRouteData(({ posts }) => (
  <div>
    <Head>
      <title>Blog</title>
    </Head>
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul className="blog-links">
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/post/${post.id}/`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
