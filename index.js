const baseUrl = "http://localhost:49687/api/books"

Vue.createApp({
    data() {
        return {
            books: [],
            title: null
        }
    },
    async created() { // life cycle method. Called when browser reloads page
        this.getAll(baseUrl)
    },
    methods: {
        async getAll(url) {
            try {
                const response = await axios.get(url)
                this.books = await response.data
                console.log(this.books)
            } catch (ex) {
                alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
            }
        },
        sortById() {
            // https://www.w3schools.com/js/js_array_sort.asp
            this.books.sort((book1, book2) => book1.id - book2.id)
        },
        sortByTitle() {
            this.books.sort((book1, book2) => book1.title.localeCompare(book2.title))
        },
        sortByPriceAscending() {
            this.books.sort((book1, book2) => book1.price - book2.price)
        },
        sortByPriceDescending() {
            this.books.sort((book1, book2) => book2.price - book1.price)
        },
        filterByTitle(title) {
            console.log("Title: " + title)
            this.books = this.books.filter(b => b.title.includes(title))
            console.log("Books: " + this.books)
        }
    }
}).mount("#app")