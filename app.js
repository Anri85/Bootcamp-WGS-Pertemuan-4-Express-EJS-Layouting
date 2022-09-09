const express = require("express");
const expressLayouts = require('express-ejs-layouts')
const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.use(expressLayouts)

// mendefinisikan route root (/) yang merender index.html
app.get("/", (req, res) => {
    res.render("index", {
        name: 'Ramdhani Arya',
        title: "WebServer EJS",
        page: "Home Page",
        layout: 'layout/main-layout'
    });
});

// mendefinisikan route contact (/contact) yang merender contact.html
app.get("/contact", (req, res) => {
    const cont = [
        {
            name: "Arya",
            email: "aryasubagja@gmail.co,",
        },
        {
            name: "Anri",
            email: "anri@gmail.com",
        },
        {
            name: "Tim",
            email: "tim@gmail.com",
        },
    ];
    res.render("contact", {
        title: "WebServer EJS",
        page: 'Contact Page',
        cont,
        layout: 'layout/main-layout'
    });
});

// mendefinisikan route about (/about) yang merender about.html
app.get("/about", (req, res) => {
    res.render("about", {
        title: 'WebServer EJS',
        page: 'About Page',
        layout: 'layout/main-layout'
    });
});

// menambahkan parameter product id dan query parameter category
app.get("/product/:productId", (req, res) => {
    res.send(`product id: ${req.params.productId}<br/>category id: ${req.query.category}`);
});

// mendefinisikan middleware jika halaman tidak ditemukan
app.use("/", (req, res) => {
    res.send("Page not found: 404");
    res.status(404);
});

// menjalankan express pada port
app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});
