"use client";

import { useState } from "react";

const addons = [
  {
    title: "EssentialsX",
    category: "إدارة السيرفر",
    description: "مجموعة أدوات أساسية لإدارة سيرفر Minecraft.",
    version: "1.21",
  },
  {
    title: "Geyser",
    category: "توافق",
    description: "السماح للاعبي Bedrock بالدخول إلى سيرفر Java.",
    version: "1.21",
  },
  {
    title: "LuckPerms",
    category: "صلاحيات",
    description: "إدارة الرتب والصلاحيات بطريقة احترافية.",
    version: "1.21",
  },
  {
    title: "WorldEdit",
    category: "بناء",
    description: "أداة قوية وسريعة لبناء وتعديل العوالم.",
    version: "1.21",
  },
  {
    title: "Vault",
    category: "اقتصاد",
    description: "واجهة توافق لأنظمة الاقتصاد والصلاحيات.",
    version: "1.21",
  },
  {
    title: "BetterRTP",
    category: "أدوات",
    description: "تنقّل عشوائي آمن داخل عالم السيرفر.",
    version: "1.21",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("الكل");

  const filteredAddons = addons.filter((addon) => {
    const matchesSearch =
      addon.title.toLowerCase().includes(search.toLowerCase()) ||
      addon.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "الكل" || addon.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#070a0d] text-white px-5 py-10">
      <header className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            <span className="text-emerald-400">Plug</span>Vora
          </h1>

          <button className="rounded-xl border border-white/10 px-5 py-2">
            تسجيل الدخول
          </button>
        </div>

        <section className="py-24 text-center">
          <div className="mx-auto mb-6 w-fit rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-emerald-300">
            منصة Minecraft الجديدة
          </div>

          <h2 className="text-5xl font-black leading-tight">
            اكتشف أفضل
            <br />
            <span className="text-emerald-400">إضافات Minecraft</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            PlugVora منصة تجمع الإضافات والموارد لمجتمع Minecraft.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث عن إضافة..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-emerald-400"
            />

            <button className="rounded-2xl bg-emerald-500 px-8 font-bold text-black">
              بحث
            </button>
          </div>
        </section>

        <section>
          <div className="mb-8 flex flex-wrap gap-3">
            {[
              "الكل",
              "إدارة السيرفر",
              "توافق",
              "صلاحيات",
              "بناء",
              "اقتصاد",
              "أدوات",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-xl px-4 py-2 ${
                  category === item
                    ? "bg-emerald-500 text-black"
                    : "bg-white/5 text-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAddons.map((addon) => (
              <article
                key={addon.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-emerald-400/50"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{addon.title}</h3>

                  <span className="rounded-lg bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                    {addon.version}
                  </span>
                </div>

                <p className="mb-5 text-gray-400">
                  {addon.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-emerald-400">
                    {addon.category}
                  </span>

                  <button className="rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-emerald-500 hover:text-black">
                    التفاصيل
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredAddons.length === 0 && (
            <p className="py-16 text-center text-gray-500">
              ماكو إضافات مطابقة للبحث.
            </p>
          )}
        </section>
      </header>
    </main>
  );
}