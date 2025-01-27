<template>
	<footer class="bg-gray-100 py-[4em] px-[1.5em] relative">
		<div
			class="flex flex-col items-center z-30 relative pb-[4.5em] border-b-[2px] lg:flex-row lg:container lg:justify-between lg:pb-[2em]">
			<img :src="logo" alt="insure logo" class="lg:w-[13%]" />
			<div class="flex gap-x-[1em] mt-[2em]">
				<img
					:src="item.icon"
					:alt="item.alt"
					v-for="item in footerIconsData"
					:key="nanoid()"
					class="icon" />
			</div>
		</div>
		<div class="py-[2.7em] text-center lg:columns-4 lg:container">
			<div
				class="flex flex-col gap-y-[.5em] mb-[2.3em] last:mb-0 lg:items-start"
				v-for="item in footerLinksData"
				:key="nanoid()">
				<h4
					class="mb-[2em] uppercase font-karla700 text-darkGrayishViolet lg:mb-[1.5em]">
					{{ item.title }}
				</h4>
				<a
					href="#"
					v-for="link in item.links"
					:key="nanoid()"
					class="uppercase text-veryDarkViolet font-karla700 hover:underline underline-offset-2 inline-block"
					>{{ link }}</a
				>
			</div>
		</div>
		<picture>
			<source :srcset="desktopLines" media="(min-width: 992px)" />
			<img :src="lines" alt="" class="absolute top-0 left-0" />
		</picture>
	</footer>
</template>

<script setup lang="ts">
import logo from '@/images/logo.svg'
import lines from '@/images/bg-pattern-footer-mobile.svg'
import desktopLines from '@/images/bg-pattern-footer-desktop.svg'
import { footerIconsData } from '@/data'
import { footerLinksData } from '@/data'
import { nanoid } from 'nanoid'
</script>

<style scooped lang="scss">
.icon {
	transition: filter .2s;
	cursor: pointer;

	&:hover {
		filter: invert(100%) brightness(5%) contrast(105%);
	}
}
</style>
