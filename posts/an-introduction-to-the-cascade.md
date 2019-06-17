---
title: An Introduction to the Cascade
description: A brief introduction to the casecade in CSS.
date: 2019-06-16
tags:
  - code
  - design
layout: layouts/post.njk
---

This is just an introduction in a condensed form. Just a minor basic level overview of the cascade.

[The CSS Cascade Level 4 Spec states](https://www.w3.org/TR/css-cascade-4/#cascading);

<blockquote cite="CSS Cascade Level 4 Spec">The cascade takes a unordered list of declared values for a given property on a given element, sorts them by their declaration’s precedence, and outputs a single cascaded value.</blockquote>

There is an order in which selectors are prioritized. Importance, specificity, and source order.

Let's go over each priority starting with importance.

### Importance

An important declaration takes precedence over a normal declaration. Such as;

```css
* {
  background-color: white;
}
body {
  background-color: red !important;
}
```

1. Transition declarations

```css
transition-timing-function: steps(6, end);
```

1. Important user agent declarations

```css
input, textarea, keygen, select, button, meter, progress {
  -webkit-writing-mode: horizontal-tb !important;
}
```

1. Important user declarations

```css
p { text-indent: 1em !important; }
```

1. Important author declarations

```css
p { text-indent: 1.5em !important; }
```

1. Animation declarations

```css
@keyframes slide-right {
  50% {
    margin-left: 110px;
    opacity: 0.9;
  }

  to {
    margin-left: 200px;
  }
}
```

1. Normal author declarations.

```css
p { text-indent: 1.5em; }
```

1. Normal user declarations.

```css
p { text-indent: 1em; }
```

1. Normal user agent declarations.

```css
keygen, select { border-radius: 5px; }
```

Read more about [Transition declarations](https://www.w3.org/TR/css-cascade-4/#biblio-css-transitions-1) here.
Read more about [Animation declarations](https://www.w3.org/TR/css-cascade-4/#biblio-css-animations-1) here.
