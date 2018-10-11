import React from 'react';

import Thing from 'UI/Thing.jsx'; // imported multiple times error (aka it works and the other imports are throwing it off)
import OtherThing from 'UI/Thing'; // unable to resolve path error
import AnotherThing from '@UI/Thing.jsx'; // should be listed in project deps error AND imported multiple times error
import AnotherOtherThing from '@UI/Thing'; // unable to resolve path error

export default () => (
  <div>
    <AnotherOtherThing />
    <AnotherThing />
    <OtherThing />
    <Thing />
  </div>
);
