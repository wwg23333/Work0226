var app = new Vue({
    el: '#app',
    data: {
        orderId: '',
        customerId: '',
        customerName: '',
        status: '',
        totalPrice: '',
        rewordPoints: '',
        createTimestamp: '',
        updateTimestamp: '',
        shipMethod: '',
        shipAddress: '',
        shipPrice: '',
        payMethod: '',
        invoiceAddress: '',
        invoicePrice: '',
        comment: '',
        orderProducts: [],
        orderHistories: [],
        orderStatuses: [
            { value: 0, label: '待处理' },
            { value: 1, label: '处理中' },
            { value: 2, label: '待发货' },
            { value: 3, label: '已发货' },
            { value: 4, label: '待签收' },
            { value: 5, label: '已签收' }
        ]},
    mounted() {
        console.log('view mounted');

        var url = new URL(location.href);
        this.orderId = url.searchParams.get("orderId");
        if (!this.orderId) {
            alert('orderId is null');
            return;
        }

        this.getOrderById();
    },
    methods: {
        getOrderById() {
            axios.get('/order/getById', {
                params: {
                    orderId: this.orderId
                }
            })
                .then(function (response) {
                    console.log(response);
                    var order = response.data;
                    app.customerId = order.customerId;
                    app.customerName = order.customerName;
                    app.status = order.status;
                    app.totalPrice = order.totalPrice;
                    app.rewordPoints = order.rewordPoints;
                    app.createTimestamp = order.createTimestamp;
                    app.updateTimestamp = order.updateTimestamp;
                    app.shipMethod = order.shipMethod;
                    app.shipAddress = order.shipAddress;
                    app.shipPrice = order.shipPrice;
                    app.payMethod = order.payMethod;
                    app.invoiceAddress = order.invoiceAddress;
                    app.invoicePrice = order.invoicePrice;
                    app.comment = order.comment;
                    app.orderProducts = order.orderProducts;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    }
})