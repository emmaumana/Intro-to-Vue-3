const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
      updateCart(id) {
        this.cart.push(id);
      },
      removeItem(id) {
        for( const item of this.cart.entries() ) {
          if( item === id ) {
            this.cart.indexOf(id) > -1 ? this.cart.splice(this.cart.indexOf(id), 1) : false;
          }
        }
      }
    }
})
