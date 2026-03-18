# Service Booking Web App

## Project Description

This project is a simple Service Booking Web Application built using HTML, CSS, and JavaScript.

The main idea of this project is to allow users to:

* View different services one by one
* Add services to a cart
* See the total amount update dynamically
* Fill a form and book the selected services

This project helped me understand how DOM manipulation, arrays, and event handling work together in JavaScript.

## Features

* Display services one at a time
* Add or skip services
* Cart updates dynamically
* Total amount calculation
* Form validation before booking
* "Book Now" button activates only when items are added

## Technologies Used

* HTML 
* CSS 
* JavaScript 

## How to Run

1. Download or unzip the project folder
2. Open the folder
3. Double click on `index.html`
4. The project will open in your browser

## How It Works

* An array of services is created in JavaScript
* Only one service is shown at a time using an index
* When "Add Item" is clicked:

  * Item is added to cart array
  * Total amount increases
  * Next service is shown
* When "Skip" is clicked:

  * It simply moves to the next service
* Cart is displayed using DOM updates

## Example

If user adds:

* Dry Cleaning → ₹200
* Ironing → ₹30

Total Amount = ₹230

## Validation

* User cannot book without adding items
* Name field must not be empty

## What I Learned

* How to use arrays to store data
* How to update HTML using JavaScript (DOM)
* How buttons trigger functions
* How to manage state using variables like index and total
* Basic UI structuring using CSS

## Files

* index.html
* style.css
* script.js
* README.md