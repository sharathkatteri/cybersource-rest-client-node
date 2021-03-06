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
    define(['ApiClient', 'model/ReportingV3ReportSubscriptionsGet200ResponseReportPreferences'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportingV3ReportSubscriptionsGet200ResponseReportPreferences'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.RequestBody = factory(root.CyberSource.ApiClient, root.CyberSource.ReportingV3ReportSubscriptionsGet200ResponseReportPreferences);
  }
}(this, function(ApiClient, ReportingV3ReportSubscriptionsGet200ResponseReportPreferences) {
  'use strict';




  /**
   * The RequestBody model module.
   * @module model/RequestBody
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>RequestBody</code>.
   * @alias module:model/RequestBody
   * @class
   * @param reportDefinitionName {String} 
   * @param reportFields {Array.<String>} 
   * @param reportName {String} 
   */
  var exports = function(reportDefinitionName, reportFields, reportName) {
    var _this = this;


    _this['reportDefinitionName'] = reportDefinitionName;
    _this['reportFields'] = reportFields;


    _this['reportName'] = reportName;






  };

  /**
   * Constructs a <code>RequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestBody} obj Optional instance to populate.
   * @return {module:model/RequestBody} The populated <code>RequestBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('reportDefinitionName')) {
        obj['reportDefinitionName'] = ApiClient.convertToType(data['reportDefinitionName'], 'String');
      }
      if (data.hasOwnProperty('reportFields')) {
        obj['reportFields'] = ApiClient.convertToType(data['reportFields'], ['String']);
      }
      if (data.hasOwnProperty('reportMimeType')) {
        obj['reportMimeType'] = ApiClient.convertToType(data['reportMimeType'], 'String');
      }
      if (data.hasOwnProperty('reportFrequency')) {
        obj['reportFrequency'] = ApiClient.convertToType(data['reportFrequency'], 'String');
      }
      if (data.hasOwnProperty('reportName')) {
        obj['reportName'] = ApiClient.convertToType(data['reportName'], 'String');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('startTime')) {
        obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
      }
      if (data.hasOwnProperty('startDay')) {
        obj['startDay'] = ApiClient.convertToType(data['startDay'], 'Number');
      }
      if (data.hasOwnProperty('reportFilters')) {
        obj['reportFilters'] = ApiClient.convertToType(data['reportFilters'], {'String': ['String']});
      }
      if (data.hasOwnProperty('reportPreferences')) {
        obj['reportPreferences'] = ReportingV3ReportSubscriptionsGet200ResponseReportPreferences.constructFromObject(data['reportPreferences']);
      }
      if (data.hasOwnProperty('selectedMerchantGroupName')) {
        obj['selectedMerchantGroupName'] = ApiClient.convertToType(data['selectedMerchantGroupName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * @member {String} reportDefinitionName
   */
  exports.prototype['reportDefinitionName'] = undefined;
  /**
   * @member {Array.<String>} reportFields
   */
  exports.prototype['reportFields'] = undefined;
  /**
   * @member {module:model/RequestBody.ReportMimeTypeEnum} reportMimeType
   */
  exports.prototype['reportMimeType'] = undefined;
  /**
   * @member {String} reportFrequency
   */
  exports.prototype['reportFrequency'] = undefined;
  /**
   * @member {String} reportName
   */
  exports.prototype['reportName'] = undefined;
  /**
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * @member {Date} startTime
   */
  exports.prototype['startTime'] = undefined;
  /**
   * @member {Number} startDay
   */
  exports.prototype['startDay'] = undefined;
  /**
   * @member {Object.<String, Array.<String>>} reportFilters
   */
  exports.prototype['reportFilters'] = undefined;
  /**
   * @member {module:model/ReportingV3ReportSubscriptionsGet200ResponseReportPreferences} reportPreferences
   */
  exports.prototype['reportPreferences'] = undefined;
  /**
   * @member {String} selectedMerchantGroupName
   */
  exports.prototype['selectedMerchantGroupName'] = undefined;


  /**
   * Allowed values for the <code>reportMimeType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ReportMimeTypeEnum = {
    /**
     * value: "application/xml"
     * @const
     */
    "application/xml": "application/xml",
    /**
     * value: "text/csv"
     * @const
     */
    "text/csv": "text/csv"  };


  return exports;
}));


