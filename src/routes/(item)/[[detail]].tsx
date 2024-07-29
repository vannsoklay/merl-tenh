import { A } from "@solidjs/router";
import { Breadcrumb } from "~/components/Breadcrumb";
import { useAuth } from "~/contexts/useAuth";
import { FaSolidSquarePhone } from 'solid-icons/fa';
import { RiMapMapPin2Fill } from 'solid-icons/ri';

export default function ItemDetail() {
    const { user } = useAuth();

    return (
        <main class="text-center mx-auto text-gray-700 p-4">
            <Breadcrumb />
            <div class="grid grid-cols-12 gap-8">
                <div class="col-span-8 bg-white border border-gray-200 text-start rounded-lg dark:bg-gray-800 dark:border-gray-700">
                    <div class="w-full h-[64vh]"></div>
                    <main class="divide-y divide-gray-300">
                        <ul class="text-start flex justify-between p-4">
                            <li class="w-10/12">
                                <h1 class="font-bold text-xl">
                                    LANDCRUISER GXR 2008 V6 ឡើង 2020 ថ្មាំស៊ីនមួយជុំ
                                </h1>
                                <div class="text-red-600 py-1 text-xl font-bold">$500.00</div>
                                <div class="flex space-x-4 text-sm">
                                    <div class="text-primary-600">
                                        <label class="font-semibold text-[#000]">ID:</label>{" "}
                                        102121122
                                    </div>
                                    <div class="text-primary-600">
                                        <label class="font-semibold text-[#000]">Category:</label>{" "}
                                        <span>Cars and Vehicles</span>
                                    </div>
                                    <div class="text-primary-600">
                                        <label class="font-semibold text-[#000]">Locations:</label>{" "}
                                        <span>Phnom Penh</span>
                                    </div>
                                    <div class="text-primary-600">
                                        <label class="font-semibold text-[#000]">Posted:</label>{" "}
                                        28-Jul-24
                                    </div>
                                </div>
                            </li>
                            <li class="h-full text-end space-x-2">
                                <button
                                    type="button"
                                    class="text-white h-10 w-10 flex border rounded-full justify-center items-center text-gray-600 font-medium text-sm text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55"
                                >
                                    <svg
                                        fill="currentColor"
                                        stroke-width="0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        style="overflow: visible; color: currentcolor;"
                                        height="1.5em"
                                        width="1.5em"
                                    >
                                        <path d="M400 480a16 16 0 0 1-10.63-4L256 357.41 122.63 476A16 16 0 0 1 96 464V96a64.07 64.07 0 0 1 64-64h192a64.07 64.07 0 0 1 64 64v368a16 16 0 0 1-16 16Z"></path>
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    class="text-white h-10 w-10 flex border rounded-full justify-center items-center text-gray-600 font-medium text-sm text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55"
                                >
                                    <svg
                                        fill="currentColor"
                                        stroke-width="0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        style="overflow: visible; color: currentcolor;"
                                        height="1.5em"
                                        width="1.5em"
                                        class="text-gray-500"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="m13.576 17.271-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.514 3.514 0 0 1 0 1.457l5.11 2.788a3.5 3.5 0 1 1-.958 1.755Z"
                                        ></path>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                        <div class="p-4">
                            <h1 class="text-lg font-medium">Description</h1>
                            <p>
                                មានលក់បោះដុំ ចាប់ពី 5គ្រាប់ឡើង សំរាប់យកលក់បន្ត (Telegram :
                                017974xxx ចុចដើម្បីតេ/Click To Call) តម្លៃកាន់តែពិសេស​ Asus
                                Vivobook ថ្មីបកកេស100% CPU i3ជំនាន់ទី13 រាងស្ដើង ស្រាល
                                ពណ៍ខ្មៅស្អាត -សម្រាប់: រៀនអនឡាញ ការងាររដ្ឋបាល ឌីស្សាញ លេងហ្គេម
                                កាត់តរូប រៀនAcounting សរសេរកូដ…. -CPU Core i3-N305 (8CPUs) -RAM:
                                8GB -SSD: PCIe M2 512GB -Keyboard ភ្ល់ើង -VGA : Intel Graphics
                                -Screen: FHD 15.6” -ថ្មីកេស ធានាជូន២ឆ្នាំ
                                -តម្លៃពិសេស:399$ចុះសល់379$ -Free Bag, បីទScreen , Liquid , Mouse
                                Wireless , Mouse pad , Screen Protector ទីតាំងហាង: ផ្ទះ39Eo
                                ផ្លូវ257 ទឹកល្អក់3 ទួលគោក ភ្នំពេញ (ខាងលិចស្តុបទេពផនប្រហែល 300ម)។
                                Telegram: 017974xxx ចុចដើម្បីតេ/Click To Call (Tell 016 |
                                017974xxx ចុចដើម្បីតេ/Click To Call)
                            </p>
                        </div>
                        <div class="p-2.5 text-end">
                            <button
                                type="button"
                                class="text-white text-gray-600 font-medium text-sm text-center inline-flex items-center me-1.5"
                            >
                                <svg
                                    fill="currentColor"
                                    stroke-width="0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1024 1024"
                                    style="overflow: visible; color: currentcolor;"
                                    height="1.5em"
                                    width="1.5em"
                                    class="me-1"
                                >
                                    <path
                                        fill="currentColor"
                                        d="m955.7 856-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        fill-opacity="0.09"
                                        d="M172.2 828.1h679.6L512 239.9 172.2 828.1zM560 720a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm-16-304v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8z"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        d="M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8z"
                                    ></path>
                                </svg>
                                Report
                            </button>
                        </div>
                    </main>
                </div>
                <div class="col-span-4 text-start">
                    <div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 w-full p-4 space-y-4">
                        <div class="flex rounded-lg">
                            <div class="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            </div>
                            <label class="font-semibold text-md pl-2">Vann Soklay</label>
                        </div>
                        <div class="flex items-center space-x-1">
                            <FaSolidSquarePhone font-size="32" />
                            <label>+85510959402</label>
                        </div>
                        <div class="flex items-center space-x-1">
                            <RiMapMapPin2Fill font-size="32" />
                            <label>Phnom Penh , Chip mong 598</label>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
