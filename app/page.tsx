const addons = [
  {
    title: "Ultra Survival",
    description: "إضافات قوية لتحسين تجربة البقاء في Minecraft.",
    category: "Survival",
  },
  {
    title: "Magic World",
    description: "سحر ومغامرات وعناصر جديدة لعالم Minecraft.",
    category: "Adventure",
  },
  {
    title: "Better Mobs",
    description: "مخلوقات وقدرات جديدة لعالم Minecraft.",
    category: "Mobs",
  },
];

export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#080b10] text-white"
    >
      <nav className="border-b border-white/10 bg-[#080b10]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-black">
            <span className="text-emerald-400">Plug</span>Vora
          </div>

          <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
            <a href="#" className="hover:text-emerald-400">
              الرئيسية
            </a>
            <a href="#addons" className="hover:text-emerald-400">
              الإضافات
            </a>
            <a href="#categories" className="hover:text-emerald-400">
              التصنيفات
            </a>
          </div>

          <button className="rounded-xl border border-white/10 px-4 py-2 text-sm">
            تسجيل الدخول
          </button>
        </div>
      </nav>

      <section className="px-6 py-28 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            منصة Minecraft الجديدة
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            اكتشف أفضل
            <span className="block text-emerald-400">
              إضافات Minecraft
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            PlugVora منصة تجمع الإضافات والموارد لمجتمع Minecraft.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              placeholder="ابحث عن إضافة..."
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
            />

            <button className="rounded-2xl bg-emerald-500 px-7 py-4 font-black text-black">
              بحث
            </button>
          </div>
        </div>
      </section>

      <section
        id="addons"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <h2 className="mb-10 text-4xl font-black">
          إضافات مميزة
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {addons.map((addon) => (
            <article
              key={addon.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1"
            >
              <div className="flex h-40 items-center justify-center rounded-2xl bg-emerald-400/10 text-6xl">
                ⛏️
              </div>

              <span className="mt-5 inline-block rounded-lg bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                {addon.category}
              </span>

              <h3 className="mt-4 text-xl font-black">
                {addon.title}
              </h3>

              <p className="mt-3 leading-7 text-zinc-500">
                {addon.description}
              </p>

              <button className="mt-6 w-full rounded-xl border border-white/10 py-3 font-bold hover:bg-emerald-500 hover:text-black">
                عرض الإضافة
              </button>
            </article>
          ))}
        </div>
      </section>

      <section
        id="categories"
        className="border-y border-white/10 bg-white/[0.02] px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black">
            التصنيفات
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {["Survival", "Adventure", "Mobs", "Weapons"].map(
              (category) => (
                <button
                  key={category}
                  className="rounded-2xl border border-white/10 bg-[#0d1118] p-6 font-black"
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-sm text-zinc-600">
        © 2026 PlugVora
      </footer>
    </main>
  );
}