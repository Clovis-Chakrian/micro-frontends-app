import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/create',
    name: 'Create_Contact',
    component: () => import('../views/CreateContact.vue')
  },
  {
    path: '/update/:contactId',
    name: 'Update_Contact',
    component: () => import('../views/UpdateContact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
