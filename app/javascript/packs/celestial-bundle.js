import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/celestial/components/HelloWorld';
import HelloCelestial from '../bundles/celestial/components/HelloCelestial';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloCelestial,HelloWorld,
});
