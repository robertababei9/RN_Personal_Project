
export const categoriesMockup = [
    {
        title: "Pizza",
        id: "sectionId_123na1230#mrf9",
        data: [
            {
                id: "pizza_1",
                name: "Pizza 1",
                description: "Description for this product",
                price: 24.5
            },
            {
                id: "pizza_2",
                name: "Pizza 2",
                description: "Description for this product, but with a longer description",
                price: 21.99
            },
            {
                id: "pizza_3",
                name: "Pizza 3",
                description: "Description for this product",
                price: 45.5
            },
            {
                id: "pizza_4",
                name: "Pizza 4",
                description: "Description for this product",
                price: 37
            },
        ],
    },
    {
        title: "Hamburger",
        id: "sectionId_456na1230#mrf9",
        data: [
            {
                id: "burger_1",
                name: "Burger 1",
                description: "Description for this product",
                price: 32.2
            },
            {
                id: "burger_2",
                name: "Burger 2",
                description: "Description for this product",
                price: 24.5
            },
            {
                id: "burger_3",
                name: "Burger 3",
                description: "Description for this product",
                price: 24.5
            },
            {
                id: "burger_4",
                name: "Burger 4",
                description: "Description for this product",
                price: 24.5
            },
        ],
    },
    {
        title: "Soup",
        id: "sectionId_928na1230#mrf9",
        data: [
            {
                id: "soup_1",
                name: "Soup 1",
                description: "Description for this product",
                price: 24.5
            },
            {
                id: "soup_2",
                name: "Soup 2",
                description: "Description for this product",
                price: 24.5
            },
            {
                id: "soup_3",
                name: "Soup 3",
                description: "Description for this product",
                price: 24.5
            },
        ],
    },
    {
        title: "Drinks",
        id: "sectionId_166na1230#mrf9",
        data: [
            {
                id: "drink_1",
                name: "Drink 1",
                description: "Description for this product",
                price: 24.5
            },
            {
                id: "drink_2",
                name: "Pizza 2",
                description: "Description for this product",
                price: 24.5
            },
            {
                id: "drink_3",
                name: "Pizza 3",
                description: "Description for this product",
                price: 24.5
            },
            {
                id: "drink_4",
                name: "Pizza 4",
                description: "Description for this product",
                price: 24.5
            },
        ],
    },
    {
        title: "Salads",
        id: "sectionId_177na1230#mrf9",
        data: [
            {
                id: "salad_1",
                name: "Salad 1",
                description: "Description for this product",
                price: 24.5
            },
            {
                id: "salad_2",
                name: "Salad 2",
                description: "Description for this product",
                price: 24.5
            },
        ],
    },
    
]

let mokupCategories = () => {
    let result = [];
    for (let i = 1; i < 10; i++) {
        const obj = {
            id: "id_" + i,
            name: "Category " + i
        }
        result.push(obj);
    }

    return result;
}

export const categories2 = mokupCategories();

const Config = {
    categoriesMockup,
    categories2
};

export default Config;