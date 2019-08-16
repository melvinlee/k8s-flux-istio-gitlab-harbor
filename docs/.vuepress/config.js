module.exports = {
  title: "Kubernetes + Flux + Knative + GitLab + Harbor",
  description: "Kubernetes + Flux + Knative + GitLab + Harbor",
  base: '/k8s-flux-knative-gitlab-harbor/',
  head: [
    ['link', { rel: "icon", href: "https://kubernetes.io/images/favicon.png" }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: true,
    repo: 'ruzickap/k8s-flux-knative-gitlab-harbor',
    docsDir: 'docs',
    editLinks: true,
    logo: 'https://kubernetes.io/images/favicon.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Links',
        items: [
          { text: 'Flux', link: 'https://www.weave.works/oss/flux/' },
          { text: 'GitLab', link: 'https://gitlab.com' },
          { text: 'Harbor', link: 'https://goharbor.io' },
          { text: 'Knative', link: 'https://cloud.google.com/knative' },
        ]
      }
    ],
    sidebar: [
      '/',
      '/part-01/',
    ]
  },
  plugins: [
    ['@vuepress/medium-zoom'],
    ['@vuepress/back-to-top'],
    ['reading-progress'],
    ['smooth-scroll'],
    ['seo']
  ]
}