import { Product, Purchase, Users } from "./types";

export const baseUser: Users[]=[
    {
      id : "1",
      email: "chay@email.com",
      password: "123456"
    },
    {
      id : "2",
      email: "chayy@email.com",
      password: "123457"
    },
    {
        id : "3",
        email: "cchay@email.com",
        password: "123458"
      },
]


export  const baseProduct: Product[]=[
    {
        id : "1",
        name: "bolsa",
        price: 6,
        category: "CATEGORIAS.ACCESSORIES"
    },
    {
        id : "2",
        name: "blusa",
        price: 10,
        category: "CATEGORIAS.CLOTHES_AND_SHOES"
    },
    {
        id : "3",
        name: "celular",
        price: 50,
        category: "CATEGORIAS.ELECTRONICS"
    },
]

export const basePurchase: Purchase[]=[
    {
        userId : "1",
    productId: "1",
    quantity: 2,
    totalPrice: 12
    },
    {
        userId : "2",
    productId: "2",
    quantity: 2,
    totalPrice: 20
    },
    {
        userId : "3",
    productId: "3",
    quantity: 2,
    totalPrice: 100
    },
]