<template>
	<div class="nickname">
		<div class="head-top">
			<mt-header title="昵称">
				<router-link to="/set" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				<mt-button @click="handleClose" slot="right">保存</mt-button>
			</mt-header>

		</div>
			
			
			<div class="inputs">
				<input type="text" value="孙悟空"/>
			</div>
		
			
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	
	
</script>

<style scoped>
	.nickname .head-top {
		margin-bottom: 18px;
	}
	.nickname .inputs input {
		box-sizing: border-box;
		margin-top: 20px;
		width: 100%;
		height: 60px;
		padding: 0 10px;
		border: none;

	}
	.mint-button-text {
		margin-bottom: 18px;
		
	}
	
	/*head style*/
	.mint-header {
		height: 44px;
		background-color: #35c564;
		font-size: 18px;
	}
	
	.mint-cell {
		min-height: 60px;
	}
	
	.mint-cell-value .explain {
		margin-right: 10px;
	}
	
	
</style>