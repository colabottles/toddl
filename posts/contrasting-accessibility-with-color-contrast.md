---
title: Contrasting Accessibility with Color Contrast
description: Bringing color contrast in accessibility to the table and why we need to do more checking of color contrast in our work on the web.
date: 2020-11-21
tags:
  - accessibility
  - tools
  - color
  - design
  - colorcontrast
layout: layouts/post.njk
---

I came across a website that had some significant visual issues pertaining to color contrast. These visual issues made it difficult, if not impossible, to read the website’s content. This led me to wonder how people with visual impairments and/or use assistive technology might navigate these issues.

How do we make it better as a community of designers and developers? We must think about these folks and this is where the need for accessibility in the process comes in. While accessibility encompasses a lot of different aspects of design and development, I am focusing right now solely on color contrast in this article.

How do we make it better as a community of designers and developers? We must think about these folks and this is where the need for accessibility in the process comes in. While accessibility encompasses a lot of different aspects of design and development, I am focusing right now solely on color contrast in this article.

How do we improve accessibility for the visually impaired? According to the World Health Organization (WHO); [1]

    - Globally, at least 2.2 billion people have a vision impairment or blindness, of whom at least 1 billion have a vision impairment that could have been prevented or has yet to be addressed.
    - Of these 1 billion people, this includes those with moderate or severe distance vision impairment or blindness due to unaddressed refractive error, as well as near vision impairment caused by unaddressed presbyopia.
    - Globally, the leading causes of vision impairment are uncorrected refractive errors and cataracts.
    - The majority of people with vision impairment are over the age of 50 years.

If your website's target viewers are under age 50, please do not assume that visual impairments do not apply, or that accessibility is not important for all of your viewers. Imagine, visually impaired or not, trying to navigate something like this:

