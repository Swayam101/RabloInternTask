const router=require('express').Router()

const {postAddProduct,getFilteredProducts,getAllProducts,getFeaturedProducts,postUpdateProduct,postDeleteProduct}=require('../controllers/products.js')


router.post('/add-product',postAddProduct)
router.post('/update-product',postUpdateProduct)
router.post('/delete-product',postDeleteProduct)

router.get('/all-products',getAllProducts)
router.get('/featured-products',getFeaturedProducts)
router.get('/product-filters',getFilteredProducts)


module.exports=router