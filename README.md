## Description

Kanban-style app for tracking your job applications. App is deployed on Vercel can be accessed [here](https://kanban-project-gold.vercel.app/)

## Functionality 

* Auth (sign in / sign up) functionality based on JWT 
* Dynamic kanban-style board to keep on top of job applications and track your progress
* Ability to add / remove / edit job cards 
* Drag & Drop cards between different categories
* Archive cards to keep the info but remove them from the main board 

## Screenshots
<p float="left">
<img src="/screenshots/tablica-screenshot1.png" width="500" height="260">
<img src="/screenshots/tablica-screenshot2.png" width="500" height="260">
<img src="/screenshots/tablica-screenshot3.png" width="500" height="260">
<img src="/screenshots/tablica-screenshot4.png" width="500" height="260">
<p>

## Tech Stack

### Frontend 
📱 Next.js <br> 
🔡 Typescript <br>
🎉 Chakra 

### Backend
📱 Next.js <br>
💾 PostgreSQL <br>
📺 Prisma 

## To run locally: 

### Set up
1. Create an empty PostgreSQL

### Installation 
1. Fork and clone the repo 
2. Add ```.env``` files in the root folder
3. Add ```DATABASE_URL``` variable to the ```.env``` file  
4. Install requirements with ```npm install``` from project root folder
5. Generate Prisma artificats and sync database schema with the client, using ```npx prisma generate``` and ```npx prisma db push```

### Run 
1. Start the application with ```npm run dev``` 
  



