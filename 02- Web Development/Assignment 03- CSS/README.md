# Assignment 03- CSS

## 💡 Q.1 What is a Media Query in CSS, and what is its purpose?

### 🚀 Answer

A media query in CSS is a technique that allows you to apply different styles to a web page based on certain conditions, such as the characteristics of the device or the viewport it is being viewed on. The purpose of media queries is to create responsive designs that can adapt and optimize the layout and presentation of a website for different screen sizes, resolutions, and devices. By using media queries, you can target specific devices or types of devices and apply custom styles accordingly.

## 💡 Q.2 How do you define a media query in CSS?

### 🚀 Answer

To define a media query in CSS, you use the `@media` rule followed by one or more media features and their corresponding values. Here's the basic syntax:

```css
@media media-type and (media-feature: value) {
  /* CSS rules to apply when the media query conditions are met */
}
```

The `media-type` can be `screen`, `print`, `speech`, or `all`. The `and` keyword is used to combine multiple media features. Within the curly braces, you write the CSS rules that should be applied when the media query conditions are satisfied.

For example, the following media query targets screens with a maximum width of 600 pixels:

```css
@media screen and (max-width: 600px) {
  /* CSS rules for screens with a maximum width of 600px */
}
```

## 💡 Q.3 Explain the concept of Breakpoints in Responsive Web Design and How They are used in Media Queries.

### 🚀 Answer

In responsive web design, breakpoints are specific points or ranges of viewport widths at which the layout of a web page needs to change to provide an optimal user experience. Breakpoints are typically defined based on common device sizes or specific design considerations.

Media queries are used to define these breakpoints in CSS. By using media features such as max-width or min-width along with appropriate values, you can specify when certain CSS rules should be applied to adapt the layout and styling of your webpage.

For example, consider a responsive design with two breakpoints: one at 600 pixels and another at 1200 pixels. You can define media queries as follows:

```css
/* Styles for screens up to 600px */
@media screen and (max-width: 600px) {
  /* CSS rules for small screens */
}

/* Styles for screens between 601px and 1200px */
@media screen and (min-width: 601px) and (max-width: 1200px) {
  /* CSS rules for medium-sized screens */
}

/* Styles for screens above 1200px */
@media screen and (min-width: 1201px) {
  /* CSS rules for large screens */
}
```

At each breakpoint, you can modify various aspects of your design, such as the layout, font sizes, image sizes, or even hide/show certain elements to ensure an optimal presentation across different devices.

## 💡 Q.4 What is the purpose of using Media Queries for Print Media?

Media queries are not limited to just screens or displays; they can also be used for print media. The purpose of using media queries for print is to apply specific styles when a webpage is printed, allowing you to optimize the print layout and appearance.

When defining media queries for print, you use the `print` media type. Here's an example:

```css
@media print {
  /* CSS rules for print media */
}
```

Within this media query, you can modify the styles to improve the readability and structure of the printed content. For instance, you might want to hide certain elements that are not necessary for the printed version, adjust font sizes and colors, or define page breaks to control the layout on each printed page.

Using media queries for print allows you to create printer-friendly versions of your web pages, ensuring that the content is presented in a more suitable format when users decide to print it.

## 💡 Q.5 What is the purpose of the orientation media feature?

### 🚀 Answer

The `orientation` media feature in CSS is used to target the orientation of the device's viewport, whether it's in portrait or landscape mode. The purpose of this media feature is to apply different styles based on the orientation of the device, allowing you to optimize the layout and presentation accordingly.

The `orientation` media feature accepts two possible values: `portrait` and `landscape`. Here's an example:

```css
@media (orientation: portrait) {
  /* CSS rules for portrait orientation */
}

@media (orientation: landscape) {
  /* CSS rules for landscape orientation */
}
```

By using the `orientation` media feature, you can make specific adjustments to your design based on whether the user is viewing the content in a vertical or horizontal orientation. For instance, you might want to rearrange elements, adjust font sizes, or change the aspect ratio of media to better suit the available space in each orientation.

## 💡 Q.6 Imagine you are a web developer working for a creative agency that specializes in building visually appealing and interactive websites. The agency has recently received a client request to create a landing page similar to the design of the one-page website: https://www.getonecard.app/. The client wants to showcase a video prominently on the page to engage visitors.

Your task is to create a simple webpage that replicates the one-page landing page design, including a responsive layout and an HTML video. The below images are for your reference. Some browsers don’t allow you to play videos without the controls attribute. So, you can add controls here, we will learn how to play a video without the controls attribute in the later sections.

### 🚀 Answer

**To see project in action, visit [https://onecard-by-vaibhav.netlify.app/](https://onecard-by-vaibhav.netlify.app/)**

## 💡 Q.7 You are tasked with building a webpage that displays an image gallery using a grid layout. The challenge is to ensure the gallery is visually appealing and functional on both large and small screens. On large screens, the gallery should display multiple images per row, while on small screens, it should collapse into a single column for optimal viewing. Refer to the attached images for visual reference. Implement this using CSS Grid and media queries for responsiveness.

### 🚀 Answer

**To see project in action, visit [https://random-image-using-grid.netlify.app/](https://random-image-using-grid.netlify.app/)**

## 💡 Q.8 In this coding challenge, your task is to create an information section for the previously built OneCard webpage clone, focusing on the different modes like dark and light modes. The webpage should look different depending on the screen size: dark mode for larger screens and light mode for smaller devices. The reference images are attached below.

### 🚀 Answer

**To see project in action, visit [https://onecard2-by-vaibhav.netlify.app/](https://onecard2-by-vaibhav.netlify.app/)**

## 💡 Q.9 You have reached the final task of learning responsive web design, which involves designing a responsive footer. Your goal is to build a simple webpage footer that matches the design shown in the attached image. The footer should adapt to different screen sizes, ensuring optimal visibility and alignment of the content. Refer to the attached image for a visual reference.

### 🚀 Answer

**To see project in action, visit [https://onecard2-by-vaibhav.netlify.app/](https://onecard2-by-vaibhav.netlify.app/)**

## 💡 Q.10 You have been given to create a student dashboard page that includes a student details table. The challenge lies in handling the table's display on different screen sizes. On large screens, the table should be fully visible, while on small screens, it should have an internal scroll to ensure proper visibility of information. Refer to the attached images for visual reference.

### 🚀 Answer

**To see project in action, visit [https://student-detail-table-by-vaibhav.netlify.app/](https://student-detail-table-by-vaibhav.netlify.app/)**
