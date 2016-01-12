import _ from 'underscore';

const nanSerializer = {
    type: 'nan',
    isSerializable(value) {
        return _.isNaN(value);
    },
    serialize(value) {
        return 'NaN';
    },
    deserialize(value) {
        return NaN;
    }
};

export default nanSerializer;
