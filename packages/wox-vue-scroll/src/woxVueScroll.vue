<template>
  <div class="wox-vue-scroll">
    <slot 
      :isScrollDown="isScrollDown"
      :showGoTop="showGoTop"
    >
    </slot>
  </div>
</template>

<script>
export default {
  name: 'WoxVueScroll',
  data() {
    return {
      isScrollDown: true,
      scrollTop: 0,
      showGoTop: false,
      timer: null,
    }
  },
  methods: {
    handleScroll() {
      const scrollTop = this.getScrollTop();
      this.isScrollDown = this.scrollTop > scrollTop;
      this.scrollTop = scrollTop;
      this.showGoTop = scrollTop > 100 ? true : false;
    },

    throttle() {
      let timer = null;
      let wait = 500;
      let prevTimer = 0;
      return () => {
        const now = Date.now();
        if (now - prevTimer > wait) {
          if (timer) clearTimeout(timer);
          prevTimer = now;
          this.handleScroll();
        } else {
          if (timer) clearTimeout(timer);
          timer = setTimeout(this.handleScroll, wait);
        }
      }
    },

    getScrollTop() {
      let scrollTop = 0;
      let bodyScrollTop = 0;
      let documentScrollTop = 0;

      if (document.body) {
        bodyScrollTop = document.body.scrollTop;
      }

      if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
      }

      scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
      
      return scrollTop;
    }
  },
  mounted () {
    window.addEventListener('scroll', this.throttle());
  }
}
</script>