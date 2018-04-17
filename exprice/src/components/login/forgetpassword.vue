<template>
	<div class="changepsw">
		<div class="head-top">
			<mt-header title="找回密码">
				<router-link class='routernone' to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>

		<div class="psw">
			<mt-field label="手机号码" placeholder="请输入手机号码" v-model="username"></mt-field>
			<mt-field label="验证码" placeholder="请输入验证码" type="email" v-model="email">
				<button class="mint-button mint-button--primary mint-button--small">
						<label class="mint-button-text">发送验证码</label>
				</button>
			</mt-field>
			<mt-field label="新密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
			<mt-field label="新密码" placeholder="请再次输入新密码" type="password" v-model="password"></mt-field>

		</div>

		<div class="btn">
			<mt-button size="large">确认</mt-button>
		</div>

	</div>
</template>

<script>
</script>

<style scoped>
	/*head style*/
	
	.mint-cell {
		margin-top: 2px;
	}
	
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
	
	.btn {
		margin: 0 16px;
		margin-top: 60px;
	}
	
	.btn button {
		background-color: #35c564;
		color: #FFFFFF;
		font: 16px/16px "微软雅黑";
		height: 50px;
	}
	.psw button{
		background-color: #35c564;
		margin-left: 8px;
	}
</style>