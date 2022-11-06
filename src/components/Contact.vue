<template>
 <div >
  
  <div  :class="{slideDown:screenIsLoading}"  id="loading"></div>
  <div class="container main"  >
        <div class="header1" :class="{reload: reloadheader}" data-aos="fade-up" data-aos-duration="1000" >

            <div class="resume">
                <h4 class="resume1">CONTACT</h4>

            </div>

            <div class="headertext">
                <h4 class="text1">GET IN </h4>
                <h4 class="text2">TOUCH</h4>
            </div>
        </div>
        <div class="row row1" :class="{reload:reloadRow}" data-aos="fade-up" data-aos-duration="1000">

            <div class="col-4 firstcol">
                <div class="firstpart">
                    <h4 class="shy">DON'T BE SHY !</h4>
                    <span class="t2">Feel free to get in touch with me. I am always open to discussing new projects,
                        creative ideas or opportunities to be part of your visions.</span>

                    <div class="info">
                        <i class="fa-solid fa-map-location-dot"></i>
                        <div class="location1">
                            <h1 class="infotitle">Address Point</h1>
                            <span class="address">123 Stree New York City , United States Of America 750065.</span>
                        </div>
                    </div>

                    <div class="info">
                        <i class="fa-solid fa-envelope envelope"></i>
                        <div class="email">
                            <h1 class="infotitle">mail me</h1>
                            <span class="address">negar@gmail.com</span>
                        </div>
                    </div>




                    <div class="info">
                        <i class="fa-solid fa-square-phone"></i>
                           <div class="location1">
                            <h1 class="infotitle">call me</h1>
                            <span class="address">0123456789</span>
                        </div>
                    </div>




                    <div class="socialmedias">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>

                </div>
            </div>

            <div class="col-8 ">
               
<div class="row inputrow">
    <div class="col-6">
        <input class="inputstyle" type="text" placeholder="YOUR NAME">
    </div>
    <div class="col-6">
        <input class="inputstyle" type="text" placeholder="YOUR EMAIL">

    </div>
    <div class="col-12">
        <input class="inputstyle" type="text" placeholder="YOUR SUBJECT">

    </div>
    <div class="col-12">
        <textarea class="textinput" name="message" placeholder="YOUR MESSAGE"  style="cursor: none;"></textarea>
    </div>

</div>

                <a class="btn btn1 btn-warning "><span class="cv">SEND MESSAGE</span> 

                    <i class="fa-solid fa-paper-plane"></i>
                </a>

            </div>





        </div>






    </div>

 </div>



</template>


<script>

    export default{
      data() {
      
      return {
         screenIsLoading:true,
         reloadheader:true,
         reloadRow:true
      }
    },
  created(){
    setTimeout(() => this.screenIsLoading = false, 500) 
  }
    }

  </script>

