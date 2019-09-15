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
                  buildHookId: '5d7e55777d12f20a7d6a5a10',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-g9xooo7g',
                  apiId: '65bd63b9-83d5-444b-8350-b7355851f47f'
                },
                {
                  buildHookId: '5d7e5577eccc1860d429a457',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dkq1ucwq',
                  apiId: '55352005-b4b6-4235-b5bd-0a38ea6cecb2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thomasmery/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dkq1ucwq.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
