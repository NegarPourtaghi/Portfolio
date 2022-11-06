<template>
    <div>
      <div  :class="{slideDown:screenIsLoading}"  id="loading"></div>

    <div class="container main" >
        <div class="header1" :class="{reload:reloadheader}" data-aos="fade-up" data-aos-duration="1000">

            <div class="resume">
                <h4 class="resume1">RESUME</h4>

            </div>

            <div class="headertext">
                <h4 class="text1">ABOUT </h4>
                <h4 class="text2">ME</h4>
            </div>
        </div>

        <div class="row row1" :class="{reload:reloadheader}" data-aos="fade-up" data-aos-duration="1000">

            <div class="col-5 firstcol">
                <div class="row">
                    <h4 class="col1-header">Personal Infos</h4>

                    <div class="col-6">
                        <div class="name">
                            <h4 class="question">first name: </h4>
                            <h4 class="answer">Negar</h4>
                        </div>

                        <div class="freelancer">
                            <h4 class="question">freelancer: </h4>
                            <h4 class="answer">available</h4>
                        </div>
                        <div class="phone">
                            <h4 class="question">phone: </h4>
                            <h4 class="answer">0123456789</h4>

                        </div>
                    </div>
                    <div class="col-6">
                        <div class="lastName">
                            <h4 class="question">last name: </h4>
                            <h4 class="answer">Pourtaghi</h4>
                        </div>

                        <div class="nationality">
                            <h4 class="question">Nationality:</h4>
                            <h4 class="answer">iranian</h4>
                        </div>
                        <div class="language">
                            <h4 class="question">language: </h4>
                            <h4 class="answer">English</h4>

                        </div>
                    </div>
                    <a class="btn btn1 btn-warning "><span class="cv">Download CV</span> <i class="fa-solid fa-arrow-right"></i></a>

                </div>
            </div>

            <div class="col-7 ">
                <div class="row row2">
                    <div class="col-6 ">
                        <div class="box">
                            <div class="number">
                                <h1 class="number1">12</h1>
                            </div>
                            <div class="experience">
                                <h3 class="experience1">years of <br> experience</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="box">
                            <div class="number">
                                <h1 class="number1">97</h1>
                            </div>
                            <div class="experience">
                                <h3 class="experience1">completed <br> projects</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="box">
                            <div class="number">
                                <h1 class="number1">81</h1>
                            </div>
                            <div class="experience">
                                <h3 class="experience1">Happy <br> customer</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="box">
                            <div class="number">
                                <h1 class="number1">53</h1>
                            </div>
                            <div class="experience">
                                <h3 class="experience1">awards <br> won</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>





        </div>






    </div>

    <div class="container c2">
        <div class="skills">
            <h1 class="myskills"> MY SKIILS</h1>

        </div>
        <div class="row row3">
            <div class="col-3">
                <div class="pie">

                    <vue-easy-pie-chart class="chart" :percent="100"> </vue-easy-pie-chart>
                   
                    <h4 class="piename">HTML5</h4>
                </div>

                <div class="pie">
                    <vue-easy-pie-chart class="chart" :percent="80">
                       
                    </vue-easy-pie-chart>
                    <h4 class="piename">Javascript</h4>
                </div>

            </div>





            <div class="col-3">
                <div class="pie">
                    <vue-easy-pie-chart class="chart" :percent="100">
                      
                    </vue-easy-pie-chart>
                    <h4 class="piename">CSS</h4>
                </div>
                <div class="pie">
                    <vue-easy-pie-chart class="chart" :percent="20">
                      
                    </vue-easy-pie-chart>
                    <h4 class="piename">Jquery</h4>
                </div>


            </div>





            <div class="col-3">
                <div class="pie">
                    <vue-easy-pie-chart class="chart" :percent="100">
                       
                    </vue-easy-pie-chart>
                    <h4 class="piename">Bootstrap</h4>
                </div>
                <div class="pie">
                    <vue-easy-pie-chart class="chart" :percent="60">
                      
                    </vue-easy-pie-chart>
                    <h4 class="piename">Vue</h4>
                </div>


            </div>



            <div class="col-3">
                <div class="pie">
                    <vue-easy-pie-chart class="chart" :percent="50">
                      
                    </vue-easy-pie-chart>
                    <h4 class="piename">Wordpress</h4>
                </div>
                <div class="pie">
                    <vue-easy-pie-chart class="chart" :percent="10">
                        
                    </vue-easy-pie-chart>
                    <h4 class="piename">React</h4>
                </div>


            </div>
        </div>





        <div class="edu">
            <div class="education">
                <h1 class="myskills">EXPERIENCE & EDUCATION</h1>
            </div>

            <div class="row row4">
                <div class="col-6">
                    <div class="exp">
                        <div class="icon">
                            <li class="fa-solid fa-briefcase caseicon"></li>

                        </div>

                        <div class="text">
                            <span class="t1">2018-present</span>

                            <h1 class="t2"> Web Developer <span class="envato">- Envato</span></h1>
                            <h4 class="t3">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                                adipisicing elit</h4>
                        </div>
                    </div>




                    <div class="exp">
                        <div class="icon">
                            <li class="fa-solid fa-briefcase caseicon"></li>

                        </div>

                        <div class="text">
                            <span class="t1">2018-present</span>

                            <h1 class="t2"> Web Developer <span class="envato">- Envato</span></h1>
                            <h4 class="t3">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                                adipisicing elit</h4>
                        </div>
                    </div>




                    <div class="exp">
                        <div class="icon">
                            <li class="fa-solid fa-briefcase caseicon"></li>

                        </div>

                        <div class="text">
                            <span class="t1">2018-present</span>

                            <h1 class="t2"> Web Developer <span class="envato">- Envato</span></h1>
                            <h4 class="t3">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                                adipisicing elit</h4>
                        </div>
                    </div>
                </div>



                <div class="col-6">
                    <div class="exp">
                        <div class="icon">
                            <li class="fa-solid fa-briefcase caseicon"></li>

                        </div>

                        <div class="text">
                            <span class="t1">2018-present</span>

                            <h1 class="t2"> Web Developer <span class="envato">- Envato</span></h1>
                            <h4 class="t3">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                                adipisicing elit</h4>
                        </div>
                    </div>




                    <div class="exp">
                        <div class="icon">
                            <li class="fa-solid fa-briefcase caseicon"></li>

                        </div>

                        <div class="text">
                            <span class="t1">2018-present</span>

                            <h1 class="t2"> Web Developer <span class="envato">- Envato</span></h1>
                            <h4 class="t3">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                                adipisicing elit</h4>
                        </div>
                    </div>




                    <div class="exp">
                        <div class="icon">
                            <li class="fa-solid fa-briefcase caseicon"></li>

                        </div>

                        <div class="text">
                            <span class="t1">2018-present</span>

                            <h1 class="t2"> Web Developer <span class="envato">- Envato</span></h1>
                            <h4 class="t3">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                                adipisicing elit</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

