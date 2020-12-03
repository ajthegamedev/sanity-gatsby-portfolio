export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5fc95ab001780e10a3195460',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-69x7moq8',
                  apiId: '46899e1c-efeb-43f6-9b5c-41878f30b817'
                },
                {
                  buildHookId: '5fc95ab07b04350e219bee9d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-wozza1n1',
                  apiId: 'c11ef178-8d0a-40f0-b282-bfa8bae7ac11'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajthegamedev/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-wozza1n1.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
