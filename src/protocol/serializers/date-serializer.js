import _ from 'underscore';

const dateSerializer = {
    type: 'date',
    isSerializable(value) {
        return _.isDate(value);
    },
    serialize(value) {
        return value.toISOString();
    },
    deserialize(value) {
        return new Date(value);
    }
};

export default dateSerializer;
