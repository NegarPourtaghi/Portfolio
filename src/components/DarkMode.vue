<template>


<div>
    


<div class="toggle-wrapper">
    <label class="toggle">
        <input type="checkbox" class="darkinput"  :checked="(mode === 'dark')? 'checked' : 'false'" @change="$emit('toggle')">
        <div v-on:click="isClicked">
  <a v-if="!isclick" class="btn btn-warning btn2 "><i class="fa-regular fa-moon"></i></a>
  <a v-if="isclick" class="btn btn-warning btn2 "><i class="fa-regular fa-sun"></i></a>

</div>
    </label>
</div>
</div>

</template>


<script>
    export default{
        props:['mode'],
        data(){
            return{
                isclick: false

            }
            
        },
      
        methods: {
        isClicked: function () {
            this.isclick = !this.isclick;
        }
    },
    }
</script>




<style scoped>
    
    .btn.btn2{
  right: 30px;
position: absolute;
z-index: 8;
background-color: #d9d9d9 ;
width: 50px;
height: 50px;
justify-content: center;
display: flex !important;
align-items: center;
border-radius: 50%;
color: gray ;
border: none;
transition:  .4s ease-in;
position: fixed;
right: 30;
top: 30px;
transition: .5s ease-in-out;
font-size: 20px;
}
.btn.btn2:hover{
    background-color: #d9d9d9 ;
    color: gray;
}
.dark .btn.btn2:hover{
    background-color:#3e4260 ;
}
.darkinput{
    opacity: 0;
}
.fa-moon{
    transition: .5s ease-in-out;
}
.dark .btn.btn2{
    color: white;
}
@media(max-width:820px){
    .btn.btn2{
        width: 40px;
height: 40px;
right: 10px;
top: 2%;
    } 
}
@media(max-width:500px){
    .btn.btn2{
        width: 40px;
height: 40px;
right: 10px;
top: 10px;
    }
    .fa-moon , .fa-sun{
        font-size: 16px;
    }
}
</style>