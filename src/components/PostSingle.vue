<script setup>
import { onMounted, onUnmounted, computed, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useContent } from '~/composables/useContent'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'

const DEBUG = true

function logDebug(...args) {
  if (DEBUG) console.debug('[PostSingle]', ...args)
}
function logWarn(...args) {
  if (DEBUG) console.warn('[PostSingle]', ...args)
}

const route = useRoute()
const router = useRouter()
const { post, loading, error, fetchPostBySlug, formatDate } = useContent()

const slug = computed(() => route.params.slug || route.query.slug)

// State untuk ScrollSpy
let scrollspyLinks = []
let scrollspyTargets = []
let lastActiveId = null
let rafId = null // ID untuk requestAnimationFrame

// [FIX] Handler klik TOC dipindahkan dari inline untuk stabilitas
function handleTocClick(e, heading) {
  e.preventDefault()
  logDebug('TOC click:', { heading })

  if (typeof document === 'undefined' || typeof window === 'undefined') {
    logWarn('Bukan lingkungan browser; skip smooth scroll')
    return
  }

  const el = document.getElementById(heading.id)
  if (!el) {
    logWarn('Target elemen tidak ditemukan untuk id:', heading.id)
    return
  }

  const offset = 96 // Sesuaikan dengan tinggi header/navbar
  const y = el.getBoundingClientRect().top + window.scrollY - offset
  
  logDebug('Scrolling ke:', { id: heading.id, y, offset })
  window.scrollTo({ top: y, behavior: 'smooth' })
}

// Inisialisasi ScrollSpy
function initializeSimpleScrollSpy() {
  if (typeof document === 'undefined') return

  scrollspyLinks = Array.from(document.querySelectorAll('[data-scrollspy-link]'))
  scrollspyTargets = Array.from(document.querySelectorAll('[data-scrollspy-target]'))

  logDebug('ScrollSpy init:', {
    links: scrollspyLinks.length,
    targets: scrollspyTargets.length,
  })

  if (scrollspyLinks.length > 0 && scrollspyTargets.length > 0) {
    window.addEventListener('scroll', onScrollPassive, { passive: true })
    handleScrollSpy(true) // Panggil sekali saat inisialisasi
  } else {
    logWarn(
      'ScrollSpy tidak diinisialisasi. Periksa apakah MarkdownRenderer sudah menambahkan `data-scrollspy-target`.'
    )
  }
}

// [FIX] Throttle event scroll menggunakan requestAnimationFrame untuk performa
function onScrollPassive() {
  if (rafId) return
  rafId = requestAnimationFrame(() => {
    handleScrollSpy()
    rafId = null
  })
}

function handleScrollSpy(initial = false) {
  if (typeof window === 'undefined') return
  
  const offset = 120
  const scrollPosition = window.scrollY + offset
  let newActiveId = null

  // Cari target yang sedang aktif
  for (const target of scrollspyTargets) {
    const targetTop = target.offsetTop
    const targetBottom = targetTop + target.offsetHeight
    if (scrollPosition >= targetTop && scrollPosition < targetBottom) {
      newActiveId = target.id
      break
    }
  }

  // Update class hanya jika ID aktif berubah
  if (newActiveId !== lastActiveId) {
    logDebug('Active section berubah:', { from: lastActiveId, to: newActiveId })
    
    scrollspyLinks.forEach(link => {
      const isActive = link.hash === `#${newActiveId}`
      link.classList.toggle('text-blue-600', isActive)
      link.classList.toggle('font-semibold', isActive)
      link.classList.toggle('text-gray-700', !isActive)
    })
    
    lastActiveId = newActiveId
  }
}

onMounted(async () => {
  if (slug.value) {
    logDebug('Mengambil post dengan slug:', slug.value)
    await fetchPostBySlug(slug.value)

    if (error.value) {
      logWarn('Gagal mengambil post, redirect ke 404:', error.value)
      router.push('/404')
      return
    }

    // [FIX] Tunggu DOM benar-benar siap setelah render
    await nextTick()
    await nextTick() // Double nextTick untuk keamanan
    initializeSimpleScrollSpy()
  } else {
    logWarn('Slug tidak ditemukan di route')
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', onScrollPassive)
    if (rafId) cancelAnimationFrame(rafId)
  }
  logDebug('Listener scroll dihapus')
})

// [FIX] Generate TOC dengan logika yang SAMA PERSIS seperti MarkdownRenderer
const tableOfContents = computed(() => {
  if (!post.value?.body) {
    logDebug('TOC: body post kosong')
    return []
  }

  const headingRegex = /^(#{2,3})\s+(.+?)$/gm
  const headings = []

  const createSlug = (text) =>
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')

  const body = post.value.body
  let match
  while ((match = headingRegex.exec(body)) !== null) {
    const level = match[1].length
    const rawText = match[2].trim()
    const customIdMatch = rawText.match(/\{#([^}]+)\}\s*$/)
    let cleanText = rawText
    let id

    if (customIdMatch) {
      id = customIdMatch[1]
      cleanText = rawText.replace(/\s*\{#[^}]+\}\s*$/, '')
    } else {
      id = createSlug(rawText)
    }
    
    headings.push({ level, text: cleanText, id })
  }

  logDebug('TOC digenerate:', { count: headings.length, headings });
  return headings
})
</script>

<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        
        <div v-if="loading" class="text-center py-20">Loading...</div>
        <div v-else-if="error" class="text-center py-20 text-red-500">{{ error }}</div>

        <div v-else-if="post" class="flex flex-col lg:flex-row lg:gap-8">
          <!-- Konten Artikel -->
          <div class="flex-1 max-w-3xl">
            <article>
              <header class="pb-8">
                <div class="mb-6">
                  <!-- <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600" to="/blog">
                    &lt;- Back To Blog
                  </router-link> -->
                </div>
                <h1 class="text-4xl md:text-5xl font-bold mb-5 text-gray-900">{{ post.title }}</h1>
                <div class="flex items-center gap-3 mb-4 text-sm text-gray-600">
                  <span class="font-medium text-gray-900">{{ post.author }}</span>
                  <span>·</span>
                  <time :datetime="post.date">{{ formatDate(post.date) }}</time>
                  <span>·</span>
                  <span>{{ post.readingTime }} min read</span>
                </div>
                <figure v-if="post.image" class="my-8">
                  <img :src="post.image" :alt="post.title" class="w-full rounded-lg shadow-lg" loading="lazy" />
                </figure>
              </header>

              <div class="prose max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-blue-500 hover:prose-a:underline prose-headings:scroll-mt-24">
                <MarkdownRenderer :content="post.body" :debug="DEBUG" />
              </div>
            </article>
          </div>

          <!-- Sidebar TOC -->
          <aside v-if="tableOfContents.length > 0" class="hidden lg:block w-70 shrink-0 mt-12 lg:mt-0">
            <div class="sticky top-24">
              <div class="p-5 border-l border-r">
                <div class="font-bold text-gray-900 mb-3">On this page</div>
                <ul class="text-sm space-y-2">
                  <li v-for="heading in tableOfContents" :key="heading.id">
                    <!-- [FIX] Menggunakan handler terpisah @click -->
                    <a
                      data-scrollspy-link
                      :data-toc-id="heading.id"
                      class="text-gray-700 hover:text-gray-900 transition-colors block py-1 px-2 rounded hover:bg-gray-100"
                      :href="`#${heading.id}`"
                      :class="{ 'ml-4': heading.level === 3 }"
                      @click="handleTocClick($event, heading)"
                    >
                      {{ heading.text }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>
