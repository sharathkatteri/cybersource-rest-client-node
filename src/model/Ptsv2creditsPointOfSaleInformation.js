/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Ptsv2creditsPointOfSaleInformationEmv'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2creditsPointOfSaleInformationEmv'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2creditsPointOfSaleInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2creditsPointOfSaleInformationEmv);
  }
}(this, function(ApiClient, Ptsv2creditsPointOfSaleInformationEmv) {
  'use strict';




  /**
   * The Ptsv2creditsPointOfSaleInformation model module.
   * @module model/Ptsv2creditsPointOfSaleInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2creditsPointOfSaleInformation</code>.
   * @alias module:model/Ptsv2creditsPointOfSaleInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Ptsv2creditsPointOfSaleInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2creditsPointOfSaleInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2creditsPointOfSaleInformation} The populated <code>Ptsv2creditsPointOfSaleInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('emv')) {
        obj['emv'] = Ptsv2creditsPointOfSaleInformationEmv.constructFromObject(data['emv']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2creditsPointOfSaleInformationEmv} emv
   */
  exports.prototype['emv'] = undefined;



  return exports;
}));


