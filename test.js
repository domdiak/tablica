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

const {}

// console.log("updatedArray", updatedArray);

const mappedCategories = updatedArray.map((category) => {
    {category.}
});

// console.log("mapped", mappedCategories);
