import dateSerializer from './date-serializer';
import durationSerializer from './duration-serializer';
import errorSerializer from './error-serializer';
import nanSerializer from './nan-serializer';
import infinitySerializer from './infinity-serializer';

export default [
    dateSerializer,
    durationSerializer,
    errorSerializer,
    infinitySerializer,
    nanSerializer
];
