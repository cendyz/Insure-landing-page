<template>
	<section
		class="text-center lg:text-left lg:flex lg:flex-wrap lg:justify-between">
		<h2
			class="text-[4.3rem] font-display font-display400 mb-[1.7em] relative before:content=[''] before:absolute before:h-[2px] before:w-[50%] before:bg-darkViolet before:opacity-20 before:top-[-60%] before:left-1/2 before:-translate-x-[50%] lg:text-[7rem] lg:before:hidden lg:w-full lg:mb-[1.3em]">
			We're different
		</h2>
		<div
			class="flex flex-col items-center mb-[3.3em] last:mb-0 lg:w-[31%] lg:items-start"
			v-for="item in firstSectionData"
			:key="nanoid()">
			<img :src="item.img" :alt="item.alt" class="w-[30%] mb-[1.5em]" />
			<h3 class="font-display font-display400 text-[2.8rem] mb-[.6em]">
				{{ item.title }}
			</h3>
			<p class="text-veryDarkViolet opacity-80 lg:text-[1.7rem]">
				{{ item.desc }}
			</p>
		</div>
	</section>
</template>

<script setup lang="ts">
import { firstSectionData } from '@/data'
import { nanoid } from 'nanoid'
</script>
