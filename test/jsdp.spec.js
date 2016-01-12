import JSDP from '../src/';
import { expect } from 'chai';
import moment from 'moment';

describe('protocol', () => {
    it('serializes and deserializes object to the same value', () => {
        const obj = {
            aNaN: NaN,
            anInfinity: Infinity,
            aDate: new Date(2000),
            aDuration: moment.duration(1, 'hour')
        };

        expect(JSDP.deserialize(JSDP.serialize(obj))).to.deep.equal(obj);
    });
});
