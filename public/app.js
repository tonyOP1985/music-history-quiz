new Vue({
  el: '#app',
  data: {
    msg: 'Quiz your knowledge of Baroque, Classical, and Romantic period music history.',
    msg2: 'The quiz has started',
    start: false,
    count: 31,
    timeOut: 'Time Out'
  },
  methods: {
    countDown () {
      let setCount = setTimeout(this.countDown, 500)
      this.count--

      if (this.count === 0) {
        clearTimeout(setCount)
      }
      if (this.count > 0) setCount
    }
  }
  
})