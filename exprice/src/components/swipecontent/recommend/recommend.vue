<template>
	<div class="swipeCon">
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
							<img src="../../../../static/test.png" alt="" />
							<span>边城</span>
						</div>
						<div class="sm-content">
							<img src="../../../../static/test.png" alt="" />
							<span>追风筝的人</span>
						</div>

						<div class="sm-content">
							<img src="../../../../static/test.png" alt="" />
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
							<img src="../../../../static/qikan.png"/>
							<span>边城</span>
						</div>
						<div class="sm-content">
							<img src="../../../../static/qikan.png"/>
							<span>追风筝的人</span>
						</div>

						<div class="sm-content">
							<img src="../../../../static/qikan.png"/>
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
							<img src="../../../../static/baozhi.png" alt="" />
							<span>边城</span>
						</div>
						<div class="sm-content">
							<img src="../../../../static/baozhi.png" alt="" />
							
							<span>追风筝的人</span>
						</div>

						<div class="sm-content">
							<img src="../../../../static/baozhi.png" alt="" />
							
							<span>我与世界只差一个你</span>
						</div>
					</div>
				</div>
				<!--报纸end-->

				<!--music begin-->
				<div class="home-audio">

					<div class="audio-left">
						<img src="../../../../static/music.png" alt="" />
					
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
							<img src="../../../../static/qikan.png" />
						</div>
						<div class="read-right">
							<p class="read-subtitle">什么理由让你死心踏地留在这座城市？</p>
							<p class="read-article">每个人都是生命中的过客，也是城市的归人，你为什么选择留在这个城市呢？有的人</p>
							<div class="pageview">
								<img slot="icon" class="read-iconfont-look" src="../../../../static/look.png" alt="" />
								<span>2500</span>
								<img slot="icon" class="read-iconfont-hd" src="../../../../static/music.png" alt="" />
								<span>猪八戒</span>
							</div>
						</div>

					</div>
				</div>
				<!--阅读 end-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
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
	}
	
</script>

<style scoped>
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
		font-size: 0.18rem;
		color: black;
		font-weight: 800;
	}
	
	.home-main .subtitle span {
		font-size: 0.16rem;
		color: #b6b6b6;
	}
	
	.home-main .content {
		display: flex;
		justify-content: space-around;
		/*background: aqua;*/
	}
	
	.home-main .content .sm-content {
		width: 30%;
		/*background: slateblue;*/
		overflow: hidden;
	}
	.home-main .content .sm-content span {
		font-size: 0.14rem;
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
		/*font-size: 0;*/
		width: 90%;
		/*height: 12vh;*/
		padding: 2vh;
		/*background: #87CEEB;*/
		margin: 0 auto;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-radius: 5px;
		box-shadow: darkgrey 2px 2px 10px;
		margin-bottom: 8px;
		font-size: 0;
	}
	
	.home-audio .audio-left {
		/*width: 20%;*/
		/*background: seagreen;*/
		text-align: center;
		/*margin: 0 1vw;*/
	}
	
	.home-audio .audio-left img {
		height: 10vh;
		/*width: 10vw;*/
		border-radius: 50%;
		text-align: center;
		vertical-align: middle;
	}
	
	.home-audio .audio-right {
		/*width: 80%;*/
		/*background: slateblue;*/
	}
	
	.home-audio .audio-right p {
		font-size: 0.16rem;
		width: 100%;
		/*font-size: 30px;*/
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
		/*background: blueviolet;*/
		text-align: center;
		margin: 0 1vh;
		margin-bottom: 1vh;
	}
	
	.read-content .read-left img {
		width: 20vw;
	
		text-align: center;
		/*vertical-align: middle;*/
		/*margin-top: 5px;*/
	}
	
	.read-content .read-right {
		width: 100%;
		/*background: slateblue;*/
		margin-left: 2.5vw;
	}
	
	.read-content .read-right .read-subtitle {
		font: "微软雅黑";
		font-size: 0.17rem;
		margin-bottom: 1vh;
	}
	
	.read-content .read-right .read-article {
		font-size: 0.14rem;
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
		font-size: 0.12rem;
	}
	
	.read-content .pageview span {
		margin-left: 1vw;
		font-size: 0.12rem;
		
	}
	
	.read-content .pageview .read-iconfont-look {
		width: 20px;
		height: 15px;
		text-align: center;
		font-size: 0.12rem;
		
	}
	
	.read-iconfont-hd {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		margin-left: 2vw;
	}
	
</style>