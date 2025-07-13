<template>
  <div class="home">
    <h1>Escuela de Surf</h1>
    <CourseCarousel :courses="courses" @open-modal="openModal" @open-form="openForm" />
    <CourseModal
      v-if="selectedCourse"
      :course="selectedCourse"
      @close="selectedCourse = null"
    />
    <LeadForm
      v-if="showForm"
      @close="showForm = false"
    />
  </div>
</template>

<script>
import CourseCarousel from '../components/CourseCarousel.vue'
import CourseModal from '../components/CourseModal.vue'
import LeadForm from '../components/LeadForm.vue'

export default {
  name: 'Home',
  components: {
    CourseCarousel,
    CourseModal,
    LeadForm
  },
  data () {
    return {
      courses: [
        {
          id: 1,
          title: 'Curso de Iniciación al Surf para niños',
          level: 'Cook',
          price: '50€',
          dates: '15-20 Julio 2025',
          beaches: 'Bastiagueiro',
          image: '/img/course1.jpg',
          description: 'Diviértete y pierde el miedo a las olas',
          recommendations: 'Tienes que saber nadar.'
        },
        {
          id: 2,
          title: 'Curso de Iniciación al Surf',
          level: 'Principiante',
          price: '60€',
          dates: '15-20 Julio 2025',
          beaches: 'Caión',
          image: '/img/course2.jpg',
          description: 'Ponte de pie por primera vez',
          recommendations: 'Traer traje de neopreno y protector solar.'
        },
        {
          id: 3,
          title: 'Curso de Avanzado de Surf',
          level: 'Intermedio',
          price: '80€',
          dates: '15-20 Julio 2025',
          beaches: 'Razo',
          image: '/img/course3.jpg',
          description: 'Coger pared, hacer giros',
          recommendations: 'Traer traje de neopreno y protector solar.'
        },
        {
          id: 4,
          title: 'Curso de preparación para el Team',
          level: 'Intermedio/Avanzado',
          price: '50€',
          dates: '15-20 Julio 2025',
          beaches: 'Pantín',
          image: '/img/course4.jpg',
          description: 'Prep para el Pantín Classic',
          recommendations: 'Traer traje de neopreno y protector solar.'
        }
      ],
      selectedCourse: null,
      showForm: false
    }
  },
  methods: {
    openModal (course) {
      this.selectedCourse = course
    },
    openForm () {
      this.showForm = true
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}
</style>
