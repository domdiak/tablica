import bcrypt from "bcrypt";

const salt = bcrypt.genSaltSync();

export const userData = [
    {
        last: "Diak",
        password: bcrypt.hashSync("123", salt),
        email: "domdiak@gmail.com",
    },
];

export const cardsData = [
    {
        title: "Role 1",
        description: "Company 1",
        link: "www.idk.com",
        userId: 1,
        categoryId: 1,
    },
    {
        title: "Role 2",
        description: "Company 2",
        link: "www.idk.com",
        userId: 1,
        categoryId: 2,
    },
    {
        title: "Role 3",
        description: "Company 3",
        link: "www.idk.com",
        userId: 1,
        categoryId: 2,
    },
    {
        title: "Role 4",
        description: "Company 4",
        link: "www.idk.com",
        userId: 1,
        categoryId: 3,
    },
    {
        title: "Role 5",
        description: "Company 5",
        link: "www.idk.com",
        userId: 1,
        categoryId: 3,
    },
    {
        title: "Role 6",
        description: "Company 6",
        link: "www.idk.com",
        userId: 1,
        categoryId: 3,
    },
    {
        title: "Role 7",
        description: "Company 7",
        link: "www.idk.com",
        userId: 1,
        categoryId: 3,
    },
    {
        title: "Role 8",
        description: "Company 8",
        link: "www.idk.com",
        userId: 1,
        categoryId: 4,
    },
    {
        title: "Role 9",
        description: "Company 9",
        link: "www.idk.com",
        userId: 1,
        categoryId: 4,
    },
];

export const categoryData = [
    {
        name: "Shortlist",
        userId: 1,
    },
    {
        name: "Applied",
        userId: 1,
    },
    {
        name: "Interview",
        userId: 1,
    },
    {
        name: "Rejected",
        userId: 1,
    },
    {
        name: "Archived",
        userId: 1,
    },
];
