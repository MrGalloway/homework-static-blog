import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
//

export default withRouteData(({ post }) => (
  <div>
    <Head>
      <title>{post.title}</title>
    </Head>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
))
