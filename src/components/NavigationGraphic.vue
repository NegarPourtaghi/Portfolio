<template>

    <div class="row all1">
        <div class="col-4 mycol "  v-for="image in images" :key="image.id"        data-aos="fade-right" data-aos-duration="3000" >

            <div class="hovercolor">

                <img class="  allimage" :src="image.url" :alt="image.alt">

                <h1 class="hovertext fade-in">Slider project</h1>

            </div>
        </div>
 <div class="col-4 mycol "    data-aos="fade-right" data-aos-duration="900"      data-aos-once="false" >

            <div class="hovercolor">

                <img class="  allimage" src="../assets/images/1.jpg" >

                <h1 class="hovertext fade-in">Slider project</h1>
                
            </div>
        </div>
        <div class="col-4 mycol "    data-aos="fade-right" data-aos-duration="1000"      data-aos-once="false" >

<div class="hovercolor">

    <img class="  allimage" src="../assets/images/3.jpg" >

    <h1 class="hovertext fade-in">Slider project</h1>
    
</div>
</div>
<div class="col-4 mycol "    data-aos="fade-right" data-aos-duration="2000"      data-aos-once="false" >

<div class="hovercolor">

    <img class="  allimage" src="../assets/images/4.jpg" >

    <h1 class="hovertext fade-in">Slider project</h1>
    
</div>
</div>

    </div>



</template>




<script>
    export default {
        data() {
            return {
                Color: false,
                images: [

                   
                    {
                        type: 'paper',
                        url: '../../src/assets/images/8.jpg',
                        alt: 'hello '
                    },
                    {
                        type: 'paper',
                        url: '../../src/assets/images/3.jpg',
                        alt: 'hello '
                    },
                   
                   
                   
                ],
              

            }
        },
        methods: {

        },
        created() {
            this.Color = true;

        }
    }
</script>



<style scoped>
    .Hovercolor {
        background-color: #ae0738;
    }

    .myimage {
        width: 100%;
    }

    .mycol {
        padding: 15px 15px;
    }

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

    .cv {
        margin-left: 12px;
    }

    .fa-paper-plane {
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

    .shy {
        font-size: 26px;
        color: #666;
        font-weight: 700;
        padding-bottom: 22px;
    }

    .t2 {
        font-size: 15px;
        font-weight: 500;
        line-height: 1.6;
        color: #666;
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


    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
        }

        to {
            opacity: 1;
            transform: translate3d(0, 0%, 0);
        }
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

    .myimage {
        margin: 15px 15px;
        border-radius: 8px;
        padding: 0 !important;
    }

    .all1 {
        margin-bottom: 40px;
        justify-content: center;
    }

    .fade-right {
        animation: fade-right 1s ease-in both;
        opacity: 0;

    }


    @keyframes fade-right {
        from {
            opacity: 0;
            transform: translate3d(-10%, 0, 0);
        }

        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }

    .fade-right-end {
        animation: fade-right 2s ease-in both;
        opacity: 0;

    }


    @keyframes fade-right {
        from {
            opacity: 0;
            transform: translate3d(-50%, 0, 0);
        }

        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }

    .main {
        animation-name: slideUP;
        -webkit-animation-name: slideUp;

        animation-duration: .8s;
        -webkit-animation-duration: .8s;

        animation-timing-function: ease;
        -webkit-animation-timing-function: ease;

    }

    @keyframes slideUp {
        100% {
            transform: translateY(5%);
        }

        0% {
            transform: translateY(100%);
        }

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

    @media(max-width:800px){
.all1 .col-4{
  width: 50%;
}
}

    @media(max-width:600px){
        .mycol{
            padding: 5px 5px;
        }
    }
    @media(max-width:400px){
  .all1 .col-4{
    width: 100%;
  }
}
</style>