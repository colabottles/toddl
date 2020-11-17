---
title: Label in Name in WCAG 2.1
description: What is new in WCAG 2.1 Label in Name.
date: 2019-08-23
tags:
  - accessibility
  - a11y
  - wcag
  - speechtotext
  - screenreader
  - braille
layout: layouts/post.njk
---

## Label in Name

Imagine yourself sitting in front of your computer and you're filling out a very long form with a lot of imfornation. It is taking you a few minutes to gather the niformation needed to submit to Company XYZ we shall name them regarding a new product you are looking to purchase.

Then at the end of the form where the &laquo;Send&raquo; button is, you click the button and nothing happens. You click it again. Again nothing. You feverishly click and _still_ nothing happens. Now if you are like me, you tend to look at the source code to find out what is going on. So you check it out because you know as a developer to do so and the source code reads:

```html
<button id="send" aria-label="Send this form to us">Submit</button>
```

New in WCAG 2.1 is 2.5.3 Label in Name. (Level A). *&laquo;For user interface components with labels that include text or images of text, the name contains the text that is presented visually.&raquo;*

Now imagine you are using voice recognition software and you proceed to the part of the contact form where you have to send the content and the button doesn’t work when you say &laquo;Send.&raquo; It turns out it was visually labeled &laquo;send&raquo; but the `name` in the code was labeled &laquo;submit&raquo;. This is where the failure lies.

Most form controls are accompanied by a visible text **label** (although in 2020, *&laquo;55% of the 4.2 million form inputs identified were not properly unlabeled.&raquo;* either via `<label>`, `aria-label`, or `aria-labelledby`)

The intent of this Success Criterion (SC) is to ensure the words which a label has visually on the component are also the same words that are associated with the component programatically. this helps ensure that people using voice recognition software and other disabilities can rely on visible labels as a means to interact with components.

Those same controls have a programmatic name, which is also known as the accessible name (The accessible name is the name of a user interface element.) Users have a much easier time if the name of the label matches the accessible name. So if you have a button that reads, “OK” then you want the accessible name to also be &laquo;OK&raquo;.

When these match, users of speech recognition software can navigate by speaking the visible text labels of components such as links, buttons, and menus. Sighted users that use screen readers will also have a better experience if the text they hear is the text that matches the text they see on the screen.

Where they don’t match, speech-input users who attempt to use the visible text label as a means of navigation (e.g.: &laquo;move to First Name&raquo;) or selection will then be unsuccessful. This fails because the visible label spoken by the user does not match or is not part of  the accessible name that is enabled as part of the speech-input command.

Also, when the accessible name is different from the visible label, it may function as a hidden command that can be activated accidentally by speech-inout users. Success Criterion does not apply where a visible text label does not exist for a component.

Mismatches between programmatic names and visible labels can be more of a challenge to users with cognitive challenges. Mismatches create an additional cognitive load for speech-input users who must remember to say a speech command that is different from the visible label they see on a control.

Extra cognitive load is also created when a text-to-speech user needs to absorb and understand speech output that does not match the visible label.

To match the label text and accessible name with one another, it is important to determine which text should be considered the label for any component for any given control. There are often multiple text strings in a user interface that may be relevant to a control. There are reasons why that  the label in close proximity should be considered the text label.

* Immediately to the left of text inputs, dropdown boxes, and other widgets or components.
* Immediately to the right of checkboxes and radio buttons.
* Inside buttons or tabs or immediately below icons serving as buttons.

Punctuation and capitalization may also be considered optional if used in a symbolic manner. *&laquo;First Name&raquo;* should not be considered a failure of *&laquo;First Name:&raquo;* or *&laquo;Next&raquo;* should not be considered a failure of *&laquo;Next&hellip;&raquo;* and so on.

## Benefits

The benefits of using matching text labels with the corresponding accessible name. Speech-input users can directly activate controls on a page with fewer changes of focus that would catch them off-guard.

Text-to-speech users will have a more enjoyable experience because the labels they hear match the labels that are being used and match the visible text labels that they see on screen.

[You can read more here about understanding the criterion for Label in Name](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html) and [read about the Success Criterion here](https://www.w3.org/TR/WCAG21/#label-in-name) for more information and more in-depth explanation.

Remembering the people on the other side of the glass and being inclusive in our designs and our development processes ensures an open and inclusive web for everyone.
