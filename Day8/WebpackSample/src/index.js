const jQuery = require('jquery')

const lib = require('./lib')

lib.sayHello()

jQuery(function () {
  jQuery('body').append('HELLO')
})