<template>
	<cl-page :padding="20">
		<cl-card label="基础用法">
			<cl-row>
				<cl-col :span="4">
					<cl-avatar src="../static/avatar.png"></cl-avatar>
				</cl-col>

				<cl-col :span="4">
					<cl-avatar src="../static/avatar.png" shape="square"></cl-avatar>
				</cl-col>
			</cl-row>
		</cl-card>

		<cl-card label="占位">
			<cl-row>
				<cl-col :span="4">
					<cl-avatar></cl-avatar>
				</cl-col>

				<cl-col :span="4">
					<cl-avatar name="神仙"></cl-avatar>
				</cl-col>
			</cl-row>
		</cl-card>

		<cl-card label="不同大小">
			<cl-row>
				<cl-col :span="6">
					<cl-avatar :size="100" src="../static/avatar.png"></cl-avatar>
				</cl-col>

				<cl-col :span="6">
					<cl-avatar :size="120" src="../static/avatar.png"></cl-avatar>
				</cl-col>

				<cl-col :span="6">
					<cl-avatar :size="140" src="../static/avatar.png"></cl-avatar>
				</cl-col>
			</cl-row>
		</cl-card>

		<cl-card label="头像组">
			<cl-avatar-group :urls="urls"></cl-avatar-group>
		</cl-card>
	</cl-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const urls = ref<string[]>([
	"../static/avatar.png",
	"../static/avatar2.png",
	"../static/avatar3.png",
]);
</script>
