<template>
	<view
		class="cl-status-bar__wrap"
		:style="{
			height,
		}"
	>
		<view
			class="cl-status-bar"
			:style="{
				backgroundColor,
			}"
		></view>
	</view>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useCool } from "/@/cool";

const { statusBarHeight } = uni.getSystemInfoSync();

/**
 * @description 状态栏
 * @property {String} backgroundColor 背景颜色，默认#fff
 */

export default defineComponent({
	name: "cl-status-bar",

	props: {
		backgroundColor: String,
	},

	setup(props) {
		const { router } = useCool();

		// 状态栏高度
		const height = computed(() => {
			return `${statusBarHeight}px`;
		});

		// 背景色
		const backgroundColor = computed(() => {
			return (
				props.backgroundColor ||
				router.info()?.style?.navigationBarBackgroundColor ||
				router.globalStyle?.navigationBarBackgroundColor ||
				"#ffffff"
			);
		});

		return {
			height,
			backgroundColor,
		};
	},
});
</script>
