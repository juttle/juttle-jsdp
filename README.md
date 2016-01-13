# juttle-jsdp

[![Build Status](https://travis-ci.org/juttle/juttle-jsdp.svg?branch=master)](https://travis-ci.org/juttle/juttle-jsdp)

The implementation of the Juttle Streaming Data Protocol (JSDP) used by the components of Project Juttle to send data and metadata between the server ([outrigger](https://github.com/juttle/outrigger)) and client ([juttle-client-library](https://github.com/juttle/juttle-client-library)) components.


## API

### JSDP.serialize(value)
Serializes the given object to JSON.

### JSDP.deserialize(data)
Deserializes the given JSON and returns an object that has "value equality" with original serialization target.
