<template>
     <div>





      <dark-mode :mode="mode" @toggle="$emit('toggle')">{{mode}} mode</dark-mode>
    <div class="navbar-nav"  >
     <ul class="navmenu" >
         <li class="nav-item"><span class="navlink " >Home</span>
            <router-link to="/" class="router-link" @click="reloadHome" >      <i class="fa-solid fa-house menuicon "  ></i>          </router-link>
        </li>
         <li class="nav-item"><span class="navlink">About</span>
        <router-link to="/about"  class="router-link" @click="reloadABout">    <i class="fa-solid fa-user menuicon" ></i>              </router-link>
        </li>
         <li class="nav-item"><span class="navlink" >Portfolio</span>
        <router-link to="/portfolio"  class="router-link" @click="reloadPortfolio">     <i class="fa-solid fa-briefcase menuicon"></i>    </router-link>
        </li>
         <li class="nav-item"><span class="navlink" >Contact</span>
        <router-link to="/contact"  class="router-link" @click="reloadContact">     <i class="fa-solid fa-envelope menuicon"></i>       </router-link>
        </li>
         <li class="nav-item"><span class="navlink">Blog</span>

<router-link to="/" class="router-link" @click="reloadHome">  <i class="fa-solid fa-comment menuicon"></i>     </router-link>      

</li>
 
     </ul>
    </div>
     </div>
</template>



<script>
import DarkMode from "./DarkMode.vue";

    export default{
    props: ['mode'],
    data() {
        return {
            changeColor: false,
        };
    },
    methods: {
        isClicked: function () {
            this.isclick = !this.isclick;
        }
    },
    components: { DarkMode }
}
</script>
<style>
  
/*------------------------
----------Navbar-----------------
----------------------------*/
.navbar-nav{
  position: fixed;
top: 25%;
right: 30px;
width: 10%;
z-index: 6;
}
.navlink{
  position: absolute;
font-weight: 600;
left: 66%;
opacity: 0;
font-size: 18px;
white-space: nowrap;
transition: all 0.3s ease-in-out;
z-index: -1;
color: white;
}

.nav-item{
  height: 50px;
  position: relative;
  transition: all 0.3s ease-in-out;
border-radius: 30px;
}
.nav-item:hover .navlink{
  position: absolute;
  font-weight: 600;
  left: 0;
  opacity: 1;
  font-size: 18px;
  white-space: nowrap;
  transition: all 0.3s ease-in-out;
  padding-left: 14px;
}
.nav-item:hover{
  left: 0;
  opacity: 1;
  background-color:   #ff0060;
border-radius: 30px;
z-index: 1;
transition: .5s ease-in-out;
}
.navmenu{
  list-style: none;
  width: 100%;
padding-left: 0;
}

.menucol{
  align-content: center;
display: flex;
justify-content: right;
}
.navbar{
  width: 70%;
  justify-content: right !important;
  height: 420px;
  top: 18%;
}
.navmenu{
  height: 300px;
  display: grid;
}

.menuicon{
justify-content: center;
display: flex !important;
align-items: center;
border-radius: 50%;
color: rgb(144, 144, 144);
transition:  .5s ease-in;

}

.nav-link{
  text-align: center;
display: flex;
align-items: center;
}
.nav-item{
  display: flex;
  justify-content: right;
  align-items: center;
}
 .active{
  background-color:   #ff0060 !important;
}
.active .menuicon{
  color: white;
}

.router-link{
  background-color: #dcdada;
width: 50px;
height: 50px;
justify-content: center;
display: flex !important;
align-items: center;
border-radius: 50%;
transition:  .4s ease-in;
text-decoration: none;

}

.nav-item:hover .router-link{
  background-color:   #ff0060;
}
.router-link:focus .menuicon , .nav-item:hover .menuicon{
  color: white;
}
/*--------------
------Color----------
------------------*/
.color{
  background-color:   #ff0060;
  width: 100%;
  height: 200%;
  transform: rotate(-15deg);
  top: -50px;
  position: fixed;
  left: -80%;
}
.dark .router-link{
  background-color:#323356fe ;
}
.dark .menuicon{
  color: white;
}
.dark .btn.btn2{
  background-color: #3e4260;
}
@media(max-width:1200px){
  .navbar-nav{
    width: 14%;
  }
  .main{
    max-width:100% !important;
    width: 90%;
  }
}
@media(max-width:990px){
  .nav-item:hover .navlink{
padding-left: 0 !important;  }
  .navbar-nav{
    bottom: 0px;
    width: 100%;
    right:0;
    top: unset;
    height: 60px;
    background-color: white;
    box-shadow: 0px 0px 16px 0px #dfdede;
    z-index: 10;
   }
  .navmenu{
    height: 0;
    display: flex;
justify-content: space-around;
padding: 10px 0px;
margin-bottom: 10px;
height: 100%;
  }
 .nav-item .navlink{
    display: none !important;
  }
  .dark .navbar-nav{
    background-color: #1e1f47;
box-shadow: 0px 0px 5px 0px #66728c;
  }
  .nav-item{
    padding-bottom: 8px;
  }
}
@media(max-width:600px){
  .menuicon , .btn2{
  font-size: 12px;
}
.router-link{
  width: 40px;
height: 40px;
}
}


</style>