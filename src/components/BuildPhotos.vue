<template>
  <main>
    <div class="photos-container">
      <img :src="showPhoto.url" :alt="showPhoto.alt" />
      <div class="navigation">
        <div class="navigation-previous" @click="previous">PREV</div>
        <div class="navigation-next" @click="next">NEXT</div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    photos: {
      type: Array,
      default: Array,
      required: true,
    },
  },
  computed: {
    showPhoto() {
      return this.photos[this.photoIterator];
    },
  },
  data() {
    return {
      photoIterator: 0,
    };
  },
  methods: {
    next() {
      this.photoIterator++;
      if (this.photoIterator >= this.photos.length) {
        this.photoIterator = 0;
      }
    },
    previous() {
      this.photoIterator--;
      if (this.photoIterator < 0) {
        this.photoIterator = this.photos.length - 1;
      }
    },
  },
};
</script>
