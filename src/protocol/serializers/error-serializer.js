const errorSerializer = {
    type: 'error',
    isSerializable(value) {
        return value instanceof Error;
    },
    serialize(value) {
        var result = {
            message: value.message
        };

        if (value.info) {
            result.info = value.info;
        }

        if (value.code) {
            result.code = value.code;
        }

        return JSON.stringify(result);
    },
    deserialize(value) {
        var parsed = JSON.parse(value);
        var err = new Error(parsed.message);

        if (parsed.info) {
            err.info = parsed.info;
        }

        if (parsed.code) {
            err.code = parsed.code;
        }

        return err;
    }
};

export default errorSerializer;
