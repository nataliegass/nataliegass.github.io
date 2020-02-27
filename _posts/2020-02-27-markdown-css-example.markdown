---
title:  "Markdown CSS Example"
excerpt: "Best markdown css example ever..."
date:   2020-02-27
tags: [gass, markdown, css]
layout: postCSSexample
---

## Heading 2
### Heading 3
#### Heading 4

Line with **bold** text.

Line with *italicized* text.

Line with ***bold-italicized*** text.

### Math Equation Example
![](https://render.githubusercontent.com/render/math?math=e^{i \pi} = -1)

This math is inline $`a^2+b^2=c^2`$.

This is on a separate line

![differentword](https://render.githubusercontent.com/render/math?math=a^2+b^2=c^2)

```math
a^2+b^2=c^2
```
Anotha one

![formula](https://render.githubusercontent.com/render/math?math=e^{i \pi} = -1)

This is another example.

$$ N = \frac{t_{statistic=-1.652}}{0.05}^{2} \cdot 2 \cdot var $$

### Blockquote Example 1

> This text represents a blockquote.

### Blockquote Example 2

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### Blockquote Example 3

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

### Footnote Example
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's footnote with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

### Ordered List Example

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item

### Unordered List Example

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item

### Table Example

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

### Code Block Example 1
```
lines
of
code
```

### Code Block Example 2 (JSON)
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Striketrough Example
~~The world is flat.~~ We now know that the world is round.

### Emoji Example
Gone camping! :tent: Be back soon.

That is so funny! :joy:

Requirements to be able to render **emojis*** via markdown...
1. Add to Gemfile
```
gem 'jemoji'
```
2. Add to _config.yml
```
plugins:
  - jemoji
```

### Task List Example
- [ ] Write the press releasse
- [x] Update the website
- [ ] Contact the media

### Website Link Example
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

### Website Link (with Text) Example
My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

### Email Link Example
<nk.the.environmentalist@gmail.com>

### ID Tag Link Example
This hyperlink: [dinosaurs](#custom-dinosaurs-id)    
Will direct
The user
To the specifed ID Tag

The example link above will redirect to the following Heading below

### Dinosaurs {#custom-dinosaurs-id}
* tyrannosaurus rex
* pterodactyl
* velociraptor
* triceratops
* stegosaurus
* brachiosaurus


#### Backslash Escaping
\\
#### Backtick Escaping
\`
#### Asterisk Escaping
\*
#### Underscore Escaping
\_
#### Curly Braces Escaping
\{ }
#### Brackets Escaping
\[ ]
#### Parentheses Escaping
\( )
#### Pound Sign Escaping
\#
#### Plus Sign Escaping
\+
#### Hyphen Escaping
\-
#### Dot Escaping
\.
#### Exclamation Mark Escaping
\!
#### Pipe Escaping
\|

### Horizontal Line Example 1
***
### Horizontal Line Example 2
---
### Horizontal Line Example 3
_________________
### Horizontal Line Example 4
- - -
### Horizontal Line Example 5
_________________________
