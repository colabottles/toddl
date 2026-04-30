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

There is an order in which selectors are prioritized. Importance, scope, specificity, and order. Let's go over each priority starting with importance. You don't have to take it all in at once. Break down each part until you understand it and then move on to the next section. I have provided code examples along the way.

### Importance

An `!important` declaration takes precedence over a normal declaration. Such as when the star selector is used for site-wide styling, take for instance `box-sizing: border-box;` and then the same property (in this case below, `background-color`) is using it in the case of the `body` selector. So `background-color: red !important;` will overrule the `background-color: white;`.

```css

* {
  background-color: white;
}

body {
  background-color: red !important;
}

```

* Transition declarations `transition-timing-function: steps(6, end);` or `transition: all .25s ease-in-out;`

* Important user agent declarations

```css

input, textarea, keygen, select, button, meter, progress {
  -webkit-writing-mode: horizontal-tb !important;
}

```

* Important user declarations `p { text-indent: 1em !important; }`

* Important author declarations `p { text-indent: 1.5em !important; }`

* Animation declarations

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

* Normal author declarations `p { text-indent: 1.5em; }`

* Normal user declarations `p { text-indent: 1em; }`

* Normal user agent declarations `keygen, select { border-radius: 5px; }`

Read more about [Transition declarations](https://www.w3.org/TR/css-cascade-4/#biblio-css-transitions-1) here.
Read more about [Animation declarations](https://www.w3.org/TR/css-cascade-4/#biblio-css-animations-1) here.

### Scope

A declaration can be scoped to a subtree so that it only affects its scoping element and that element’s descendants. An example is `html` to `body`.

<blockquote cite="CSS Cascading and Inheritance Level 4">If the scoping elements of two declarations have an ancestor/descendant relationship, then for normal rules the declaration whose scoping element is the descendant wins, and for important rules the declaration whose scoping element is the ancestor wins.</blockquote>

So in other words, for normal declarations the inner scope's declarations override but for the `!important` rule the outer scope's declarations override. Later wins over earlier.

```css

h1 {
  color: red;
}

/* This one wins */
h1 {
  color: green;
}

```

```css

/* This one wins due to specificity */
.title__heading {
  font-size: 2em;
}

h1 {
  font-size: 2.8em;
}

```

<blockquote cite="MDN Web Docs">One thing you should bear in mind when considering all this cascade theory, and what styles get applied over other styles, is that all this happens at the property level — properties override other properties, but you don't get entire rules overriding other rules. When several CSS rules match the same element, they are all applied to that element. Only after that are any conflicting properties evaluated to see which individual styles will win over others.</blockquote>

[A not on rule mixing](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#A_note_on_rule_mixing)

### Specificty

* Inline styles (anything between `<style></style>` tags)
* ID selectors
* Classes / pseudo-selectors
* Type selectors (for example, `h1`) & pseudo-elements (`::before`)

### Order

The last declaration in document order wins. The order in which you load your stylesheets actually matters. If you’ve got two stylesheets linked in the head of your HTML document, the second stylesheet will override rules in the first stylesheet. This is why resets and `@imports` are loaded before anything else in the main stylesheet you are using.

### Summary

I have seen a lot of folks frustrated that they don't understand CSS. Some of animosity towards learning it, some disdain towards it. Knowing the cascade benefits the developer. The fundamental knowing of the cascade and how the cascade works will benefit you in the long run. I offer you some suggestions.

The spec may look daunting and the language may look foreign, but when it comes down to it, it really isn't. If I can get it, from reading the spec then anyone can get it. There are some brilliant folks out there who knows JavaScript like the back of their hand. When it comes to CSS and the cascade, they say that it is a concept they cannot fully grasp.

I learn best by breaking things down to their core. Piece by piece. Breaking the cascade down to bits and pieces (just think of Atomic Design - Atoms, Molecules, Organisms) and dissecting those until I fully grasp the concept(s).

If you have stumbled across this article and have any questions, feel free to use the contact page form and send me a question. I hope this article shed a little bit of light on the cascade for at least one person.
