<template>




  <div class="mydiv">
    <div  :class="{slideDown:screenIsLoading}"  id="loading"></div>

    <div class="color" ></div>

    <div class="container c1" :class="{reload: reloadheader}" data-aos="fade-up" data-aos-duration="1000" >
      <div class="row row1">
        <div class="col-4 photocol">
          <div class="photo">

          </div>
          
        </div>

        <div class="col-7 middle-col">
          <div class="text">
            <div class="texth">
              <h1 class="t1">- I'm Negar</h1>
              <h2 class="t2">Web Designer</h2>
            </div>
            <h3 class="t3">I'm a Iranian based web designer & front‑end developer focused on crafting clean &
              user‑friendly experiences, I am passionate about building excellent software that improves the lives of
              those around me.</h3>





            <a class="btn btn1 btn-warning ">MORE ABOUT ME <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>



<script>
  export default {
    data() {
      
      return {
         screenIsLoading:true,
         reloadheader:true
      }
    },
  created(){
    setTimeout(() => this.screenIsLoading = false, 500) }

  }
  
</script>

<style scoped>
.mydiv{
  box-sizing: content-box !important;
}
.photo1{
  display: none;
}
  /*--------------------------
-----------Main------------------
--------------------------------*/
  .row1 {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 90vh;
margin: 50 0 ;

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
    font-weight: 700;
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
  }

  .btn.btn1 {
    width: 208px;
    height: 54px;
    border-radius: 30px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent !important;
    border-color:   #ff0060;
    padding-right: 0;
    background: linear-gradient(to right, transparent 50%,   #ff0060 50%) left;
    background-size: 200%;
    transition: .5s ease-out;
    font-size: 16px;
    font-weight: 600;
    color: #5a5a5a;

  }

  .btn.btn1:hover {
    border-color: #E9204F;
    background-color: white !;
    color: white;
    background-position: right;
  }

  .fa-arrow-right {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color:   #ff0060;
    text-align: center;
    align-items: center;
    display: flex !important;
    justify-content: center;
    color: white;
    font-size: 20px;
  }

  .c1 {
    margin: 20px;
    padding-bottom: 10px;
    margin-left: 40px !important;
    max-width: 100% !important;
    width: 90% !important;
  }

  .photocol {
    padding-left: 0 !important;
    padding-right: 0 !important;
    

  }
.photo{
  background-image: url(negar.jpg);
    background-size: cover;
background-repeat: no-repeat;
border-radius: 20px;
background-position: center;
width: 100%;
height: 100%;
}



  /*--------------------------
-----------------------------
--------------------------------
----------------------------------*/

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

/*-----------------
------Dark-----------*/
.dark .t2 , .dark .t3 , .dark .btn.btn1{
  color: #fff;
}
.dark .slideDown{
  background-color: #2f304e;
}


/*-------------------------------
-----------------------------------
-----------Responsive------------------------
-----------------------------------
------------------------------------*/
@media(max-width:1300px){
  .t1{
    font-size: 60px;
  }
  .t2{
    font-size: 54px;
  }
  .t3{
    font-size: 16px;
  }
}
@media(max-width:990px){
  .c1{
    margin-left: 10px !important;
    margin-right: 10px ;
    display: flex;
justify-content: center;
  }
  .color{
    display: none;
  }
  .photocol{
    width: 90% ;
    display: flex;
justify-content: center;
align-items:flex-end;
  }
  .row1{
    justify-content: center;
    margin-bottom: 100px;
  }
  .photo{
    width: 250px;
height: 250px;
border-radius: 50%;
background-position:unset ;
  }
  .middle-col{
    width: 90%;
  }
  .t3{
    text-align: center;
  }
  .t1 , .t2{
    font-size: 40px;
  }
  .btn1{
    margin-right: auto;
margin-left: auto;
font-size: 14px;
  }
}
@media(max-width:600px){
  .photo{
    width: 200px;
height: 200px;
  }
  .t1 , .t2{
    font-size: 30px;
  }
  .t3{
    font-size: 14px;
  }
  .btn1{
    font-size: 14px;
    height: 50px;
  }
  
  .middle-col , .photocol{
    width: 100% ;
  }
}
@media(max-width:400px){
  .btn.btn1{
    font-size: 14px;
    height: 46px;
  }
  .fa-arrow-right{
  width: 46px;
  height: 46px;
}
.t1 , .t2{
  font-size: 22px;
}
.t3{
  font-size: 12px;
}
}
@media(max-width:330px){
  .btn.btn1{
    font-size: 12px;
    width: 170px;
    height: 42px;
  }
  .fa-arrow-right{
    width: 42px;
    height: 42px;
  }
}
@media(max-width:353px){
  .t1 , .t2{
    font-size: 20px;
  }
}
</style>