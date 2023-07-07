## Assignment 02- HTML

**Q.1 What is Box Model in CSS & Which CSS Properties are part of it?**

<u>_Answer -_</u> CSS Box Model is a set of rules that determines how the browser's rendering engine renders the HTML elements of our web page. The web browser renders every element as a rectangular box according to the CSS Box Model. CSS determines the size, position and other properties of these boxes.

Box Model has mainly four properties - Margin, Border, Padding and Content (Content has Width and Height)

**Q.2 What are the Different Types of Selectors in CSS & what are the advantages of them?**

<u>_Answer -_</u> We have so many types of selectors and the most commonly used are -

- Universal Selector
- Type Selector or Individual Selector
- Class and Id selector
- Attribute Selector
- And or chained selector
- Grouping selector
- Combinators
- Pseudo element and pseudo class selector

**Advantages of Different Types of Selectors** - Different selectors allow us to target HTML element or elements with more precision and control. Selectors like class selectors allow us to target multiple elements across the web pages enhancing the code reusability, whereas id selectors are mainly used to target individual element in the document. Selectors like attribute selectors and pseudo selectors enable us to style elements based on specific conditions or characteristics. By utilising appropriate selectors we can create precise consistent and flexible stylesheets.

**Q.3 What is VW/VH & How it is different from PX?**

<u>_Answer -_</u> VW(viewport width) and VH(viewport height) are CSS units of measurement that are relative to the size of the viewport. Whereas PX or pixels are an absolute unit of measurement that represent the smallest unit of display on a screen.

1 VW is equal to 1% of the viewport’s width. If the viewport’s width is 1000 pixels then 1 VW will be 10px. Same with VH also. VW or VH is mainly used when we want the element to automatically adapt with the viewport width or height. This is useful for making responsive layouts. Whereas PX unit is used when we want precise control over the element’s width or height which will not change automatically according to the size of the viewport.

**Q.4 What is the difference between Inline, Inline Block and block ?**

<u>_Answer -_</u> Inline, Inline-block and Block are values of display property in CSS, which specifies the display behavior of an element.

**Inline** - Inline elements do not start on a new line and do not put a line break at the end of the content.These elements take as much space as necessary based on their content. If we try to set width and height explicitly, it will have no effect. Their top and bottom margin and padding does not have any effect on layout of other elements, however left and right margin and padding will push neighboring elements horizontally. Inline elements can not contain block level elements. Examples of some default inline elements are span, a, img, em, strong etc.

**Inline-block** - Inline-block elements are displayed like but behave like block level elements. Like inline they do not start on a new line and do not put line break at the end but we can set width and height of inline-block elements explicitly and all margin and padding can be applied to them. Inline-block elements can not contain block level elements

**Block** - Block level elements start on a new line and occupy full width available within their parent container. These elements start on a new line and also push other elements which are after the block element on a new line. Width, height, margin, padding, borders all can be set explicitly in block level elements. Block level elements can contain other block level elements and also inline and inline-block elements. Examples of some default block level elements are div, p, ul, li, section etc.

**Q.5 How is Border-box different from Content Box?**

<u>_Answer -_</u> Border-box and content-box are two values of the box-sizing property of CSS which determines how the width and height of an element is calculated.

**Content-box** - It is the default box-sizing behaviour, it calculates the size of the element excluding its padding and border. When we apply width and height of an element, it only applies to the content area inside the padding and border. So, the total size of the element is the width and height of the element added with the padding and border. For example if the element has 200px set width 10px padding and 2px width of border then total width of the element will be 224px (200px content width + 10px padding-left + 10px padding-right + 2px border-left + 2px border-right).

**Border-box** - The border-box box-sizing model calculates the width and the height of an element including its padding and border. So, when we specify the height and width of the element it includes the width and height of the content, padding and border. That means if we set 200px width of the element, 20px padding and 2px width of border then the width of the content is 176px (200px content width - 10px padding-left - 10px padding-right - 2px border-left - 2px border-right).

It is useful to set box-sizing to border-box for all the elements. It helps us deal with element sizes much easier.

**Q.6 What’s z-index and How does it Function?**

<u>_Answer -_</u> Z-index property controls the stacking order of positioned elements and determines how the elements are layered and displayed on top or behind one another on a web page. The character Z came from the three dimensional representation where x stands for width, y stands for height and z stands for depth.

The z-index property accepts an integer value that specifies the stacking order of an element. Higher values result in elements appearing on top of other lower valued elements. By default z-index value is auto, we can give it any positive or negative integer value according to our need. Each positioned element with a z-index value other than auto creates a stacking context. A stacking context is a hierarchical structure that determines the order in which elements are stacked. Z-index only affects the elements with a positioned value other than static (like relative, absolute, fixed or sticky).

