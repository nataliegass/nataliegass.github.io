---
excerpt: "Best markdown jquery example ever..."
date:   2020-04-08
tags: [gass, markdown, jquery]
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" type="application/javascript" media="all"></script>

<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js" type="application/javascript" media="all"></script>

<script src="../assets/js/mycustomjquery.js" type="application/javascript" media="all"></script>

## Heading 2
### jQuery
#### Heading 4

Line with **bold** text.

Line with *italicized* text.

Line with ***bold-italicized*** text.

### ID Tag Link Example
This hyperlink: [dinosaurs](#custom-dinosaurs-id)    
Will direct you to the specifed ID Tag in your Markdown file.

God created the dinosaurs. 
How incredible are the dinos that some were big and some were small.
Some dinosaurs ate plants and some ate other dinosaurs.
The dinosaur ecosystem must have been quite complex.
Can you imagine how incredible the relation between plant and dino and one dino to the next must have been?
God is very cool.


### Dinosaurs {#custom-dinosaurs-id}
* Jurassic 
  * Brachiosaurus
  * Stegosaurus
  * Allosaurus 
* Cretaceous
  * Hypsilophodon
  * Iguanodon
  * Psittacosaurus
* Tertiary
  * Velociraptor
  * Triceratops
  * Shantungosaurus 
  * Tyrannosaurus

### Blockquote Example 1

> This text represents a blockquote.

### Blockquote Example 2

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch made her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

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

    ```Sample text inside a code block within the footnote.```

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

### Code Block Example 3 (Python)
```python
def largest(array_of_numbers):
	max = array_of_numbers[0]
	for i in range(1, len(array_of_numbers)): 
		if array_of_numbers[i] > max:
			max = array_of_numbers[i] 
	return max


x = [23, 42, 765, 64, 109, 413]
answer = largest(x)
print ("Largest number in given array is: ", answer)
```

### Striketrough Example
~~The world is flat.~~ We now know that the world is round.

### Math Equation Example 1
![formula](https://render.githubusercontent.com/render/math?math=e^{i \pi} = -1)
### Math Equation Example 2
![](https://render.githubusercontent.com/render/math?math=e^{i %2B\pi} = x%2B1)

### Emoji Example
Gone camping! :tent: Be back soon.

That is so funny! :joy:

:earth_africa: We love the earth. 

:two_hearts: Always give love. 


### Task List Example
- [ ] Write the press releasse
- [x] Update the website
- [ ] Contact the media

### Website Link Example
[Nat Geo](https://www.nationalgeographic.com/)

### Website Link (with Text) Example
[Nat Geo](https://www.nationalgeographic.com/ "I've always read and admired Nat Geo, their journalists and photographers.")

### Email Link Example
<nk.the.environmentalist@gmail.com>

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

### Embed YouTube Example

<iframe width="560" height="315" src="https://www.youtube.com/embed/8X92coY3rQg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
