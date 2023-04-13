<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div v-for="nav in navigations" :key="nav.name" class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          :class="{ active: isMatch(nav.path) }"
          class="nav-link"
        >
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <div class="user" @click="toAbout"><img :src="image" :alt="name" /></div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import Logo from '~/components/Logo';

export default {
  components: {
    Logo,
  },

  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/',
        },
        {
          name: 'Movie',
          href: '/movie/tt4520988',
          path: /^\/movie/,
        },
        {
          name: 'About',
          href: '/about',
        },
      ],
    };
  },
  computed: {
    ...mapState('about', ['image', 'name']),
  },
  methods: {
    isMatch(path) {
      if (!path) return false;
      console.log(this.$route);
      return path.test(this.$route.fullPath);
    },
    toAbout() {
      console.log('!!!!');
      this.$router.push('/about');
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  position: relative;

  .logo {
    margin-right: 40px;
  }
  .user {
    width: 40px;
    height: 40px;
    padding: 5px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: #fbef6e;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 40px;
    bottom: 0;
    margin: auto;
    transition: 0.4s ease;

    &:hover {
      background-color: darken(#fbef6e, 30%);
    }

    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  @include media-breakpoint-down(sm) {
    .nav {
      display: none;
    }
  }
}
</style>
