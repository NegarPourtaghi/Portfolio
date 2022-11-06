<template>
  <div class="app"   :class="mode">
   <Navbar :mode="mode" @toggle="toggle"></Navbar>
   <router-view></router-view>
  

</div>
</template>

<script>

  import Navbar from './Components/Navbar.vue';
export default {
  components:{Navbar},
  name: 'app',
  data () {
   return{
mode: 'light'
   }
  },



  methods:{
    toggle(){
      if (this.mode === "dark") {
        this.mode = "light"
      }
      else{
        this.mode = "dark"
      }
    }
  }
}
</script>



<style>
  .app{
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    transition: .5s ease-in-out;
  }
  *{
margin: 0 ;
padding: 0 ;
box-sizing: border-box;

  }
  #app .dark{
    background-color: #161736;
    transition: .5s ease-in-out;
  }
 
</style>