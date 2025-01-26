<template>
	<header>
		<img :src="mobilePattern" alt="dad, mom and two kids" />
		<div
			class="bg-darkViolet text-center py-[5em] px-[1.7em] text-veryLightGray relative">
			<h1 class="text-[4.5rem] font-display font-display400 z-10 relative">
				Humanizing your insurance.
			</h1>
			<p class="mt-[1em] leading-[1.8] z-10 relative">
				Get your life insurance coverage easier and faster. We blend our
				expertise and technology to help you find the plan that’s right for
				you. Ensure you and your loved ones are protected.
			</p>
			<button
				type="button"
				class="uppercase mt-[2em] py-[.4em] px-[1.7em] border-2 text-[1.9rem] relative">
				view plans
			</button>
			<img :src="topLeftLines" alt="" class="absolute top-0 left-0 z-0" />
			<img
				:src="bottomRightLines"
				alt=""
				class="absolute bottom-[-38%] right-0 z-0" />
		</div>
	</header>
</template>

<script setup lang="ts">
import mobilePattern from '@/images/image-intro-mobile.jpg'
import topLeftLines from '@/images/bg-pattern-intro-left-mobile.svg'
import bottomRightLines from '@/images/bg-pattern-intro-right-mobile.svg'
</script>
