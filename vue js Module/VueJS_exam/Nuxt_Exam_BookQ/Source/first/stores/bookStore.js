import { defineStore } from "pinia";
export const useBookStore = defineStore('book', () => {
    const allData = ref([])
    const search = ref('')
    const updateData = ref({})
    const selectedSubject= ref([])
    const bookList = ref([
        {
            id: 'b1',
            name: 'calculus',
            description: 'calculus book description.',
            subjectId: 1
        },
        {
            id: 'b5',
            name: 'Software engineering',
            description: 'Software engineering book description.',
            subjectId: 4
        },
        {
            id: 'b2',
            name: 'compiler design',
            description: 'compiler design book description.',
            subjectId: 4
        },
        {
            id: 'b2',
            name: 'Chemistry',
            description: 'Chemistry  book description.',
            subjectId: 3
        },
        {
            id: 'b4',
            name: 'Mathematics 2',
            description: 'mathematics book description.',
            subjectId: 1
        },
        {
            id: 'b3',
            name: 'Biology',
            description: 'Biology book description.',
            subjectId: 2
        }
    ])
    const newBookList = ref(bookList.value)

    const getData = async (url) => {
        const { data: loginData } = await useFetch(url)
        allData.value = loginData
    }

    watchEffect(() => {
        newBookList.value.sort((a, b) => {
            let x = a.name.toUpperCase()
            let y = b.name.toUpperCase()
            return (x == y) ? 0 : (x > y) ? 1 : -1
        })
    })
    const filteredData = computed(() => {
        if (search.value.length > 0) {
            return newBookList.value.filter((data) => data.name.toUpperCase().includes(search.value.toUpperCase()))
        }
        return newBookList.value
    })

    return { getData, allData, bookList, search, newBookList, updateData, selectedSubject, filteredData }
})