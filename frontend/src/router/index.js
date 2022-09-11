import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list-datasets',
      component: () => import('../views/ListDatasetsView.vue')
    },
    {
      path: '/datasets/:datasetName/configuration',
      name: 'edit-filters',
      component: () => import('../views/EditFiltersView.vue')
    }
  ]
})

export default router
