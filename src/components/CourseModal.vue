<template>
  <b-modal
    :visible="course !== null"
    :title="course?.title"
    @close="$emit('close')"
    ok-only
    ok-title="Cerrar"
  >
    <div v-if="course">
      <p><strong>Descripción:</strong> {{ course.description }}</p>
      <p><strong>Recomendaciones:</strong> {{ course.recommendations }}</p>
      <b-button variant="primary" @click="$emit('close'); $emit('open-form')">
        Inscríbete
      </b-button>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'CourseModal',
  props: {
    course: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
p {
  margin-bottom: 15px;
}
</style>
