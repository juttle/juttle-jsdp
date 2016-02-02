# juttle-jsdp

[![Build Status](https://travis-ci.org/juttle/juttle-jsdp.svg?branch=master)](https://travis-ci.org/juttle/juttle-jsdp)

The implementation of the Juttle Streaming Data Protocol (JSDP) used by the components of Project Juttle to send data and metadata between the server ([outrigger](https://github.com/juttle/outrigger)) and client ([juttle-client-library](https://github.com/juttle/juttle-client-library)) components.

## Getting started

### Node.js
Note: [momentjs](https://www.npmjs.com/package/moment) is a peerDependency.
```bash
$ npm install juttle-jsdp
```
```javascript
let JSDP = require('juttle-jsdp');
console.log(JSDP.serialize({time: new Date(2000)}));
```

### Browser
Note: [momentjs](http://momentjs.com/) is expected as an external dependency so be sure its available globally.
```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.1/moment.js"></script>
<script type="text/javascript" src="dist/juttle-jsdp.js">

JuttleJSDP.serialize({time: new Date(2000)});
</script>
```


## API

### JSDP.serialize(value)
Serializes the given object to JSON.

### JSDP.deserialize(data)
Deserializes the given JSON and returns an object that has "value equality" with original serialization target.
