import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-oslo',
    predictionPlace: {
      address: 'Oslo',
      bounds: new LatLngBounds(
        new LatLng(59.9621451, 10.79577184),
        new LatLng(59.8890866, 10.68612998)
      ),
    },
  },
  {
    id: 'default-bergen',
    predictionPlace: {
      address: 'Bergen',
      bounds: new LatLngBounds(
        new LatLng(60.411551, 5.358790),
        new LatLng(60.377595, 5.296574)
      ),
    },
  },
  {
    id: 'default-stavanger',
    predictionPlace: {
      address: 'Stavanger',
      bounds: new LatLngBounds(
        new LatLng(58.9978551, 5.77814),
        new LatLng(58.8632659, 5.56644)
      ),
    },
  },
  {
    id: 'default-trondheim',
    predictionPlace: {
      address: 'Trondheim',
      bounds: new LatLngBounds(
        new LatLng(63.471333, 10.514119),
        new LatLng(63.381017, 10.318926)
      ),
    },
  },
  {
    id: 'default-fredrikstad',
    predictionPlace: {
      address: 'Fredrikstad',
      bounds: new LatLngBounds(
        new LatLng(59.273414, 11.036079),
        new LatLng(59.195768, 10.886733)
      ),
    },
  },
];
export default defaultLocations;
