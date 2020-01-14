export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1d30f653bd6801f3fe35dc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9zpsesg1',
                  apiId: 'cb998c6b-7684-472b-87be-19dbac17a5a6'
                },
                {
                  buildHookId: '5e1d30f65190df01df350155',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-pt4rhj99',
                  apiId: '50fdc13a-a88e-40e5-9784-f0d3c5a2d5c3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nelreina/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-pt4rhj99.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
