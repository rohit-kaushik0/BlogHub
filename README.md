# BlogHub


A simple Blog Application built using **Node.js, Express, and EJS** that allows users to create, edit, and view blog posts.

## 🎥 Video Preview

[Watch the Video](https://www.linkedin.com/feed/update/urn:li:activity:7301961724830658560/)


## 🚀 Features

- 📝 Create, edit, and delete blog posts
- 🎨 Responsive UI using **EJS templates**
- 📂 Static files support (CSS, images, etc.)
- 🔄 Express.js routing for handling requests



## 🏗️ Project Structure

```
blog-app/
│── node_modules/             # Installed dependencies (auto-generated)
│── public/                   # Static files (CSS, images, etc.)
│   ├── css/
│   │   ├── styles.css        # Main CSS file
│   
│
│── views/                    # EJS templates
│   ├── partials/             # Common layout files
│   │   ├── header.ejs        # Header section
│   │   ├── footer.ejs        # Footer section
│   ├── home.ejs              # Home page template
│   ├── create.ejs            # Create post page template
│   ├── edit.ejs              # Edit post page template
│   ├── post.ejs              # Individual post page
│   ├── post.ejs
    ├── about.ejs
    ├── contact.ejs
    ├── articles.ejs
    ├── contact-sucess.ejs   
 

│── index.js                    # Main application file
│── package.json              # Project dependencies and scripts
│── package-lock.json         # Dependency lock file
```

## 🔧 Installation

1. **Clone the repository**
   ```sh
   git clone https://https://github.com/rohit-kaushik0/BlogHub.git
   cd blog-app
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   node app.js
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`

## 📦 Dependencies

- **Express** - Web framework for Node.js
- **EJS** - Embedded JavaScript templating
- **Body-parser** - Middleware to parse request bodies

## 🚀 Deploying to Render (Free Hosting)

1. Push your code to **GitHub**
2. Create an account on **[Render](https://render.com/)**
3. Create a **new web service** and link it to your GitHub repo
4. Set the **start command** as:
   ```sh
   node app.js
   ```
5. Deploy and get your live URL! 🎉

## 📜 License

This project is licensed under the **MIT License**.

---

Made with ❤️ by [Rohit Kaushik](https://github.com/rohit-kaushik0)

