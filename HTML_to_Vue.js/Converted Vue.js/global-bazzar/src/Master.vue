<script setup>
import Header from './components/common/Header.vue';
import Topbar from './components/common/Topbar.vue';
import Navbar from './components/common/Navbar.vue';
import CategorySidebar from './components/CategorySidebar.vue';
import CartSidebar from './components/CartSidebar.vue';
import NavSidebar from './components/NavSidebar.vue';
import MobileMenu from './components/MobileMenu.vue';
import ProductView from './components/ProductView.vue';
import BannerPart from './components/BannerPart.vue';
import SuggestPart from './components/SuggestPart.vue';
import RecentPart1 from './components/RecentPart1.vue';
import RecentPart2 from './components/RecentPart2.vue';
import RecentPart3 from './components/RecentPart3.vue';
import NewitemPart1 from './components/NewitemPart1.vue';
import NewitemPart2 from './components/NewitemPart2.vue';
import NewsPart from './components/NewsPart.vue';
import IntroPart from './components/IntroPart.vue';
import Footer from './components/common/Footer.vue';

// import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div>
        <!-- topbar -->
        <Topbar />

        <!-- header -->
        <Header> </Header>

        <!-- navbar -->
        <Navbar />
        
        <!-- category sidebar -->
        <CategorySidebar> </CategorySidebar>

        <!-- cart-sidebar -->
        <CartSidebar />

        <!-- nav-sidebar -->
        <NavSidebar/>
        <!-- mobile footer menu  -->
        <MobileMenu />

        

        <!-- product-view -->
         <ProductView />

        <!-- banner-part -->
        <BannerPart />

        <!-- suggest-part -->
        <SuggestPart />

        <!-- recent-part1 -->
        <RecentPart1 />

        <!-- recent-part2 -->
        <RecentPart2 />

        <!-- recent-part3 -->
        <RecentPart3 />

        <!-- new iteam part-1 -->
         <NewitemPart1 />

        <!-- new iteam part-2 -->
        <NewitemPart2 />

   
        <!-- news-part -->
         <NewsPart />


        <!-- intro-part -->
        <IntroPart />

        <!-- footer -->
         <Footer> </ Footer>
    </div>
</template>

<style scoped></style>
