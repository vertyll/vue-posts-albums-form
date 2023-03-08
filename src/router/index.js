import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'
import PostsView from '../views/PostsView.vue'
import AlbumsView from '../views/AlbumsView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import { getAlbumsData } from "@/api.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/form',
      name: 'form',
      component: FormView
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView
    },
    {
      path: '/albums',
      name: 'albums',
      component: AlbumsView
    },
    {
      path: "/albums/:albumId/photos",
      name: "photos",
      component: () => import("@/views/PhotosView.vue"),
      props: (route) => ({
        ...route.params,
        albumId: parseInt(route.params.albumId),
      }),
      async beforeEnter(to) {
        let album = await getAlbumsData();
        const checkAlbum = album.find((album) => album.id == to.params.albumId);
        if (!checkAlbum) return { name: "not-found" };
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
