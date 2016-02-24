const errorSerializer = {
    type: 'error',
    isSerializable(value) {
        return value instanceof Error;
    },
    serialize(value) {
        return value.message;
    },
    deserialize(value) {
        return new Error(value);
    }
};

export default errorSerializer;
