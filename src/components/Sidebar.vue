<template>
    <div class="">
      <div class="w-84 bg-white shadow-md h-full p-5">
        <h1 class="text-[32px] font-bold mb-[77px] text-center">INVENTARIS</h1>
        <div class="flex flex-col gap-[30px] ml-6">
          <div v-for="menu in menus" :key="menu.name" :class="['flex items-center gap-[20px] p-3 rounded-[10px] ', isActive(menu.path) ? 'bg-[#D9D9D9]' : '']">
            <!-- Ganti ikon berdasarkan menu aktif -->
            <img :src="getIcon(menu)" alt="Icon">
            <router-link
              :to="menu.path"
              :class="[' text-[20px]  hover:text-blue-500', isActive(menu.path) ? 'text-[#3574FC]' : 'text-gray-700']"
            >
              {{ menu.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  // Data menu sidebar dengan dua ikon (default dan aktif)
  const menus = [
    { name: "Dashboard", path: "/dashboard/index", icon: "/svg/icon_dashboard.svg", iconActive: "/svg/active_dashboard.svg" },
    { name: "daftar", path: "/daftar/index", icon: "/svg/icon_daftar.svg", iconActive: "/svg/active_daftar.svg" },
    { name: "Peminjaman", path: "/peminjaman/index", icon: "/svg/icon_peminjaman.svg", iconActive: "/svg/active_peminjaman.svg" },
    { name: "Pengembalian", path: "/pengembalian/index", icon: "/svg/icon_pengembalian.svg", iconActive: "/svg/active_pengembalian.svg" }
  ];
  
  const route = useRoute();
  
  // Fungsi untuk mengecek apakah menu sedang aktif
  const isActive = (path) => route.path === path;
  
  // Fungsi untuk mendapatkan ikon yang sesuai
  const getIcon = (menu) => isActive(menu.path) ? menu.iconActive : menu.icon;
  </script> 