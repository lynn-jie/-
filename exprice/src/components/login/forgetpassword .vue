<template>
	<div class="changepsw">
		<div class="head-top">
			<mt-header title="修改密码">
				<router-link to="/set" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>

		<div class="psw">
			<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
			<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		</div>

		<div class="btn">
			<mt-button size="large">修改密码</mt-button>
		</div>

	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	import { Field } from 'mint-ui';
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
	
	.psw ::-webkit-input-placeholder {
		text-align: right;
	}
	
	.psw :-ms-input-placeholder {
		text-align: right;
	}
	
	.btn {
		margin: 0 16px;
		margin-top: 20px;
	}
	
	.btn button {
		background-color: #35c564;
		color: #FFFFFF;
		font: 16px/16px "微软雅黑";
		height: 50px;
	}
	
	.head-top {
		margin-bottom: 18px;
	}
</style>