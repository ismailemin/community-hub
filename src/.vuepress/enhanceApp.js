import event from '@vuepress/plugin-pwa/lib/event'

export default ({ router }) => {
  autoReload();
  
  router.addRoutes([
    { path: '/docs/', redirect: '/' },
  ])
}

// When new content is detected by the app, this will automatically
// refresh the page, so that users do not need to manually click
// the refresh button. For more details see:
// https://linear.app/optimism/issue/FE-1003/investigate-archive-issue-on-docs
const autoReload = () => {
    event.$on('sw-updated', e => e.skipWaiting().then(() => {
      location.reload(true);
    }))
}
