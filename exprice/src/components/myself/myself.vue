<template>
	<div>
		<div class="myself">
			<router-link to="set" class="logo">
				<img src="../../../static/imgs/iconfont/set-icon.png"/>
			</router-link>
			<div class="avatar">
				<div class="avatar-content">
					<img src="../../../build/logo.png"/>
				</div>
			</div>
			<p>我是孙悟空</p>
			<p>累计阅读 <b>100</b> 天</p>
		</div>
		<div>
			<mt-cell title="通讯录">
				<span>〉</span>
				<img slot="icon" src="../../../static/imgs/shouchang.png" width="22" height="22"/>
			</mt-cell>
			
			<mt-cell title="共享资源" to='/home'>
				<span>〉</span>
				<img slot="icon" src="../../../static/imgs/shouchang.png" width="22" height="22"/>
			</mt-cell>
			<mt-cell title="我的消息" to='/home'>
				<span>〉</span>
				<img slot="icon" src="../../../static/imgs/shouchang.png" width="22" height="22"/>
			</mt-cell>
			<mt-cell title="我的收藏" to='/home'>
				<span>〉</span>
				<img slot="icon" src="../../../static/imgs/shouchang.png" width="22" height="22"/>
			</mt-cell>
			<mt-cell title="阅读记录" to='/home'>
				<span>〉</span>
				<img slot="icon" src="../../../static/imgs/shouchang.png" width="22" height="22"/>
			</mt-cell>

		</div>

		<!--tabbar begin-->
		<mt-tabbar v-model="selected">
			<mt-tab-item id="首页">
				<img slot="icon" src="../../../static/imgs/iconfont/hompage.png"> 首页
			</mt-tab-item>
			<mt-tab-item id="书房">
				<img slot="icon" src="../../../static/imgs/iconfont/bookrack.png"> 书架
			</mt-tab-item>
			<mt-tab-item id="书架">
				<img slot="icon" src="../../../static/imgs/iconfont/schoolroom.png"> 书房
			</mt-tab-item>
			<mt-tab-item id="发现">
				<img slot="icon" src="../../../static/imgs/iconfont/discover.png"> 发现
			</mt-tab-item>
			<mt-tab-item id="我的">
				<img slot="icon" src="../../../static/imgs/iconfont/myself.png"> 我的
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	import { Tabbar, TabItem } from 'mint-ui';
	import { Cell } from 'mint-ui';

	export default {
		name: 'myself',
		data() {
			return {
				selected: '首页',
				msg: 'Welcome'
			}
		},
		watch: {	
			selected: function(val, oldVal) {
				// 这里就可以通过 val 的值变更来确定
				console.log(val)
				if(val == '我的') {
					this.$router.push({path: 'myself'})
				}
				else if (val == '首页'){
					this.$router.push({path: '/'})
				}
			}
		}
	}
</script>

<style scoped>
	.clearfloat:after {
		display: block;
		clear: both;
		content: "";
		visibility: hidden;
		height: 0
	}
	
	.clearfloat {
		zoom: 1
	}
	
	.myself {
		width: 100%;
		height: 250px;
		background: #27ba69;
		overflow: hidden;
	}
	
	.myself .logo {
		width: 25px;
		height: 25px;
		float: right;
		margin-right: 15px;
		background: #8A2BE2;
		margin-top: 15px;
		display: block;
	}
	
	.myself .avatar {
		width: 92px;
		height: 92px;
		background: #27ba69;
		margin: 0 auto;
		margin-top: 50px;
		border-radius: 50%;
		border: 1px solid white;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.myself .avatar .avatar-content{
		width: 68px;
		height: 68px;
		background: white;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		
		
	}
	.myself .avatar .avatar-content img{
		width: 65px;
		height: 65px;
		text-align: center;
	}
	.myself p {
		text-align: center;
		margin-top: 16px;
		color: #FFFFFF;
		font-size: 16px;
		font: "微软雅黑";
	}
	.mint-cell {
		min-height: 60px;
	}
</style>