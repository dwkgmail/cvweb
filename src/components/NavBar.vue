<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import { navItems } from '../data/portfolio';

const open = ref(false);
const activeHref = ref('#top');
const progress = ref(0);
const menuButton = ref<HTMLButtonElement | null>(null);

let observer: IntersectionObserver | undefined;

const updateProgress = () => {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  progress.value = available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0;
};

const closeMenu = () => {
  open.value = false;
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && open.value) {
    closeMenu();
    nextTick(() => menuButton.value?.focus());
  }
};

onMounted(() => {
  const targets = ['#top', ...navItems.map((item) => item.href)]
    .map((selector) => document.querySelector(selector))
    .filter((element): element is Element => Boolean(element));

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) activeHref.value = `#${visible.target.id}`;
    },
    { rootMargin: '-24% 0px -62% 0px', threshold: [0, 0.1, 0.25] },
  );

  targets.forEach((target) => observer?.observe(target));
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('keydown', onKeydown);
  updateProgress();
});

onBeforeUnmount(() => {
  observer?.disconnect();
  window.removeEventListener('scroll', updateProgress);
  window.removeEventListener('keydown', onKeydown);
});
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
    <nav class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="主导航">
      <a href="#top" class="flex items-center gap-3" :aria-current="activeHref === '#top' ? 'page' : undefined" @click="closeMenu">
        <span class="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-xs font-black tracking-wide text-white">DWK</span>
        <span><strong class="block text-sm text-slate-950">丁文凯</strong><small class="block text-[11px] text-slate-500">测试工程师作品集</small></span>
      </a>

      <div class="hidden items-center gap-1 lg:flex">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          :aria-current="activeHref === item.href ? 'location' : undefined"
          class="rounded-lg px-3 py-2 text-sm font-semibold transition"
          :class="activeHref === item.href ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100 hover:text-blue-700'"
        >{{ item.label }}</a>
      </div>

      <div class="hidden items-center gap-2 sm:flex">
        <a href="#contact" class="px-3 py-2 text-sm font-bold text-slate-600 hover:text-blue-700">联系我</a>
        <a href="/resume.pdf" download class="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">下载简历</a>
      </div>

      <button
        ref="menuButton"
        class="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 lg:hidden"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        aria-label="切换导航"
        @click="open = !open"
      ><span class="text-xl leading-none" aria-hidden="true">{{ open ? '×' : '☰' }}</span></button>
    </nav>

    <div id="mobile-menu" v-if="open" class="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
      <div class="mx-auto grid max-w-7xl grid-cols-2 gap-2">
        <a v-for="item in navItems" :key="item.href" :href="item.href" class="rounded-lg bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700" @click="closeMenu">{{ item.label }}</a>
        <a href="#contact" class="rounded-lg bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700" @click="closeMenu">联系我</a>
        <a href="/resume.pdf" download class="rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white">下载简历</a>
      </div>
    </div>

    <div class="absolute inset-x-0 bottom-0 h-0.5 bg-slate-100" aria-hidden="true">
      <div class="h-full bg-blue-600 transition-[width] duration-150" :style="{ width: `${progress}%` }"></div>
    </div>
  </header>
</template>
