<h1 align="center"> <b> Angel J. Haro </b>
<img src="https://docs.google.com/uc?export=download&id=1JqFc6WL-cTtJBQgW9tusQAZhQ3H9hGae" alt="" height="25" >
<img src="https://docs.google.com/uc?export=download&id=1HsBpakQVutfOmxBcPbGpKdo_oGEoKJZT" alt="" height="35" >
</h1>

<!-- START  -->
<div align="center">
<a href="https://aharoj.io"><img src="https://img.shields.io/badge/website-000000?style=for-the-badge&logo=Portfolio&logoColor=white" alt="Gmail" /></a>&nbsp;
<a href="https://discord.gg/HDDQ6pUMHt"><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" /></a>&nbsp;
<a href="https://twitter.com/aharoJ"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" /></a>&nbsp;
<a href="https://www.linkedin.com/in/aharoJ/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin" /></a>&nbsp;
<a href="https://leetcode.com/aharoJ/"><img src="https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black" alt="LeetCode" /></a>&nbsp;
<br/>
</div>  
<!-- END -->

<h1 align="center"> <a href=https://aharoj.io> Visit Portfolio </a> </h1>

### Frontend Snippet

![Alt text](z/aharoJ_FrontEnd.png)

### Backend Snippet

![Alt text](z/aharoJ_backend.png)

---

# How To Run

1. Run Database
2. Run Backend
3. Run Frontend

```sh
git clone https://github.com/aharoJ/Twitter.git
```

```sh
cd Twitter
```

---

## Database

### make sure you `create` the PostgreSQL database

> src/resources/application.properties
> remove CAPS variable names and add your credentials

```sh
spring.datasource.url=jdbc:mysql://localhost:3306/DATABASE_NAME
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```

---

## Backend

> cd into the backend and do

```sh
./mvwn clean install
```

RUN SPRING

```sh
 ./mvnw clean spring-boot:run
```

---

> cd into the frontend and do

## Frontend

```sh
npm install --force
npm run dev
```

### RUN the frontend

```sh
 npm run dev
```
