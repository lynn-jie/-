<template>
	<div class="login">
		<div class="login-name">登录</div>

		<mt-field class='usn' label="账号" placeholder="请输入账号" v-model="username"></mt-field>

		<mt-field class='psw' label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>

		<div class="btn">
			<router-link class= 'routernone' to="home">
				<mt-button size="large">登录</mt-button>
			</router-link>
		</div>

		<div class="options">
			<div class="box">
				<span class="ckb" @click="ckb">
					<img v-show ='ishow' src="../../../static/imgs/dui.png" alt="" />
				</span>
				<span>记住密码</span>
			</div>
			<router-link class='routernone' to='/forgetpassword'>
				<span>忘记密码?</span>
			</router-link>
			
		</div>

	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				ishow:false,
				btnText:'',
			}
		},
		methods:{
			ckb(){
				this.ishow = !this.ishow;
				 if(this.isShow){  
                    this.btnText = "隐藏"
                }else{  
                    this.btnText = "显示"  
                }
				
			}
		}

	}
</script>

<style scoped>
	.login {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #bbefe2;
    }
	
	.login .login-name {
		font: 18px/18px "microsoft yahei";
		text-align: center;
		margin: 18px 0 66px 0;
	}
	
	.login .mint-cell {
		border-radius: 25px;
		width: 82vw;
		margin: 0 auto;
		background-color: rgba(0, 0, 0, 0);
		border: 1px solid #9de9b8;
	}
	
	.login .usn {
		margin-bottom: 24px;
	}
	
	.login .options {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 8vh;
		padding: 0 9vw;
	}
	
	.login .btn {
		margin: 0 8vw;
		margin-top: 20px;
		text-decoration:none;
	}
	
	
	
	.login .btn button {
		background-color: #35c564;
		color: #FFFFFF;
		font: 16px/16px "microsoft yahei";
		height: 50px;
		border-radius: 25px;
	}
	
	
	.login .options .box {
		display: flex;
		align-items: center;
		background-color: transparent;
	}
	.login .options .box .ckb {
		display: inline-block;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		border: 1px solid #8baf9f;
		margin-right: 10px;
		overflow: hidden;
		
	}
	.login .options .box .ckb img {
		width: 20px;
		height: 20px;
		
	}


/*登录边距*/

    
</style>