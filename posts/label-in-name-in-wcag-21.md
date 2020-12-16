---
title: Label in Name in WCAG 2.1
description: What is new in WCAG 2.1 Label in Name.
date: 2020-12-15
tags:
  - accessibility
  - a11y
  - wcag
  - speechtotext
  - screenreader
  - braille
layout: layouts/post.njk
---

![A user sitting in front of a computer using a Braille reader.](https://res.cloudinary.com/colabottles/image/upload/v1605616284/images/accessibility.jpg "Photo by Sigmund on Unsplash.")

[WCAG 2.1 Recommendations rolled out in 2018](https://www.w3.org/TR/WCAG21/). It’s been a couple years now and there are some new Success Criterion. In this article, I will discuss [Label in Name](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html), which is how we visually label components. We’ll take a look at what some failure states look like, how to fix them, and examples of how to do them correctly.

## You lost me at Success Criterion&hellip;

Success Criterion are testable statements that aren’t technology-specific. They’re the baseline from which we determine whether our work is “accessible.” In this case, “Label in Name” is the thing being evaluated, which is among a whole slew of other criterion. WCAG 2.1 is the current version of the spec and “Label in Name” is item 2.5.3, indicating it is in the second category (“Operable”) of criterion, under the fifth section (“Input Modalities”) of that category, marked as the third item in the section.

WCAG 2.1 is backwards-compatible with WCAG 2.0, meaning it’s an extension of WCAG 2.0. Further, the releases of WCAG 2.1 and 2.2 are in conjunction with each other and they all work together.

## Label in Name

So, getting back to things, [2.5.3 Label in Name](https://www.w3.org/TR/WCAG21/#label-in-name) (Level A) is new and defined in the WCAG 2.1 Success Criterion. Here’s how it’s described:

> For user interface components with labels that include text or images of text, the name contains the text that is presented visually.

The intent of this Success Criterion (SC) is to ensure **the words which a label has visually on the component are also included in the words that are associated with the component programatically**. This helps ensure that anyone — whether it’s someone using voice recognition software or someone who is visually abled — can rely on labels to describe the intent of a component, or how to interact with it. The visual text label and the **programmatic name** do not have to be exact, mind you, but they should contain a common work that associates them (e.g., “Submit” with “Submit Now”).

The point is that there isn’t confusion, because of a discrepancy, between what is read and what is seen.

## Assistive technology in action

Let’s use the example of an HTML contact form. A user may use voice recognition software to fill out a form and come to the end where the form is submitted and the form is sent.

Say the label of the button and the visual text in the button are inconsistent:

```html
<form>
  <label>
    Message:
    <textarea name="message"></textarea>
  </label>

  <button aria-label="Submit">Send</button>
</form>
```

In the above example, **the button doesn’t function properly for assistive technology**. The button contains the text “Send” but its `aria-label` is “Submit.” This is where the failure lies. The visual label (“Send”) is inconsistent with the programmatic name (“Submit”), providing no association between the two.

When these match or have a common term, users of speech recognition software can navigate by speaking the visible text labels of components such as links, buttons, and menus. In this case, we could fix it by matching the label and the text. But since the `aria-label` adds no value, removing it altogether is a better fix:

```html
<form>
  <label>
    Message:
    <textarea name="message"></textarea>
  </label>

  <button>Send</button>
</form>
```

Sighted users that use screen readers will also have a better experience if the text they hear is the text that’s similar to the text they see on the screen.

When the label and visual text don’t match, speech-input users attempting to use the visible text label as a means of navigation (e.g. “move to First Name”) or selection will get stuck because the visible label spoken by the user does not match or is not part of the accessible name that is enabled as part of the speech-input command.

Also, when the accessible name is different from the visible label, it may function as a hidden command that can be activated _accidentally_ by speech-input users. SC does not apply where a visible text label does not exist for a component.

## Code in action

Here are three different failure states.

* [A problematic `<button>` element](https://codepen.io/colabottles/pen/QWKWmEK) where the spoken label and visual label have no association.
* [A label mismatch](https://codepen.io/colabottles/pen/poEoLPP) where the spoken text reads more content than the visual label does because of an “accessibly hidden” span.
* [An input with a spoken label](https://codepen.io/colabottles/pen/MWjWVXr) via `aria-labelledby`, which fails to establish a correlation between the spoken and visual label.

Again, these are all examples of poor practices, according to the 2.5.3 Label in Name SC.

> In 2020 the WebAIM Million project evaluated 4.2 million form inputs and found that 55% were improperly unlabeled, either via `<label>`, `aria-label`, or `aria-labelledby`.

When working with forms, most of us are pretty used to pairing a `<label>` with an `<input>` or some other form control. That’s awesome and a great way to indicate what the control does, but there’s also the control’s **programmatic name**, which is also known as the “accessible name” using an `aria-label`.

We get a better user experience when the name of the `<label>` can be associated with the programmatic (or accessible) name in the `aria-label`. For example, if we’re using “First Name” for an input’s `<label>`, then we probably want our `aria-label` to be “First Name” or something to that effect as well. **A failure to draw a connection between programmatic names and visible labels can be more of a challenge for users with cognitive challenges**. It requires additional cognitive load for speech-input users who must remember to say a speech command that is different from the visible label they see on a control. Extra cognitive load is also created when a text-to-speech user needs to absorb and understand speech output that can’t be connected to the visible label. These forms will submit, but it comes at a cost to accessibility and disabled users.

Here are those three examples from above fixed up!

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="colabottles" data-slug-hash="OJRPGYO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Label in Name: Ex 4 - Correct Usage of Label in Name">
  <span>See the Pen <a href="https://codepen.io/colabottles/pen/OJRPGYO">
  Label in Name: Ex 4 - Correct Usage of Label in Name</a> by Todd Libby (<a href="https://codepen.io/colabottles">@colabottles</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Text in Label specifics

Per the WCAG SC, text should not be considered a visible label if it is used in a symbolic manner instead of expressing it directly in human language. A rich text editor is a good example of this because an editor might use images as text (which is included in [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG21/Understanding/images-of-text)).

![A rich-text editor taken from the GitHub website.](https://res.cloudinary.com/colabottles/image/upload/v1608072283/images/rte.webp "GitHub's Rich-text editor")

To match the label text and accessible name with one another, it is important to determine _which_ text should be considered the label for any component for any given control. There are often _multiple_ text strings in a user interface that may be relevant to a control. [There are reasons](https://www.w3.org/WAI/GL/2016/WD-WCAG20-TECHS-20160105/G162) why the label in close proximity should be considered the text label. It’s about establishing a pattern of predictability for users interacting with a component. Those reason suggest that visible labels should be positioned:

* immediately to the left of text inputs, dropdown boxes, and other widgets or components.
* immediately to the right of checkboxes and radio buttons.
* inside buttons or tabs or immediately below icons serving as buttons.

![Labels to the left of inputs and dropdown select menus](https://res.cloudinary.com/colabottles/image/upload/v1608078060/images/Group-6a.jpg)
Labels to the left of inputs and dropdown select menus
![Labels to the right of checkbox and radio buttons](https://res.cloudinary.com/colabottles/image/upload/v1608078060/images/Group-7a.jpg)
Labels to the right of checkbox and radio buttons
![Labels inside or below a button, depending on the symbol](https://res.cloudinary.com/colabottles/image/upload/v1608078060/images/Group-8a.jpg)
Labels inside or below a button, depending on the symbol

Punctuation and capitalization may also be considered optional if used in a symbolic manner. For example, “First Name” is just fine instead of “First Name:” and “Next” is okay instead of “Next…” and so on.

Another thing to consider: components without a visual label are not considered by the WCAG SC.

## Proper labeling has its perks

The core benefit of matching a component’s labels with its corresponding accessible name is that it gives speech-input users the ability to activate controls on a page without having to change focus or make guesses between two different terms.

In the end, using clear, consistent terminology between what is seen and what is spoken provides a more enjoyable user experience — for everyone — because the labels that get read by assistive technologies match the visible labels that can also be seen and read. This is what we talk about with inclusive design — everyone wins and no one is left out.

## Summary

We just broke down some of the finer points of the WCAG 2.5.3 Success Criterion for labels in names. It sounds like a simple thing to follow. But as we’ve seen, there are situations where it’s not so clear-cut.

The goal of adhering to this criterion is, of course, to make our work accessible and inclusive for all people. The WCAG helps us know if we’re successful not only by providing guidelines, but by settings grades of compliance (A, AA, AAA, where AAA is the highest). Text in Label falls into the A grade, meaning it’s a base level of compliance. To earn the grade, the WCAG is [looking for](https://www.w3.org/TR/WCAG21/#label-in-name):

> […] [user interface components](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components) with [labels](https://www.w3.org/TR/WCAG21/#dfn-labels) that include [text](https://www.w3.org/TR/WCAG21/#dfn-text) or [images of text](https://www.w3.org/TR/WCAG21/#dfn-images-of-text), the [name](https://www.w3.org/TR/WCAG21/#dfn-name) contains the text that is presented visually.

We can test and make certain that our code is complete and correct by looking at the source code of the site, using a browser’s DevTools, such as Chrome or Firefox, or running an accessibility audit using such tools as the [WAVE browser extension](https://wave.webaim.org/extension/) (Chrome and Firefox) and [Axe from Deque Systems](https://www.deque.com/axe/browser-extensions/) (Chrome).

In short, there are real people on the other side of the glass and there are things we can do in our code and designs to help them enjoy interacting with the components we make. Text in Label is just one of many criterion outlined in the WCAG and, while it may seem like a small detail, adhering to it can make a big impact on our users.
