new Docute({
target: 'doc',
title: 'Neptune Documentation',
router: {
    mode: 'history'
  },
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Blog',
      link: 'https://www.neptune.work/blog'
    }
      ],
  sidebar: [
    {
      children: [
        { title: 'Home', link: '/' },
        { title: 'Contributors', link: '/contributors' },
        { title: 'Available IPLs', link: '/ipls' }
      ]
    }
  ],
  overrides: {
    '/': {
      language: 'English' // Used by the language dropdown menu in the sidebar
    },
    '/zh/': {
      language: '中文',
      // Override the default sidebar
      sidebar: [
        {
          children: [
            { title: '首页', link: '/zh/' },
            { title: '贡献者', link: '/zh/contributors' },
            { title: '可用物品放置场景', link: '/zh/ipls' }
          ]
        }
      ]
    }
  }

})
