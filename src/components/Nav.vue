<template>
	<nav
		class="fixed top-0 left-0 w-screen flex justify-between p-[1.5em] font-medium items-center bg-veryLightGray">
		<img :src="logo" alt="logo workit" class="block" />
		<button @click="isOpenNavMenu = !isOpenNavMenu">
			<img :src="burgerOpen" alt="menu open icon" v-if="!isOpenNavMenu" />
			<img :src="burgerClose" alt="menu close icon" v-else />
		</button>
		<Transition name="navMenu">
			<div
				v-if="isOpenNavMenu"
				class="fixed w-full top-[5em] left-0 h-[calc(100%-5em)] bg-veryDarkViolet flex flex-col items-center px-[1.3em] py-[2.2em] gap-y-[.8em]">
				<img :src="navPattern" alt="" class="absolute bottom-0" />
				<a
					href="#"
					class="text-veryLightGray uppercase text-[2rem] last:border py-[.5em] last:w-full text-center z-10"
					v-for="item in mobileMenuLinks"
					@click="isOpenNavMenu = false"
					:key="nanoid()"
					>{{ item.link }}</a
				>
			</div>
		</Transition>
	</nav>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid'
import { ref, watchEffect } from 'vue'
import { mobileMenuLinks } from '@/data'
import logo from '@/images/logo.svg'
import burgerOpen from '@/images/icon-hamburger.svg'
import burgerClose from '@/images/icon-close.svg'
import navPattern from '@/images/bg-pattern-mobile-nav.svg'
const isOpenNavMenu = ref(false)

watchEffect(() => {
	if (isOpenNavMenu.value) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'visible'
	}
})
</script>

<style scoped lang="scss">
.navMenu-enter-to,
.navMenu-leave-from {
	opacity: 1;
}

.navMenu-enter-active,
.navMenu-leave-active {
	transition: opacity 0.15s;
}

.navMenu-enter-from,
.navMenu-leave-to {
	opacity: 0;
}
</style>
