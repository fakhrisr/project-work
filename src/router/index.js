import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
      path: '/',
      name: 'Home',
      component:() => import ('../pages/landingPage.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component:() => import ('../pages/login/index.vue'),
    },
    {
      path: '/dashboard/index',
      name: 'Dashboard',
      component:() => import ('../pages/dashboard/index.vue'),
    },
    {
      path: '/peminjaman/index',
      name: 'Peminjaman',
      component:() => import ('../pages/peminjaman/index.vue'),
    },
    {
      path: '/pengembalian/index',
      name: 'Pengembalian',
      component:() => import ('../pages/pengembalian/index.vue'),
    },
    {
      path: '/daftar/index',
      name: 'daftar',
      component:() => import ('../pages/daftar/index.vue'),
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;