import { A } from "@solidjs/router";

export default function CardItem(props: { id: number, title: string, price: number, slug: string }) {
  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          class="p-5 rounded-t-lg"
          src="https://images.khmer24.co/22-07-29/292390-bkk1-area-modern-style-2-bedrooms-renovated-serviced-apartment-for-rent-pool-gym-steam-suana-1659071746-62288200-b.jpg"
          alt="product image"
        />
      </a>
      <div class="px-5 pb-5">
        <A href={`/${props.slug}`}>
          <div class="h-14 whitespace-normal cursor-pointer">
            <p class="text-md break-words font-medium hover:text-primary-600 tracking-tight text-gray-900 dark:text-white">
              {props.title.length > 64 ? props.title.slice(0, 64) + "..." : props.title}
            </p>
          </div>
        </A>
        <div class="flex items-center justify-between">
          <span class="text-xl font-bold text-red-600 dark:text-danger">
            ${props.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
