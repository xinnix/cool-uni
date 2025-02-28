<template>
	<view class="cl-checkbox" :class="[classList]" @tap.stop="onChange">
		<view
			class="cl-checkbox__input"
			:style="{
				height: size,
				width: size,
			}"
		>
			<text class="cl-icon-toast-success" v-if="checked"></text>
		</view>

		<view class="cl-checkbox__label">
			<slot></slot>
		</view>
	</view>
</template>

<script lang="ts">
/**
 * @description 多选框
 * @property {Boolean} modelValue 绑定值
 * @property {String, Number} label 标识
 * @property {Boolean} disabled 是否禁用
 * @property {Boolean} border 是否边框样式
 * @property {Boolean} round 是否圆角
 * @property {Boolean} fill 是否宽度填充
 * @property {String, Number} size 尺寸
 * @event {Function} change 绑定值改变时触发
 */

import { computed, defineComponent, ref, watch } from "vue";
import { isArray, isBoolean } from "lodash";
import { parseRpx } from "/@/cool/utils";
import { useEl, useForm } from "../../hook";

export default defineComponent({
	name: "cl-checkbox",

	props: {
		modelValue: [String, Number, Boolean],
		label: [String, Number, Boolean],
		disabled: {
			type: Boolean,
			default: null,
		},
		border: {
			type: Boolean,
			default: null,
		},
		round: {
			type: Boolean,
			default: null,
		},
		size: {
			type: [String, Number],
			default: 40,
		},
	},

	emits: ["update:modelValue", "change"],

	setup(props, { emit }) {
		const { getParent } = useEl();
		const { disabled } = useForm();

		// cl-checkbox-group
		const parent = getParent("cl-checkbox-group", [
			"modelValue",
			"round",
			"border",
			"fill",
			"disabled",
			"size",
			"onChange",
		]);

		// 是否选中
		const checked = ref<boolean>(false);

		// 是否禁用
		const isDisabled = computed(() => {
			return (
				disabled.value ||
				(isBoolean(props.disabled) ? props.disabled : parent.value?.disabled)
			);
		});

		// 大小
		const size = computed(() => {
			return parseRpx(parent.value?.size || props.size);
		});

		// 样式
		const classList = computed(() => {
			let list = [];

			if (isBoolean(props.border) ? props.border : parent.value?.border) {
				list.push("is-border");
			}

			if (isBoolean(props.round) ? props.round : parent.value?.round) {
				list.push("is-round");
			}

			if (parent.value?.fill) {
				list.push("is-fill");
			}

			if (isDisabled.value) {
				list.push("is-disabled");
			}

			if (checked.value) {
				list.push("is-checked");
			}

			return list.join(" ");
		});

		// 绑定值改变
		function onChange() {
			if (isDisabled.value) {
				return false;
			}

			checked.value = !checked.value;

			emit("update:modelValue", checked.value);
			emit("change", checked.value);

			// 传递给父组件
			if (parent.value) {
				parent.value.onChange(props.label);
			}
		}

		// 监听绑定值变化
		watch(
			() => (parent.value ? parent.value.modelValue : props.modelValue),
			(val: any) => {
				if (isArray(val)) {
					checked.value = val.includes(props.label);
				} else {
					checked.value = val;
				}
			},
			{
				immediate: true,
			}
		);

		return {
			size,
			checked,
			classList,
			onChange,
		};
	},
});
</script>
