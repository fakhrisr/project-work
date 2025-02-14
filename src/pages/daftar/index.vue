<template>
    <div class="flex h-screen bg-gray-100">
    
            <Sidebar />
        
        <div class=" w-full flex-1 flex flex-col">
            <Navbar />
            <div class="px-[24px] mt-[42px]">
                <div class="flex justify-between mb-[10px]">
                    <h1 class="text-[20px] ">Welcome, Daftar!</h1>
                    <p class="text-[12px] mt-auto">4 Februari, 2025</p>
                </div>
                
            </div>
            
        </div>
    </div>
</template>
<script setup>
import Navbar from '../../components/Navbar.vue';
import Sidebar from '../../components/Sidebar.vue';
</script>