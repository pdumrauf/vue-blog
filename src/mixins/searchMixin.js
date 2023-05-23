//repetitive pieces, import them to components needed

export default {
  computed: {
    filteredBlog() {
      return this.blogs.filter(blog => {
        return blog.title.includes(this.search)
      })
    }
  },
}