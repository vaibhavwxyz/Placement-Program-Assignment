# Assignment 01- HTML

## 💡 Q.1 <!DOCTYPE html> is it a tag of html? If not, what is it and why do we use it?

### 🚀 Answer

> **No**, `<!DOCTYPE html>` is not an HTML tag. It is a declaration used at the beginning of an HTML document to specify the document type and version. It informs the web browser about the version of HTML being used, allowing it to interpret and render the page correctly.

## 💡 Q.2 Explain Semantic tags in html? And why do we need it?

### 🚀 Answer

> Semantic tags in HTML are elements that provide meaning and structure to the content within a web page. They describe the purpose or role of the content, making it more understandable for search engines and assistive technologies. Semantic tags include `<header>`, `<nav>`, `<article>`, `<section>`, `<aside>`, `<footer>`, and others. They improve accessibility, search engine optimization, and overall document structure.

## 💡 Q.3 Differentiate between HTML Tags and Elements?

### 🚀 Answer

> HTML tags and elements are related but have distinct meanings. HTML tags are used to mark up the structure and define the behavior of elements within an HTML document. They are enclosed in angle brackets, such as `<tagname>`. HTML elements, on the other hand, consist of the opening tag, content, and closing tag, such as `<tagname>content</tagname>`. Tags define the element's type, while elements represent the actual content or structure within the tags.

## 💡 Q.4 Build Your Resume using HTML only

### 🚀 Answer

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Resume</title>
    <style>
      body {
        font-family: Arial, sans-serif;
      }

      h1,
      h2,
      p {
        margin: 0;
      }

      .header {
        text-align: center;
        margin-bottom: 20px;
      }

      .section {
        margin-bottom: 20px;
      }

      .section h2 {
        font-size: 18px;
      }

      .section p {
        font-size: 14px;
      }
      .summary {
        margin: 2rem 0rem 0rem 0rem;
        max-width: 50rem;
        text-align: start;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>Vaibhav Shinde</h1>
      <p>Web Developer</p>
      <summary class="summary">
        I'm Vaibhav, a full-stack Web Developer based in Pune MH, who is
        passionate about building user-friendly, easy-to-use single page
        applications, that makes a difference to the lives of those around me. I
        like to explore new trends and learn new technologies.
      </summary>
    </div>

    <div class="section">
      <h2>Education</h2>
      <p>
        <b>Bachelor of Computer Science</b>
        <em>Vivekanda Institude of Technology, Aurangabad MH</em>
        <b>62.60 %</b>
      </p>
      <p>
        <b>Master of Computer Science</b>
        <em>Dr. D.Y Patil School of MCA, Pune MH</em>
        <b>8.4 CGPA</b>
      </p>
    </div>

    <div class="section">
      <h2>Skills</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Tailwind</li>
        <li>Git</li>
        <li>JavaScript</li>
        <li>React.js</li>
      </ul>
    </div>

    <div class="section">
      <h2>Contact</h2>
      <p><strong> Email:</strong> vaibhawxyz@gmail.com</p>
      <p><strong>Phone:</strong> +91 9595103720</p>
      <p>
        <strong>GitHub - </strong
        ><a href="https://github.com/vaibhavwxyz"
          >https://github.com/vaibhavwxyz</a
        >
      </p>
      <p>
        <strong>Linkedin - </strong
        ><a href="https://www.linkedin.com/in/vaibhavwxyz/"
          >https://www.linkedin.com/in/vaibhavwxyz/</a
        >
      </p>
    </div>
  </body>
</html>
```

## 💡 Q.5 Write HTML code so that it looks like the below image

<img src="https://pwskills.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5d76dcda-d8eb-4c2e-836d-5c1aee0f8c6d%2Fhtml.png?id=9eae56b9-1968-40e8-98e1-b745e9e0a4ea&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=1040&userId=&cache=v2" height="720px">

### 🚀 Answer

![output](https://github.com/vaibhavwxyz/Placement-Program-Assignment/assets/73052214/ced86dc8-c453-40ed-912a-7ac2ca9542ef)

## 💡 Q.6 What are some of the advantages of HTML5 over its previous versions?

### 🚀 Answer

**HTML5 introduced the following advantages over previous versions:**

> 1. Enhanced multimedia support without plugins.
> 2. Improved semantics for better SEO and readability.
> 3. Canvas element for dynamic 2D graphics.
> 4. Offline and local storage capabilities.
> 5. Geolocation API for location-based services.
>    Mobile-friendly and responsive design principles.
> 6. Simplified code syntax and elements.
> 7. Improved performance and faster page loading.
> 8. Better cross-browser compatibility.

## 💡 Q.7 Create a simple Music player using html only

### 🚀 Answer

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Music Player</title>
  </head>
  <body>
    <div style="padding-top: 30px">
      <h1>Listen to the Music</h1>
      <audio
        controls
        src="https://cld3097web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3"
      ></audio>
    </div>
  </body>
</html>
```

## 💡 Q.8 What is the difference between <figure> tag and <img> tag?

### 🚀 Answer

> the `<img>` tag is specifically for inserting images, while the `<figure>` tag is used to group and provide semantic meaning to self-contained media content, including images.

## 💡 Q.9 What’s the difference between html tag and attribute and give example of some global attributes?

### 🚀 Answer

> HTML tags are used to define the structure and content of elements, while attributes provide additional information or properties to elements. Global attributes, which can be used with any HTML element, include "class" for styling, "id" for unique identification, "style" for inline CSS, "title" for tooltips, and "data-" for custom data storage.

## 💡 Q.10 Table using HTML only

### 🚀 Answer

- **To see project in action, visti [https://table-by-vaibhav-shinde.netlify.app/](https://table-by-vaibhav-shinde.netlify.app/)**
