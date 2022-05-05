const array = [
    {
        createdAt: "2022-05-04T10:01:31.575Z",
        id: 1,
        name: "Shortlist",
        updatedAt: "2022-05-04T10:01:31.577Z",
        userId: 1,
    },
    {
        createdAt: "2022-05-04T10:01:31.575Z",
        id: 1,
        name: "Shortlist",
        updatedAt: "2022-05-04T10:01:31.577Z",
        userId: 1,
    },
];

const updatedCategories = array.map((category) => {
    return {
        [category.name]: category,
    };
});

// console.log("updated", updatedCategories);

const mappedCategories = updatedCategories.map((category) => {
    return category.name;
});

// console.log("mapped", mappedCategories);

const updatedArray = [
    {
        Applied: {
            createdAt: "2022-05-04T10:01:31.575Z",
            id: 1,
            name: "Applied",
            updatedAt: "2022-05-04T10:01:31.577Z",
            userId: 1,
        },
    },
    {
        Shortlist: {
            createdAt: "2022-05-04T10:01:31.575Z",
            id: 1,
            name: "Shortlist",
            updatedAt: "2022-05-04T10:01:31.577Z",
            userId: 1,
        },
    },
];

console.log("updatedArray", updatedArray);