![A blue form to submit a subscription to an email newsletter](https://res.cloudinary.com/colabottles/image/upload/v1585002459/images/si1_spgbxn.png)

Color contrast is defined as;

**noun**

1. the change in the appearance of a colour surrounded by another colour; for example, grey looks bluish if surrounded by yellow.

> “Contrasting colors, also known as complementary colors, are colors from opposing segments of the color > wheel. Colors that are directly across from one another on a basic color wheel provide maximum contrast.” [2]

There are at least 2.2 billion people who suffer from a vision impairment or some form of color blindness and I'll share with you some of those types of color blindness and vision impairments below.

#### TYPES OF COLOR BLINDNESS

There are seven total types of color blindness including monochromacy (the absence of color perception).

##### Red-green color blindness

The most common type of color blindness makes it difficult to tell the difference between red and green. There are four types of red-green color blindness;

_Deuteranomaly:_ This is the most common type of red-green color blindness. This type is mild and usually does not hinder normal viewing or activities. It makes green look more red.

_Protoanomaly:_ This makes red look more green and less bright. This is also mild as well.

_Protonopia_ and _deutueranopia:_ Both of these make it so that you cannot tell the difference between red and green at all.

##### Blue-yellow color blindness

This less-common type of color blindness makes it difficult for people to tell the difference between blue and green, and red and yellow. There are two types of blue-yellow color blindness;

_Tritananomaly:_ Which makes it hard to tell the difference between blue and green, and red and yellow.

_Tritanopia:_ Is when you are unable to tell the difference between blue and green, purple and red, and pink and yellow. Colors also look a lot less bright.

##### Complete Color Blindness

_Monochromacy_: Is also known as Complete Color Blindness. Where you cannot see colors at all. This does not mean a person is entirely blind, it means they cannot see colors.

Men have a much higher risk than women for color blindness. You’re also more likely to have color blindness if you: [3]

    - Have a family history of color blindness.
    - Have certain eye diseases, like glaucoma or age-related macular degeneration. (AMD)
    - Have certain health problems, like diabetes, Alzheimer’s disease, or multiple sclerosis. (MS)
    - Take certain medicines.
    - Are white.

##### Stargardt's

Stargardt's, a type of macular degeneration that means people who have it, lose vision in the center of the retina. It is an inherited disorder of the retina. A disease which causes vision loss during childhood or adolescence, although it may not be noticed until adulthood. [Here is an example of a site](https://twoblindbrothers.com/pages/reveal) that allows visitors to see through the eyes of the founders, and what they see when they navigate the internet.

> Accessibility should be a top priority for all users. Designers and developers can use color contrast checkers.

#### THE TOOLS

Color contrast checkers. There are many. I mean *a lot*. There is one I use to make sure what I am doing uses the correct level of color contrasting, it is [Lea Verou’s Color Contrast Checker](https://contrast-ratio.com/).

![Lea Verou's Constrast Ratio website for color contrast checking](https://res.cloudinary.com/colabottles/image/upload/v1605994825/images/verou-cc.png)

Lea’s color contrast checker can take inputs using CSS Named Colors: red, blue, green, yellow, rebeccapurple, etc. RGBa colors: (255, 111, 43, 0.75) HSLa colors: (177, 54%, 17%, 0.37) or CSS Hex Values: (#108535).

Alpha, the opacity or transparency of a color, will impact contrast. Alpha is presented as a number between 0 (100% transparent) and 1 (100% opaque). Decreasing the alpha for text will typically reduce the contrast because you are allowing an underlying color to bleed through.

[Who Can Use](https://whocanuse.com) is another fantastic contrast checker that is a staple in my accessibility testing most definitely. It gives you a look at the different contrasts and how they stack up versus the many different kinds of visual impairments.

[The WCAG Contrast Checker](https://contrastchecker.com/) is another option.

![The WCAG Contrast Checker](https://res.cloudinary.com/colabottles/image/upload/v1585002465/images/wcagcc_g30ecf.png)

Along with the WebAIM Color Contrast Checker.

![WebAIM Contrast Checker](https://res.cloudinary.com/colabottles/image/upload/v1585002466/images/webaimcc_xmujlm.png)

[The WAVE Web Extension](https://wave.webaim.org/extension/) and the [Axe Web Accessibility Extension](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd) are a couple of browser extensions/add-on's I use among other color contrast checking sites and tools.

[WAVE](https://wave.webaim.org/) and [Deque](https://www.deque.com/tools/) have great accessibility testing tools that not only check for color contrast issues, but all accessibility issues as well. Chrome and Firefox have add-on's for their respective browsers when it comes to color contrast checkers.

Color contrast checking is very important. Users want to be able to easily access text fields for forms and easily be able to read text against backgrounds.

Relaying information to the user is crucial. If you are not effectively relaying information to the user, then that is not good UX, nor is it good accessibility.

Some colors look good to some people (designers, I'm looking at you) but will they look good to people that have deuteranomaly? What about people with tritanopia? How is that information getting to them with your color scheme?

#### WCAG AA &amp; AAA DEFINITIONS

> "So what is an acceptable level of color contrast?"

A minimum color contrast ratio recommended by ISO-9241-3 and ANSI-HFES-100-1988 is 3:1 for standard text and vision. The 4.5:1 ratio takes into account color deficiencies, low visual acuities, or loss of contrast sensitivity. 4.5:1 is also the chosen level for WCAG AA standards because;

> “it compensated for the loss in contrast sensitivity usually experienced by users with vision loss equivalent to approximately 20/40 vision.” [4]

The minimum level for WCAG AAA is 7:1 and the reason for that is;

> “because it compensated for the loss in contrast sensitivity usually experienced by users with vision loss equivalent to approximately 20/80 vision. People with more than this degree of vision loss usually use assistive technologies to access their content (and the assistive technologies usually have contrast enhancing, as well as magnification capability built into them).” [5]

These calculations are made for the size of body text and a relaxed contrast ratio is provided for larger text, such as headings or any other text which is larger than the body copy. Remember to make link text stand out and underlined as well!

While these are the minimum and suggested ratios for each level (AA & AAA), interface components do not have the same color contrast ratios. While text is 4.5:1 in WCAG AA, interface components are 3:1.

Text requires a higher contrast because people need to read it. Interface components do not and therefore have a lower standard.

#### FORMS

Confirmation messages are important. They confirm that the information requested was submitted; and provide other pertinent information or other instructions. Contrast in forms is crucial to relay that information to users. For example;

> “Please check your inbox to confirm your subscription.”

or&hellip;

> “Your confirmation number will be sent to user@address.com”

or&hellip;

> “Your ticket number is 98765. Check your inbox to confirm receipt.”

![A form submission message in white font on a neon yellow background](https://res.cloudinary.com/colabottles/image/upload/v1585002437/images/ewww_xczuk2.png)

#### WHAT WE CAN DO

We as designers and developers need to do better, to have a system of checks to make sure that color contrast is an integral part of the design process. We have learned through many mistakes we have seen over the last few years that accessibility reaches a far scope that sometimes is ignored by the masses, myself included.

How can we make sure we’re paying attention to color contrast when we design and develop websites?

**Test with persons with vision impairments.** If we can ask on Twitter for users of a specific demographic, then we can ask for persons to test with vision impairments. Invite persons with visual impairments to test the accessibility of your website.

**Make accessibility inclusive in the design and development process.** If we are including time to make sure what we are doing right from the start is accessible, then we are halfway there.

**Be sensible with colors.** Ask yourself, “Would this color scheme work for others with vision impairments?” Use color schemes and palettes that work and that make sense. Pastels are okay, if the color they are on works well with the color of the text. And...

**Use the tools!** Color contrast checkers and accessibility tools. Use them, that's why they are there! They will inform you of any issues before you push to production or go live, saving you (or your company) time and money.

#### SUMMARY

There is a lot of talk about accessibility and we have taken tremendous strides to making the web more accessible but we’re a long way from it being all-inclusive. So let's make the web more inclusive, but also remember how and why.

There is a broad spectrum of vision deficiencies and impairments we need to address during the design phase of the process. Making this process more inclusive by taking the time to make sure color contrast is at levels where it passes WCAG 2.0 AA (or even AAA) guidelines is very important.

Let’s remind ourselves of the fact everyone doesn’t have ‘perfect’ or good vision. Embrace the process of color contrast, avoid illegible parts of websites that are created and unreadable like in the examples I provided.

[Jeffrey Zeldman summarized it](https://www.zeldman.com/2019/12/01/bluebeanieday2019/) in his post on Blue Beanie Day (November 30th) when he wrote;

> “...our industry as a whole thinks less and less about accessibility (not that we ever had an A game on the subject), and talks less and less about progressive enhancement, preferring to chase the ephemeral goal posts of over-engineered solutions to non-problems.”[6]

We as architects and craftspersons of the web community must keep everyone in mind when it comes to color contrast with websites, apps, fonts, and colors.

Clear color contrast is just the beginning, but it’s one of the ways to start building, creating, and handcrafting great, inclusive, accessible sites for all.

1. [World Health Organization](www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment)
2. Vasquez, Rachel R., Lane, Emily, [What is Color Contrast?](a11yproject.com/posts/what-is-color-contrast/)
3. [National Eye Institute, Types of Color Blindness](www.nei.nih.go/learn-about-eye-health/eye-conditions-and-diseases/color-blindness/types-color-blindness)
4. W3C, Contrast (Minimum): [Understanding SC 1.4.3](www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)
5. W3C, Contrast (Minimum): [Understanding SC 1.4.3](www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)
6. Zeldman, Jeffrey, [Another Blue Beanie Day](www.zeldman.com/2019/12/01/bluebeanieday2019/), 1 December, 2019,
