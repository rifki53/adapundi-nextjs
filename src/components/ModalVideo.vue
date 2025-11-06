<script setup>
import { ref, watch } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

const modalOpen = ref(false);
const videoRef = ref(null);

watch(videoRef, () => {
  videoRef.value?.play();
});

const props = defineProps({
  video: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    default: "Watch Video",
  },
  videoWidth: {
    type: Number,
    default: 1920,
  },
  videoHeight: {
    type: Number,
    default: 1080,
  },
});
</script>

<template>
  <div>
    <!-- Video Button -->
    <button
      @click="modalOpen = true"
      class="btn bg-white text-gray-800 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors"
    >
      <span class="text-gray-900 text-sm font-bold">
        {{ buttonText }}
      </span>
    </button>

    <!-- Modal -->
    <TransitionRoot :show="modalOpen" as="template">
      <Dialog :initialFocus="videoRef" @close="modalOpen = false">
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
          <div class="mx-auto flex h-full max-w-6xl items-center">
            <DialogPanel
              class="aspect-video max-h-full w-full overflow-hidden rounded-2xl bg-black shadow-2xl"
            >
              <video ref="videoRef" width="1920" height="1080" loop controls>
                <source
                  :src="props.video"
                  :width="props.videoWidth"
                  :height="props.videoHeight"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </DialogPanel>
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
