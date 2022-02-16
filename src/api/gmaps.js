import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: "AIzaSyCzpMVyV014V_QV-BSNM_G9Bsh4uAyZah4",
  version: "weekly",
  libraries: ["places"]
});

export default loader;