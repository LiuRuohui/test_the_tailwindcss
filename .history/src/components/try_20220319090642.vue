<script setup></script>

<template>
    <div class="w-full h-screen flex">
        <div class="w-20 h-screen bg-gray-800 flex flex-col items-center">
            <div class="w-full">
                <div
                    class="bg-clip-border w-12 h-12 rounded-full overflow-hidden mt-8 mb-8 m-auto relative  box-border hover:border-2  border-blue-500"
                >
                    <div
                        class="absolute top-1 left-1 w-3 h-3 rounded-full bg-green-600 border-2 border-gray-800"
                    ></div>
                    <img src="/src/assets/avatar/squidWard.jpg" alt="章鱼哥" />
                </div>
            </div>
            <div class="flex-grow flex flex-col md:pt-36 lg:pb-36 w-full">
                <div class="m-auto w-full">
                    <div>
                        <div
                            class="w-8 h-8 mt-10 mb-10 ml-auto mr-auto opacity-40 hover:opacity-100"
                        >
                            <img src="/src/assets/img/msg.svg" alt />
                        </div>
                    </div>
                    <div>
                        <div
                            class="w-8 h-8 mt-10 mb-10 ml-auto mr-auto opacity-40 hover:opacity-100"
                        >
                            <img src="/src/assets/img/group.svg" alt />
                        </div>
                    </div>
                    <div>
                        <div
                            class="w-8 h-8 mt-10 mb-10 ml-auto mr-auto opacity-40 hover:opacity-100"
                        >
                            <img src="/src/assets/img/file.svg" alt />
                        </div>
                    </div>
                    <div>
                        <div
                            class="w-8 h-8 mt-10 mb-10 ml-auto mr-auto opacity-40 hover:opacity-100"
                        >
                            <img src="/src/assets/img/note.svg" alt />
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <div class="mt-8 mb-8 w-8 h-8 m-auto opacity-40 hover:opacity-100">
                    <img src="/src/assets/img/setting.svg" alt />
                </div>
            </div>
        </div>
        <div class="w-32 h-full border-r"></div>
        <div class="flex-grow h-full"></div>
    </div>
</template>
<style>
</style>