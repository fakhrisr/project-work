<template>
    <div class="flex h-screen bg-gray-100">
    
            <Sidebar />
        
        <div class=" w-full flex-1 flex flex-col ">
            <Navbar />
            <div class="px-[24px] mt-[42px]">
                <div class="flex justify-center mb-[10px]">
                    <h1 class="text-[40px] font-bold">DAFTAR INVENTARIS</h1>
                </div>
                <table class="w-full text-center border-collapse overflow-hidden rounded-lg">
                    <thead class="bg-gray-400 text-white">
                        <tr>
                            <th class="p-2">NO</th>
                            <th class="p-2">Kode</th>
                            <th class="p-2">Nama</th>
                            <th class="p-2">Jumlah</th>
                            <th class="p-2">Opsi</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white text-gray-900">
                        <tr class="border-b">
                            <td class="p-2">1</td>
                            <td class="p-2">001</td>
                            <td class="p-2">Laptop</td>
                            <td class="p-2">2</td>
                            <td class="p-2 flex justify-center gap-4">
                                <div>Edit</div>
                                <div>Hapus</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    </div>
</template>
<script setup>
import Navbar from '../../components/Navbar.vue';
import Sidebar from '../../components/Sidebar.vue';
</script>