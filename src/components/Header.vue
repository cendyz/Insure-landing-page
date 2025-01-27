<template>
	<header class="bg-darkViolet lg:py-[4em]">
		<img
			:src="mobilePattern"
			alt="dad, mom and two kids"
			class="block w-full lg:hidden" />

		<div
			class="py-[5em] px-[1.7em] text-veryLightGray relative flex w-[100%] lg:justify-between lg:container">
			<div class="text-center lg:w-[44%] lg:text-left">
				<div
					class="hidden lg:block h-[2px] rounded-2xl w-[40%] bg-veryLightGray"></div>
				<h1
					class="text-[4.5rem] font-display font-display400 z-10 relative lg:text-[7.3rem] lg:mt-[.8em] lg:leading-none">
					Humanizing your insurance.
				</h1>
				<p class="mt-[1em] leading-[1.8] z-10 relative lg:text-[1.6rem]">
					Get your life insurance coverage easier and faster. We blend our
					expertise and technology to help you find the plan that’s right
					for you. Ensure you and your loved ones are protected.
				</p>
				<button
					type="button"
					class="uppercase mt-[2em] py-[.4em] px-[1.7em] border-2 text-[1.9rem] relative lg:hover:text-black lg:hover:bg-veryLightGray transition-colors">
					view plans
				</button>
			</div>
			<picture>
				<source :srcset="desktopPattern" media="(min-width: 992px)" />
				<img
					:src="mobilePattern"
					alt="dad, mom and two kids"
					class="hidden w-full lg:block lg:absolute lg:right-[1.5em] lg:w-[52%] z-10 lg:max-w-[40em]" />
			</picture>
			<picture>
				<source :srcset="desktopTopLines" media="(min-width: 992px)" />
				<img
					:src="topLeftLines"
					alt=""
					class="absolute top-0 left-0 z-0 lg:left-full lg:-translate-x-1/2 lg:top-[-10%]" />
			</picture>
			<picture>
				<source :srcset="desktopBotLines" media="(min-width: 992px)" />
				<img
					:src="bottomRightLines"
					alt=""
					class="absolute bottom-[-38%] right-0 z-0 lg:right-[91%] lg:bottom-[-65%]" />
			</picture>
		</div>
	</header>
</template>

<script setup lang="ts">
import mobilePattern from '@/images/image-intro-mobile.jpg'
import desktopPattern from '@/images/image-intro-desktop.jpg'
import topLeftLines from '@/images/bg-pattern-intro-left-mobile.svg'
import bottomRightLines from '@/images/bg-pattern-intro-right-mobile.svg'
import desktopTopLines from '@/images/bg-pattern-intro-right-desktop.svg'
import desktopBotLines from '@/images/bg-pattern-intro-left-desktop.svg'
</script>
