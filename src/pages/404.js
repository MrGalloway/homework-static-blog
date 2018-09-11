import React from 'react'
import { Head } from 'react-static'
import errimg from '../404.jpg'

//

export default () => (
  <div>
    <Head>
      <title>Jesus Christ, Denton!</title>
    </Head>
    <h1>404</h1>
    <p>Oh my god, JC a bomb!</p>
    <img alt='404' src={errimg} />
  </div>
)
