<script setup>
import { computed } from 'vue';
import { marked } from 'marked';

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
  debug: {
    type: Boolean,
    default: false,
  }
});

function logDebug(...args) {
  if (props.debug) console.debug('[MarkdownRenderer]', ...args);
}

// Fungsi untuk membuat slug/ID dari teks. SAMA seperti di PostSingle.vue
const createSlug = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');

const renderedHtml = computed(() => {
  if (!props.content) return '';

  const renderer = new marked.Renderer();

  // --- [PERBAIKAN KUNCI] ---
  // Timpa fungsi renderer untuk heading.
  // Fungsi ini menerima satu argumen 'token' objek, bukan (text, level).
  renderer.heading = function (token) {
    // Ekstrak level dan teks dari objek token
    const level = token.depth; // 'depth' adalah level heading (1, 2, 3, dst.)
    const text = token.text;   // 'text' adalah teks bersih dari heading

    // Hanya h2 dan h3 yang perlu ID dan atribut untuk TOC & ScrollSpy
    if (level === 2 || level === 3) {
      const id = createSlug(text);
      logDebug('Render H2/H3 dengan ID:', { level, id, text });
      return `<h${level} id="${id}" data-scrollspy-target>${text}</h${level}>`;
    }

    // Untuk semua level heading lainnya (h1, h4, dst.), render seperti biasa.
    logDebug('Render heading lain (non-TOC):', { level, text });
    return `<h${level}>${text}</h${level}>`;
  };

  logDebug('Parsing markdown dengan renderer yang benar...');
  
  // Panggil marked.parse dengan opsi renderer secara eksplisit
  return marked.parse(props.content, {
    renderer: renderer,
    gfm: true,
    breaks: true,
  });
});
</script>

<template>
  <div v-html="renderedHtml"></div>
</template>
