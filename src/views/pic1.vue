<template>

    <div class="photo-upload">
      <div class="file-upload-form">
        <input
          type="file"
          @change="previewThumbnail"
          name="photo-upload-button"
          id="photo-upload-button"
          accept="image/*"
          class="input-file"
        />
        <label for="photo-upload-button">Carregue sua foto</label>
      </div>
      <div class="image-preview" v-if="imageData.length > 0">
        <img :src="imageData" class="image-preview__img" />
      </div>
    </div>
</template>

<script>

export default {
  name: 'PhotoUpload',
  components: {
},
  data() {
    return {
      imageData: '',
    };
  },
  methods: {
    previewThumbnail(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>

<style scoped>

.photo-upload {
  height: auto;
  margin: 20px 0;
  position: relative;
  text-align: center;
  width: 100%;
}
.input-file {
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 0.1px;
  z-index: -1;
}
.input-file:focus + label {
  border-color: #d3007f;
}
.input-file + label {
  background: transparent;
  border: 2px solid #bc0087;
  border-radius: 50%;
  color: #5b5b5b;
  display: inline-block;
  font-size: 12pt;
  font-weight: 500;
  height: 200px;
  line-height: 200px;
  text-align: center;
  width: 200px;
}
.input-file + label:hover,
.input-file + label:focus {
  border-color: #bc0087;
  cursor: pointer;
}
.image-preview {
  border-radius: 50%;
  height: 200px;
  left: -4px;
  margin: 0 auto;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 200px;
}
.image-preview__img {
  border: 6px solid #bc0087;
  border-radius: 50%;
  height: 200px;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center;
     object-position: center;
  width: 200px;
}

.image-preview__img:hover {
  border: #00ff00; /* Cambiamos solo el color del borde a verde al pasar el ratón sobre la imagen */
}
</style>
