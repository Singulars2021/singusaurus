---
id: javascript_jquery
title: JQuery
slug: /
---

### A) Please explain with your own words the following questions:

#### 1) What is jQuery?

> jQuery is a fast, small, and feature-rich JavaScript library. It makes
> things like HTML document traversal and manipulation, event handling,
> animation, and Ajax much simpler with an easy-to-use API that works
> across a multitude of browsers. ([jQuery](https://jquery.com/), n.d.)

#### 2) How do you install/use jQuery?

There’s three easy ways for installing jQuery:

##### :point_right: Using jQuery with a CDN

Adding CDN code for minified jQuery lib. you can copy and past it into the head section on your HTML page.

You can find all the jQuery versions [here](https://code.jquery.com/).

Google is an example of someone who host jQuery:

```
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

##### :point_right: Downloading jQuery
There are two versions of jQuery available for downloading: production version and development version.
You can download both versions from [jQuery.com](http://jquery.com/download/)
Remember that jQuery library is a single JavaScript file, and you have to reference it with the HTML `<script> tag` inside the `<head> section`. Your html will look like this:
```
    <head>

    <script src="jquery-3.5.1.min.js"></script>

    </head>
```
##### :point_right: Installing via npm, yarn or bower
You can install the latest version of jQuery with the npm CLI command:
```
     npm install jquery
```
```

    yarn add jquery
```
This will install jQuery in the node_modules directory. Within node_modules/jquery/dist/ you will find an uncompressed release, a compressed release, and a map file.
```
    bower install jquery
```
This will install the default being bower_components. Within bower_components/jquery/dist/ you will find an uncompressed release, a compressed release, and a map file. If you want more information about how to download and install Jquery, [watch this video.](https://www.google.com/search?q=youtube+install+jquery&oq=youtube+install+jquery&aqs=chrome..69i57j69i64.3477j1j4&sourceid=chrome&ie=UTF-8)

#### 3) What is a library?
A library is a set of code that someone was previously written, that can be called upon when you're building your own projects. The goal is to streamline development, make it easier.

The libraries may include configuration data, documentation, help data, message templates, pre-written code and subroutines, classes, values or type specifications.
#### 4) Which elements does this CSS selector retrieve in Jquery? :heavy_dollar_sign:
jQuery supports most CSS3 selectors, as well as some non-standard selectors. You can find it all in [w3chool](https://www.w3schools.com/jquery/jquery_ref_selectors.asp). Let’s take a look between jQuery and Vanilla Javascript differences:

```
    // jQuery
    var divs = $('div')



    // Vanilla
    var divs = document.querySelectorAll('div')



    // jQuery
    var newDiv = $('<div/>')



    // Vanilla
    var newDiv = document.createElement('div'
```
##### For example, you can select element by ID:
```
    $( "#myId" ); // Note IDs must be unique per page.
```
##### By Attribute:
```
    $( "input[name='first_name']" );
```
##### By Compound CSS Selector:
```
    $( "#contents ul.people li" );
```
##### With a comma-separated list of selectors:
```
    $( "div.myClass, ul.people" );
```
##### With Pseudo-Selectors:
```
    $( "a.external:first" );

    $( "tr:odd" );

    // Select all input-like elements in a form (more on this below).
    $( "#myForm :input" );
    $( "div:visible" );

    // All except the first three divs.
    $( "div:gt(2)" );

    // All currently animated divs.
    $( "div:animated" );
```




##### By form elements:
```
    $( "form :checked" );

    $( "form :disabled" );

    $( "form :enabled" );

    //Using the :input selector selects all <input>, <textarea>, <select>, and <button> elements:
    $( "form :input" );

    //Using the :selected pseudo-selector targets any selected items in <option> elements:

    $( "form :selected" );
```
#### 5. How do you change an inline style of an HTML element?

Single style
```
    $('#element').css('display', 'block'); /* Single style */
```
Multiple style
```
    $('#element').css({'display': 'block', 'background-color' : '#2ECC40'});
```
#### 6. Have a look at the Jquery method [toggleClass](https://www.w3schools.com/jquery/html_toggleclass.asp). What is the use of the optional parameter switch?

**Sintax**
```
    $(_selector_).toggleClass(_classname,_function_(index,currentclass),switch_)
```
By using the "switch" parameter, you can specify to only remove, or only add a class name.

As a rule, toggleClass() method checks each element for the specified class names. If the class exists, it is removed. If it doesn't exist, it is added. In the following example you can see how to create two buttons. One that adds the class “main” and another that removes it.
```
    <script>

    $(document).ready(function(){
    $("#add").click(function(){
    $("p").toggleClass("main",true);
    });
    $("#remove").click(function(){
    $("p").toggleClass("main",false);
    });
    });

    </script>
```
### B) Attach a GitHub project of your own solved using JQuery.

[My project](https://github.com/claudiaballano/BMI-calculator/blob/main/script.js)

### C) Make some research and link some JQuery learning resource

- Youtube video about a [**crash course**](https://www.youtube.com/playlist?list=PLillGF-RfqbYJVXBgZ_nA7FTAAEpp_IAc) in order to learn JQuery

- Find a link to retrieve the [**50 most asked questions**](https://hackr.io/blog/jquery-interview-questions) about JQuery in a job interview
- Find a [**github repository**](https://github.com/yusufshakeel/jquery-project) with some examples using JQuery

- Link a Github repository with the tag [**awesome**](https://github.com/petk/awesome-jquery) about JQuery.
- Other resources:

  - [jQuery Forum](https://forum.jquery.com/developing-jquery-core)

  - [jQuery Oficial GitHub](https://github.com/jquery)

  - [Awesome official web page for jQuery](https://project-awesome.org/petk/awesome-jquery)

### :pushpin: External links

jQuery. (n.d.). jQuery. Retrieved January 13, 2021, from [jquery.com/](https://jquery.com/)

jQuery Selectors. (n.d.). Retrieved January 13, 2021, from [www.w3schools.com/jquery/jquery_ref_selectors.asp](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)

Library (computing) - Wikipedia. (n.d.). Retrieved January 13, 2021, from [en.wikipedia.org/wiki/Library_(computing)](https://en.wikipedia.org/wiki/Library_(computing))

jQuery Get Started. (n.d.). Retrieved January 13, 2021, from [www.w3schools.com/jquery/jquery_get_started.asp](https://www.w3schools.com/jquery/jquery_get_started.asp)

Download jQuery | jQuery. (n.d.). Retrieved January 13, 2021, from [jquery.com/download/](https://jquery.com/download/)













