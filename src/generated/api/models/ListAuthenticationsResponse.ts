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

import { Authentication } from '../models/Authentication';
import { HttpFile } from '../http/http';

export class ListAuthenticationsResponse {
    'authentications'?: Array<Authentication>;
    'nextPageToken'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authentications",
            "baseName": "authentications",
            "type": "Array<Authentication>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "nextPageToken",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListAuthenticationsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
