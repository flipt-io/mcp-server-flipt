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

import { Flag } from '../models/Flag';
import { HttpFile } from '../http/http';

export class FlagList {
    'flags'?: Array<Flag>;
    'nextPageToken'?: string;
    'totalCount'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "flags",
            "baseName": "flags",
            "type": "Array<Flag>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "nextPageToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return FlagList.attributeTypeMap;
    }

    public constructor() {
    }
}
