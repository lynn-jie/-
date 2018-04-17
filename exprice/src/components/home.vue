<template>

	<div class="hello">
		
		<!--<router-view></router-view>-->

		<mt-navbar class="home-title" fixed>
			<div class="logo">
				<img src="../../static/logo.png" alt="" />
			</div>
			<input class="home-search" name="search" id="" value="" placeholder="搜索" />
			<p class="home-top">排行</p>
		</mt-navbar>
		<!--beging-->

		<mt-navbar class="home-nav" v-model='active'>
			<mt-tab-item class='nav-title' id='recommend'>推荐</mt-tab-item>
			<mt-tab-item class='nav-title' id='books'>图书</mt-tab-item>
			<mt-tab-item class='nav-title' id='periodical'>期刊</mt-tab-item>
			<mt-tab-item class='nav-title' id='newspaper'>报纸</mt-tab-item>
			<mt-tab-item class='nav-title' id='video'>视听</mt-tab-item>
			<mt-tab-item class='nav-title' id='read'>悦读</mt-tab-item>

		</mt-navbar>
			
		<!--利用vue-router的 <router-view>进行占位 -->
		
			
		<mt-tab-container v-model="active" swipeable>
			
			<mt-tab-container-item id="recommend">
				<!--推荐子组件-->
				<recommend></recommend>
			</mt-tab-container-item>
					
			<mt-tab-container-item id="books">
				<!--图书期刊子组件-->
				<books></books>
			</mt-tab-container-item>

			<mt-tab-container-item id="periodical">
				<!--期刊 子组件-->
				<periodical></periodical>
			</mt-tab-container-item>

			<mt-tab-container-item id="newspaper">
				<!--报纸子组件-->
				<newspaper></newspaper>
			</mt-tab-container-item>

			<mt-tab-container-item id="video">
				<!--视频子组件-->
				<videos></videos>
			</mt-tab-container-item>

			<mt-tab-container-item id="read">
				<!--阅读子组件-->
				<read></read>
			</mt-tab-container-item>

		</mt-tab-container>
		<!--end-->

		<!--tabbar begin-->
		<mt-tabbar v-model="selected">
			<mt-tab-item id="首页">
				<img slot="icon" src="../../static/imgs/iconfont/hompage.png"> 首页
			</mt-tab-item>
			<mt-tab-item id="书房">
				<img slot="icon" src="../../static/imgs/iconfont/bookrack.png"> 书架
			</mt-tab-item>
			<mt-tab-item id="书架">
				<img slot="icon" src="../../static/imgs/iconfont/schoolroom.png"> 书房
			</mt-tab-item>
			<mt-tab-item id="发现">
				<img slot="icon" src="../../static/imgs/iconfont/discover.png"> 发现
			</mt-tab-item>
			<mt-tab-item id="我的">
				<img slot="icon" src="../../static/imgs/iconfont/myself.png"> 我的
			</mt-tab-item>
		</mt-tabbar>

	</div>

</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	import { TabContainer, TabContainerItem } from 'mint-ui';
	import { Tabbar, TabItem } from 'mint-ui';
	import { Search } from 'mint-ui';
	
	import recommend from './swipecontent/recommend/recommend.vue'
	import books from './swipecontent/books/books.vue'
	import periodical from './swipecontent/periodical/periodical.vue'
	import newspaper from './swipecontent/newspaper/newspaper.vue'
	import videos from './swipecontent/video/videos.vue'
	import read from './swipecontent/read/read.vue'

	export default {
		components: {
			recommend,
			books,
			periodical,
			newspaper,
			videos,
			read,
		},
		name: 'home',
		data() {
			return {
				active: 'recommend',
				selected: '首页',
			
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
	/*tab 切换颜色*/
	
	.mint-tabbar>.mint-tab-item.is-selected {
		background-color: ##ffffff;
		color: #28bb68;
	}
	/*tab-swper滑动颜色*/
	
	.mint-navbar .mint-tab-item.is-selected {
		border-bottom: 2px solid #28bb68;
		color: #28bb68;
		margin-bottom: -3px;
	}
	
	.hello {
		margin-bottom: 15vh;
	}
	
	.mint-tabbar {
		position: fixed;
	}
	
	.home-title {
		height: 6vh;
		background: #2AB969;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.home-title .logo {
		width: 10%;
		/*height: 4vh;*/
		/*background: sandybrown;*/
	}
	
	.home-title .logo img {
		width: 25px;
		height: 25px;
		margin-left: 1vw;
		margin: 0 auto;
		display: block;
	}
	
	.home-title .home-search {
		width: 75%;
		height: 4vh;
		line-height: 4vh;
		border-radius: 15px;
		padding: 0 8px;
		outline: medium;
		border: none;
	}
	
	.home-title .home-top {
		width: 10%;
		color: white;
		font-size: 0.16rem;
	}
	
	.home-nav {
		display: flex;
		height: 5vh;
		justify-content: space-between;
		align-items: center;
		padding: 8px;
		margin-top: 5vh;
		
		/*position: fixed;*/
		/*left: 0;
		top: 0;*/
	}
	
	
	.home-nav .nav-title {
		font-size: 16 px;
		text-decoration: none;
	}

</style>