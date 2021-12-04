⚠️ Please note that this is an old project and does not reflect the quality of my current work.

# Truncate Strings

A lightweight (~1kb) vanilla JavaScript library for truncating strings.

## Usage

### Setup

#### Data Attributes

You can either configure the library by setting data attributes on the element you want to target or by passing in parameters when you instantiate the library.

`data-truncate-length` 

See the configuration section below for more details.

#### JavaScript

Simply instantiate a new instance of the `Truncate` object:

`const truncate = new Truncate('.element');`

You can also pass in configuration options in this order - `selector`, `length`.

`const truncate = new Truncate('.element', 10);`

### Configuration

#### Options

String length (the amount of characters in the truncated string) - `data-truncate-length`

