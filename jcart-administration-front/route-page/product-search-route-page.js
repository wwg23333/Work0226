const ProductSearchRoutePage = {
    template: ``,
    data() {
        return {
            pageInfo: '',
            pageNum: 1
        }
    },
    mounted() {
        console.log('view mounted');
        this.searchProduct();
    },
    methods: {
        handlePageChange(val) {
            console.log('page change');
            this.pageNum = val;
            this.searchProduct();
        },
        searchProduct() {
            axios.get('/product/search', {
                params: {
                    pageNum: this.pageNum
                }
            })
                .then(function (response) {
                    console.log(response);
                    app.pageInfo = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}