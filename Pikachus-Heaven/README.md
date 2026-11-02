# Pikachu's Heaven

## Student Information

- Student Name: Tshiamo
- Student Number: ST10248603
- Module: Web Development
- Project: Portfolio of Evidence (PoE)
- Part: Part 2 - JvavaScript functionality, SEo and deployment
- Submission Date: 2 November 2026

---

## Project Overview

Pikachu's Heaven is a fictional mini dog and cat café based in Cape Town. The website is designed to provide customers with information about the café, its menu, available spaces, reservations, online ordering, loyalty programme and contact details.

The website is aimed at students, young professionals, families, pet owners and members of the general public who are interested in a comfortable café environment where they can enjoy food and drinks while spending time with friends, studying or relaxing with their pets.

The website is being developed as a three-part web development project, beginning with the HTML structure in Part 1, followed by CSS styling in Part 2 and JavaScript functionality and SEO improvements in Part 3.

---

## Project Goals and Objectives

The main goals of the Pikachu's Heaven website are to:

- Create a clear and organised website structure.
- Provide customers with useful information about the café.
- Present the café's food and drink menu.
- Introduce the different spaces available at the café.
- Allow customers to make reservations.
- Provide an online ordering option for collection.
- Introduce the Pikachu's Heaven loyalty programme.
- Provide contact information and café locations.
- Create a foundation that can be styled and enhanced in later parts of the project.

---

## Target Audience

The target audience for Pikachu's Heaven includes:

- Students
- Young professionals
- Families
- Pet owners
- Café customers
- Members of the general public

The website is intended to appeal to customers looking for a comfortable and welcoming café environment that combines food, social spaces, study areas and pet-friendly facilities.

---

## Key Features

The website currently includes:

- Home page
- Menu page
- Spaces page
- Reservations and Services page
- Contact page
- Navigation menu linking all pages
- Coffee and hot drinks menu
- Cold drinks menu
- Sandwiches and wraps
- Desserts and pastries
- Study Zone
- Social Zone
- Pet-Friendly Zone
- Kids' Zone
- Reservation form
- Online ordering for collection
- Pikachu's Heaven Points loyalty programme
- Multiple café locations
- Embedded map
- Contact form
- Footer information

---

## Website Pages

### 1. Home Page

The Home page introduces Pikachu's Heaven and provides an overview of the café. It also highlights selected menu items, café spaces and special offers.

### 2. Menu Page

The Menu page contains the café's full food and drink menu.

The menu includes:

- Coffee and hot drinks
- Cold drinks
- Sandwiches and wraps
- Desserts and pastries
- Cheesecakes
- Filled croissants
- Muffins
- Cinnamon rolls

### 3. Spaces Page

The Spaces page introduces the different areas available at Pikachu's Heaven.

These include:

- Study Zone
- Social Zone
- Pet-Friendly Zone
- Kids' Zone

### 4. Reservations & Services Page

This page provides information about:

- Table reservations
- Online ordering for collection
- Pikachu's Heaven Points loyalty programme

## Respnsive design evidence view 

The website was tested across desktop, tablet and mobile screen size to confirm responsive behaviour

### Desktop View 
![Desktop view of homepage](screenshots/Desktop%20view.png)

### Tablet View 
![Tablet view of homepage](screenshots/Tablet%20view.png)

### Mobile View 
![Mobile view of homepage](screenshots/Mobile%20view.png)

### 5. Contact Page

The Contact page provides:

- General contact information
- Café locations
- An embedded map
- Contact form

---

## Project Structure

The current project contains the following HTML pages:

```
Pikachu's-Heaven/
│
├── index.html
├── menu.html
├── spaces.html
├── services.html
├── contact.html
└── README.md
```
## Part 1 - HTML Foundation
Part 1 focuses on establishing the HTML foundation of the Pikachu's Heaven website.

The following have been implemented:

HTML document structures
Headers
Navigation menus
Main content areas
Sections and articles
Headings and paragraphs
Forms
Footer sections
Internal page links
Embedded map
HTML comments explaining major sections
Organised website pages

CSS styling and JavaScript functionality are reserved for the later parts of the project.

### Sitemap

The website structure is organised as follows:
```
Pikachu's Heaven
│
├── Home
│
├── Menu
│   ├── Coffee & Hot Drinks
│   ├── Cold Drinks
│   ├── Sandwiches & Wraps
│   └── Desserts & Pastries
│
├── Spaces
│   ├── Study Zone
│   ├── Social Zone
│   ├── Pet-Friendly Zone
│   └── Kids' Zone
│
├── Reservations & Services
│   ├── Reservations
│   ├── Online Ordering
│   └── Pikachu's Heaven Points
│
└── Contact
    ├── Contact Information
    ├── Locations
    ├── Map
    └── Contact Form
```
# Timeline and Milestones
## Part 1 - HTML Foundation
Project planning and proposal development
Target audience and website goals identified
Content research and gathering
Website structure planned
Five HTML pages created
Navigation implemented
Website content added
Forms added
Multiple locations and embedded map added
HTML comments added
Navigation links tested
README documentation prepared
## Part 2 - CSS Design

