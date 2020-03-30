const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
            message: 'Handling Get request to /orders'
    });
});

router.post('/', (req, res, next) => {
    var order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(200).json({
            message: 'Handling Post request to /orders',
            order: order
    });
});


router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'Order details',
        orderId: id
    });
});



router.delete('/:orderId',(req, res, next) => {
    res.status(200).json({
        message: 'Delete order!',
        orderId: req.params.orderId
    });
})


module.exports = router;