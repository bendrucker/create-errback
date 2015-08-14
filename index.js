'use strict'

var assertFn = require('assert-function')
var toArray = require('to-array')

module.exports = function createErrback (onError, onSuccess) {
  assertFn(onError)
  assertFn(onSuccess)
  return function errback (err) {
    if (err) return onError(err)
    onSuccess.apply(null, toArray(arguments, 1))
  }
}
