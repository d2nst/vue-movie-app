<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
body {
  background: #020715;
  color: #fff;
  line-height: 1.4;
  font-family: 'Roboto', sans-serif;
}
</style>
