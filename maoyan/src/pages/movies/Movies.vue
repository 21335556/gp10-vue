<template>
  <div>
    <Nav></Nav>
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Nav from "./Nav";
// import Intheaters from './Intheaters'
export default {
  data() {
    return {
      transitionName: "slide-left"
    };
  },

  components: {
    Nav
    // Intheaters
  },

  watch: {
    $route(to, from) {
      this.transitionName = to.meta > from.meta ? "slide-left" : "slide-right";
    }
  }
};
// enter-active-class="animated slideInLeft"
// leave-active-class="animated slideOutLeft"
</script>

<style lang="stylus" scoped>
div {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.slide-left-enter-active, .slide-right-enter-active, .slide-left-leave-active, .slide-right-leave-active {
  transition: all 0.3s;
}

.slide-left-enter, .slide-right-leave-to {
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-to, .slide-right-enter {
  transform: translate3d(-100%, 0, 0);
}
</style>

