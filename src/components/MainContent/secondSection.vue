<template>
	<section
		class="p-[3em] bg-darkViolet text-veryLightGray text-center relative lg:flex lg:justify-between lg:items-center lg:overflow-hidden lg:p-[5em]" >
		<h2
			class="font-display font-display400 text-[3.6rem] relative z-30 leading-[1.2] lg:text-[6.5rem] lg:w-[570px] lg:text-left">
			Find out more about how we work
		</h2>
		<button
			type="button"
			class="uppercase mt-[2em] py-[.4em] px-[1.7em] border-2 text-[1.9rem] relative lg:my-auto lg:ml-auto z-30 lg:hover:text-black lg:hover:bg-veryLightGray transition-colors">
			how we work
		</button>
		<picture>
<source :srcset="desktopLines" media="(min-width:992px)">
			<img
			:src="bottomRightLines"
			alt=""
			class="absolute top-0 right-0 z-0 w-[45%] lg:w-[47%]" />
		</picture>
	</section>
</template>

<script setup lang="ts">
import bottomRightLines from '@/images/bg-pattern-how-we-work-mobile.svg'
import desktopLines from '@/images/bg-pattern-how-we-work-desktop.svg'
</script>

<style scoped></style>