<style scoped>
    /*----------------------
  ----------Header---------------
  --------------------------
  ---------------*/
  .row1{

      width: 94%;
      top: 160px;
      margin-top: 200px;
      margin-bottom: 50px;
    }
    .imgh{
      width: 98%;
      border-radius: 20px;
    }
    .main{
      display: flex;
    justify-content: center;
    }
    .text{
      width: 78%;
    }
    .middle-col{
      display: flex;
    justify-content: center;
    align-items: center;
    }
    .t1{
      font-size: 68px;
      font-size: 68px;
    color:   #ff0060;
    font-weight: 600;
    }
    .t2{
      font-size: 60px;
      color: #5a5a5a;
      font-weight: 600;
    }
    .texth{
      text-align: center;
    }
    .t3{
      font-size: 18px;
    font-weight: 400;
    line-height: 2;
    color: gray;
    margin-top: 20px;
    line-height: 1.6;
    }
    
     .btn.btn1{
      width: 208px;
    height: 54px ;
    border-radius: 30px ;
    margin-top: 30px;
    display: flex ;
    justify-content: space-between;
    align-items: center;
    background-color: transparent !important ;
    border-color:   #ff0060 ;
    padding-right: 0 ;
    background: linear-gradient(to right,transparent 50%,   #ff0060 50%) left;
    background-size: 200%;
      transition: .5s ease-out;
      font-size: 16px;
    font-weight: 600;
    color: #5a5a5a;
    
    }
    .btn.btn1:hover{
      border-color: #E9204F;
      background-color: white !;
      color: white;
      background-position: right;
    }
    .cv{
        margin-left: 12px;
    }
    .fa-paper-plane{
      width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color:   #ff0060;
    text-align: center;
    align-items: center;
    display: flex !important;
    justify-content: center;
    color: white;
    font-size: 20px;
    }
    
    .shy{
      font-size: 26px;
      color: #666;
      font-weight: 700;
      padding-bottom: 22px;
    }
    .t2{
        font-size: 15px;
font-weight: 500;
line-height: 1.6;
color: #666;
    }
    
    /*---------------------------
    ------------------------------
    --------------------------------*/
    .header1{
    position: absolute;
    top: 8%;
    display:flex;
    align-items: center;
    justify-content: center;
    }
    .headertext{
      display: flex;
      position: relative;
      margin-top: 16px;
    }
    .resume{
      position: absolute;
    z-index: 0;
    }
    .resume1{
      font-size: 110px;
    font-weight: 800;
    color: #e0e0e0a8;
    }
    .text1{
      margin-right: 8px;
      font-size: 50px;
    font-weight: 900;
    color: gray;
    
    }
    .text2{
      font-size: 50px;
    font-weight: 900;
    color:   #ff0060;
    
    }
    
    
    
    /*---------------------
    --------info----------------
    -----------------------------*/
    
.info{
    margin-top: 30px;
    display: flex;
}
.fa-map-location-dot , .envelope , .fa-square-phone{
    font-size: 35px;
    margin-right: 14px;
    color: #E9204F;
}
.infotitle{
    font-weight: 400;
padding-bottom: 0;
text-transform: uppercase;
font-size: 15px;
color: #666;
}

.address{
    font-weight: 600;
line-height: 25px;
margin-bottom: 20px;
padding-top: 5px;
font-size: 15px;
color: #666;
}

.socialmedias{
    display: flex;
    margin-top: 30px;
}
.fa-facebook-f , .fa-twitter , .fa-linkedin , .fa-instagram{
    margin-right: 12px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #e9e7e7;
        display: flex !important;
        justify-content: center;
        text-align: center;
        align-items: center;
        font-size: 16px;
        color: #666;
        transition: .5s ease-in-out;
}
.fa-facebook-f:hover , .fa-twitter:hover , .fa-linkedin:hover , .fa-instagram:hover{
background-color: #E9204F;
color: #ebebeb;

}
.inputstyle{
    width: 100%;
    border-radius: 26px;
    border: 1px solid #d9d9d9;
    padding: 12px 20px;
  margin-bottom: 30px;
  color: gray;
  outline:  none !important;
  position: relative;
  z-index: 0;
}

.inputstyle:focus , .textinput:focus {
    border-color: #E9204F ;
}
.textinput{
    width: 100%;
    border-radius: 26px;
    border: 1px solid #d9d9d9;
  margin-bottom: 30px;
  color: gray;
    height: 200px;
    padding: 10px 20px ;
outline: none !important;
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
    background-color:#2f304e ;
  }
  .dark .resume1{
  color: #2d304c57;
}
 .dark .text1 , .dark .shy , .dark .t2 , .dark .address , .dark .infotitle , .dark .cv{
  color: #d5d5d5;
 }
 .dark .fa-facebook-f ,.dark .fa-twitter ,.dark .fa-linkedin ,.dark .fa-instagram{
  background-color: #2f304e;
  color: white;
 }
 .dark .fa-facebook-f:hover ,.dark .fa-twitter:hover ,.dark .fa-linkedin:hover ,.dark .fa-instagram:hover{
  background-color: #E9204F;
 }
 
 .dark .textinput , .dark .inputstyle{
  background-color: #2f304e;
border-color: #2f304e;
color: white;
 }
/*--------------------------
-------Responsive---------------------
---------------------------*/

 
  @media(max-width:680px){
    .text1 , .text2{
      font-size: 45px;
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
  @media(max-width:1200px){
    .row1{
      width: 100%;
    }
  }
  @media(max-width:990px){
    .row1 .col-4{
      width: 100%;
    }
    .row1 .col-8{
      width: 100%;
margin-top: 50px;
    }
    .row1{
      margin-bottom: 100px;
    }
    .btn.btn1{
      margin-top: 12px;
    
font-size: 14px;
  
    }
    .fa-paper-plane{
      width: 53px;
height: 53px;
    }
  }
  @media(max-width:680px){
    .text1 , .text2{
      font-size: 45px;
    }
    .resume1{
      font-size: 94px;
    }
  }
  @media(max-width:650px){
.inputrow .col-6{
width: 100%;
}
.btn1{
    font-size: 14px;
    height: 50px;
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
    .btn.btn1{
    font-size: 14px;
    height: 46px;
  }
  .fa-paper-plane{
  width: 46px;
  height: 46px;
}
}
</style>