**Q.7 What’s Grid & Flex and difference between them?**

<u>_Answer -_</u> Grid and Flex or Flexbox both are CSS layout systems used for creating responsive and flexible designs.

**Flex** - Flexbox is a one-dimensional layout method that helps us in arranging items of a container in rows or columns, even when the size of the items are unknown. It gives the container the ability to alter the items' width, height and order to best fill the available space. A flex container expands its items to fill the available free space or shrinks items to prevent overflow. Flexbox is a great way to get more flexibility to our layouts and simplify the responsive layout design. To use flexbox layout we have to set the display property of the container to flex. It is a one dimensional layout system designed for creating flexible and dynamic layout along a single axis either horizontally or vertically. The main axis of the flex container along which the flex items are laid out. The direction of the main axis depends on the flex-direction property.

**Grid** - Grid is a two-dimensional layout system that allows us to create complex grid based layout systems with both rows and columns. One good example of grid layout is image gallery, which we can easily make with grid. Like flexbox grid layout also repositions its items according to the available space, which makes it very useful for making complex layouts, responsive design and overall page structures. To use grid layout we have to set the display property of the container to grid. We can set the column and row sizes with grid-template-columns and grid-template-rows property.

**Differences Between Grid and Flex** -

- Flexbox is a one-dimensional layout system whereas grid is a two-dimensional layout system.
- Flexbox is suited for arranging items along with a single axis like either row or column while grid allows arranging elements in both row and columns.
- Flexbox provides control and distribution of items over a single axis while grid provides control over item placement in rows and columns, including spanning items across multiple cells.
- Flexbox is useful for smaller-scale layouts within a container while grid is ideal for large-scale layouts such as entire page structure or complex grid-based designs.
- Flex is relatively simpler to understand and implement whereas grid is a little bit more complex than flexbox.

**Q.8 Difference between absolute and relative and sticky and fixed position explain with example.**

<u>_Answer -_</u> Relative, absolute, fixed and sticky are the values of CSS position property, which defines how the element is positioned in the web page.By default the position property is set to static. We can set different values of position property other than static and then manipulate them by using the top, right, bottom and left property. In static positioning the top, right, bottom, left and z-index will not have any effect on the element.

**Relative** - It is just like static value where the element will be positioned according to the flow of the document, but now top, right, bottom, left and z-index will have effect on the element. These properties will work on the element based on its original position. These properties and the values will not affect the positions of other elements and the space given for the relative element in the page layout will be the same as if the position was static. For example let’s take the code -

```css
item {
  position: relative;
  top: 60px;
  left: 60px;
}
```

Here the given space for the item in the page will be the same as if it was for static but we will see the item moved to 60 pixels from top and 60 from left than its original position.

**Absolute** - Unlike the static and relative this time the element will be removed from the original document flow and there will be no space created for the document in the page layout.That means if the child element has an absolute value then the parent will behave as if the child is not there at all. The values of top, right, bottom and left will be calculated with respect to the entire document. Only if we make the parent container’s position relative then the absolute child’s top, right, bottom and left values will be calculated with respect to the parent container. For example -

```css
item {
  position: absolute;
  top: 60px;
  left: 60px;
}
```

Here the item will be displayed in the top left corner of the entire document or page at 60px distance from top and 60px distanced from left. Now if we make the parent container position relative -

```css
parent-container {
  position: relative;
}
```

Then the item will be displayed 60px distance from top and 60px distance left from the parent container.

**Fixed** - This is very similar to absolute, the item with fixed positioning will be removed from the normal document flow and there will be no space for the element in the page layout. We can position the element anywhere we want in the document by using top, right, bottom and left properties but this time the element will be unaffected by scrolling. That means the item will stay at the same position no matter how much we scroll the page. Let’s see an example -

```css
item {
  position: fixed;
  bottom: 60px;
  right: 60px;
}
```

Here the item will be in the bottom right corner at a 60px distance from right and bottom. It will stay there no matter how much we scroll the page.

**Sticky** - It allows us to position the element relative to anything in the document and then when the user has scrolled past a certain point at the viewport, it fixes the position of the element to that location so it is displayed like an element with fixed value. Let’s take an example -

```css
item {
  position: sticky;
  top: 60px;
}
```

If we apply the above code for an item, the item will be relatively positioned until the scroll location of the page reaches at a point where its distance from the top of the viewport is 60px. From that point the item will remain fixed at a 60px distance from top of the screen.

**Q.9 Build Periodic Table as shown in the below image.**

<u>_Answer -_</u> [Click here](./CSS%20Q9.%20Periodic%20Table/)

**Q.10 Build Responsive Layout both desktop and mobile and Tablet, see below image for reference?**

<u>_Answer -_</u> [Click here](./CSS%20Q10.%20Build%20The%20Given%20Layout/)
