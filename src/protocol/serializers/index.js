import dateSerializer from './date-serializer';
import durationSerializer from './duration-serializer';
import nanSerializer from './nan-serializer';
import infinitySerializer from './infinity-serializer';

export default [
    dateSerializer,
    durationSerializer,
    infinitySerializer,
    nanSerializer
];
