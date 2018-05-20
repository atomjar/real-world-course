<template>
  <div>
    <input v-model="search" @focus="focused = true" @keyup.enter="emitCategory" type="text" :placeholder="placeholder">

    <div>
      <div class="cat" 
           v-if="focused" 
           v-for="cat in filteredCategories"
           @click="clickCategory(cat)">
        <span>{{ cat }}</span><span style="float: right;">press enter or select</span>
      </div>

      <p v-if="errorMessage && search">{{ errorMessage }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    placeholder: String
  },
  data() {
    return {
      search: '',
      categories: [],
      focused: false,
      errorMessage: ''
    }
  },
  methods: {
    clickCategory(cat) {
      this.search = cat
      this.emitCategory(cat)
    },
    emitCategory() {
      this.$emit('category-emitted', this.search)
      // this.search = ''
    }
  },
  computed: {
    filteredCategories() {
      this.errorMessage = ''

      var mappedCats = this.categories.map(cat => {
        return cat.includes(this.search)
      })

      if (mappedCats.includes(true)) {
        return this.categories.filter(cat => {
          return cat.match(this.search)
        })
      } else {
        this.errorMessage = 'No categories match'
      }
    }
  },
  mounted() {
    this.categories = this.$store.state.categories
  }
}
</script>

<style scoped>
.cat {
  padding: 5px 10px;
  border: solid 2px #16c0b0;
  height: 30px;
}
</style>
