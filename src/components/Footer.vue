<template>
	<footer class="bg-gray-100 py-[4em] px-[1.5em] relative">
		<div
			class="flex flex-col items-center z-30 relative pb-[4.5em] border-b-[2px]">
			<img :src="logo" alt="insure logo" />
			<div class="flex gap-x-[1em] mt-[2em]">
				<img
					:src="item.icon"
					:alt="item.alt"
					v-for="item in footerIconsData"
					:key="nanoid()" />
			</div>
		</div>
		<div class="py-[2.7em] text-center">
			<div
				class="flex flex-col gap-y-[.5em] mb-[2.3em] last:mb-0"
				v-for="item in footerLinksData"
				:key="nanoid()">
				<h4
					class="mb-[2em] uppercase font-karla700 text-darkGrayishViolet">
					{{ item.title }}
				</h4>
				<a
					href="#"
					v-for="link in item.links"
					:key="nanoid()"
					class="uppercase text-veryDarkViolet font-karla700"
					>{{ link }}</a
				>
			</div>
		</div>
		<img :src="lines" alt="" class="absolute top-0 left-0" />
	</footer>
</template>

<script setup lang="ts">
import logo from '@/images/logo.svg'
import lines from '@/images/bg-pattern-footer-mobile.svg'
import { footerIconsData } from '@/data'
import { footerLinksData } from '@/data'
import { nanoid } from 'nanoid'
</script>
