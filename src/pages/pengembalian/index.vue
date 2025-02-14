<template>
    <div class="flex h-screen bg-gray-100">
        <Sidebar />
        <div class=" w-full flex-1 flex flex-col">
            <Navbar />
            <div class=" shadow-lg my-[90px] mx-[40px] h-[700px] rounded-2xl  border overflow-y-auto">
                <table class="w-full text-center divide-y ">
                    <thead class="rounded-t-2xl">
                        <tr>
                            <th class="p-3 border-r">No</th>
                            <th class="border-r">Nama</th>
                            <th class="border-r">Barang</th>
                            <th class="border-r">Tipe</th>
                            <th class="border-r">ID</th>
                            <th class="border-r">Tanggal</th>
                            <th class="">Aksi</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in 10" class="">
                        <tr>
                            <td class="border-r">1</td>
                            <td class="border-r p-2 flex gap-3 items-center ">
                                <img src="https://placehold.co/100x100"  alt="">
                                <div class="text-left">
                                    <p class="text-[10px]">12208995</p>
                                    <p class="text-[10px] font-bold">Fakhri Shiddiq Rizkillah</p>
                                    <p class="text-[10px] font-bold">PPLG XII-5</p>
                                    <p class="text-[10px] font-bold">Ciawi-1</p>
                                </div>
                            </td>
                            <td class="border-r">laptop</td>
                            <td class="border-r">Lenovo</td>
                            <td class="border-r">Lenovo-9032RA</td>
                            <td class="border-r">24-02-2025</td>
                            <td class=""><button class="bg-gray-300 w-14 h-10 rounded-md"></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Navbar from '../../components/Navbar.vue';
import Sidebar from '../../components/Sidebar.vue';

</script>
