import express from 'express'
import products from '../model/products.js'

const router = express.Router()

router.get('/api/products',(req, res) => {
    res.json(products)
})

router.post('/api/products',(req, res) => {
    const newProduct = req.body
    if(!newProduct.productName || !newProduct.price){
        res.status(400).json({msg:'product name and price is mandatory'})
    }
    products.push(newProduct)
    res.json(products)
})

//For updating, PUT or Patch
router.put('/api/products/:id',(req, res) => {
    const id = req.params.id
    const exists = products.some(product => product.productId === +id) //+ will convert from string to number
    if (exists){
        const productToBeUpdated = req.body
        products.forEach(product => {
            if(product.productId === productToBeUpdated.productId){
                product = Object.assign(product,productToBeUpdated)
                res.json({msg:`updated porduct ${product.productName}`})
            }
        })
    }
    else{
        res.status(400).json({msg:`product ${productId} not found`})
    }
    res.json(products)
})

router.delete('./api/products/:id',(req, res) => {
    const id = req.params.id
    const exists = products.some(product=> product.productId === +id)
    if(exists){
        // products = products.filter(product => product.productId !== +id)
        // res.json({msg:`deleted product ${id}`})
        res.status(200).json({products : products.filter(product => product.productId !== +id),
        msg:`Deleted Product ${id}`})
    }
    else{
        res.status(400).json({msg:`product ${id} does not exist`})
    }
})

export default router














