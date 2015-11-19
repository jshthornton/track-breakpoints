import $ from 'jquery';
import _ from 'lodash';

export default class {
  constructor(callback) {
    this._eventName = 'breakpointchange';
    this._callback = callback;

    this._bindFns();
    this._bindEvents();
  }

  _bindFns() {
    _.bindAll(this, [
      '_onBreakpointChange'
    ]);
  }

  _bindEvents() {
    $(document).on(this._eventName, this._onBreakpointChange);
  }

  cleanup() {

  }

  // Events
  _onBreakpointChange() {
    this._callback.apply(null, arguments);
  }
};

