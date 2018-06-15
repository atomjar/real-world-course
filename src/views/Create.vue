<template>
  <div>
    <h1>Create an event</h1>
    <CreateEventForm/>
  </div>
</template>

<script>
import CreateEventForm from '@/components/events/CreateEventForm.vue'

export default {
  name: 'Create',
  components: {
    CreateEventForm
  }
}
</script>
