"use strict";

/**
 * Snip - a lightweight (~ 1KB) vanilla JavaScript library for truncating HTML elements.
 *
 * @author Louis Young
 * @version v0.0.2
 * @license MIT
 */

const data = {
  config: {
    append: "..."
  },
  attributes: {
    length: "data-truncate-length"
  },
  states: {
    collapse: "collapse",
    expand: "expand"
  }
};

/**
 * Screen class.
 */

class Screen {
  /**
   * Render the element in the DOM.
   *
   * @param string - the string waiting to be output.
   * @param state - the state of the element (collapse/expand).
   */

  render(string, state) {
    if (state == data.states.collapse) {
      this.output = string + data.config.append;
    } else {
      this.output = string;
    }

    this.element.innerHTML = this.output;
  }
}

/**
 * Snip class.
 *
 * Truncate a string from a HTML element and undo the truncation.
 *
 * @extends Screen
 */

class Snip extends Screen {
  /**
   * Main constructor.
   *
   * @param selector - the target element selector.
   * @param length - the length which the string should become.
   */

  constructor(selector, length, state) {
    super();
    this.selector = selector;
    this.element = document.querySelector(this.selector);
    this.length =
      parseInt(this.element.getAttribute(data.attributes.length)) || length;
    this.state = state;
    this.string = this.element.innerHTML;
    this.presevedString = this.string;
    this.output;
    this.initialize(this.state);
  }

  /**
   * Initialize.
   *
   * Decide which action to take on the element (default: truncate).
   */

  initialize(state) {
    if (state == "expand") {
      this.expand();
    } else {
      this.truncate();
    }
  }

  /**
   * Truncate the string.
   */

  truncate() {
    this.string = this.string.slice(0, this.length);
    this.render(this.string, data.states.collapse);
  }

  /**
   * Undo the truncation.
   */

  expand() {
    this.render(this.presevedString, "expand");
  }
}

// Instantiate the Snip object and truncate the element.
//const snip = new Snip('.foo', 15);

// Upon click, truncate the element.
document.addEventListener("click", () => {
  // Instantiate the Snip object.
  const snip = new Snip(".foo", 15);

  // After 2500ms, reverse the truncation.
  setTimeout(() => {
    snip.expand();
    return;
  }, 2500);
});
