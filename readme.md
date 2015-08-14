# create-errback [![Build Status](https://travis-ci.org/bendrucker/create-errback.svg?branch=master)](https://travis-ci.org/bendrucker/create-errback)

> Compose a Node errback using an error and success handler


## Install

```
$ npm install --save create-errback
```


## Usage

```js
var createErrback = require('create-errback')

var errback = createErrback(onError, onSuccess)
//=> function

function onError (err) {
  // ...
}

function onSuccess (result) {
 // ...
}
```

## API

#### `createErrback(onError, onSuccess)` -> `function`

##### onError

*Required*  
Type: `function`

A function to be called when the returned function is called with an error.

##### onSuccess

*Required*  
Type: `function`

A function to be called when the returned function does not receive an error. If the errback is called with multiple arguments, these will all be passed to `onSuccess`.


## License

MIT © [Ben Drucker](http://bendrucker.me)
