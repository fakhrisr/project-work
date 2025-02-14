<template>
    <div class="bg-[#004CF0] text-white h-22 flex items-center px-5 shadow-md">
        <div class="flex ml-auto border-l-1 p-4 items-center gap-3 mx-3 cursor-pointer group">
            <img src="/svg/icon_admin.svg" alt="">
            <div>
                <h1 class="">Admin</h1>
                <p class="text-[12px]">admin</p>
            </div>
            <img src="/svg/icon_dropdone.svg" alt="">
            <div class="w-full">
            <div class="fixed w-40 right-5  mt-6 bg-white rounded-md shadow-md z-10 shadow-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                <div  class="text-gray-700 hover:bg-black/10 flex hover:rounded-md items-center gap-4">
                    <button type="submit" class="flex gap-4 items-center w-full p-2">
                        <img class="h-[20px]" src="/svg/shutdown.svg" alt="">
                        <h1 class="font-bold">Logout</h1>
                    </button>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>