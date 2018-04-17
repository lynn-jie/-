<template>
  <div id="app">
    
    <router-view/>
  
    
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
*{
 margin: 0;
 padding: 0;
}

body {
	 background-color: #f8f8f8;
}

#app div,p,a,ul,li,span{
	 font-size: 14px;
}


/* login input 背景透明*/
.mint-field-core {
	background-color: transparent;
}

.routernone {
	text-decoration: none;
	color: #000000;
}



</style>
