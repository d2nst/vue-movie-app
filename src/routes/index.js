import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home';
import Movie from './Movie';
import About from './About';
import NotFound from './NotFound';

export default createRouter({
  // Hash, History
  // 특정한 주소에 검색페이지로 이동하고 싶을 경우 https://googole.com/#/search <- '#/'을 사용해서 접근하는 모드가 hash 모드
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  //pages
  routes: [
    {
      path: '/', // 페이지 구분하는 경로
      component: Home,
    },
    {
      path: '/movie/:id',
      component: Movie,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});
