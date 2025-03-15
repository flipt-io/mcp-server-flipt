/**
 * api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.47.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class OrderRolloutsRequest {
    'flagKey'?: string;
    'namespaceKey'?: string;
    'rolloutIds': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "flagKey",
            "baseName": "flagKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "namespaceKey",
            "baseName": "namespaceKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "rolloutIds",
            "baseName": "rolloutIds",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderRolloutsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
