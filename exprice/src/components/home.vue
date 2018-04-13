<template>

	<div class="hello">
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

		<mt-tab-container v-model="active" swipeable>
			<mt-tab-container-item id="recommend">
				<!--<mt-cell v-for="n in 3" title="推荐"></mt-cell>-->

				<!--轮播图-->
				<div class="home-swipe">
					<mt-swipe :auto="4000">
						<mt-swipe-item v-for="item in items">
							<img :src="item.url" class="img" />
							<!--<img src="../../../static/lunbo.png" class="img" />-->

						</mt-swipe-item>
						<!--<mt-swipe-item>2</mt-swipe-item>
						<mt-swipe-item>3</mt-swipe-item>-->
					</mt-swipe>
				</div>

				<!--图书begin-->
				<div class="home-main">
					<div class="subtitle">
						<h3>图书</h3>
						<span>更多></span>
					</div>
					<div class="content">
						<div class="sm-content">
							<img src="../../static/test.png" alt="" />
							<span>边城</span>
						</div>
						<div class="sm-content">
							<img src="../../static/test.png" alt="" />
							<span>追风筝的人</span>
						</div>

						<div class="sm-content">
							<img src="../../static/test.png" alt="" />
							<span>我与世界只差一个你</span>
						</div>
					</div>
				</div>
				<!--图书end-->

				<!--期刊begin-->
				<div class="home-main">
					<div class="subtitle">
						<h3>期刊</h3>
						<span>更多></span>
					</div>
					<div class="content">
						<div class="sm-content">
							<img src="../../static/qikan.png" alt="" />
							<span>边城</span>
						</div>
						<div class="sm-content">
							<img src="../../static/qikan.png" alt="" />
							<span>追风筝的人</span>
						</div>

						<div class="sm-content">
							<img src="../../static/qikan.png" alt="" />
							<span>我与世界只差一个你</span>
						</div>
					</div>
				</div>
				<!--期刊end-->

				<!--报纸 begin-->
				<div class="home-main">
					<div class="subtitle">
						<h3>报纸</h3>
						<span>更多></span>
					</div>
					<div class="content">
						<div class="sm-content">
							<img src="../../static/baozhi.png" alt="" />
							<span>边城</span>
						</div>
						<div class="sm-content">
							<img src="../../static/baozhi.png" alt="" />
							<span>追风筝的人</span>
						</div>

						<div class="sm-content">
							<img src="../../static/baozhi.png" alt="" />
							<span>我与世界只差一个你</span>
						</div>
					</div>
				</div>
				<!--报纸end-->

				<!--music begin-->
				<div class="home-audio">

					<div class="audio-left">
						<img src="../../static/music.png" alt="" />
					</div>

					<div class="audio-right">
						<p>早读|像故事'投诚'的心理机制</p>
						<p>
							<i></i>
							<span>时长22分41秒</span>
						</p>
					</div>
				</div>
				<!--music end-->

				<!--阅读 begin-->
				<div class="home-main">
					<div class="subtitle">
						<h3>阅读</h3>
						<span>更多></span>
					</div>
					<div class="read-content">
						<div class="read-left">
							<img src="../../static/qikan.png" />
						</div>
						<div class="read-right">
							<p class="read-subtitle">什么理由让你死心踏地留在这座城市？</p>
							<p class="read-article">每个人都是生命中的过客，也是城市的归人，你为什么选择留在这个城市呢？有的人</p>
							<div class="pageview">
								<img slot="icon" class="read-iconfont-look" src="../../static/look.png" alt="" />
								<span>2500</span>
								<img slot="icon" class="read-iconfont-hd" src="../../static/music.png" alt="" />
								<span>猪八戒</span>
							</div>
						</div>

					</div>
				</div>
				<!--阅读 end-->

				<!--tab-container begin--->
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

	import books from './swipecontent/books/books.vue'
	import periodical from './swipecontent/periodical/periodical.vue'
	import newspaper from './swipecontent/newspaper/newspaper.vue'
	import videos from './swipecontent/video/videos.vue'
	import read from './swipecontent/read/read.vue'

	export default {
		components: {
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
				items: [{
						url: '../../static/lunbo.png'
					},
					{
						url: '../../static/lunbo.png'
					},
					{
						url: '../../static/lunbo.png'
					},
					{
						url: '../../static/lunbo.png'
					},
				],

			}
		},
		watch: {	
			selected: function(val, oldVal) {
				// 这里就可以通过 val 的值变更来确定
				console.log(val)
				if(val == '我的') {
					this.$router.push({path: 'myself'})
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
		height: 7vh;
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
	}
	
	.home-nav {
		display: flex;
		height: 5vh;
		justify-content: space-between;
		align-items: center;
		padding: 8px;
		margin-top: 7vh;
		/*position: fixed;*/
		/*left: 0;
		top: 0;*/
	}
	
	.home-nav .nav-title {
		font-size: 14px;
		text-decoration: none;
	}
	
	.home-swipe {
		width: 100%;
		height: 25vh;
		background: skyblue;
	}
	
	.home-main {
		width: 100%;
		height: auto;
		margin-bottom: 1vh;
		/*background: pink;*/
	}
	
	.home-main .subtitle {
		display: flex;
		padding: 0.5vh 3vw;
		justify-content: space-between;
		align-items: center;
		margin: 1vh 0;
		/*background: silver;*/
	}
	
	.home-main .subtitle h3 {
		color: black;
		font-weight: 600;
	}
	
	.home-main .subtitle span {
		color: #b6b6b6;
	}
	
	.home-main .content {
		display: flex;
		justify-content: space-around;
		/*background: aqua;*/
	}
	
	.home-main .content .sm-content {
		width: 30%;
		font-size: 14px;
		/*background: slateblue;*/
		overflow: hidden;
	}
	
	.home-main .content .sm-content img {
		width: 100%;
		border-radius: 10px;
		box-shadow: darkgrey 2px 2px 5px;
		/*background: darkorange;*/
	}
	
	.home-main .content .sm-content span {
		width: 100%;
		font: "微软雅黑";
		/*background: red;*/
	}
	/*audio*/
	
	.home-audio {
		width: 90%;
		height: 12vh;
		padding: 2vh;
		/*background: #87CEEB;*/
		margin: 0 auto;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-radius: 5px;
		box-shadow: darkgrey 2px 2px 10px;
		margin-bottom: 8px;
	}
	
	.home-audio .audio-left {
		/*width: 20%;*/
		/*background: seagreen;*/
		text-align: center;
		margin: 0 1vw;
	}
	
	.home-audio .audio-left img {
		height: 10vh;
		border-radius: 50%;
		text-align: center;
		vertical-align: middle;
	}
	
	.home-audio .audio-right {
		/*width: 80%;*/
		/*background: slateblue;*/
	}
	
	.home-audio .audio-right p {
		padding-left: 3vw;
		margin-bottom: 0.5vh;
	}
	
	.home-audio .audio-right span {
		font-size: 12px;
		color: #22b56a;
	}
	/*悦读*/
	
	.read-content {
		width: 92%;
		/*height: 20vh;*/
		/*background: #42B983;*/
		margin: 0 auto;
		padding: 1vh;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-radius: 5px;
		box-shadow: darkgrey 2px 2px 10px;
		margin-bottom: 8px;
	}
	
	.read-content .read-left {
		/*width: 25%;*/
		/*flex-grow:1;*/
		background: blueviolet;
		text-align: center;
		margin: 0 1vh;
		margin-bottom: 1vh;
	}
	
	.read-content .read-left img {
		height: 18vh;
		text-align: center;
		vertical-align: middle;
	}
	
	.read-content .read-right {
		width: 100%;
		/*background: slateblue;*/
		margin-left: 2.5vw;
	}
	
	.read-content .read-right .read-subtitle {
		font: "微软雅黑";
		font-size: 18px;
		margin-bottom: 1vh;
	}
	
	.read-content .read-right .read-article {
		font-size: 14px;
		height: 40px;
		color: #a2a2a2;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	
	.read-content .pageview {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin: 1.5vh 0;
		font-size: 12px;
	}
	
	.read-content .pageview span {
		margin-left: 1vw;
	}
	
	.read-content .pageview .read-iconfont-look {
		width: 20px;
		height: 15px;
		text-align: center;
	}
	
	.read-iconfont-hd {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		margin-left: 2vw;
	}
</style>