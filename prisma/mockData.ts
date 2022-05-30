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
        title: "Front End Intern",
        description: "Spotify",
        link: "www.spotify.com",
        userId: 1,
        categoryId: 1,
    },
    {
        title: "Full Stack Summer Intern",
        description: "Zalando",
        link: "www.zalando.com",
        userId: 1,
        categoryId: 2,
    },
    {
        title: "Full Stack Engineer",
        description: "Klarna",
        link: "www.klarna.com",
        userId: 1,
        categoryId: 2,
    },
    {
        title: "Junior Full Stack Engineer",
        description: "Auto1",
        link: "www.auto1.com",
        userId: 1,
        categoryId: 3,
    },
    {
        title: "Front End Engineer",
        description: "Choco",
        link: "www.choco.com",
        userId: 1,
        categoryId: 3,
    },
    {
        title: "Back-End Intern",
        description: "Amazon",
        link: "www.Amazon.com",
        userId: 1,
        categoryId: 3,
    },
    {
        title: "Back End Engineer",
        description: "Drive Now",
        link: "www.drivenow.com",
        userId: 1,
        categoryId: 3,
    },
    {
        title: "QA Engineer",
        description: "Airbank",
        link: "www.airbank.com",
        userId: 1,
        categoryId: 4,
    },
    {
        title: "Junior FS Engineer",
        description: "Feather",
        link: "www.feather.com",
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
