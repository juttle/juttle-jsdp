import InfinitySerialier from '../../../src/protocol/serializers/infinity-serializer';
import { expect } from 'chai';

describe('Infinity serializer', () => {
    describe('Infinity', () => {
        it('treats as serializable', () => {
            expect(InfinitySerialier.isSerializable(Infinity)).to.equal(true);
        });

        it('serializes and deserializes to the same value', () => {
            expect(InfinitySerialier.deserialize(InfinitySerialier.serialize(Infinity))).to.equal(Infinity);
        });

        it('serializes to a string', () => {
            expect(InfinitySerialier.serialize(Infinity)).to.be.a('string');
        });
    });

    describe('-Infinity', () => {
        it('treats as serializable', () => {
            expect(InfinitySerialier.isSerializable(-Infinity)).to.equal(true);
        });

        it('serializes and deserializes to the same value', () => {
            expect(InfinitySerialier.deserialize(InfinitySerialier.serialize(-Infinity))).to.equal(-Infinity);
        });

        it('serializes to a string', () => {
            expect(InfinitySerialier.serialize(-Infinity)).to.be.a('string');
        });
    });
});
