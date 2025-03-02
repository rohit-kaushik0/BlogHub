import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for blog posts
let posts = [];

// Home Route - Display all blog posts
app.get("/", (req, res) => {
    res.render("home", { posts });
});

// Create Post Page - Form for new blog post
app.get("/create", (req, res) => {
    res.render("create");
});

// Handle Post Creation
app.post("/create", (req, res) => {
    const { title, content } = req.body;
    const newPost = { id: Date.now().toString(), title, content };
    posts.push(newPost);
    res.redirect("/");
});

// View Single Post
app.get("/post/:id", (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (!post) return res.status(404).send("Post not found");
    res.render("post", { post });
});

// Edit Post Page
app.get("/edit/:id", (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (!post) return res.status(404).send("Post not found");
    res.render("edit", { post });
});

// Handle Post Update
app.post("/edit/:id", (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (!post) return res.status(404).send("Post not found");

    post.title = req.body.title;
    post.content = req.body.content;

    res.redirect("/");
});

// Handle Post Deletion
app.get("/delete/:id", (req, res) => {
    posts = posts.filter(p => p.id !== req.params.id);
    res.redirect("/");
});


// About Page Route
app.get("/about", (req, res) => {
    res.render("about");
});

// Contact Page Route
app.get("/contact", (req, res) => {
    res.render("contact");
});

// Handle Contact Form Submission
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    
    // Validate inputs
    if (!name || !email || !message) {
        return res.status(400).send("All fields are required.");
    }
    
    console.log(`New Contact Message from ${name} (${email}): ${message}`);
    res.render("contact-success", { message: "Thank you for contacting us! We will get back to you soon." });
});


// Articles Page Route - Display all blog posts
app.get("/articles", (req, res) => {
    res.render("articles", { posts });
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
