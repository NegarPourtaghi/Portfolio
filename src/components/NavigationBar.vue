<template>
<div class="navigate" >
<ul class="nav nav-tabs" data-aos="fade-up" data-aos-duration="1000">
    <li v-for="tab in  tabs" :key="tab" class="nav-items">
    <a class="nav-link" :class="{activeTab: tab === selected}" @click="setTabs(tab)">
    {{tab}}
    </a>
    </li>
</ul>
<slot></slot>
</div>
</template>



<script>
    export default {
        props: {
            tabs: {
                type: Array,
                required: true
            },
            selected: {
                type: String,
                required: true
            }
        },
        methods:{
            setTabs(tab){
this.$emit('selected', tab);
            }
        }
    }
</script>


<style scoped>
   .nav-items{
    background-color: none;
   }
   
    .activeTab{
color: #E9204F !important;
transition: .5s ease-in-out;

    }
    .nav-link:hover{
        color: #E9204F;
    }
.navigate{
    width: 100%;
margin-right: auto;
margin-left: auto;
}
.nav-tabs{
    justify-content: center;
margin-bottom: 40px;
border: none;
}
.nav-link{
    cursor: pointer;
    color: rgb(112, 112, 112);
    border: none;
    transition: .5s ease-in-out;
    font-weight: 600;
}
.nav-item:hover{
    background-color: none;
}
 .dark .nav-tabs .nav-link{
  color: #d5d5d5;
 }


 @media(max-width:600px){
    .nav-link{
        font-size: 14px;
    }
 }

 @media(max-width:370px){
    .nav-link{
        font-size: 12px;
    }
 }
 @media(max-width:330px){
    .nav-link{
        font-size: 10px;
font-weight: 600;
    }
 }
</style>