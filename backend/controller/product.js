const Product = require('../model/product');

const CreateProduct = {
    
    createProduct(req,res){
        const { _id, Name, Typedrink, Category, Price, Pathimg, Infos, Amount } = req.body;
        const product = new Product({ _id, Name, Typedrink, Category, Price, Pathimg, Infos, Amount});
        
        product.save((err, product) => {
            if(err){
               return res.status(500).send({message: 'erro'})
            }
            res.send(product);
        });
    },

    async ListProduct(req, res){
       try {
          const list = await Product.find({});
          return res.send(list);
       } catch (err) {
           return res.status(500).send({message: 'falha ao listar'})
       }
    },

    async DeleteProduct(req,res) {
        try {
            await Product.findByIdAndRemove( req.params.id );
            res.send('Deletado com sucesso');
        } catch (error) {
           res.status(500).send({ message: 'Id inválido'});
        }
    },

    async ShowProduct(req, res){
        try {
           const list = await Product.findById(req.params.id);
           return res.send(list);
        } catch (err) {
            return res.status(500).send({message: 'falha ao listar'})
        }
     },    
}
// 5fbaf0ef669158385852cb92
module.exports = CreateProduct;