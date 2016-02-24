import ErrorSerializer from '../../../src/protocol/serializers/error-serializer';
import { expect } from 'chai';

describe('Error serializer', () => {
    it('treats Error as serializable', () => {
        expect(ErrorSerializer.isSerializable(new Error())).to.equal(true);
    });

    it('serializes and deserializes to Error', () => {
        let err = new Error('this is the message');
        err.info = { someInfo: 'a' };
        err.code = 'SOME_ERROR';
        let resultError = ErrorSerializer.deserialize(ErrorSerializer.serialize(err));

        expect(resultError.message).to.equal(err.message);
        expect(resultError.code).to.equal(err.code);
        expect(resultError.info).to.deep.equal(err.info);
    });

    it('serializes to a string', () => {
        expect(ErrorSerializer.serialize(new Error())).to.be.a('string');
    });
});
