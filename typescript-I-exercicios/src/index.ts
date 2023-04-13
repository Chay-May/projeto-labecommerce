import { baseProduct, basePurchase, baseUser, createProduct, createPurchase, createUser, getProduct, getProductId, getProductName, getPurchase, getPurchasetId, getUserId, getUsers } from "./dataBase";
import { CATEGORIAS, Product, Purchase, User } from "./types";

//além de importar o express, também precisamos importar os objetos Request
//e Response, sempre entre chaves {} 👇🏽
import express, { Request, Response } from 'express'

//import do CORS 👇🏽
import cors from 'cors';

//criação do servidor express 👇🏽
const app = express();

//configuração do middleware que garante que nossas respostas estejam sempre
//no formato json 👇🏽
app.use(express.json());

//configuração do middleware que habilita o CORS 👇🏽
app.use(cors());

// console.log(baseUser)
// console.log(baseProduct)
// console.log(basePurchase)


// console.log(getUsers())
// console.log(getProduct())
// console.log(getPurchase())

// createUser("chay", "chay@gamail.com", "12345") //chamada de função está correta??

// createProduct("4", "chinelo", 22.5, CATEGORIAS.CLOTHES_AND_SHOES)

//createPurchase("5", "2", 3, 55)

// console.table(baseProduct)

// console.table(baseUser)

//console.table(basePurchase)

// console.log(getUserId("2"))

// console.log(getProductId("1"))

// console.log(getProductName("bolsa"))

// console.log(getPurchasetId("1"))

//colocando nosso servidor para escutar a porta 3003 da nossa máquina (primeiro 
//parâmetro da função listen)
//a função de callback (segundo parâmetro da função listen) serve para sabermos 
//que o servidor está de pé, através do console.log que imprimirá a mensagem no 
//terminal 👇🏽

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

app.get('/ping', (req: Request, res: Response) => {
    res.send("Pong!")
})

//GetAllUsers
app.get('/users', (req: Request, res: Response) => {
    res.send(baseUser)
})

//GetAllProduct
app.get('/products', (req: Request, res: Response) => {
    res.send(baseProduct)
})

// app.get('/product/search', getProductName)
//OU
app.get('product/search', (req: Request, res: Response) => {

    const q = req.query.name as string

    const filterProduct = baseProduct.filter((product) => {
        return product.name.includes(q)
    })

    res.status(200).send(q ? filterProduct : baseProduct)
})

//CreateUsers
app.post('/users', (req: Request, res: Response) => {

    const { id, email, password } = req.body

    const newUser: User = {
        id,
        email,
        password
    }

    baseUser.push(newUser)

    res.status(200).send("Usuário cadastrado com sucesso!")
})

//CreateProducts
app.post('/products', (req: Request, res: Response)=>{

    const {id, name, price, category} = req.body

    const newProduct: Product = {
        id,
        name,
        price,
        category
    }

    baseProduct.push(newProduct)

    res.status(200).send("Produto cadastrado com sucesso!")
})

//CreatePurchase
app.post('/purchase', (req: Request, res: Response)=>{

    const {userId, productId, quantity, totalPrice} = req.body

    const newPurchase: Purchase = {
        userId,
        productId,
        quantity,
        totalPrice
    }

    basePurchase.push(newPurchase)

    res.status(200).send("Compra cadastrada com sucesso!")
})