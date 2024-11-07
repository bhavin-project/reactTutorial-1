# React + Vite

Go to the below webiste:
https://vite.dev/

Click on Get started

copy below command:

# npm 7+, extra double-dash is needed:

npm create vite@latest my-vue-app -- --template vue

replace 'vue' with react and 'my-vue-app' with your app name(my-project).

then
cd my-project

npm install
npm run dev

then your app will run in browser.

---

Folder Structure
node_modules Contains all dependencies required by the app. Main dependencies also listed in package.json

public Contains static assets including index.html (page template)

index.html
title
fonts
css
favicon
id="root" - our entire app
src In simplest form it's the brain of our app. This is where we will do all of our work. src/main.jsx is the JavaScript entry point.

.gitignore Specifies which files source control (Git) should ignore

package.json Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts

package-lock.json A snapshot of the entire dependency tree

README The markdown file where you can share more info about the project, for example build instructions and summary.

---

Remove Boilerplate
remove src folder

create src folder

create main.jsx inside src
toggle sidebar CMD + B

---

starts with capital letter
must return JSX (html)
always close tag
must return something

---

JSX Rules
return single element (one parent element)

semantics section/article

---

camelCase property naming convention
return (

  <div tabIndex={1}>
    <button onClick={myFunction}>click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
)
// in html
<div tabindex="1">
    <button onclick="myFunction()">click me</button>
    <label for='name'>Name</label>
    <input readonly id='name' />
</div>
---
className instead of class
return <div className='someValue'>hello</div>;
---

close every element
return <img />;
// or
return <input />;

---

Nest Components
function Greeting() {
return (

<div>
<Person />
<Message />
</div>
);
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
return <p>this is my message</p>;
};

---

The expressions inside the curly braces allow you to dynamically insert values or evaluate expressions
directly into the JSX markup, making it easier to manage and render dynamic content in React applications.
JSX - CSS (inline styles)
style prop
{} in JSX means going back to JS Land
value is an object with key/value pairs - capitalized and with ''
const Author = () => (

  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
  Rohinton Mistry
  </h4>
);
---
const title = "A Fine Balance";
const author = "Rohinton Mistry";
const img = "./images/book-1.jpg";
function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="random title" number={22} />
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};
export default BookList;
Rendering Book Components:
It renders two Book components.
The first Book component is passed a prop called job with the value 'developer'.
The second Book component is passed two props: title with the value 'random title' and number with the value 22
---
Props - Somewhat Dynamic Setup
setup an object
refactor vars to properties
copy/paste and rename
get values for second book
setup props
const firstBook = {
  author: 'Chetan Bhagat',  // Replaced with an Indian author
  title: 'Interesting Facts For Curious Minds',
  img: './images/book-1.jpg',
};

const secondBook = {
author: 'Arundhati Roy', // Replaced with another Indian author
title: 'Atomic Habits',
img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
};

function BookList() {
return (

<section className='booklist'>
<Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
<Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
</section>
);
}
const Book = (props) => {
console.log(props);
return (
<article className='book'>
<img src={props.img} alt={props.title} />
<h2>{props.title}</h2>
<h4>{props.author} </h4>
</article>
);
};
------
Access Props - Multiple Approaches
there is no right or wrong - again preference !!!

destructuring in Vanilla JS

saves time/typing

pull out the properties

don't need to reference object anymore

const someObject = {
name: 'john',
job: 'developer',
location: 'florida',
};

console.log(someObject.name);
const { name, job } = someObject;
console.log(job);
no need for all the props.propName
destructure inside component
const Book = (props) => {
const { img, title, author } = props;
return (

<article className='book'>
<img src={img} alt={title} />
<h2>{title}</h2>
<h4>{author} </h4>
</article>
);
};
destructure in function parameters (in our case props)
if you have console.log(props) - it won't be defined
const Book = ({ img, title, author }) => {
return (
<article className='book'>
<img src={img} alt={title} />
<h2>{title}</h2>
<h4>{author} </h4>
</article>
);
};
-----------
Children Prop
everything we render between component tags
during the course we will mostly use it Context API
special prop, has to be "children"
can place anywhere in JSX

In React, children refer to the content that is passed between the opening and closing tags of a component.
This is a powerful feature that allows components to be flexible and reusable.

---

## Go to advanceReact Tutorial

--
Go to below website for functional component life cycle
https://dev.to/anshumanmahato/exploring-react-hooks-simplifying-state-and-lifecycle-in-functional-components-56ch

## https://manikandan-b.medium.com/react-functional-component-lifecycle-e8525f8fadea
