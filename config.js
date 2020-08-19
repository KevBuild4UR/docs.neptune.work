new Docute({
target: 'doc',
title: 'Neptune Documentation',
router: {
    mode: 'history'
  },
highlight: ['typescript', 'bash', 'json', 'markdown', 'c'],
sourcePath: '/',
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
        { title: 'Available IPLs', link: '/ipls' },
        { title: 'Contributors', link: '/contributors' }
      ]
    }
  ],
  overrides: {
    '/': {
      language: 'English' 
    },
    '/zh/': {
      language: '中文',      
      sidebar: [
        {
          children: [
            { title: '首页', link: '/zh/' },
            { title: '可用物品放置场景', link: '/zh/ipls' },
            { title: '贡献者', link: '/zh/contributors' }
          ]
        }
      ]
    }
  }

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}

})
