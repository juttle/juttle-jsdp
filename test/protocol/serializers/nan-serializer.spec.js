import NanSerializer from '../../../src/protocol/serializers/nan-serializer';
import { expect } from 'chai';

describe('NaN serializer', () => {
    it('treats NaN as serializable', () => {
        expect(NanSerializer.isSerializable(NaN)).to.equal(true);
    });

    it('serializes and deserializes to NaN', () => {
        expect(isNaN(NanSerializer.deserialize(NanSerializer.serialize(NaN)))).to.equal(true);
    });

    it('serializes to a string', () => {
        expect(NanSerializer.serialize(NaN)).to.be.a('string');
    });
});
