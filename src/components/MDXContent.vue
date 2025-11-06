<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  content: {
    type: String,
    required: true
  }
})

// Simple text processing with better spacing
const processedContent = computed(() => {
  if (!props.content) return ''
  
  let content = props.content
  
  // Split into lines
  const lines = content.split('\n')
  let html = ''
  let inList = false
  
  lines.forEach((line, index) => {
    const trimmed = line.trim()
    
    if (!trimmed) {
      // Only add spacing between different content blocks
      if (index > 0 && lines[index - 1]?.trim()) {
        html += '<div class="mb-4"></div>'
      }
      return
    }
    
    // Headers
    if (trimmed.startsWith('## ')) {
      if (inList) {
        html += '</ol>'
        inList = false
      }
      
      const text = trimmed.replace('## ', '')
      const idMatch = text.match(/\{#([^}]+)\}$/)
      let id, cleanText
      
      if (idMatch) {
        id = idMatch[1]
        cleanText = text.replace(/\s*\{#[^}]+\}$/, '')
      } else {
        cleanText = text
        id = cleanText.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      }
      
      html += `<h2 id="${id}" data-scrollspy-target class="text-2xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">${cleanText}</h2>`
    }
    else if (trimmed.startsWith('### ')) {
      if (inList) {
        html += '</ol>'
        inList = false
      }
      
      const text = trimmed.replace('### ', '')
      const idMatch = text.match(/\{#([^}]+)\}$/)
      let id, cleanText
      
      if (idMatch) {
        id = idMatch[1]
        cleanText = text.replace(/\s*\{#[^}]+\}$/, '')
      } else {
        cleanText = text
        id = cleanText.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      }
      
      html += `<h3 id="${id}" data-scrollspy-target class="text-xl font-bold text-gray-900 mt-6 mb-3">${cleanText}</h3>`
    }
    // Blockquotes
    else if (trimmed.startsWith('> ')) {
      if (inList) {
        html += '</ol>'
        inList = false
      }
      html += `<blockquote class="border-l-4 border-blue-200 pl-4 my-4 italic text-gray-700 bg-blue-50 py-3 rounded-r"><p class="mb-0">${trimmed.replace('> ', '')}</p></blockquote>`
    }
    // Images
    else if (trimmed.startsWith('![')) {
      if (inList) {
        html += '</ol>';
        inList = false;
      }
      const match = trimmed.match(/!\[(.*)\]\((.*)\)/);
      if (match) {
        const alt = match[1];
        const src = match[2];
        html += `<img src="${src}" alt="${alt}" class="w-full rounded-lg my-4 shadow">`;
      }
    }
    // Ordered lists
    else if (/^\d+\.\s/.test(trimmed)) {
      if (!inList) {
        html += '<ol class="list-decimal list-inside space-y-2 my-4">'
        inList = true
      }
      
      let listContent = trimmed.replace(/^\d+\.\s/, '')
      // Process inline formatting in list items
      listContent = listContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      listContent = listContent.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-500 hover:text-blue-600">$1</a>')
      
      html += `<li class="text-gray-700">${listContent}</li>`
    }
    // Regular paragraphs
    else {
      if (inList) {
        html += '</ol>'
        inList = false
      }
      
      // Process inline formatting
      let processed = trimmed
      
      // Bold text
      processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      
      // Links
      processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-500 hover:text-blue-600 font-medium">$1</a>')
      
      html += `<p class="text-gray-700 leading-relaxed mb-4">${processed}</p>`
    }
  })
  
  // Close any open lists
  if (inList) {
    html += '</ol>'
  }
  
  return html
})
</script>

<template>
  <div v-html="processedContent" />
</template>