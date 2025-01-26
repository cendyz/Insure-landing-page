<template>
	<section
		class="p-[3em] bg-darkViolet text-veryLightGray text-center relative">
		<h2
			class="font-display font-display400 text-[3.6rem] relative z-30 leading-[1.2]">
			Find out more about how we work
		</h2>
		<button
			type="button"
			class="uppercase mt-[2em] py-[.4em] px-[1.7em] border-2 text-[1.9rem] relative">
			how we work
		</button>
		<img
			:src="bottomRightLines"
			alt=""
			class="absolute top-0 right-0 z-0 w-[45%]" />
	</section>
</template>

<script setup lang="ts">
import bottomRightLines from '@/images/bg-pattern-how-we-work-mobile.svg'
</script>

<style scoped></style>
