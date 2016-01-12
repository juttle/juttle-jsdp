import DateSerializer from '../../../src/protocol/serializers/date-serializer';
import { expect } from 'chai';

describe('Date serializer', () => {
    it('treats a Date serializable', () => {
        expect(DateSerializer.isSerializable(new Date())).to.equal(true);
    });

    it('serializes and deserializes to the same value', () => {
        let myDate = new Date(2000);
        expect(DateSerializer.deserialize(DateSerializer.serialize(myDate)).getTime()).to.equal(myDate.getTime());
    });

    it('serializes to a string', () => {
        expect(DateSerializer.serialize(new Date())).to.be.a('string');
    });
});
