import PluggableJSON from 'pluggable-json';
import serializers from './serializers';

let pluggableJSON = new PluggableJSON(serializers);

export default {
    serialize(obj, options) {
        return pluggableJSON.serialize(obj, options);
    },
    deserialize(value) {
        return pluggableJSON.deserialize(value);
    }
};
