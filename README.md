# Lambda-School-mini-bootcamp-2
**"The basics of code, how it works on the web, and what websites are made of."**  
Start date: May 15, 2017: https://lambdaschool.com/mini-bootcamp/  
Slack channel: https://lambdaschool.slack.com  
Lesson archive: https://lambdaschool.com/mini-bootcamp/archive  
My Codepen: https://codepen.io/mixelpix/  
My Github: https://github.com/mixelpixel  
Lambda University: http://www.lambdauniversity.com  

# Week 1 - TEXT EDITORS, HTML AND CSS
## Monday, May 15, 2017, Lecture:  
1. Mini Bootcamp Lesson 1:
  - [LESSON 1: "HTML & CSS - Free Mini Code Bootcamp by LambdaSchool"](https://youtu.be/nLs9I8MRbO0)  
  - [Lecture 1 example on CodePen.io: "Words"](https://codepen.io/mixelpix/pen/PmxXov)
  - [Lecture 1 example on CodePen.io: "divs"](https://codepen.io/mixelpix/pen/XRyoJg)
  <details><summary>Lecture 1 notes</summary><ul>  
      <li>
        <a href="https://youtu.be/nLs9I8MRbO0?t=12m">Lecture 1 starts@ ~12min</a><br>
        There's good information in the first twelve minutes, don't skip it.
      </li>

      <h2>HTML</h2>
      <li>
        <a href="https://justinjackson.ca/words.html">Words</a>
      </li>
      <li>
        Declaring the type of document: &lt;!DOCTYPE html&gt;<br>
        html = Hyper-Text Markup Language<br>
        HTML consists of matching &lt;tag_type&gt; openings and &lt;/tag_type&gt; closings.<br>
        Whatever is inside the open/close tag set belongs to that tag area.<br>
        I.e. &lt;open&gt; tag_area &lt;close&gt;<br>
        To declare a closing, the tag type is prepended with a forward slash: /<br>
        I.e. &lt;tag_type&gt; tag_area &lt;/tag_type&gt;<br>
        E.g. &lt;html&gt; html_area &lt;/html&gt;<br>
        HTML involves "nesting" tags inside each other per sections, containers, divisions, etc. E.g.<br><b>
        &lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;...&lt;/head&gt;&lt;body&gt;...&lt;/body&gt;&lt;/html&gt;</b>
      </li>
      <li>
        &lt;html lang="en"&gt;...&lt;/html&gt;<br>
        per <a href="https://www.w3.org/International/questions/qa-html-language-declarations">w3.org: language declaration</a><br>
        <i>"Always use a language attribute on the html element. This is inherited by all other elements, and so will set a default language for the text in the document head element."</i><br>
      </li>
      <li>Basic html document layout:<br><ol>
        <li>&lt;!DOCTYPE html&gt; - doc. type declaration,</li>
        <li>&lt;html&gt; &lt;/html&gt; - html container</li>
        <li>&lt;head&gt; &lt;/head&gt; contains meta-info mostly for the browser,</li>
        <li>&lt;body&gt; &lt;/body&gt; is the actual body of the page</li></ol>
      <li>Title and meta info in head<br>
        Title tag determines browser tab text.<br>
        &lt;html&gt; &lt;head&gt; &lt;title&gt;Browser Tab Text&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;/body&gt; &lt;/html&gt;
      </li>
      <li>body contains what you see</li>
      <li>
        image tags (and some other tags) don't need to be closed<br>
        &lt;img src="url_goes_here"&gt;<br>
        ...& it makes NO difference, but you <i>can</i> use a closing tag:<br>
        &lt;img src="url_goes_here"/&gt;
      </li>
      <li>anchor tags for links, p tags for paragraphs, h# for headers, etc...</li>
      <li>Whitespace is pretty much ignored; however, whitepsaces (and tabs) can make things much more "human-readable"</li>
      <li>html comments are ignored by the html parser:<br>
      &lt;!-- <i>comments go here</i> --&gt;<br>
      &lt;!--<br><i>
      comments<br>
      can<br>
      also<br>
      be<br>
      across<br>
      multiple<br>
      lines<br>
      --&gt;</i>
      </li>

      <h2>CSS</h2>
      <li>CSS = Cascading Style Sheet</li>
      <li>
        CSS link syntax in the html file (tells the html doc where to find the corresponding css file)<br>
        &lt;html&gt; &lt;head&gt; &lt;title&gt;Browser Tab Text&lt;/title&gt; <b>&lt;link to CSS file&gt;</b> &lt;/head&gt; &lt;body&gt; &lt;/body&gt; &lt;/html&gt;<br>
        e.g. &lt;link rel="stylesheet" type="text/css" <b>href="homework.css"</b>&gt;
      </li>
      <li>convention is to put .css in the same directory as the .html, but it can be put in any directory so long as the "link href="" points to its location</li>
      <li>per <a href="https://www.w3schools.com/tags/tag_link.asp">w3schools.com: CSS link syntax</a>
      <li>
        HTML "super power": use the browser element inspector to see how web pages are constructed with html and css!<br>
        e.g. to find a hexadecimal color code (e.g. #4CAF50)
      </li>
      <li>
        Basic CSS syntax:<br>
        <b>tag_type {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;declaration: specification;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;...<br>
        }</b><br>
      </li>
      <li>
        more CSS syntax:<ul>
        <li>classes are prepended with a period, i.e. <b>.class_name{...}</b> e.g.,<br>
        <b>.some_class_name{...}</b> in the CSS file, and,<br>
        <b>&lt;html_tag class="some_class_name"&gt;...&lt;/html_tag&gt;</b> in the HTML file.</li>
        <li>id's are prepended with a has, i.e. <b>#id_name{...}</b> e.g.,<br>
        <b>#some_id_name{...}</b> in the CSS file, and,<br>
        <b>&lt;html_tag id="some_id_name"&gt;...&lt;/html_tag&gt;</b> in the HTML file.</ul>
      </li>
      <li>
        ID vs CLASS:<ul>
          <li>ID's are UNIQUE to a single instance</li><ul>
            <li>Each element can have only one ID</li>
            <li>Each page can have only one element with that ID</li></ul>
          <li>CLASSes are used to group element</li><ul>
            <li>You can use the same class on multiple elements.</li>
            <li>You can use multiple classes on the same element.</li></ul>
          </ul>
        More id vs class per <a href="https://css-tricks.com/the-difference-between-id-and-class/">CSS-Tricks.com</a> and <a href="http://stackoverflow.com/q/84378/5225057">stack question/answer</a>
      </li>
      <li>
      CSS order of precedence: most exact vs top to bottom cascade (vs importance)<ol>
        <li>Importance</li>
        <li>Specificity</li>
        <li>Source Order</li></ol>
      For more info, per <a href="https://www.w3.org/wiki/Inheritance_and_cascade">w3.org: "Inheritance and Cascade"</a>
      </li>
      <li>Per <a href="https://www.w3schools.com/css/css_combinators.asp">w3schools: CSS Combinators</a></li>
      <li>CSS comments are between forward slash and star: /&#42; <i>comments go here</i> &#42;/ and they can span multiple lines as well.</li>

      <h2>Additional Notes</h2>
      <li><a href="http://stackoverflow.com/a/31032477/5225057">HTML specs, percentage vs. height</a></li>  
      <li><a href="https://www.w3schools.com/tags/tag_meta.asp">HTML meta tags</a></li>
      <li><a href="https://www.computerhope.com/issues/ch001034.htm">How do I indent or tab text on my web page or in HTML?</li>
      <li><a href="http://www.theukwebdesigncompany.com/articles/entity-escape-characters.php">HTML Escape Characters: Complete List</a></li>
      <li><b>I cannot recommend strongly enough: DO NOT TAKE NOTES IN HTML!!!!!! XD</b></li>
    </details></ul>  

2. Homework assignment:
  - [Replicate the images in HTML and CSS code.](https://github.com/SunJieMing/LS-Web-Intro-I)  
    1. [Homework assignment 1 on github](https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/tree/master/Lesson1/homework1)
      - [Homework assignment 1 on CodePen.io](https://codepen.io/mixelpix/pen/gWQZby)<details><summary>Click here for the image</summary><img src="https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/blob/master/Lesson1/homework1/homework1.png"></details>  
    2. [Homework assignment 2 on github](https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/tree/master/Lesson1/homework2)
      - [Homework assignment 2 on CodePen.io](https://codepen.io/mixelpix/pen/NjEeqP)<details><summary>Click here for the image</summary><img src="https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/blob/master/Lesson1/homework2/homework2.png"></details>  
    3. [Homework assignment 3 on github](https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/tree/master/Lesson1/homework3)
      - [Homework assignment 3 on CodePen.io](https://codepen.io/mixelpix/pen/ZKmVGe)<details><summary>Click here for the image</summary><img src="https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/blob/master/Lesson1/homework3/homework3.png"></details>  

## Friday, May 19, 2017, Lecture:  
1. Mini Bootcamp Lesson 2:
  - [LESSON 2: "Responsive Web Design"](https://youtu.be/oXziWoSD8vQ)
  - [Lesson 2 lecture example on CodePen.io: "Boxes and divs"](https://codepen.io/mixelpix/pen/zwMMVz)
  - [Lecture 2 notes](https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/blob/master/Lesson2/README.md)

2. Homework assignment:
  - [Replicate this web page](http://blackrockdigital.github.io/startbootstrap-clean-blog/post.html)  
  - [Completed homework](https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/tree/master/Lesson2/)

# Week 2 - INTRO TO JAVASCRIPT
"An in-depth introduction to the language of the web."  

# Week 3 - INTRO TO JAVASCRIPT
"Arrays, objects, and Array/Object class methods."  

# Week 4 - INTERMEDIATE JAVASCRIPT
"Prototype, this, closure, and callbacks."  
