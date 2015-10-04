'use strict';

import Backbone from 'backbone';

const { View } = Backbone;

export class App extends View {

  constructor(options) {
    super(options);
    this.decodeEmail();
  }

  decodeEmail() {
    let pathname = window.location.href;
    let contactLink = document.getElementById('contactLink');
    contactLink.href = atob(contactLink.href.split(pathname)[1]);
  }

  start() {}

}
