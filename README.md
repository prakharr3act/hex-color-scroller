# Background Color Generator

A lightweight web application that automates background color transitions using randomized HEX codes and asynchronous JavaScript.

## Features

* Random HEX color generation logic.
* Start and stop functionality via interval management.
* Real-time display of current color codes.
* Minimalist interface built with HTML5 and CSS3.

## Implementation Details

The project utilizes `setInterval()` to execute a color transformation function every 1000 milliseconds. The color logic maps a 6-character string from a hexadecimal constant to update the CSS `background` property of the document body.

