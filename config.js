import SearchBar from 'https://cdn.jsdelivr.net/npm/docute@4.23.3/lib/plugins/search/SearchBar.vue';
export default {
  name: 'search',
  extend: function extend(api) {
    api.registerComponent('header-right:start', SearchBar);
  }
};

new Docute({
target: 'doc',
title: 'Neptune Documentation',
router: {
    mode: 'history'
  },
cssVariables: {
    accentColor: '#007bff'
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

})
