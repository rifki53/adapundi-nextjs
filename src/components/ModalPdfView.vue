<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

const modalOpen = ref(false);

const props = defineProps({
  pdfFile: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
});

const openPdfModal = () => {
  modalOpen.value = true;
};

// Expose the openPdfModal function to parent components
defineExpose({ openPdfModal });
</script>

<template>
  <!-- Modal -->
  <TransitionRoot :show="modalOpen" as="template">
    <Dialog @close="modalOpen = false">
      <!-- Modal backdrop -->
      <TransitionChild
        className="fixed inset-0 z-[99999] bg-black/70 transition-opacity"
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-out duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        aria-hidden="true"
      />

      <!-- Modal dialog -->
      <TransitionChild
        className="fixed inset-0 z-[99999] flex px-4 py-6 sm:px-6"
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 scale-75"
        enterTo="opacity-100 scale-100"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-75"
      >
        <div class="mx-auto flex h-full max-w-6xl items-center w-full">
          <DialogPanel
            class="relative max-h-[90vh] w-full overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <!-- Header with title -->
            <div class="bg-custom-green3 px-6 py-4 flex justify-between items-center">
              <span class="text-sm font-medium font-inter text-gray-900">
                {{ title }}
              </span>
              <!-- Close button -->
              <button 
                @click="modalOpen = false" 
                class="text-gray-700 hover:text-gray-900 focus:outline-none"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <!-- PDF Viewer -->
            <iframe 
              :src="`${pdfFile}#toolbar=0&navpanes=0&scrollbar=0`" 
              class="w-full h-[80vh]"
              frameborder="0"
              title="PDF Viewer"
            ></iframe>
          </DialogPanel>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>
