<script setup>
    import {onMounted} from 'vue'    
    import layoutNav from './components/layoutNav.vue'
    import layoutHeader from './components/layoutHeader.vue'
    import layoutFooter from './components/layoutFooter.vue'
    import layoutFixed from './components/layoutFixed.vue'
    import {useCategoryStore}  from '@/stores/category'
    onMounted(()=>{
        const CategoryStore=useCategoryStore()
        //请求数据
        CategoryStore.getCategory()
    })
</script>
<template>
    <div class="app-layout">
        <layoutFixed/>
        <layoutNav/>
        <layoutHeader/>
        <!-- <RouterView :key="$route.fullPath"/> -->
        <RouterView />
        <layoutFooter/>
    </div>
</template>
<style scoped>
.app-layout{
    width: 100%;
}
</style>