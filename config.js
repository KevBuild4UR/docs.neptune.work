new Docute({
target: 'doc',
title: 'Neptune Documentation',
cssVariables: {
  accentColor: '#007bff',
  linkColor: '#007bff',
  navLinkBorderColor: '#007bff'
  },
highlight: ['json', 'markdown', 'c'],
detectSystemDarkTheme: true,
darkThemeToggler: true,
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
        { title: 'Available IPLs', link: '/ipls' }
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
            { title: '可用物品放置场景', link: '/zh/ipls' }
          ]
        }
      ]
    }
  }

})

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
