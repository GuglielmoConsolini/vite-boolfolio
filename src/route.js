import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './views/AppHome.vue';
import AppAbout from './views/AppAbout.vue';
import AppProjects from './views/AppProjects.vue';
import AppContacts from './views/AppContacts.vue';


const routes = [
  { path: '/', component: AppHome, name: 'Home' },
  { path: '/about', component: AppAbout, name: 'About' },
  { path: '/projects', component: AppProjects, name: 'Projects' },
  { path: '/contacts', component: AppContacts, name: 'Contacts' },
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
