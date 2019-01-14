<template>
	<div id="head" align="center">
		<div class="oe_menu" id="head1">
			<ul class="menu_ul">
				<li>
					<a @click="toIndex()" class="first">
						<font color="pink" face="bodoni mt black" size="4">首页</font>
					</a>
				</li>
				<li f="top_drop_menu">
					<a @click="toHunQingCeHua()" class="first">
						<font color="pink" face="bodoni mt black" size="4">婚礼策划</font><i></i></a>

				</li>
				<li class="on">
					<a @click="toSheYin()" class="first">
						<font color="pink" face="bodoni mt black" size="4">摄影</font>
					</a>
				</li>
				<li>
					<a @click="toZuoPinAnLi()" class="first">
						<font color="pink" face="bodoni mt black" size="4">作品案例</font>
					</a>
				</li>
				<li>
					<Dropdown>
						<a href="javascript:void(0)">
							<font color="pink" face="bodoni mt black" size="4">易結商城</font>
							<Icon type="ios-arrow-down"></Icon>
						</a>
						<DropdownMenu slot="list">
							<DropdownItem>
								<a @click="toZuoPinAnLi()" class="first">
									<font color="burlywood" face="bodoni mt black">婚禮司儀</font>
								</a>

							</DropdownItem>
							<DropdownItem>
								<a @click="toZuoPinAnLi()" class="first">
									<font color="burlywood" face="bodoni mt black">珠寶嫁妝</font>
								</a>
							</DropdownItem>
							<DropdownItem>
								<a @click="toZuoPinAnLi()" class="first">
									<font color="burlywood" face="bodoni mt black">西裝婚紗</font>
								</a>
							</DropdownItem>

						</DropdownMenu>
					</Dropdown>
				</li>

				<li>
					<a @click="toHotel()"  class="first "><font color="pink" face="bodoni mt black " size="4">酒店</font></a>
				</li>
				<li>
					<a @click="toGeRenZhongXin() " class="first "><font color="pink " face="bodoni mt black " size="4">个人中心</font></a>
				</li>
				<li>
					<a @click="toIdea() " class="first "><font color="pink " face="bodoni mt black " size="4">灵感</font></a>
				</li>
				<li>
					<a @click="toShangJia() " class="first "><font color="pink " face="bodoni mt black " size="4">商家中心</font></a>
				</li>
			</ul>
			<div class="clear "></div>
		</div>

	</div>
</template>
<script src="../../../static/js/jquery-1.4.2.min.js "></script>


 


<script>
	export default {
		data() {
			return {
				theme1: 'light'
			}
		},
		methods: {
			toIndex() {
				this.$router.push('/');
			},
			toShouYe() {
				this.$router.push('/ShouYe');
			},
			toZuoPinAnLi() {
				this.$router.push('/ZuoPinAnLi');
			},
			toSheYin() {
				this.$router.push('/SheYin');
			},
			toZuoPinAnLi() {
				this.$router.push('/ZuoPinAnLi');
			},
			toShangCheng() {
				this.$router.push('/ShangCheng');
			},
			toHunQingCeHua() {
				this.$router.push('/HunQingCeHua');
			},
			toShangJia() {
				this.$router.push('/ShangJia');
			},
			toHotel() {
				this.$router.push('/Hotel');
			},
			toGeRenZhongXin() {
				this.$router.push('/GeRenZhongXin');
			},
			toIdea() {
				this.$router.push('/Idea');
			},
			toShangJia() {
				this.$router.push('/ShangJiaZhongXin');
			}
		},
	}
</script>
<style>
	#head li{
		display: inline;
		margin-left: 50px;
		font-size: x-large;
		
	}
	#show{
		display:none;
	}
	#head {
		background-color:#cc0099;
		height:50px;
	}
	#head1{
		top: 40px;
		margin-left: 100px;
		
	}
</style>