The second stage will focus on:

Website styling
Layout
Typography
Colour scheme
Visual design
Responsive design
User experience
## Part 3 - JavaScript, Functionality and SEO

The final stage will focus on:

JavaScript functionality
Interactive features
Form validation
Interactive map functionality where required
SEO improvements
Meta tags
Accessibility improvements
Alt text and other optimisation requirements

# Changelog
Version 1.0 - Part 1

Created the Pikachu's Heaven website structure.

Created five HTML pages.

Added navigation between pages.

Added home page content.

Added full menu content.

Added café spaces.

Added reservation and online ordering sections.

Added loyalty programme information.

Added contact information and multiple locations.

Embedded a map on the Contact page.

Added contact and reservation forms.

Added HTML comments.

Tested website navigation.

Version 2.0 - Part 2 

noted part 1 feedback regarding alt text for images - to be applies when images are added 

Created and linked external stylesheet (style.css) to all five pages 

Added css reset and base typography styles using releative units (rem)

Established a typography hireachy for headings and body text. 

Applied sitewide colour palette and custom google fonts. 

Converted the navigation menu to flexbox layout,

Added hover and focus states for interactive elements ( cards, buttons, form fields ) for accessibility.

Implemented a responsive card-gride layout across all five pages for menu items, cafe spaces, loyalty points and contact locations. 

Fixed inconsistant navigation link casing across pages. 

Added a responsive design breakpoint ( max-width: 768px ) with mobile- friendly stacked navigation and adjusted heading sizes. 

Added the viewport meta tag to all five pages to enable correct responsive behaviour on mobile devices. 

Tested layout and navigation across desktop, tablet and mobile screen widths. 

Version 2.1 - Part 2 Feedback Corrections

Removed a duplicate, unused body style rule that was overriding the site's intended font (Montserrat) with an unimported font (Poppins), causing a fallback to the browser default.

Fixed a typo in the --electric-yellow custom property reference that was preventing card top borders from rendering.

Fixed a selector typo (image to img) that was preventing photos from being sized and cropped correctly.

Removed stray spaces in two CSS property values (button padding and media query gap) that were breaking those declarations.

Fixed a selector typo (removed a space before :hover) on the card hover effect so it correctly targets the whole card.

Added an :active pseudo-class state to buttons, completing the hover, focus and active interaction states requested in the brief.

Added the UTF-8 charset meta tag and lang="en" attribute to all pages.

Corrected inconsistent navigation link casing across all pages to match actual file names exactly, preventing broken links on case-sensitive hosting.

Version 3.0 - Part 3

Added the logo to the header of every page.

Created Enquiry.html with a form for reservation and space enquiries, and added an Enquiries link to the navigation on all pages.

Added JavaScript validation (name length, email format, dropdown selection) with on-page error messages, and a dynamic response message based on the chosen enquiry type (Script.js).

Added a contact form to Contact.html with validation for name, email, South African phone number, message type and message length, which compiles the details into an email to the café's address (contact.js).

Added a live search filter to the menu page that hides cards that do not match the typed text (menu.js).

Added a unique title tag and meta description to every page for SEO.

Added robots.txt and sitemap.xml.

Deployed the website on GitHub Pages.



# Content Research and Sources

Content and assets used for the project will be documented and referenced according to the Harvard Referencing Guide adapted for the IIE.

Any external images, logos, icons, or other assets used in the website will be credited to their original sources where required.

References and source information will be updated as additional content and assets are introduced during the development of the project.

## Part 2 : content and research sources 

Content and assets used for the project will be documented and referenced according to the Harvard Referencing Guide adapted for the IIE.

Any external images, logos, icons, or other assets used in the website will be credited to their original sources where required.

References and source information will be updated as additional content and assets are introduced during the development of the project.

Google Fonts (n.d.) Playfair Display. Available at: https://fonts.google.com/specimen/Playfair+Display (Accessed: 18 September 2026).

Google Fonts (n.d.) Cinzel Decorative. Available at: https://fonts.google.com/specimen/Cinzel+Decorative (Accessed: 18 September 2026).

Google Fonts (n.d.) Montserrat. Available at: https://fonts.google.com/specimen/Montserrat (Accessed: 18 September 2026).

W3Schools (n.d.) CSS Tutorial. Available at: https://www.w3schools.com/css/ (Accessed: 18 September 2026).

W3Schools (n.d.) JavaScript Tutorial. Available at: https://www.w3schools.com/js/ (Accessed: 2 November 2026).

Pinterest (n.d.) Pet-friendly café space. Available at: https://pin.it/43BKzm9H2 (Accessed: 2 November 2026).

# Future Development

The website will be expanded in Parts 2 and 3.

Part 2 will focus on the visual design and responsive layout using CSS.

Part 3 will focus on JavaScript functionality, interactive features, form validation, SEO and other required functionality.

# Project Status
Current Stage: Part 3 - JavaScript functionality and SEO 

Status: JavaScript functionality, form validation, SEO and deployment completed. 

Student Details

Name: Tshiamo Lesu

Student Number: ST10248603

Date: 2 November 2026
