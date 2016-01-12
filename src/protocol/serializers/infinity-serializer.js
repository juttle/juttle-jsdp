const infinitySerializer = {
    type: 'infinity',
    isSerializable(value) {
        return value === Infinity || value === -Infinity;
    },
    serialize(value) {
        return value.toString();
    },
    deserialize(value) {
        return value === 'Infinity' ? Infinity : -Infinity;
    }
};

export default infinitySerializer;
