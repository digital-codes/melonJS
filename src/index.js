
// import all ES6 Class definition
import math from "./math/math.js";
import utils from "./utils/utils.js";

/**
* (<b>m</b>)elonJS (<b>e</b>)ngine : All melonJS functions are defined inside
* of this namespace.
* <p>You generally should not add new properties to this namespace as it may be
* overwritten in future versions.</p>
* @namespace me
*/

// namespace "me" will be created by rollup automatically
// export everything
export {
    math as Math,
    utils
    // work in progress during the es5->es6 transition
};
