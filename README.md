# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot



### Links

- Solution URL: [Frontend Mentor](https://your-solution-url.com)
- Live Site URL: [](https://your-live-site-url.com)

## My process

### Built with

- **Semantic HTML5 markup** - The structure of the page is defined using clean, semantic HTML elements like `<h2>`, `<p>`, `<div>`, etc.
- **CSS custom properties** - Reusable CSS properties for colors, like `hsl(210, 46%, 95%)`, are used to maintain design consistency.
- **Flexbox** - Used for layout, aligning content like the avatar, social share buttons, and the card.
- **Mobile-first workflow** - Media queries are used to make the design responsive, adjusting the layout for smaller screens.


### What I learned

In this project, I worked on creating a social media share feature that appears when the user clicks the share button. One of the key learnings for me was how to add a custom arrow to a tooltip-like element using CSS `::before`. This technique allows the share options to appear like a pop-up, with a small arrow pointing to the button that triggered it.

Here’s the part of the CSS code I’m particularly proud of:

```css
.share-options::before {
  content: "";
  position: absolute;
  bottom: -10px;
  right: calc(50% - 20px);
  
  /* Adding shadow for a more elevated effect */
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  /* Creating the arrow effect */
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid hsl(217, 19%, 35%);
}
```

This code was challenging but fun to implement because I learned how to align and style the arrow so that it looks like a natural extension of the share options box. The use of ::before allowed me to create a clean arrow effect without needing extra HTML elements, keeping the markup lean and efficient.

I also worked on positioning this tooltip dynamically using position: absolute and fine-tuned it using calc() for better responsiveness.

### Continued development

In future projects, I want to focus on the following areas to enhance my skills and improve my overall development workflow:

1. **JavaScript DOM Manipulation**:
   - While I successfully implemented a toggle feature for the share options, I want to delve deeper into more complex DOM manipulations. Understanding concepts like event delegation and optimization of rendering performance will help me create smoother user experiences.

2. **Responsive Design**:
   - Although I used media queries effectively, I aim to refine my skills in creating truly responsive layouts. Learning more about CSS Grid and Flexbox will help me build layouts that adapt seamlessly across different devices.

3. **Accessibility (a11y)**:
   - I want to prioritize accessibility in my projects. This includes using semantic HTML, ARIA roles, and ensuring that all interactive elements are keyboard navigable. Understanding best practices will make my applications more usable for everyone.

4. **CSS Preprocessors**:
   - Exploring CSS preprocessors like SASS or LESS could streamline my styles and help manage large stylesheets. Learning how to utilize variables, nesting, and mixins will allow for more organized and maintainable code.

5. **JavaScript Frameworks**:
   - I'm interested in deepening my knowledge of frameworks like React and Next.js. I want to focus on state management, component lifecycles, and building reusable components to enhance the functionality of my applications.

6. **Version Control with Git**:
   - Gaining more experience with Git, especially in collaborative environments, will be beneficial. I want to become comfortable with branching, merging, and resolving conflicts effectively.

By focusing on these areas, I hope to create more robust, accessible, and user-friendly web applications in my future projects.


### Useful Resources

- [Scrimba - Learn JavaScript](https://v2.scrimba.com/learn-javascript-c0) - This platform helped me reinforce my understanding of JavaScript fundamentals through interactive coding exercises. I found the hands-on approach very effective for learning.

- [freeCodeCamp - Learn Form Validation by Building a Calorie Counter](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/learn-form-validation-by-building-a-calorie-counter/step-10) - This article was instrumental in teaching me form validation techniques. The practical examples were particularly helpful for applying the concepts in real-world scenarios.

## Author

- Frontend Mentor - [@yMeeraki](https://www.frontendmentor.io/profile/yMeeraki)
