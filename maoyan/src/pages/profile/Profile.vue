<script>
export default {
  mounted() {
    console.log('mounted');
  },

  data: {
    title: 'hello'
  },

  methods: {
    clickHandler() {
      this.title = 'world'
    }
  },

  render(h) {
    console.log('render');
    return h(
      'div',
      {
        attrs: {
          name: this.title
        } ,
        on: {
          click: this.clickHandler
        }
      },
      'click'
    )
  },

  updated() {
    console.log('updated');
  },
}
</script>