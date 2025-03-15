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

import { RolloutSegment } from '../models/RolloutSegment';
import { RolloutThreshold } from '../models/RolloutThreshold';
import { HttpFile } from '../http/http';

export class CreateRolloutRequest {
    'namespaceKey'?: string;
    'flagKey'?: string;
    'rank': number;
    'description'?: string;
    'segment'?: RolloutSegment;
    'threshold'?: RolloutThreshold;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "namespaceKey",
            "baseName": "namespaceKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "flagKey",
            "baseName": "flagKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "rank",
            "baseName": "rank",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "segment",
            "baseName": "segment",
            "type": "RolloutSegment",
            "format": ""
        },
        {
            "name": "threshold",
            "baseName": "threshold",
            "type": "RolloutThreshold",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateRolloutRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
