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

import { Polling } from '../models/Polling';
import { HttpFile } from '../http/http';

export class CacheInvalidation {
    'polling'?: Polling;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "polling",
            "baseName": "polling",
            "type": "Polling",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CacheInvalidation.attributeTypeMap;
    }

    public constructor() {
    }
}
