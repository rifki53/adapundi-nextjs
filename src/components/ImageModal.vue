<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

// Props untuk membuat komponen ini reusable
const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: "Tampilan gambar",
  },
  modalTitle: {
    type: String,
    required: true,
  },
});

const modalOpen = ref(false);

function openModal() {
  modalOpen.value = true;
}

function closeModal() {
  modalOpen.value = false;
}
</script>

<template>
  <div>
    <!-- Slot untuk trigger, agar bisa pakai elemen apa saja untuk membuka modal -->
    <div @click="openModal" class="cursor-pointer">
      <slot name="trigger"></slot>
    </div>

    <!-- Modal -->
    <TransitionRoot :show="modalOpen" as="template">
      <Dialog @close="closeModal" class="relative z-50">
        <!-- Backdrop -->
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/70" />
        </TransitionChild>

        <!-- Container untuk menengahkan modal -->
        <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
          <!-- Panel Modal -->
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-4xl transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all"
            >
              <!-- Header Modal -->
              <div
                class="flex items-center justify-between border-b border-gray-200 px-6 py-4"
              >
                <DialogTitle class="text-lg font-medium text-gray-900">
                  {{ props.modalTitle }}
                </DialogTitle>
                <button
                  @click="closeModal"
                  class="text-gray-400 hover:text-gray-600"
                  aria-label="Close modal"
                >
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Konten Gambar -->
              <div class="bg-gray-50 p-4">
                <img
                  :src="props.imgSrc"
                  :alt="props.altText"
                  class="h-auto w-full object-contain"
                />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
