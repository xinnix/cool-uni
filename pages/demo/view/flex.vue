<template>
	<cl-page :padding="20">
		<cl-card label="基础用法">
			<cl-row :gutter="20">
				<cl-col span="4">
					<view class="item">4</view>
				</cl-col>

				<cl-col span="12">
					<view class="item">12</view>
				</cl-col>

				<cl-col span="8">
					<view class="item">8</view>
				</cl-col>
			</cl-row>

			<cl-row :gutter="20">
				<cl-col span="8">
					<view class="item">8</view>
				</cl-col>

				<cl-col span="8">
					<view class="item">8</view>
				</cl-col>

				<cl-col span="8">
					<view class="item">8</view>
				</cl-col>
			</cl-row>

			<cl-row :gutter="20">
				<cl-col span="14">
					<view class="item">14</view>
				</cl-col>

				<cl-col span="4">
					<view class="item">4</view>
				</cl-col>

				<cl-col span="6">
					<view class="item">6</view>
				</cl-col>
			</cl-row>
		</cl-card>
	</cl-page>
</template>

<style lang="scss" scoped>
.item {
	background-color: #f7f7f7;
	text-align: center;
	font-size: 28rpx;
	height: 60rpx;
	line-height: 60rpx;
	margin: 10rpx 0;
}
</style>
