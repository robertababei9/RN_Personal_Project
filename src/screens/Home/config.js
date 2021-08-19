
export const categories = [
    {
        title: "Pizza",
        data: [
            {
                name: "Pizza 1",
                description: "Description for this product"
            },
            {
                name: "Pizza 2",
                description: "Description for this product, but with a longer description"
            },
            {
                name: "Pizza 3",
                description: "Description for this product"
            },
            {
                name: "Pizza 4",
                description: "Description for this product"
            },
        ],
    },
    {
        title: "Hamburger",
        data: [
            {
                name: "Burger 1",
                description: "Description for this product"
            },
            {
                name: "Burger 2",
                description: "Description for this product"
            },
            {
                name: "Burger 3",
                description: "Description for this product"
            },
            {
                name: "Burger 4",
                description: "Description for this product"
            },
        ],
    },
    {
        title: "Soup",
        data: [
            {
                name: "Soup 1",
                description: "Description for this product"
            },
            {
                name: "Soup 2",
                description: "Description for this product"
            },
            {
                name: "Soup 3",
                description: "Description for this product"
            },
        ],
    },
    {
        title: "Drinks",
        data: [
            {
                name: "Drink 1",
                description: "Description for this product"
            },
            {
                name: "Pizza 2",
                description: "Description for this product"
            },
            {
                name: "Pizza 3",
                description: "Description for this product"
            },
            {
                name: "Pizza 4",
                description: "Description for this product"
            },
        ],
    },
    {
        title: "Salads",
        data: [
            {
                name: "Salad 1",
                description: "Description for this product"
            },
            {
                name: "Salad 2",
                description: "Description for this product"
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
    categories,
    categories2
};

export default Config;