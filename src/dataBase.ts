import { CATEGORIAS, Product, Purchase, User } from "./types";

export const baseUser: User[] = [
    {
        id: "1",
        email: "chay@email.com",
        password: "123456"
    },
    {
        id: "2",
        email: "chayy@email.com",
        password: "123457"
    },
    {
        id: "3",
        email: "cchay@email.com",
        password: "123458"
    },
]


export const baseProduct: Product[] = [
    {
        id: "1",
        name: "bolsa",
        price: 6,
        category: CATEGORIAS.ACCESSORIES
    },
    {
        id: "2",
        name: "blusa",
        price: 10,
        category: CATEGORIAS.CLOTHES_AND_SHOES
    },
    {
        id: "3",
        name: "celular",
        price: 50,
        category: CATEGORIAS.ELECTRONICS
    },
]

export const basePurchase: Purchase[] = [
    {
        userId: "1",
        productId: "1",
        quantity: 2,
        totalPrice: 12
    },
    {
        userId: "2",
        productId: "2",
        quantity: 2,
        totalPrice: 20
    },
    {
        userId: "3",
        productId: "3",
        quantity: 2,
        totalPrice: 100
    },
]

export function getUsers(): User[] {
    return baseUser
}

export function getProduct(): Product[] {
    return baseProduct
}

export function getPurchase(): Purchase[] {
    return basePurchase
}

export function createUser(id: string, email: string, password: string): void {
    const newUser: User = {
        id,
        email,
        password
    }

    baseUser.push(newUser)

    console.log("Usuário cadastrado com sucesso!")
}


export function getUserId(id: string): User[] {

    return baseUser.filter((user) => {
        return user.id === id
    })
}

export function createProduct(id: string, name: string, price: number, category: CATEGORIAS): void {
    const newProduct: Product = {
        id,
        name,
        price,
        category
    }

    baseProduct.push(newProduct)

    console.log("Produto cadastrado com sucesso!")
}

export function getProductId(id: string): Product[] {

    return baseProduct.filter((product) => {
        return product.id === id
    })
}

export function getProductName(name: string): Product[] {

    return baseProduct.filter((product) => {
        return product.name.toLowerCase().includes(name.toLowerCase())
    })
}


export function createPurchase(userId: string, productId: string, quantity: number, totalPrice: number): void {
    const newPurchase: Purchase = {
        userId,
        productId,
        quantity,
        totalPrice
    }

    basePurchase.push(newPurchase)

    console.log("Compra cadastrada com sucesso!")
}

export function getPurchasetId(id: string): Purchase[] {

    return basePurchase.filter((product) => {

        return product.userId === id;
    })
}
