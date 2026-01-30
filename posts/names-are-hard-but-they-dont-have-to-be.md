---
title: Names Are Hard But They Don't Have To Be
description: A comprehensive guide to handling names in web applications with respect to people.
date: 2026-01-22 ## YYYY-MM-DD
tags:
  - ## post  LEAVE THIS TAG HERE
  - naming
  - coding
  - development
layout: layouts/post.njk
image: https://res.cloudinary.com/colabottles/image/upload/v1731376889/todd-social-card.png
bskyPostId: 3lauorp3v4k2g
---

## The $10,000 Bug

In 2015, a major airline's booking system rejected a passenger's name because it contained an apostrophe. The passenger—who had flown with them dozens of times before—missed their flight. The airline had to refund the ticket and compensate for the inconvenience. Total cost: over $10,000.

The name? **O'Brien**.

One of the most common Irish surnames in the world, rejected by a validation rule that probably took someone five seconds to write.

This isn't an isolated incident. Every day, millions of people around the world encounter forms that reject their names, corrupt their characters, or force them into boxes that don't fit their cultural identity. It's frustrating for users, expensive for companies, and completely avoidable.

Take for instance [this article](https://www.fodors.com/news/hotels/how-to-deal-with-booking-problems-because-of-special-characters-in-your-name)
 where a woman was denied a hotel room for having an apostrophe in her name! This is the kind of laziness that I find more than off-putting.

So I'm going to show you how to build forms that respect the diversity of human names while maintaining security and data integrity. Because names&mdash;something we think is simple&mdash;are actually one of the hardest problems in software development. Even harder, is the fact that most devs cannot be bothered to learn and implement these inclusive patterns.

## Why This Matters

Before we dive into the technical details, let's establish why getting names right is so critical:

**The Scale:** There are over 7 billion people on Earth, speaking thousands of languages, writing in hundreds of scripts, and following countless cultural naming conventions. Your form isn't just for people like you—it's potentially for **everyone**.

**First Impressions:** Your form is often the first real interaction someone has with your product. When that form rejects their name, you're not just creating a technical error—you're telling them "this product wasn't built for people like you."

**Business Impact:** Failed form submissions mean:

- Lost customers and revenue
- Increased support tickets and costs
- Damaged brand reputation
- Potential legal issues (discrimination claims)
- Inaccessible services for entire populations

**It's Solvable:** The good news is that handling names correctly isn't actually that hard once you understand the requirements. The bad news is that most developers have absorbed incorrect assumptions about how names work and don't want to put the work into it whether it be learning regex patterns or just plain laziness.

## Real Examples

Let me show you some real examples I've seen and talked to people about (company names redacted to protect the guilty):

### Example 1: The Length Validator

A major social media platform rejected the name "José" because it required a minimum of 4 characters. José is one of the most common Spanish names in the world, used by over 6 million people in the United States alone. It is a 4-letter word. So what the hell is going on? A dev couldn't be bothered to get out of their own little bubble to make this work and a manager was too busy with paperwork and meetings to actually check and see what was going on. Peer reviews didn't happen because everyone had their heads down and faces in a keyboard. No accountability.

### Example 2: The Diacritic Stripper

An online retailer automatically stripped accent marks from names, turning "Müller" into "Muller" and "François" into "Francois." When customers received packages addressed to "Muller" instead of their actual name, delivery drivers couldn't find them in apartment directories. Again, a fundamental breakdown in systems, checks and balances, and accountability for devs who could not be bothered to take into consideration names and their origins.

### Example 3: The Character Set Disaster

A banking application using an outdated database encoding turned Chinese names into question marks. Users named 张伟 (Zhang Wei, one of the most common Chinese names) saw their bank statements addressed to "???." So why the absolute failure by financial institutions? Because someone couldn't be bothered to fix it or even find out if it needed fixing. (It needed to be fixed).

### Example 4: The Punctuation Police

A government service portal rejected names containing apostrophes or hyphens, making it impossible for people named D'Angelo, Mary-Kate, or Jean-Luc to use the service. The error message? "Special characters are not allowed." Because a dev just did not know how to do something. Plain and simple. Instead of making it work and educating themselves, they took the easy way out and closed the door on _many_ people. Great attitude to have in a government job, and par for the course apparently.

### Example 5: The Western Format Enforcer

An HR system required separate "first name" and "last name" fields with no way to leave either blank. This made the system completely unusable for:

- Indonesian users (many have single names like Sukarno)
- Icelandic users (who use patronymics, not surnames)
- Chinese users (whose family name comes first)
- Anyone else who doesn't follow Western naming conventions

These aren't edge cases. Combined, these examples affect **billions of people**.

"Well! People always have two names, right?" No Kevin, no they do not. Head in the sand syndrome is a horrible affliction.

So yes, I am being critical. **Very critical** because this _still_ goes on to this day. Just this morning I read a post on Bluesky about this very topic, so I had to write this. Because as long as the Web has (questionably) existed, this has been prevalent (especially with the advent of AI, LLM's and 'vibe coding'). Do better. Here's how!

## Understanding Names Globally

To build better forms, we first need to understand how names actually work around the world. Let's bust some myths. (Puts his Mythbusters shirt on).

### Myth 1: Everyone Has a First Name and Last Name

**Reality:** Naming conventions vary wildly across cultures. This is about respect to why this matter which we covered at the start of this post.

**Indonesian Names:** [Many Indonesians have a single name with no family name](https://www.ibtimes.com/sukarno-suharto-megawati-why-do-some-indonesians-have-only-one-name-1408204). Famous examples include Sukarno and Suharto, former presidents of Indonesia. When forced to fill out forms with separate first/last name fields, they often have to make something up or repeat their name in both fields.

**Icelandic Patronymics:** Icelanders don't use family names. Instead, [they use patronymics](https://www.icls.edu/blog/icelandic-naming-system)—a given name plus their father's (or sometimes mother's) name with "son" or "dóttir" added. The singer Björk's full name is Björk Guðmundsdóttir, meaning "Björk, daughter of Guðmundur." If she had a son, he might be named "Jón Björksson"—note that the family doesn't share a surname.

**Chinese Naming Convention:** In Chinese culture, [the family name comes first](https://culturalatlas.sbs.com.au/chinese-culture/chinese-culture-naming), followed by the given name. Zhang Wei means Family Name: Zhang, Given Name: Wei. Many Chinese people adopt a Western order when dealing with international contexts, but this can create confusion and inconsistency.

**Spanish Naming:** In Spanish-speaking cultures, [people typically have two surnames](https://www.icls.edu/blog/why-do-people-in-spanish-speaking-countries-have-so-many-last-names)—one from each parent. María García López has García from her father and López from her mother. When she marries, she might add her husband's surname, becoming María García López de Martínez.

**Burmese Names:** People from Myanmar typically have [no family name at all](https://culturalatlas.sbs.com.au/myanmar-burmese-culture/burmese-myanmar-culture-naming) and use a system where names indicate generation and personal identity.

**Greek Names:** It is traditional for Greeks to name their children after the grandparents, resulting in a continuation of names in the family line. [Greek surnames are usually patronymics](https://www.greece.com/info/names/greek_names/), meaning that they were originally formed by a male name. However, other sources may also exist, like regarding occupation, characteristics and are also dependent on the location where the surname was formed. This includes names such as Μαρία (Maria) and Γιάννης (Yiannis), alongside names such as, Βύρων (Byron).

**Gaelic Names:** Written Irish is first attested in [Ogham inscriptions](https://www.worldhistory.org/Ogham/) from the 4th century AD.  Irish Gaelic (or Scottish Gaelic) names [can be traced back to the earliest Celtic traditions](https://www.libraryireland.com/Names.php/). Many names come from ancient Irish mythology or folklore, others are based on musicality, folk heroes, or have spiritual roots. Examples are Áine (awn-ye) - "radiance, splendor, brilliance", Siobhán (shiv-on), Róisín – “little rose”, or Ó Conchobhair (O’Connor) – “descendant of Conchobhar”.

### Myth 2: Names Fit in ASCII

ASCII contains 128 characters, including uppercase and lowercase English letters. That's it. No accents, no umlauts, no characters from non-Latin scripts.

Here are names that don't fit in ASCII:

- **Vietnamese:** Nguyễn (with tone marks)
- **Arabic:** محمد (right-to-left script)
- **Chinese:** 王 (logographic characters)
- **German:** Müller (umlaut)
- **Hawaiian:** Kealiʻi (ʻokina - the glottal stop)
- **French:** François (cedilla)
- **Spanish:** José (acute accent)
- **Polish:** Łukasz (l with stroke)
- **Turkish:** Çağlar (c with cedilla)
- **Czech:** Dvořák (r with caron)
- **Greek:** Matthew, Ματθαῖος (Polytonic (multi-accented) script)
- **Gaelic:** Pádraig (acute accent)

These aren't exotic edge cases—they're normal names used by hundreds of millions of people every single day. **ADD THEM!**

### Myth 3: You Can Validate Names with Simple Rules

Names can be:

**Very Short:** [The surname "O" is common in China and Korea](https://forebears.io/surnames/o). Single-letter names exist in many cultures.

**Very Long:** [Wolfeschlegelsteinhausenbergerdorff is a real German surname](https://surnames.behindthename.com/name/wolfeschlegelsteinhausenbergerdorff/submitted). Thai names can easily exceed 20 characters. The longest personal name on record is 747 characters.

**All Consonants:** [Ng is a Chinese surname](https://www.igenea.com/en/surnames/n/ng). Try pronouncing that according to English rules.

**Numbers:** In some jurisdictions, people can legally change their name to [include numbers](https://lawexpression.com/can-you-have-a-number-in-your-legal-name/). For example, [Jennifer 8. Lee](https://www.jennifer8lee.com/) is a legally registered name.

**Special Characters:** Apostrophes (O'Brien), hyphens (Jean-Luc), spaces (von Braun), and periods (St. John) all appear in legitimate names.

**Capitalization Rules:** Names like "McDonald," "MacLeod," "von Neumann," and "de la Cruz" have internal capitalization that you can't predict with simple rules.

### Myth 4: You Need to Split Names into Fields

This assumption causes immense problems because:

1. Many cultures don't have a clear first name/last name distinction
2. The meaning of "first" and "last" varies by culture
3. Some people have multiple middle names or no middle name
4. Asking people to incorrectly split their name is disrespectful
5. Even "how should we address you?" requires cultural context

The Icelandic phone book, for example, is sorted by first name because that's the most meaningful ordering in their culture.

So why are we still sticking with the same old song and dance pattern of firstname/lastname fields (especially in the US) when some people in the world may not have a qualifier as we talked about earlier? Especially if your company deals with international businesses and people (internationalization-i18n anyone?)

## The Technical Solution

Now that we understand the problem (hopefully), let's look at how to solve it properly.

### 1. Input Validation: Be Permissive

The golden rule: **If you're not sure whether to accept something, accept it. Your users know their own names better than your regex does.** I cannot stress that enough. This isn't **your** form! Stop treating it as such! This brings me to my saying, "It works on my machine so it must be correct!" Nope. No it is not.

Here's what not to do:

```html
<!-- Bad: ASCII only -->
<input
  type="text"
  name="name"
  pattern="[A-Za-z]+"
  title="Letters only"
>
```

This rejects **billions** of legitimate names.

Here's a much better inclusive and accessible pattern:

```html
<!-- Good: Unicode-aware -->
<input
  type="text"
  name="name"
  pattern="[\p{L}\p{M}\s'-.]+$"
  maxlength="150"
  title="Please enter your name"
>
```

Let's break down that regex pattern:

- `\p{L}` - Matches any Unicode letter from any language
- `\p{M}` - Matches any Unicode mark (diacritics, accents, tone marks)
- `\s` - Matches whitespace (spaces, which can appear in names)
- `'-.` - Matches apostrophes, hyphens, and periods (common in names)
- `+` - One or more of the above
- `$` - End of string

Note: The `\p{}` syntax works in modern JavaScript regex with the `u` flag. For older browsers, you may need to be even more permissive or use a library.

Even this pattern might be too restrictive. A truly inclusive approach would be:

```javascript
function isValidName(name) {
  const trimmed = name.trim();

  // Check for reasonable length
  if (trimmed.length < 1 || trimmed.length > 255) {
    return false;
  }

  // Block only dangerous characters:
  // - Control characters (0x00-0x1F, 0x7F)
  // - HTML/XML special chars that could enable injection
  if (/[\x00-\x1F\x7F<>]/.test(trimmed)) {
    return false;
  }

  // Everything else is allowed
  return true;
}
```

This approach blocks only characters that pose actual security risks while accepting virtually all legitimate names.

### 2. Database Design

Your database needs to support the full range of Unicode characters. (If it doesn't then maybe it is time it does.)

**Bad:**

```sql
CREATE TABLE users (
  name VARCHAR(50) CHARACTER SET latin1
);
```

This limits you to Western European characters and will corrupt or reject everything else. We are trying to get people to **not** do this.

**Good:**

```sql
CREATE TABLE users (
  name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
);
```

Important Notes:

- **utf8mb4** is the correct encoding for MySQL/MariaDB (the plain "utf8" in MySQL is actually a limited subset)
- **utf8mb4_unicode_ci** provides case-insensitive collation for sorting
- **VARCHAR(255)** gives generous space for names (adjust as needed for your use case)

For PostgreSQL:

```sql
CREATE TABLE users (
  name VARCHAR(255)
);
```

PostgreSQL uses UTF-8 by default, which is correct.

For MongoDB, JavaScript, and most modern systems, UTF-8 support is built-in, but always verify your configuration.

### 3. Form Field Design

The best approach is to use a single name field when possible:

```html
<label for="full-name">Full name</label>
<input
  id="full-name"
  type="text"
  name="full_name"
  maxlength="150"
  autocomplete="name"
  required
>
<span class="help-text">Your name as it appears on official documents</span>
```

Benefits:

- Works for all naming conventions
- Doesn't force incorrect splitting
- Respects how people identify themselves
- Simpler for users
- Easier to maintain

**When you must split names** (for example, government forms with legal requirements):

```html
<fieldset>
  <legend>Your name</legend>

  <label for="given-name">Given name(s)</label>
  <input
    id="given-name"
    type="text"
    name="given_name"
    autocomplete="given-name"
  >

  <label for="family-name">Family name(s)</label>
  <input
    id="family-name"
    type="text"
    name="family_name"
    autocomplete="family-name"
  >

  <p class="help-text">
    If your name doesn't fit this format, enter your full name
    in the first field and leave the second field blank.
  </p>
</fieldset>
```

Notice:

- Using "given name" and "family name" instead of "first" and "last"
- Neither field is required
- Clear help text explaining what to do if the format doesn't fit
- Proper autocomplete attributes for browser assistance

### 4. The Preferred Name Pattern

For many applications, you can solve multiple problems at once by asking for both legal name and preferred name:

```html
<fieldset>
  <legend>Your name</legend>

  <label for="legal-name">Legal name</label>
  <input
    id="legal-name"
    type="text"
    name="legal_name"
    autocomplete="name"
    required
  >
  <span class="help-text">As it appears on official documents</span>

  <label for="preferred-name">Preferred name (optional)</label>
  <input
    id="preferred-name"
    type="text"
    name="preferred_name"
  >
  <span class="help-text">What you'd like us to call you</span>
</fieldset>
```

This approach:

- Accommodates legal requirements
- Respects personal identity
- Handles nicknames and chosen names
- Works across cultures
- Supports transgender users who may use a different name than their legal name
- Allows for informal names or anglicized versions

### 5. Backend Validation

Your server-side validation should match your client-side approach:

```javascript
function validateName(name) {
  // Don't do this!!!
  if (!/^[A-Za-z\s]+$/.test(name)) {
    return { valid: false, error: "Name can only contain letters" };
  }

  // Do this instead!
  const trimmed = name.trim();

  if (trimmed.length < 1) {
    return { valid: false, error: "Please enter your name" };
  }

  if (trimmed.length > 255) {
    return { valid: false, error: "Name is too long" };
  }

  // Block control characters and HTML/XML special chars
  if (/[\x00-\x1F\x7F<>]/.test(trimmed)) {
    return {
      valid: false,
      error: "Name contains invalid characters"
    };
  }

  return { valid: true };
}
```

Additional security considerations:

```javascript
// Sanitize for display (prevent XSS)
function sanitizeForDisplay(name) {
  return name
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// For SQL queries, use parameterized queries
// Never concatenate user input directly
const query = 'SELECT * FROM users WHERE name = ?';
db.query(query, [userName]);
```

### 6. Display and Formatting

**Never automatically transform names:**

```javascript
// Bad: This breaks names like McDonald, von Neumann, de la Cruz
function formatName(name) {
  return name.toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Good: Display exactly as entered
function displayName(name) {
  return name;
}
```

The only acceptable transformation is trimming leading/trailing whitespace.

### 7. Sorting and Searching

Sorting names across languages requires locale-aware collation:

```javascript
const names = ['Müller', 'Möller', 'Mueller', 'Moeller', 'Zhao', 'Zhang'];

// Bad: ASCII sort gives unpredictable results for non-ASCII
names.sort();

// Good: Locale-aware sort
names.sort((a, b) => a.localeCompare(b, 'de-DE'));
```

For search, consider using full-text search with proper language analyzers:

```javascript
// Use a library like ElasticSearch or PostgreSQL full-text search
// that understands Unicode and language-specific rules

// Example: PostgreSQL with unaccent extension
SELECT * FROM users
WHERE unaccent(name) ILIKE unaccent('%' || $1 || '%');
```

## Testing Strategy

Testing names properly requires a comprehensive test suite with real-world examples.

### Essential Test Cases

Your test suite should include:

```javascript
const testNames = [
  // Basic Latin with punctuation
  "O'Brien",
  "Mary-Kate",
  "St. John",
  "von Neumann",
  "de la Cruz",

  // Accented Latin characters
  "José García",
  "François",
  "Müller",
  "Dvořák",
  "Łukasz",

  // Non-Latin scripts
  "张伟",           // Chinese
  "محمد",          // Arabic
  "Nguyễn",        // Vietnamese
  "Παύλος",        // Greek
  "Владимир",      // Cyrillic
  "ธนา",           // Thai

  // Special cases
  "Kealiʻi",       // Hawaiian (ʻokina)
  "Sukarno",       // Mononym
  "X Æ A-XII",     // Unusual characters
  "O",             // Single character

  // Edge cases
  "Jean-François D'Aubigny de La Tour",  // Long with multiple hyphens
  "Maria García López de Martínez",      // Spanish double surname
  "Nguyễn Tấn Dũng",                     // Vietnamese with tone marks
];

describe('Name validation', () => {
  testNames.forEach(name => {
    it(`should accept ${name}`, () => {
      expect(validateName(name).valid).toBe(true);
    });
  });

  it('should reject empty names', () => {
    expect(validateName('').valid).toBe(false);
  });

  it('should reject names with HTML', () => {
    expect(validateName('<script>alert("xss")</script>').valid).toBe(false);
  });
});
```

### Manual Testing Checklist

Beyond automated tests, manually test your forms:

- ✓ Copy-paste names from different scripts
- ✓ Test with a screen reader
- ✓ Try names with various combinations of special characters
- ✓ Verify database storage and retrieval
- ✓ Check email generation and display
- ✓ Test PDF generation if applicable
- ✓ Verify sorting and searching work correctly

### Real User Testing

The best way to catch issues is to test with people who have diverse names:

- Recruit testers from different cultural backgrounds
- Ask employees with non-ASCII names to test
- Run a bug bounty specifically for name handling issues
- Monitor support tickets for name-related problems

## Common Questions and Edge Cases

### "What about legal requirements?"

Some forms genuinely need to match government formats. In these cases:

1. Explain why you need the specific format
2. Provide clear instructions
3. Offer a way to contact support if their name doesn't fit
4. Consider storing both a legal name (in required format) and actual name (as they write it)

### "How do I handle sorting?"

Use locale-aware collation in your database and `localeCompare()` in JavaScript. For international applications, let users choose their preferred locale for sorting.

### "What about performance?"

Unicode-aware regex and collation are slightly slower than ASCII operations, but the difference is negligible in modern applications. Don't optimize prematurely—correctness matters more than nanoseconds.

### "Should I use a name validation library?"

Most name validation libraries are too restrictive. If you use one, verify it:

- Accepts all Unicode letters
- Doesn't enforce Western name formats
- Has been tested with diverse real names
- Is actively maintained

Libraries like `validator.js` can help with basic sanitization, but their name validation often falls short.

### "How do I handle display names vs. legal names?"

Use the preferred name pattern shown earlier. Store both and use the preferred name for all user-facing interactions, falling back to legal name only when legally required.

### "What about email addresses?"

Email addresses have stricter rules defined by RFC 5321. The local part (before @) can contain letters, numbers, and certain special characters. Handle email validation separately from name validation.

### "Should I allow emoji in names?"

Some jurisdictions now allow emoji in legal names. Unless you have a specific reason to block them, accept emoji. They're valid Unicode characters.

## Accessibility Considerations

Handling names correctly intersects with web accessibility:

### Proper Labels

```html
<!-- Good: Explicit label association -->
<label for="name-input">Full name</label>
<input id="name-input" type="text" name="name">

<!-- Bad: No label or implicit association -->
<input type="text" name="name" placeholder="Enter name">
```

### Error Messages

```html
<label for="name">Full name</label>
<input
  id="name"
  type="text"
  name="name"
  aria-describedby="name-error"
  aria-invalid="true"
>
<span id="name-error" role="alert">
  Please enter your name
</span>
```

### Help Text

Provide clear, visible help text for complex fields:

```html
<label for="name">Legal name</label>
<input
  id="name"
  type="text"
  name="name"
  aria-describedby="name-help"
>
<span id="name-help" class="help-text">
  Enter your name exactly as it appears on your passport or ID
</span>
```

## Implementation Roadmap

Ready to fix your forms? Here's a practical implementation plan:

### Phase 1: Audit (1-2 days)

1. Find all name input fields in your application
2. Check database character set and collation
3. Review validation rules
4. Test with non-ASCII names
5. Document problems found

### Phase 2: Database Migration (1-3 days)

```sql
-- Check current encoding
SHOW CREATE TABLE users;

-- Backup first!
mysqldump -u user -p database > backup.sql

-- Migrate to UTF-8
ALTER TABLE users
  MODIFY COLUMN name VARCHAR(255)
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
```

### Phase 3: Validation Updates (2-5 days)

1. Update backend validation to accept Unicode
2. Update frontend validation patterns
3. Remove overly restrictive rules
4. Add comprehensive test cases
5. Update error messages

### Phase 4: UI Improvements (2-3 days)

1. Consider consolidating split name fields
2. Add preferred name fields where appropriate
3. Update help text
4. Improve error messages
5. Test with screen readers

### Phase 5: Monitoring (Ongoing)

1. Track validation failures
2. Review support tickets
3. Monitor user feedback
4. Keep test suite updated with new cases

## Resources and Further Reading

### Essential Reading

- Falsehoods Programmers Believe About Names by Patrick McKenzie: <https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/> -  A must-read list of 40+ incorrect assumptions about names.
- Personal Names Around the World - W3C: <https://www.w3.org/International/questions/qa-personal-names> - A comprehensive guide to cultural naming conventions.
- Unicode Character Database - Unicode.org: <https://unicode.org> - The definitive source for Unicode character properties.

### Tools, Libraries, Resources

- Unicode Regular Expressions (PDF) <https://icu-project.org/docs/papers/iuc26_regexp.pdf>: Most modern languages support `\p{}` patterns for Unicode-aware regex.
- ICU (International Components for Unicode) <https://icu.unicode.org/> - Libraries for proper Unicode handling in various languages.

### Database Documentation

- MySQL UTF-8 Guide: <https://dev.mysql.com/doc/refman/8.0/en/charset-unicode.html>
- PostgreSQL Character Sets: <https://www.postgresql.org/docs/current/multibyte.html>

### Testing Resources

Create a test file with diverse names:

```javascript
// names-test-data.js
export const realWorldNames = [
  { name: "O'Brien", culture: "Irish", notes: "Apostrophe" },
  { name: "José García", culture: "Spanish", notes: "Accent marks" },
  { name: "张伟", culture: "Chinese", notes: "Chinese characters" },
  { name: "Nguyễn", culture: "Vietnamese", notes: "Tone marks" },
  { name: "Müller", culture: "German", notes: "Umlaut" },
  { name: "محمد", culture: "Arabic", notes: "Right-to-left script" },
  { name: "Kealiʻi", culture: "Hawaiian", notes: "ʻOkina" },
  { name: "Sukarno", culture: "Indonesian", notes: "Mononym" },
  // Add more as you encounter them
];
```

## Responsibility And Where It Lies

So where does the responsibility lie when we come across all these examples of laziness, overlooking, and plain irresponsibility? Look no further than:

1. The Developer: Whether it is laziness, lack of knowledge or education, or the "Well, I am not allowed to make changes like that because..." take the Nike approach and **Just Do It**! The Sisyphus Effect, or the eternal struggle to make change and there is resistance above you is real, I get it. Make your case! If that doesn't work, throw it in there! I bet Brad has so many meetings and so much paperwork that he really won't ever notice. If so, then we cross that bridge when we get there. Trust me, you'll get the avalanche of crap raining down on you in the end.

2. The Manager: Oh yes. My favorite part. Managerial decision-making. Whether you have the best manager since sliced bread or you have the worst manager that can stumble backwards into horse shit and come out smelling like roses, this is on them! They oversee a group of devs, they _should_ know what they are doing, but should and do are two entirely different things. The onus lies with the manager though.

3. The Designer: A small part in this play, but a part nonetheless. If they don't design for this pattern then they aren't practicing accessible design and are shutting out billions potentially. Everything starts from a design doesn't it? Then the designer is the root of the problem somewhat. The root of the problem lies next.

4. The Conception of the Project: You know that meeting you all have (I hope) where you all get together and plan out what you will do and draw out the roadmap with all the cool tools you use? **THAT** is where this all starts. Conception of project. It's not going to be accessible if you don't start practicing accessibility from **the very start**! "We can go back and..." Great, now you have wasted resources, time, money, and more. Just because you didn't take that first step. The most important one. Accessibility and inclusivity.

## Summary

Handling names correctly is fundamentally about **respect**. Every time someone encounters a form that rejects their name, they're not thinking _"this is a technical limitation."_ They're thinking _"this company doesn't care about people like me."_ They feel left out. Not included. A sense of _"this company doesn't want me."_ and they aren't wrong. You don't if you keep shutting people out for whatever reasons.

The technical solution **isn't** complicated:

- Use UTF-8 everywhere
- Accept Unicode letters and common punctuation
- Store exactly what users enter
- Don't enforce Western name formats
- Test with diverse real names

But the impact is profound. Good name handling:

- Makes your product accessible to billions more people
- Reduces support costs and user frustration
- Demonstrates respect for cultural diversity
- Improves your brand reputation
- Can be legally required in many jurisdictions

Start today. Pick one form in your application. Test it with the names in this article. Fix what's broken. Then move to the next form.

Your users will notice. They'll appreciate being treated as the whole, complete people they are—with names that belong to them, not to your validation rules.

## Take Action

1. **Audit your forms today** using the test names provided in this article
2. **Share this guide** with your team
3. **Update your validation** to be more inclusive
4. **Add diverse names to your test suite**
5. **Monitor and improve** based on real user feedback

Every person deserves to have their name accepted, stored correctly, and displayed with respect. It's not an edge case. It's not a nice-to-have. It's a fundamental requirement for building inclusive software.

Get names right, and you're telling your users: **you belong here**.

### Have you encountered name validation issues? Found a name that breaks systems? [Share your stories with me on Bluesky.](https://bsky.app/profile/toddl.dev)
