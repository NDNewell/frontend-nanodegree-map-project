## SURFLIST (Neighborhood Map Project)

### Overview
------------

* Surflist is a web app that enables surfers to find a wave that fits their
  surfing needs in terms of wave size, difficulty, break type etc. In addition
  to providing basic info about each location, users can access live forecast
  data provided by Magic Seaweed. As this is a work in progress, new features
  will be added on an ongoing basis. Improvements and feature suggestions are
  most welcome.

* When getting live conditions, because the api information provided by Magic
  Seaweed is not https, the browser will block the content. In order to fix
  this, loading unsafe scripts or mixed content must be enabled.

### Instructions
----------------

* Open 'https://dazzling-torch-4012.firebaseapp.com/' in any browser.

* This repository's url is:
  https://github.com/NDNewell/frontend-nanodegree-map-project


### Features
------------

* By clicking the globe icon, the map is hidden or shown.

* Clicking the star icon, displays/hides the user's favorite locations.

* Clicking the magnifying glass icon enables the user to make a search for a
  location by break name or break location.


#### Grid View (landing page)

* When the page first loads, simply scroll up/down until you find a location
  you want.

* Clicking a location will open that location's surf guide, providing more info
  about the break.

* Hovering over each location displays rollover icons that offer a preview of
  what the location has to offer in terms of difficulty, type of break, wave
  direction etc.


#### Map View

* Clicking on a location's map marker reveals its name in an info window.

* Hovering over a location's map marker auto scrolls to its related location
  frame at the bottom of the page.

* Clicking a location will open that location's surf guide, providing more info
  about the break.

* Hovering over each location provides rollover icons that offer a preview of
  what the location has to offer in terms of difficulty, type of break, wave
  direction etc.

* Only the location frames whose related markers are visible on the map are
  shown.

* If no map markers are visible, the map can be reset by pressing the reset
  map button.


#### Surf Guide

* The surf guide displays specific information related to each break.

* By clicking the current conditions button, live conditions are retrieved
  via Magic Seaweed's surf report api for that particular location.

* In addition to icons that convey specific info about the break, a live
  compass is rendered in order to display current wind and swell conditions.


###  Author
-----------

  * Nicholas Newell


###  Resources used
-------------------

  * Head First JavaScript Programming by O'Reilly

  * JavaScript and jQuery The Missing Manual 3rd Edition by David Sawyer
    McFarland

  * JavaScript and JQuery Interactive Front-End Web Development by Jon Duckett

  * KnockoutJS Starter by Eric M. Barnard

  * KnockoutJS Web Develepment by John Farrar

  * Web App Testing Using Knockout.JS by Roberto Messora

  * Udacity: Intro to Ajax

  * Udacity: Javascript Design Patterns

  * Mozilla Developer Network

  * StackOverflow.com

  * w3schools.com

  * JSFiddle.net


###  Submissions
----------------

  * For bugs, feature requests, patches please contact first elaborating on
    your ideas/problems. If an agreement is reached, you may proceed by
    submitting a pull request etc.


###  Contact
------------

  * Email: rebelexplorer31@gmail.com
  * GitHub: https://github.com/NDNewell