<template>
	<div>
		
		<div class="head-top">
				<mt-header title="关于我们">
					<router-link to="/set" slot="left">
						<mt-button icon="back"></mt-button>
					</router-link>
				</mt-header>
		</div>
	
	
		<div class="abutus">
			<div class="njsw-logo">
				<img src="../../../static/imgs/set-logo.png" alt="" />
			</div>
			
			<p>农家书屋</p>
			<p>Ver1.0</p>
			<p>当前版本是最新版本</p>
			<p>服务协议</p>
			<p>Copyright©2018-2019 农家书屋 版权所有</p>
		</div>
	
	</div>
</template>

<script>
	import { Tabbar, TabItem } from 'mint-ui';
	
	
</script>

<style scoped>
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
	.head-top {
		margin-bottom: 18px;
	}
	
	
	.abutus .njsw-logo{
		display: flex;
		justify-content: center;
		margin-top: 80px;
		
	}
	.abutus p {
		text-align: center;
		margin-top: 12px;
		
	}
	.abutus p:nth-of-type(1) {
		font: 18px/18px "微软雅黑";
	
	}
	.abutus p:nth-of-type(2) {
		font: 16px/16px "微软雅黑";
	}
	.abutus p:nth-of-type(3) {
		font: 14px/14px "微软雅黑";
	}
	.abutus p:nth-of-type(4) {
		font: 16px/16px "微软雅黑";
		
		margin-top: 42vh;
		color: #3cba78;
	}
	
</style>