<template>
    <div class="flex h-screen bg-gray-100">
        <Sidebar />
        <div class=" w-full flex-1 flex flex-col ">
            <Navbar />
            <div class="px-[24px] mt-[42px]">
                <div class="flex justify-between mb-[10px]">
                    <h1 class="text-[20px] ">Welcome, Admin!</h1>
                    <p class="text-[12px] mt-auto">4 Februari, 2025</p>
                </div>
                <div class="bg-white p-3 shadow-md rounded-[6px]">
                    <div class="pl-[33px] py-[16px]">
                        <p>Selamat Datang di Aplikasi</p>
                        <p class="text-[32px] mb-[12px]">INVENTARIS LABORATORIUM</p>
                        <p>Selamat Beraktivitas !</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-between px-[24px] mt-[42px] gap-6 text-center ">
                <div class="w-full rounded-xl bg-gradient-to-l from-blue-700 to-blue-400 text-white p-7 shadow-lg relative overflow-hidden">
                    <h2 class="text-[30px]">Laptop</h2>
                    <p class="text-[60px] font-bold">10</p>
                    <img class="absolute bottom-2 right-0 h-30 " src="/svg/icon_laptop.svg" alt="">
                </div>

                <div class="w-full rounded-xl bg-gradient-to-l from-blue-300 to-cyan-300 text-white p-7 shadow-lg relative overflow-hidden">
                    <h2 class="text-[30px]">Handphone</h2>
                    <p class="text-[60px] font-bold">10</p>
                    <img class="absolute bottom-2 right-0 h-30 " src="/svg/icon_hp.svg" alt="">
                </div>

                <div class="w-full rounded-xl bg-gradient-to-l from-yellow-400 to-yellow-200 text-white p-7 shadow-lg relative overflow-hidden">
                    <h2 class="text-[30px]">Dipinjam</h2>
                    <p class="text-[60px] font-bold">10</p>
                    <img class="absolute bottom-2 right-0 h-30 " src="/svg/icon_jam.svg" alt="">
                </div>

                <div class="w-full rounded-xl bg-gradient-to-l from-green-500 to-green-300 text-white p-7 shadow-lg relative overflow-hidden">
                    <h2 class="text-[30px]">Dikembalikan</h2>
                    <p class="text-[60px] font-bold">10</p>
                    <img class="absolute bottom-2 right-0 h-30 " src="/svg/icon_ceklist.svg" alt="">
                </div>
            </div>
            <div class="bg-white shadow-md rounded-lg  h-[300px] m-[20px]">
                <h1 class="text-[30px] text-center py-[34px]">Riwayat Peminjaman</h1>
            </div>
        </div>
    </div>
</template>
<script setup>
import Navbar from '../../components/Navbar.vue';
import Sidebar from '../../components/Sidebar.vue';
</script>
