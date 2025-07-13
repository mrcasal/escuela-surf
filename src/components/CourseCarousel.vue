<template>
  <b-carousel
    id="course-carousel"
    :interval="4000"
    controls
    indicators
    background="#ababab"
    style="text-shadow: 1px 1px 2px #333;"
  >
    <b-carousel-slide v-for="course in courses" :key="course.id">
      <template #img>
        <div class="course-card" @click="$emit('open-modal', course)">
          <img :src="course.image" :alt="course.title" class="course-image" />
          <div class="course-info">
            <h3>{{ course.title }}</h3>
            <p><strong>Nivel:</strong> {{ course.level }}</p>
            <p><strong>Precio:</strong> {{ course.price }}</p>
            <p><strong>Fechas:</strong> {{ course.dates }}</p>
            <p><strong>Playas:</strong> {{ course.beaches }}</p>
            <b-button variant="primary" @click.stop="$emit('open-form')">
              Inscríbete
            </b-button>
          </div>
        </div>
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name: 'CourseCarousel',
  props: {
    courses: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.course-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  cursor: pointer;
}
.course-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.course-info {
  padding: 20px;
  text-align: left;
}
.course-info h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.course-info p {
  margin: 5px 0;
}
</style>
