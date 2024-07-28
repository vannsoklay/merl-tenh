import { A } from "@solidjs/router";
import { For } from "solid-js";
import CardItem from "~/components/Card";
import Counter from "~/components/Counter";
import { Item } from "~/types/item";

export default function Home() {
  const items = [
    {
      id: 1,
      title: "វីឡាឃ្វីនសម្រាប់ជួលនៅ បុរីប៉េងហួតបឹងស្នោរ A",
      price: 50,
      slug: "វីឡាឃ្វីនសម្រាប់ជួលនៅ-បុរីប៉េងហួតបឹងស្នោរ",
    },
    {
      id: 2,
      title: "វីឡាឃ្វីនសម្រាប់ជួលនៅ បុរីប៉េងហួតបឹងស្នោរ B",
      price: 55,
      slug: "វីឡាឃ្វីនសម្រាប់ជួលនៅ-បុរីប៉េងហួតបឹងស្នោរ-2",
    },
    {
      id: 3,
      title: "វីឡាឃ្វីនសម្រាប់ជួលនៅ បុរីប៉េងហួតបឹងស្នោរ C",
      price: 60,
      slug: "វីឡាឃ្វីនសម្រាប់ជួលនៅ-បុរីប៉េងហួតបឹងស្នោរ-3",
    },
    {
      id: 4,
      title: "វីឡាឃ្វីនសម្រាប់ជួលនៅ បុរីប៉េងហួតបឹងស្នោរ D",
      price: 65,
      slug: "វីឡាឃ្វីនសម្រាប់ជួលនៅ-បុរីប៉េងហួតបឹងស្នោរ-4",
    },
    {
      id: 5,
      title: "វីឡាឃ្វីនសម្រាប់ជួលនៅ បុរីប៉េងហួតបឹងស្នោរ E",
      price: 70,
      slug: "វីឡាឃ្វីនសម្រាប់ជួលនៅ-បុរីប៉េងហួតបឹងស្នោរ-5",
    },
    {
      id: 6,
      title: "វីឡាឃ្វីនសម្រាប់ជួលនៅ បុរីប៉េងហួតបឹងស្នោរ F",
      price: 75,
      slug: "វីឡាឃ្វីនសម្រាប់ជួលនៅ-បុរីប៉េងហួតបឹងស្នោរ-6",
    },
    {
      id: 7,
      title: "វីឡាឃ្វីនសម្រាប់ជួលនៅ បុរីប៉េងហួតបឹងស្នោរ G",
      price: 80,
      slug: "វីឡាឃ្វីនសម្រាប់ជួលនៅ-បុរីប៉េងហួតបឹងស្នោរ-7",
    },
    {
      id: 8,
      title: "វីឡាឃ្វីនសម្រាប់ជួលនៅ បុរីប៉េងហួតបឹងស្នោរ H",
      price: 85,
      slug: "វីឡាឃ្វីនសម្រាប់ជួលនៅ-បុរីប៉េងហួតបឹងស្នោរ-8",
    },
  ] as Item[];

  return (
    <main class="max-w-screen-xl mx-auto text-gray-700 p-4">
      <h1 class="text-xl font-semibold pb-3">Latest Ads</h1>
      <div class="grid grid-cols-4 gap-4">
        <For
          each={items}
        >
          {(item: Item) => <CardItem {...item} />}
        </For>
      </div>
    </main>
  );
}
