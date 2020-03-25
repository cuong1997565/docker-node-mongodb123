const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
            message: 'Handling Get request to /orders'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
            message: 'Handling Post request to /orders'
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