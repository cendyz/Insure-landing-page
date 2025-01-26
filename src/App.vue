<template>
	<Nav />
	<Header />
	<Main />
	<Footer />
</template>

<script setup lang="ts">
import Nav from './components/Nav.vue'
import Header from './components/Header.vue';
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
</script>

<style lang="scss">
@use './sass/reset.scss';

</style>
