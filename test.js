'use strict'

var test = require('tape')
var errback = require('./')

test('success', function (t) {
  t.plan(2)
  var callback = errback(t.fail, function onSuccess (a, b) {
    t.equal(a, 1)
    t.equal(b, 2)
  })
  callback(null, 1, 2)
})

test('error', function (t) {
  t.plan(1)
  var callback = errback(t.ok, t.fail)
  callback(new Error())
})

test('argument validation', function (t) {
  t.throws(errback, 'onError')
  t.throws(errback.bind(null, console.log), 'onSuccess')
  t.end()
})
