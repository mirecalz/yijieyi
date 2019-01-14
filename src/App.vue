<template>
	<div>	  
	    <Header></Header>	    
	    <router-view></router-view>
	    <Footer></Footer>   	   
	    
   </div>
</template>
<script>
import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue'

export default {
  name: 'App',
  components:{Header:Header,Footer:Footer},
  data(){
      return {
          n:{mn:1}
      }
  },

  methods:{
      cl(){
        if(this.n.mn == 1){
            this.n.mn++;
        }else{
            this.n.mn -=1;
        }
      }
  }
}
</script>

<style>
   
</style>
