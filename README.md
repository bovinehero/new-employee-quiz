# New Server Requisition Order (Quiz)
(Developer: Gary Grant)

![Mockup image](docs/images/git-header.png)
> TODO: get from amiresponsive

[Live Site](https://bovinehero.com/vm-order-generator/index.html) is hosted on github pages with a custom DNS CNAME provided by Google DNS.


## Table of Contents

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Client Goals](#client-goals)
2. [User Experience](#user-experience)
    1. [Key Information on the Site](#key-information-on-the-site)
    2. [Target Audience](#target-audience)
    3. [User Requirements and Expectations](#user-requirements-and-expectations)
    4. [User Stories](#user-stories)
3. [Design](#design)
    1. [Design Considerations](#design-considerations)
    2. [Colour](#colour)
    3. [Fonts](#fonts)
    5. [Imagery](#imagery)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks and Tools](#frameworks-and-tools)
5. [Features](#features)
    1. [Future Implementations](#future-implementations)
    2. [Accessibility Features](#accessibility-features)
6. [Testing](#testing)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [JavaScript Validation](#JavaScript-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [Device Testing](#device-testing)
    6. [Browser Compatibility](#browser-compatibility)
    7. [Testing User Stories](#testing-user-stories)
8. [Bugs](#bugs)
9. [Deployment & Local Development](#deployment)
10. [Credits](#credits)
11. [Acknowledgments](#acknowledgments)

## Project Goals 

One of the big issues I face as an infrastructure engineer is the way in which people request new virtual machines, I never get all the details I need on the initial request and there tends to be some back and forth which wastes everyone's time.
This project endevours to simulate the process of requesting a new Virtual Machine (VM) from the Infrastructure team. 

### User Goals
+ Should be able to order a new VM based on the offerings available

### Client Goals
+ Users should recieve all the information needed to provision a new VM

## User Experience

### Key Information on the Site
+ On the landing site some basic instructions on how to use the form is present.
+ All the available configurations on the site load are available in the form. 

### Target Audience
+ Junior and Senior technical staff looking to order new virtual hardware for projects

### User Requirements and Expectations

+ A simple and intuitive navigation system
+ Quickly and easily find information
+ Links and functions that work as expected
+ Good presentation and a functional design that enables an order completion
+ Accessibility 

### User Stories

#### Employee
1. I would like to raise an order for a new VM.
2. I would like to select different hardware specifications (OS, CPU, Disk sizes etc) for my VM.
3. I would like to specify the physical and logical environments for the VM's deployment.
4. I would like to review my answers before submission.
5. I should be able to change the answers to questions before submission.
6. I would like to be able to navigate between questions.

### Client (Site Owner) Stories
7. As a site owner, I want users to be able to contact us for custom requests or issues.

## Design

### Design Considerations

Due to the JavaScript requirement this site really needed to be a single page app, and by virtue the requirement boiled down to a web form best practice dictates a simplistic approach.

With this in mind I decided to implement a simple landing page with text instructions and a button to launch a web form.

### Colour

![image color pallette](docs/images/palette.png)

The company I currently work for utilises a lot of red, black and white in their primary colour scheme, and I wanted quite a striking screen on the load.

I selected the pinkish red __Carmine__ (#990011) as a brilliant background color and then the complimentary shade of __Snow__ (#FCF6F5) for the primary colours to give homage to the themes on my employer's intranet site. As a contrast to __Snow__ i decided to use its opposite __Rich Black__ (#03090A) for areas that needed text on a white or snow background.

> As Protanopia cannot distinguish Red from black, care was taken to ensure the the carmine was not placed on black anc vice versa

The colour [palette](https://coolors.cpalo/990011-fcf6f5-03090a) was created using the Coolors [website](https://coolors.co/).

### Fonts

Google Fonts was used for the following fonts:

+ __Open Sans__ for the entire body text on the site. It is a sans-serif font and was selected for its readibility as it designed for legibility across print, web, and mobile interfaces; paramount for the completion of a form.

### Imagery

As the app is an order form, no images were used in this site to keep the workflow simple.

### Structure

The website consists of a single page, presented to the user as a slide deck of questions.
The page is structured in a well known, recognizable, user friendly, and easy to learn way. Upon arriving to the website the user is presented with the first question with familiar navigation buttons.

Additionally there is a 404 page included that will return the website user to the home page.

### Wireframes

Wireframes were created on desktop for a mobile first approach was initially considered, the wireframes below show the initial concept for the site. 

> TODO: make the wireframes

<br>
<details>
<summary>Index Page Wireframe Mobile </summary>
<br>
<img alt="wireframe image for index page" src="docs/images/wireframe-index.png">
</details>
<br>

The landing page is the same design for all screen sizes, but is allowed to expand down if the information volume in the text box requires it. On larger screen sizes the fonts and buttons change size to use more of the screen real estate via media queries.

## Technologies Used

### Languages

HTML, CSS and JavaScript were used to create this website.

### Frameworks and Tools

[Balsamiq](https://balsamiq.com/wireframes/) - Used to for wireframes.

[Github](https://github.com/) - To save and store the files for the website and for version control.

[Github Pages](https://pages.github.com/) (Jekyll) - to host the site 

[W3C validator](https://validator.w3.org/) - to test for syntax errors in HTML code

[Jigsaw CSS validator](https://jigsaw.w3.org/css-validator/) - check for syntactic errors in the css code 

[JSHint JavaScript validator](https://jshint.com/) - check for syntactic errors in the JavaScript code 

[WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/) - check accessibility

[Google Fonts](https://fonts.google.com/about) - fonts used on the website were imported from here

[Font Awesome](https://fontawesome.com/search) - for iconography on the website

[Google Dev Tools](https://developer.chrome.com/docs/devtools/) - troubleshooting and testing features as well as implement responsive styling

[GitPod](https://www.gitpod.io/) - for active development 

[Code Institute Development Template](https://github.com/Code-Institute-Org/gitpod-full-template) - for setting up the initial development environment

[ezgif](https://ezgif.com/) image/media conversion to webp and gif for documentation

[Coolors.co](https://coolors.co/) for colour pallette image

[Favicon.io](https://favicon.io/) - create favicon.

[Am I Responsive?](https://ui.dev/amiresponsive) - prototyping website image on a range of devices.

[Google DNS](https://developers.google.com/speed/public-dns) - hosting name resolution

## Features

> YOU ARE HERE
Description

+ index.html
  + Feature 1.
    + User Stories Covered: X
      + Feature 1 Screenshot 1. <br> ![mobile modal view](docs/images/feature-order-form-mobile.png)
      + Feature 1 Screenshot 2. <br> ![larger screen modal view](docs/images/feature-order-form.png)
  
  + Feature 2.
    + User Stories Covered: X
      + Feature 2 Screenshot 1. <br> ![mobile modal view](docs/images/feature-order-form-mobile.png)
      + Feature 2 Screenshot 2. <br> ![larger screen modal view](docs/images/feature-order-form.png)

  + Feature 3.
    + User Stories Covered: X
      + Feature 3 Screenshot 1. <br> ![mobile modal view](docs/images/feature-order-form-mobile.png)
      + Feature 3 Screenshot 2. <br> ![larger screen modal view](docs/images/feature-order-form.png)

 
+ 404.html

  + Leverages the github pages jekyll engine to provide a custom 404 experience for users and return users back to the site if they end up in a non-existent child domain.
    + Styling here is inline as any http calls to child directories cannot be reliably referneced by links in the header, specifically users could manually input non-existing child directories into the url bar and would not see the styling.
    + Similarly the link back to the home page needs to directly reference the home url [https://bovinehero.com/new-server-order-quiz/index.html](https://bovinehero.com/new-server-order-quiz/index.html) as relative referencing will not guarantee a return to the home page if non-existent child directories are inputted into the url.
    + I also included some Javascript here to simulate the server talking to the user as an Easter Egg feature
    + User Stories Covered: 6
    + Link back home: <br> ![return to the home page](docs/images/feature-404.png)

### Future Implementations

+ Upstream Database system and API to make the available configurations call more real time.
+ Downstream API integration to place the order request into a work queue
+ The backend form validation, as the form control is implemented only on client side technologies a tech savvy user could bypass these and post direct to the form endpoint without declaring values for all the inputs.

### Accessibility Features
I have been mindful during coding to ensure that the website is as accessible friendly as possible. I have achieved this by:

+ Using semantic HTML.
+ Ensuring that there is a sufficient colour contrast throughout the site.

## Testing

### HTML Validation

The W3C Markup Validation Service was used to validate the HTML of the website. 

index.html [results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbovinehero.com%2Fnew-server-order-quiz%2Findex.html) - No Errors or Warnings Found

### CSS Validation

The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website.

site [results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fbovinehero.com%2Fnew-server-order-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) - No Errors or Warnings Found

### JavaScript Validation

The JSHint Plugin was used to validate the JavaScript of the website.

![JSHint summary image for JavaScript Code page](docs/images/testing-jshint.png)

No Errors or Warnings Found

### Accessibility

The WAVE WebAIM web accessibility evaluation tool was used to ensure the website met high accessibility standards.

+ index.html [results](https://wave.webaim.org/report#/https://bovinehero.com/new-server-order-quiz/index.html)


#### Errors

No Accessibility Errors on site

#### Alerts

1 Accessibility Alert discovered on site:

+ A `<noscript>` element is present. Not an issue as the content within `<noscript>` is a simple paragraph styled the same way as the text below.

### Performance

Performance testing was performed on lighthouse in Google Chrome's DevTools

#### index.html

![lighthouse summary image for index page](docs/images/lighthouse-index.png)


No Issues Reported

### Device testing
The website was tested on the following devices:

1. MacBook Pro
2. IPhone 13
3. In addition, the website was tested using Google Chrome Developer Tools Device emulation for all available device options plus a custom setting for IPhone 5


### Browser Compatibility
The website was tested on the following browsers:

1. Google Chrome
2. Mozilla Firefox

### Testing user stories