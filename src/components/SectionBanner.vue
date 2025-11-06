<script setup>
import { ref, onMounted } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";
import ModalLogo from "@/images/logo/modal-logo.png";

const modalOpen = ref(false);

onMounted(() => {
  const hasModalBeenShown = localStorage.getItem("modalBannerShown");
  if (!hasModalBeenShown) {
    modalOpen.value = true;
  }
});

const closeModal = () => {
  modalOpen.value = false;
  localStorage.setItem("modalBannerShown", "true");
};
</script>

<template>
  <TransitionRoot :show="modalOpen" as="template">
    <Dialog @close="closeModal">
      <!-- Modal backdrop code remains unchanged -->
      <TransitionChild
        className="fixed inset-0 z-[99999] bg-black/70 transition-opacity"
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-out duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        aria-hidden="true"
        @click="closeModal"
      />
      <!-- End: Modal backdrop -->

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
        <div class="mx-auto flex h-full max-w-2xl items-center">
          <DialogPanel
            class="w-full overflow-hidden rounded-2xl bg-white shadow-2xl relative"
          >
            <!-- Close button positioned absolutely with 2.5rem size -->
            <button
              @click="closeModal"
              class="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-800 hover:text-gray-900 transition-colors"
              aria-label="Close"
            >
              <i class="pi pi-times text-gray-800 text-[2rem]"></i>
            </button>

            <!-- Logo at the top -->
            <div class="flex justify-center">
              <img
                :src="ModalLogo"
                alt="Adapundi"
                class="w-full"
                loading="lazy"
              />
            </div>
          </DialogPanel>
        </div>
      </TransitionChild>
      <!-- End: Modal dialog -->
    </Dialog>
  </TransitionRoot>
</template>
