<template>
    <div  class="h-screen flex items-center " style="background-image: url();">
        <div class="">
            <img class="h-full fixed left-0 top-0" src="/svg/icon_loginombakblue.svg" alt="">
            <img class="absolute top-0 right-0 mr-[250px] mt-[200px] w-[620px] items-center" src="/svg/icon_bglogin.svg" alt="">
        </div>
        <div class="w-full flex justify-center  items-center gap-[130px] fixed">
            <div>
                <img class="h-[480px]" src="/svg/icon_login.svg" alt="">
            </div>
            <div class="w-[400px] h-[500px] rounded-[20px] bg-white/91 px-[50px] shadow-lg " >
                <img src="" alt="">
                <h1 class="pt-[40px] pb-[30px] font-bold text-[32px] text-center">Login</h1>
        
                <label>Email:</label>
                <br>
                <input class="w-full rounded-[20px] border-1 py-3 pl-2 mt-[10px] mb-[15px] text-[13px]" type="email" placeholder="Example@gmail.com">
                <br>
                <label>Password:</label>
                <br>
                <div class="flex justify-between w-full rounded-[20px] border-1  px-2 mt-[10px] mb-[10px]">
                    <input class="w-full rounded-[20px] text-[13px] py-3 " type="password" placeholder="Password">
                    <img class="" src="/svg/icon_mata.svg" alt="">
                </div>
                <div class="flex gap-2 mb-[30px] pl-3">
                    <input id="rememberChkBox" type="checkbox">
                    <p class="text-[12px]">Remember me</p>
                </div>
                    <a href="/dashboard/index">
                        <button class="bg-[#004CF1] hover:bg-blue-600 w-full rounded-full text-[20px] py-[10px] text-white cursor-pointer">
                            Login
                        </button>
                    </a>
            </div>
        </div>
    </div>
</template>