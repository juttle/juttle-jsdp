import PluggableJSON from 'pluggable-json';
import serializers from './serializers';

let pluggableJSON = new PluggableJSON(serializers);

export default {
    serialize(obj) {
        return pluggableJSON.serialize(obj);
    },
    deserialize(value) {
        return pluggableJSON.deserialize(value);
    }
};
