export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60de3b465bf96600e6797e82',
                  title: 'Sanity Studio',
                  name: 'weda-sapper-blog-studio',
                  apiId: '89d9a519-a719-4188-8517-cde6889b8e10'
                },
                {
                  buildHookId: '60de3b465d65a100c1f3b16e',
                  title: 'Blog Website',
                  name: 'weda-sapper-blog',
                  apiId: 'd36283f8-ac69-423c-98e5-5132b86f81f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wedagintung/weda-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://weda-sapper-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
