# Web101Notes (Content Summary of every session)
Contains PPTs, Word Documents and all source code files from the Web Dev 101 classes

---

## Class 1
Programming, tech Stacks & Product Mindset
- What is Programming? Writing code is not the real skill. Identifying a real probelm and being able to break it down is
- What are you actualy paid for?
- The stacks that exist

    | Stacks | Features |
    | --- | --- |
    | MERN (MongoDB, Express, React, Node.js) | Great for developing web    apps |
    | MEAN (MongoDB, Express, Angular, Node.js) | *Same as **MERN**, except     **Angular** instead of **React*** |
    | LAMP (Linux, Apache, MySQL, PHP) | One of the oldest web stacks, all  open source technologies |
    | Java + SpringBoot | Very common in large mature enterprises for robust    backends |
    | Python + Django/Flask | Rapid development, great for data-heavy apps  and ML-aadjacent workflows |

- Why do we need so many technologies? Because different products are of different scales. Python cannot be used in games like Call of Duty and Grand Theft Auto, as its execution time is much higer than C++, while C++ is not be used in AI workflows, because Python is simpler and faster to write and has a has a huge community support
- How to choose a stack? Study the pros and cons of all the tech stacks, and based on that research, choose the stack that suits your project/product the most
- Why MERN for this course?
    1. Fast prototyping
    2. Flexbility
    3. JavaScript everywhere: in frontend through **React**, and in backend through **Node**
- Product mindset

---

## Class 2
Using AI, Being a great programmer & how the web works
- Being abble to prompt does not make you an enginner. But, bein able to design a solution, being able to read and catch mistakes in code written by someone else (AI or human) and fix them makes you an engieer. **AI should be the assistant, not the pilot itself. You should be the decision maker, not AI.**
- Use AI as a teaching assistant. AI shouldn't be performng all your tasks, it should be teaching you how to carry out that paticular task
- Become an owner. AI does the research for you. So, you need to focus on shipping. **Document everything you do. EVERYTHING. Measure the pass/fail metrics. Make it visible by BCCing to the ones above you. Good companies reward this. Also note that in some teams, BCCing the founder is seen as showing off rather than ownership So, read the room first.**
- Use AI as a functon generator. Meaning, use AI to generate small functions for the build. But, in order to do this, you must know how to which block of code goes where, which forces you to, first of all, break the bigger problem into several smaller problems, and then understand the codebase. That way, you can avoid fatal mistakes that vibe coded apps/websites often go through.
- The goldern rule is:
    1. Do not build what already exists
    2. Do not hand AI the control of the entire develop, and pray for the best result. That never sustains in the long run. NEVER.
- The following makes you a great programmer in today's age:
    1. Being able to solve problems
    2. Being able to have a judgement on which stack to use, how to structure the code, and all the design decisions
    3. Thinking like an owner
    4. Understanding your work, and being able to explain it to anyone
    5. Being able to document your personal development cycle, as well as your contribution as a team member
- Concepts on which the entire web is based on:
    | Term | Function |
    | --- | --- |
    | URL (Uniform Resource Locator) | It locates a specific resource, wherather a page, an imagae, or a video |
    | Client | Your browser and you (the one who wants something) |
    | DNS (Domain Name System) | It translates any URL into an IP address that points to a machine |
    | Server | It is a program that receives your request and prepares a response by following a set of rules |
    | Database | An organised collection of all the data |
- HTTP is the protocol (a set of rules) that is agreed upon by everyone on the web. The request-respose cycle works this way:
    - An URL is entered on the browser
    - The browser asks the DNS for the server's IP
    - The browser sends an HTTP request to that server
    - The server processes it, and fetches all the data
    - The server sends back an HTTP response is an HTML webpage, along with the CSS for styling and JavaScript for the functioning
    - The browser renders it into the viewport

    **(Check the word document for visual example)**

---

## Class 3
HTML and Web Basics
- How the Web works (Refer to the notes materials of Class 2 for the descriptons of the terms):
    ```
     Client
       |
      DNS
       |
     Server
       |
    Database
    ```
- Individual significance of HTML, CSS and JavaScript
    | Component | Significnce |
    | --- | --- |
    | Wireframe | Its is the blueprint of the site |
    | HTML | The skeleton of the webpage |
    | CSS | Puts all the colors, fonts, spacing, formating and all other styles into the webpage |
    | JavScript | Handles all the interaction between the user and the webpage |
