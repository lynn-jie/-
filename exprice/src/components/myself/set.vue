<template>
	<div>
		<div class="set">
			<mt-header title="设置">
				<router-link to="/myself" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
			<div @click="actionSheet">
			<mt-cell title="头像" >
				<mint-cell-value class="explain">
					<img slot="icon" src="../../assets/fanxian.png" width="40" height="40">
				</mint-cell-value>
				<span>〉</span>

			</mt-cell>
			</div>
			<mt-cell title="昵称">
				<mint-cell-value class="explain">孙悟空</mint-cell-value>
				<span>〉</span>
			</mt-cell>
			<mt-cell title="密码">
				<span>〉</span>
			</mt-cell>
			<mt-cell title="清除缓存">
				<span>0KB</span>
			</mt-cell>
			<mt-cell title="当前版本">
				<span>V1.0</span>
			</mt-cell>
			<mt-cell title="关于我们">
				<span>〉</span>
			</mt-cell>

		</div>

		<div class="btn">
			<mt-button size="large">退出登录</mt-button>
		</div>
	
	<div>  
    <input type="file" accept="image/*" capture="camera">  
    <input type="file" accept="video/*" capture="camcorder">  
    <input type="file" accept="audio/*" capture="microphone">  
</div>
			

		<mt-actionsheet :actions="datalist" v-model="sheetVisible">
		</mt-actionsheet>

	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	import { Button } from 'mint-ui';
	import { Actionsheet } from 'mint-ui';

	export default {
		name: 'set',
		data() {
			return {
				sheetVisible: false,
				datalist: [{
					name: '拍照',
					method: this.getCamera
				}, {
					name: '从相册中选择',
					method: this.getLibrary
				}],

			}
		},
		methods:{
			actionSheet: function() {

				this.sheetVisible = true;
			},
			getCamera: function() {
				console.log("打开照相机")
			},
			getLibrary: function() {
				console.log("打开相册")
			}
		}
	}
	
	
</script>

<style scoped>
	.mint-header {
		height: 44px;
		background-color: #35c564;
	}
	
	.mint-cell {
		min-height: 60px;
	}
	
	.mint-cell-value .explain {
		margin-right: 10px;
	}
	
	.btn {
		margin: 0 16px;
		margin-top: 20px;
	}
	
	.btn button {
		background-color: #35c564;
		color: #FFFFFF;
		font: 16px/16px "微软雅黑";
	}
</style>