</template>



<script>
import VueEasyPieChart from './VueEasyPieChart.vue'
import 'vue-easy-pie-chart/dist/vue-easy-pie-chart.css'
    export default{
      components:{
        VueEasyPieChart
      },
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
  
    /*----------------------
----------Header---------------
--------------------------
---------------*/
.row1{
    position: relative;
    z-index: 1;
    width: 100%;
    top: 160px;
    margin: 50px 0 !important;
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
  
  .fa-arrow-right{
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
  
  .col1-header{
    font-size: 26px;
    color: #666;
    font-weight: 600;
    padding-bottom: 22px;
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
  font-weight: 800;
  color: gray;
  
  }
  .text2{
    font-size: 50px;
  font-weight: 700;
  color:   #ff0060;
  
  }
  
  
  
  /*---------------------
  --------personal info-----------------
  -----------------------------*/
  
  
  
  .name , .phone , .freelancer, .language , .nationality , .lastName {
    display: flex;
    padding-bottom: 20px;
  }
  
  .question{
    text-transform: capitalize;
    color: #666;
    font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  }
  
  .answer{
    font-weight: 600;
    color: #666;
    font-size: 15px;
  line-height: 1.6;
  margin-left: 6px;
  }
.number1{
    position: relative;
    font-size: 50px;
font-weight: 700;
color: #E9204F;
}


  .number1::after{
    content: "+";
font-size: 33px;
font-weight: 700;
position: absolute;
top: 2px;
  }
  .experience1{
    padding-left: 40px;
    position: relative;
    font-size: 15px;
font-weight: 600;
line-height: 1.6;
color: #666;
  }
  .experience1:before{
    background: #777;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    top: 13px;
    width: 30px;
  }
  .box{
    margin-bottom: 30px;
    padding: 20px 30px 25px 40px;
    width: 90%;
border: 1px solid #ddd;
border-radius: 5px;
height: 166px;
  }
 
  /*----------------------------
  -------------skills----------------
  -----------------------------------*/
  .c2{
    margin-top: 240px;
  }
  .skills{
    text-align: center;
    margin-bottom: 50px;
  }
  .myskills{
    font-size: 26px;
    font-weight: 700;
    color: #666;
  }
  
.chart{
  display: flex;
justify-content: center;
align-items: center;
}

.piename{
  text-align: center;
  color: #666;
  font-size: 16px;
  font-weight: 500;
  margin-top: 12px;

}
.row3{
  width: 90%;
  margin-right: auto !important;
  margin-left: auto !important;
}
.pie{
  margin-bottom: 60px;
}
  
 


  /*------------------------
  ------------Education------------------
  ---------------------------------*/
.edu{
  margin-top: 100px;
}
.education{
  text-align: center;
}
.exp{
  display: flex;
  margin-bottom: 50px;
}

.icon{
  width: 40px;
height: 40px;
background-color: #E9204F;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
margin-right: 20px;
}


.icon::before{
  content: " ";
  width: 80px;
  height: 1px;
  background-color: #e1e1e1;
  position: absolute;
  transform: rotate(90deg);
  margin-top: 119px;
}
.t1{
  background-color: #eee;
  padding: 1px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #666;

}
.t2{
  font-size: 18px;
  margin: 7px 0 10px;
  color: #666;
}
.caseicon{
  color: white;
}

.t3{
  font-size: 14px;
  color: #666;
  font-weight: 500;
}


.row4{
  margin-top: 100px !important;
  width: 90%;
margin-right: auto !important;
margin-left: auto !important;
padding-bottom: 50px !important;
}

.cv{
  margin-left: 16px;
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
/*-----------
-----dark--------*/
.dark .slideDown{
  background-color: #161736;
}

.dark .resume1{
  color: #2d304c57;
}
.dark .text1 , .dark .question , .dark .answer , .dark .cv , .dark .col1-header , .dark .experience1,  .dark .box , .dark .myskills , .dark  .piename , .dark .t2 , .dark .t3 {
  color: #d5d5d5;
  transition: .5s ease-in-out;
}
.dark .t1{
  background-color: #251f4d;
  color: #9a9898;
}
.dark .experience1:before{
  background-color: #d5d5d5;

}
 /*--------------------------
 ---------Responsive----------------
 -------------------------------*/
 @media(max-width:1148px){
  .row1{
    width: 100%;
  }
 }
 @media(max-width:1200px){
  .main{
    max-width:100% !important;
    width:100%;
  }
  @media(max-width:1080px){
.lastName , .phone , .nationality , .question, .freelancer,.name{
  display: grid;
}
.row1 .col-5{
  width: 35%;
}
.row1 .col-7{
  width: 65%;
}
  }
 }
 @media(max-width:990px){
  .row1 .col-5{
    width: 100%;
    margin-bottom: 50px;

  }
  .row .col-7{
    width: 100%;
  }
  .lastName , .phone , .nationality , .question, .freelancer,.name{
  display: flex;
}
.btn1{
    margin-right: auto;
margin-left: auto;
font-size: 14px;
  }
 }
 @media(max-width:580px){
  .lastName , .phone , .nationality , .question, .freelancer,.name{
  display: grid;
}
.box{
  width: 100%;
  height: 156px;
}
.number1{
  font-size: 40px;
}
.btn1{
    font-size: 14px;
    height: 50px;
  }
 }
 @media(max-width:575px){
  .experience1:before{
  display: none;
}
.experience1{
  padding-left: 0;
}
 }
 @media(max-width:390px){
  .number1{
    font-size: 30px;
  }
  .experience1{
    font-size: 12px;
  }
  .box{
    height: 130px;
  }
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
  .fa-arrow-right{
  width: 46px;
  height: 46px;
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
  @media(max-width:880px){
    .row .row3{
      width:100% !important;
    }
  .row3 .col-3{
    width: 50%;
  }
  
 }
 @media(max-width:576px){
  .myskills{
    font-size: 18px;
  }
  .skills, .myskills{
    text-align: unset;
  }
 }
 @media(max-width:990px){
  .c2{
    max-width: 100% !important;
    width: 100%;
  }
  .row4{
    width: 100%;
  }
 }
 @media(max-width:800px){
  .row4 .col-6{
    width: 100%;
  }
 }
 @media(max-width:420px){
.t2{
  font-size: 14px;
}
.t3{
  font-size: 10px;
}
 }
 
</style>