- How to create and run your first HTML file
    - Install an IDE. Recommended: Visual Studio Code by Microsoft. It is free, lightweight, and open source
    - Install the Live Server extension
    - Open a folder inside VS Code
    - Create a file with name `index.html`
    - Write the boilerplate code:
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>
    ```
    **NOTE:**
    - Write `!` and hit enter in VS Code to get the HTML boilerplate
    - HTML is case insenstvie. So, `<HEAD></HEAD>` and `<head></head>` means the same thing

- Some core HTML tags:
    - Heading (`h1`-`h6`) tags    
        | Tags | Use case |
        | --- | --- |
        | `<h1> ... </h1>` | Page Titles |
        | `<h2> ... </h2>` | Major Sections |
        | `<h3> ... </h3>` | Subsections |
        | `<h4> ... </h4>`, `<h5> ... </h5>`, `<h6> ... </h6>` | Import texts, but smaller font size |
    
        **NOTE:** Why do we need so many `h` tags, when we can just use one, and scale them as needed? The reason is SEO, that stands for Search Engine Optimisation. It is the process of optimising the webpage/website, so that it ranks higher on Google upon being searched by some specific keywords.

    - Paragraph (`<p> ... </p>`) tag is used to put textual content in the webpage
    - Image (`<img src="link/to/image" alt="text to be displayed if image fails to load">`) tag is used to display an image
    - Anchor (`<a href="link"> ... </a>`) tag is used to put a clickable hyperlink in the web page.

    **NOTE:** `<img>` is a self-closing tag, meaning, there is no `</img>` tag for `<img>`, unlike `<p></p>` and others

- Replacements of the `<div></div>` tag
    | Tags | Use case |
    | --- | --- |
    | `<header> ... </header>` | To contain the header of a page, like title, tagline, etc. |
    | `<nav> ... </nav>` | Used to contain the navigation bar of the site |
    | `<section> ... </section>` | Create Sections in the page |
    | `<main> ... </main>` | To contain the main contents of the page |
    | `<aside> ... </aside>` | To contain additional, and relatively less important contents of in the page. |

    **NOTE:** We use these tags instead of `<div> ... </div>`, while all of these tags does the same job is because of the same reason, that is, SEO.
    **NOTE:** An *attribute* is extra information that you give to an HTML element.

- Push your code to GitHub. It is a big online library for code. Every project is a book others can read, copy and improve. It tracks every change, so you can always see who changed what and when in the codebase.

---

## Class 4

HTML Lists, Tables and Forms
- Lists: Ordered and Unordered
    - Unordered list
        ```
        # Used to write lists with bullet points
        <ul>
            <li>Banana</li>
            <li>Mango</li>
            <li>Apple</li>
            <li>Grapes</li>
        </ul>
        ```

    - Ordered list
        ```
        # Used to write numbered lists
        <ol>
            <li>Banana</li>
            <li>Mango</li>
            <li>Apple</li>
            <li>Grapes</li>
        </ol>
        ```

        Use the `type=" "` with `<ol> ... </ol>` for different kind of numbered lists. Eg:

        | `type=" "` | Number in the list |
        | --- | --- |
        | `type="1"` (Default) | 1, 2, 3, ... |
        | `type="A"` | A, B, C, ... |
        | `type="a"` | a, b, c, ... |
        | `type="I"` | I, II, III, ... |
        | `type="i"` | i, ii, iii, ... |

- Tables
    - `<table> ... </table>` wraps all the content inside it
    - `<caption> ... </caption>` is the table's title. It is meant to be written immediately after opening the - `<table>` tag. It is an optional tag
    - `<thead> ... </thead>` forms the header of the table
    - `<tr> ... </tr>` forms one single row of the table
    - `<th> ... </th>` forms one single cell in the the header row of the table (to be used inside `<tr> ... </tr>` present inside `<thead> ... </thead>`). `<th>` acts as a label
    - `<tbody> ... </tbody>` forms the rest of the body of the table
    - `<td> ... </td>` forms one single cell in the the rows in the body of the table (to be used inside `<tr> ... </tr>` present inside `<tbody> ... </tbody>`). `<td>` contains the data

    Example of an HTML Table:
    ```
    <table>
        <thead>
            <th>Roll No</th>
            <th>Name</th>
            <th>Percentage</th>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Elon Musk</td>
                <td>98.00</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jeff Bezos</td>
                <td>97.00</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Mark Zuckerberg</td>
                <td>96.00</td>
            </tr>
        </tbody>
    </table>
    ```

- Forms
    - `<form> ... </form>` is the container for all the fields inside
    - `<input>` tag is used to take all kinds of inputs. The `type` attribute changes the type of input that particular inut tag takes. By default, it is set to `type="text"` (for single-line inputs). We have the following options: `email`, `password`, `date`, `radio`, `checkbox`, `number`, `submit`
    - `<label> ... </label>` is used to name a field. The value of the `for` attribute in the `label` tag is to be matched with the `name` attribute of the `input` tag.
    - `<select> ... </select>` is used to form a dropdown menu. The options inside the drowpdown are written using `<option value=" ... "> ... </option>`. Every option is a `<option> ... </option>` pair.
    - `<textarea> ... </textarea>` is used for long, multi-line inputs

    Example of an HTML form:
    ```
    <form>
        <label for="f_name">First Name</label>
        <input type="text" name="f_name" id="first-name" required>
        
        <br><br>
        
        <label for="l_name">Last Name</label>
        <input type="text" name="l_name" id="last-name" required>
        
        <br><br>
        
        <label for="ph_no">Phone No.</label>
        <input type="number" name="ph_no" id="phone" required>
        
        <br><br>
        
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required>
        
        <br><br>

        <label for="password">Password</label>
        <input type="password" name="password" id="password" required>
        
        <br><br>
        
        <input type="radio" name="gender" id="gender-radio" required checked>
        <label for="gender">Male</label>
        <input type="radio" name="gender" id="gender-radio" required>
        <label for="gender">Female</label>
        
        <br><br>
        
        <label for="skills">Skills</label>
        <input type="checkbox" name="skills">HTML
        <input type="checkbox" name="skills">CSS
        <input type="checkbox" name="skills">JS
        
        <br><br>
        
        <label for="remarks">Remarks</label>
        <textarea name="remarks" id="remarks"></textarea>
        
        <br><br>
        
        <label for="dropdown">Dropdown</label>
        
        <br><br>

        <select name="dropdown" required>
            <option value="India" selected>India</option>
            <option value="USA">USA</option>
            <option value="Japan">Japan</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
        </select>
        
        <br><br>
        
        <input type="submit">
    </form>
    ```

---

## Class 5
Basics of CSS
- Writing inline, internal and external
- Linking an external CSS file to an HTML file
- Targetting an element using ID, Class and the tag itself
- Targetting descendants of an element
- Learning properties like `color`, `font-size` and `font-family`

---

## Class 6
Box model (visual examples present in the PPT)
- Learning properties like `color`, `font-size` and `font-family`
- Layers of a box: `content`, `padding`, `border`, `margin`
- Different styles of a border
- Different value for the `overflow` attribute
- `inline`, `block`, `inline-block` values for the `display` attribute
- CSS Units:
    - Absolute Units: `px`
    - Relative units: `vh`, `vw`, `%`, `rem`

---

## Class 7
Flexbox and Media Queries
- Default `flex-direction` : `row`
- Property to align items along main-axis: `justify-content`
- Property to align items along cross-axis: `align-items`
- Use of `flex-wrap`
- Control individual items inside a flex container using the `order` property
- `flex-shrink` and `flex-grow`
- Media query is used to change the style of a webpage based on the size (width/height) of  te viewport

    | `flex-direction` value | Main Axis | Cross Axis |
    | --- | --- | --- |
    | `row` (default) | x-axis | y-axis |
    | `row-reverse` | x-axis | y-axis |
    | `column` | y-axis | x-axis |
    | `column-reverse` | y-axis | x-axis |

---

## Class 8
`grid` display
- Use `grid-template-column` to arrange and size boxes inside the grid in different size of column
- Use `fr` to split based on ratio
- Use `gap` to space between the boxes of a grid; use `row-gap`, `column-gap` for specifically spacing rows and columns, respectively
- Use `repeat()` with `grid-template-column` or `grid-template-column` function to repeat to space items a specific number of times in a specific height or width
- Use `nth-of-type()` to target a specific element inside the grid container
- Use `grid-template-areas` and `grid-area` to draw layouts across the webpage and place items
- Flexxbox properties will also work in grid
- **Additional properties:** `grid-column`, `grid-row`, `grid-auto-rows`
- **NOTE:** Go through the PPT as it includes lot more things, in detail

---

## Class 9
How stylings work
- Browser Default > Internal CSS > External CSS (Top of the file) > External (Gradually to the bootom of the file)
- Precedence: Elements < Classes < IDs < Inline styles < `!important`
- Inheritence refers to the phenomenon where a (in the context of CSS) child element inherits the styles defined for the parent

---

### Repo owner: Shubham Behl
