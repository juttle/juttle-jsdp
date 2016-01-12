import moment from 'moment';

const durationSerializer = {
    type: 'duration',
    isSerializable(value) {
        return moment.isDuration(value);
    },
    serialize(value) {
        return value.toString();
    },
    deserialize(value) {
        return moment.duration(value);
    }
};

export default durationSerializer;
