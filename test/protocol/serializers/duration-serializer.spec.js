import DurationSerializer from '../../../src/protocol/serializers/duration-serializer';
import { expect } from 'chai';
import moment from 'moment';

describe('Duration serializer', () => {
    it('treats a moment.duration serializable', () => {
        expect(DurationSerializer.isSerializable(moment.duration(1, 'hour'))).to.equal(true);
    });

    it('serializes and deserializes to the same value', () => {
        let oneHour = moment.duration(1, 'hour');
        expect(DurationSerializer.deserialize(DurationSerializer.serialize(oneHour)).as('minutes')).to.equal(oneHour.as('minutes'));

        let twoMonths = moment.duration(2, 'month');
        expect(DurationSerializer.deserialize(DurationSerializer.serialize(twoMonths)).as('months')).to.equal(twoMonths.as('months'));
    });

    it('serializes to a string', () => {
        expect(DurationSerializer.serialize(moment.duration(1, 'hour'))).to.be.a('string');
    });
});
