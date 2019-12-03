---
title: Contrasting A11y with Color Contrast
description: How color contrast on the web seems to be a forgotten necessity.
date: 2019-12-02
tags:
  - accessibility
  - tools
layout: layouts/post.njk
---

### Contrasting A11y with Color Contrast

Imagine yourself as a person that does not have the best eyesight, whether it is refractive errors, cataracts, or glaucoma. Near-sighted, far-sighted, aging, presbyopia, astigmatism. Even an infection or temporary injury among many different types of visual impairments.

According to the World Health Organization (WHO); 1

    * Globally, at least 2.2 billion people have a vision impairment or blindness, of whom at least 1 billion have a vision impairment that could have been prevented or has yet to be addressed. 
    * This 1 billion people includes those with moderate or severe distance vision impairment or blindness due to unaddressed refractive error, as well as near vision impairment caused by unaddressed presbyopia. 
    * Globally, the leading causes of vision impairment are uncorrected refractive errors and cataracts. 
    * The majority of people with vision impairment are over the age of 50 years.

Now imagine that you are on the internet, you’re shopping around for information on going to a conference or you’re looking for a newsletter to sign up for that you want to learn something. Now imagine you run into something like this.

This can be daunting. This is where color contrast comes into the conversation. A conversation we really need to have. Still.

“Contrasting colors, also known as complementary colors, are colors from opposing segments of the color wheel. Colors that are directly across from one another on a basic color wheel provide maximum contrast.” 2 – Rachel R. Vasquez

Color contrast is defined as;
noun
1. psychol the change in the appearance of a colour surrounded by another colour; for example, grey looks bluish if surrounded by yellow.

I haven’t even mentioned types of color blindness until now either. There are seven total types of color blindness including color blindness (monochromacy) itself. www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/color-blindness/types-color-blindness

Designers should know this. Developers should understand this. We should all be working together to make sure that these levels of accessibility are met in our work. It is 2019 and we are still having this conversation, even more, now than ever it seems. Why aren’t we at a place where this is the lorem ipsum of accessibility testing? All it takes, is some really simple testing.

Color contrast checkers. There are many. I mean a lot, but there is one I use to make sure what I am doing uses the correct level of color contrasting so it meets WCAG 2.0 AA standards, it is the Colour Contrast Checker over at colourcontrast.cc/ 

Who Can Use is another fantastic contrast checker because it gives you a look at the different contrasts and how they stack up versus the many different kinds of visual impairments and deficiencies.

Color contrast checking is super important. Why? Do we really want to have instances in forms where we cannot read the form labels? With flat design being popular still, do we really want to be searching for a text field to input our information into a form we’re trying to send to the people that run the website?

The same goes for colors and text. Not just text. I want to be able to clearly see a form field so I can enter information into it. So imagine someone with a visual impairment trying to do this. A level of frustration that people with good vision and great eyesight do not have to experience.

Some colors look good to some people (designers, I’m looking at you) but will they good good to people that have deuteranomaly? What about people with tritanopia? Stargardt's, a type of macular degeneration that means people with it lose vision in the center of the retina. What about them? twoblindbrothers.com/pages/reveal. 3

The WCAG Contrast Checker is another option. contrastchecker.com/ as well as the WebAIM Contrast Checker webaim.org/resources/contrastchecker/

A minimum color contrast ratio recommended by ISO-9241-3 and ANSI-HFES-100-1988 is 3:1 for standard text and vision. The 4.5:1 ratio takes into account color deficiencies, low visual acuities, or loss of contrast sensitivity. 4.5:1 is also the chosen level for WCAG AA standards because “it compensated for the loss in contrast sensitivity usually experienced by users with vision loss equivalent to approximately 20/40 vision.” 4

The minimum level for WCAG AAA is 7:1 and the reason for that is “because it compensated for the loss in contrast sensitivity usually experienced by users with vision loss equivalent to approximately 20/80 vision. People with more than this degree of vision loss usually use assistive technologies to access their content (and the assistive technologies usually have contrast enhancing, as well as magnification capability built into them).” 5

These calculations are made for the size of body text and that a relaxed contrast ratio is provided for larger text, such as headings or any other text which is larger than the body copy. Remember to make link text stand out and underlined as well!

Chrome and Firefox have add-on’s for their respective browsers when it comes to color contrast checkers. 

The WAVE Web Extension wave.webaim.org/extension/ and the Axe Web Accessibility Extension chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd are a couple of browser extensions/add-on’s I use often.
WAVE wave.webaim.org and Deque www.deque.com/tools/ have great accessibility testing tools that not only check for color contrast issues, but all accessibility issues as well. 

If I have submitted a form, I would like to read the message after the submission. I don’t know about other folks, but I just like to read the information relayed to me after submission in case there is anything I shouldn’t miss or some tidbit of information that I need to know.

“Please check your inbox to confirm your subscription.”
“Your confirmation number will be sent to user@address.com”
“Your ticket number is 98765. Check your inbox to confirm receipt.”

Then why are we running into instances of this;

How is someone with good vision supposed to read that? How is someone with a vision impairment supposed to read that if they do not use a screen reader?

Take a minute and squint at the page you see. Can you read it clearly? Probably not.

What about temporary impairment or injury? Watery eyes by getting punched in the nose by an over-enthusiastic animal or child? An eye injury when you socked yourself in the eye trying to adjust the sun visor in your car? Use of just one eye for a short period of time? 

We as designers need to do better, to have a system of checks to make sure that color contrast is an integral part of the design process. We have learned through many mistakes we have seen over the last few years that accessibility reaches a far scope that sometimes is ignored by the masses, myself included.

How can we make sure we’re paying attention to color contrast when we design and develop websites? 

Make accessibility inclusive in the design and development process. If we’re including time to make sure what we’re doing is accessible right from the start, then we’re about halfway there. Even hire them onto your team!

Test with persons with vision impairments. If we can ask on Twitter for users of a specific demographic, then we can ask for persons to test with vision impairments. Even hire them onto your team!

Be sensible with colors. Ask yourself, “Would this color scheme appeal to others?” Use colors schemes that make sense. Pastels are okay, but not in a Miami Vice nightmare landscape bad way. And...

Use the tools! Color contrast checkers and accessibility tools. Use them, that’s why they are there! They will inform you of any issues before you push to production or go live. Saving you (or your company) time and money.

There is a lot of talk about accessibility and we have taken tremendous strides to making the web more accessible but we’re a long way away from it being all-inclusive. So let’s make the web more inclusive, but also remember how and why.

There is a broad spectrum of vision deficiencies and impairments we need to address during the design phase of the process. Making this process more inclusive by taking the time to make sure color contrast is at levels where it passes WCAG 2.0 AA (or even AAA) guidelines is very important.

Let’s remind ourselves of the fact we all don’t have good vision and embrace the process of color contrast and avoid unreadable and illegible websites.

We as architects of the web community must keep these folks in mind when it comes to color contrast with websites, fonts, and colors.

1. World Health Organization, www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment

2. Vasquez, Rachel R., Lane, Emily, What is Color Contrast? a11yproject.com/posts/what-is-color-contrast/

3. DeMars, Chris, Focusing on Focus, UX Burlington 2019, youtu.be/gUK0ieCJkRI?t=1397

4. W3C, Contrast (Minimum): Understanding SC 1.4.3 www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html

5. W3C, Contrast (Minimum): Understanding SC 1.4.3 www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html