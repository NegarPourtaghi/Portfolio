<template>
  <div>
    <div :class="{slideDown:screenIsLoading}" id="loading"></div>

    <div class="container main">
      <div class="header1" :class="{reload:reloadheader}" data-aos="fade-up" data-aos-duration="1000">

        <div class="resume">
          <h4 class="resume1">WORKS</h4>

        </div>


        <div class="headertext">
          <h4 class="text1">My </h4>
          <h4 class="text2">PORTFOLIO</h4>
        </div>
      </div>

      <div class="cd-tabs ">
        <navigation-bar  :tabs="['ALL', 'LOGO','VIDEO','GRAPHIC DESIGN']" :selected="selected" @selected="setSelected" curser="pointer">
          <tabs :isSelected="selected==='ALL'">
            <navigation-content></navigation-content>
          </tabs>

          <tabs :isSelected="selected==='LOGO'">
           
           <navigation-logo></navigation-logo>
          </tabs>


          <tabs :isSelected="selected==='VIDEO'">
          <navigation-video></navigation-video>
          </tabs>

          <tabs :isSelected="selected==='GRAPHIC DESIGN'">
<navigation-graphic></navigation-graphic>
          </tabs>

        </navigation-bar>


      </div>



    </div>
  </div>
</template>


<script>
  import NavigationBar from './NavigationBar.vue';
  import tabs from './tabs.vue';
  import NavigationContent from './NavigationContent.vue';
import NavigationLogo from './NavigationLogo.vue';
import NavigationVideo from './NavigationVideo.vue';
import NavigationGraphic from './NavigationGraphic.vue';
  export default {
    components: {
    NavigationBar,
    tabs,
    NavigationContent,
    NavigationLogo,
    NavigationVideo,
    NavigationGraphic
},
    data() {

      return {
        screenIsLoading: true,
        selected: 'ALL',
        reloadheader:true,

      }
    },
    methods: {
      setSelected(tab) {
        this.selected = tab;
      }
    },
    created() {
      setTimeout(() => this.screenIsLoading = false, 500)
    }
  }
</script>


<style scoped>
  /*----------------------
  ----------Header---------------
  --------------------------
  ---------------*/
  .row1 {
    position: relative;
    z-index: 1;
    width: 94%;
    top: 160px;
    margin: 50px 0 !important;
  }

  .imgh {
    width: 98%;
    border-radius: 20px;
  }

  .main {
    display: flex;
    justify-content: center;
  }

  .text {
    width: 78%;
  }

  .middle-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .t1 {
    font-size: 68px;
    font-size: 68px;
    color:   #ff0060;
    font-weight: 600;
  }

  .t2 {
    font-size: 60px;
    color: #5a5a5a;
    font-weight: 600;
  }

  .texth {
    text-align: center;
  }

  .t3 {
    font-size: 18px;
    font-weight: 400;
    line-height: 2;
    color: gray;
    margin-top: 20px;
    line-height: 1.6;
  }

  

  /*---------------------------
    ------------------------------
    --------------------------------*/
  .header1 {
    position: absolute;
    top: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .headertext {
    display: flex;
    position: relative;
    margin-top: 16px;
  }

  .resume {
    position: absolute;
    z-index: 0;
  }

  .resume1 {
    font-size: 118px;
    font-weight: 800;
    color: #e0e0e0a8;
  }

  .text1 {
    margin-right: 8px;
    font-size: 50px;
    font-weight: 900;
    color: gray;

  }

  .text2 {
    font-size: 50px;
    font-weight: 900;
    color:   #ff0060;

  }


  /*---------------------------
    ---------Tab Navigation--------------------
    -------------------------------*/
  .cd-tabs-content {
    transition: .5s ease-in-out;
  }

  .cd-tabs-content li {
    display: none;
    padding: 1.4em;
  }

  .selected {
    color: #ae0738;
  }

  .cd-tabs-content li.selected {
    display: block;
    -webkit-animation: cd-fade-in 0.5s;
    -moz-animation: cd-fade-in 0.5s;
    animation: cd-fade-in 0.5s;
  }

  .cd-tabs-navigation {
    list-style: none;
    display: flex;
    width: 58%;
    justify-content: space-evenly;
    padding-left: 0;
  }

  .cd-tabs {
    margin-top: 190px;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }

  .navigation {
    display: flex;
    justify-content: center;
  }

  .navtag {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    transition: .5s ease-in-out;
    color: #666;
  }

  .navtag:hover,
  .navtag:focus {
    color: #ae0738;
  }

  .selected {
    color: #ae0738;

  }

  .img-wrapper {
    overflow: hidden;
    border-radius: 8px;

  }

  .hovercolor {
    border-radius: 8px;
    transition: .8s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hovertext {
    position: absolute;
    z-index: 2;
    display: none;
    color: white;
    font-size: 23px;
    font-weight: 600;
  }

  .hovercolor:hover .fade-in {
    animation: fade-in .8s ease-in both;
    opacity: 0;
    display: block;

  }


  .hovercolor:hover .allimage {
    opacity: 0;

  }

  .hovercolor:hover {
    background-color: #ae0738;

  }

  .allimage {
    width: 100%;
    transition: .5s ease-in-out;
    border-radius: 8px;
  }

  .all1 {
    margin-bottom: 40px;
  }


  
  .slideDown {
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(231, 231, 231);
    position: absolute;
    z-index: 8;
    animation-name: slideDown;
    -webkit-animation-name: slideDown;

    animation-duration: .6s;
    -webkit-animation-duration: .6s;

    animation-timing-function: ease-in-out;
    -webkit-animation-timing-function: ease-in-out;

  }

  @keyframes slideDown {
    0% {
      transform: translateY(0%);
    }

    100% {
      transform: translateY(100%);
    }

  }
  .dark .slideDown{
    background-color: #2f304e;
  }
.dark .resume1{
  color: #2d304c57;
}
 .dark .text1 {
  color: #d5d5d5;
 }




 /*-------------------
 -------------------
 ------Responsive-----------------
 ---------------------------
 --------------------------*/

  @media(max-width:680px){
    .text1 , .text2{
      font-size:35px;
    }
    .resume1{
      font-size: 94px;
    }
  }
  @media(max-width:520px){
    .text1 , .text2{
      font-size: 32px;
    }
    .resume1{
      font-size: 70px;
    }
  }
  @media(max-width:390px){
  
  .text1 , .text2{
      font-size: 22px;
    }
    .resume1{
      font-size: 56px;
    }
    .headertext{
      margin-top: 5px;
    }
}



@media(max-width:990px){
  .cd-tabs{
    width: 100%;
  }
}



@media(max-width:600px){
  .hovertext{
    font-size: 16px;
  }
  
}

</style>