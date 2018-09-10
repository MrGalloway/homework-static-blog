import axios from 'axios'

export default {
  plugins: ['react-static-plugin-styled-components'],
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://raw.githubusercontent.com/MrGalloway/unatco-handbook/master/document.json')
    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
      },
      {
        path: '/',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
}
