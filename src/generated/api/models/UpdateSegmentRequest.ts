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

export class UpdateSegmentRequest {
    'key'?: string;
    'name': string;
    'description'?: string;
    'matchType': UpdateSegmentRequestMatchTypeEnum;
    'namespaceKey'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "matchType",
            "baseName": "matchType",
            "type": "UpdateSegmentRequestMatchTypeEnum",
            "format": "enum"
        },
        {
            "name": "namespaceKey",
            "baseName": "namespaceKey",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateSegmentRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UpdateSegmentRequestMatchTypeEnum {
    AllMatchType = 'ALL_MATCH_TYPE',
    AnyMatchType = 'ANY_MATCH_TYPE'
}

