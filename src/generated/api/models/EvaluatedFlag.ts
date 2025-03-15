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

export class EvaluatedFlag {
    'key'?: string;
    'reason'?: EvaluatedFlagReasonEnum;
    'variant'?: string;
    'metadata'?: any;
    /**
    * Represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values.
    */
    'value'?: any | null;

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
            "name": "reason",
            "baseName": "reason",
            "type": "EvaluatedFlagReasonEnum",
            "format": "enum"
        },
        {
            "name": "variant",
            "baseName": "variant",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EvaluatedFlag.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum EvaluatedFlagReasonEnum {
    Unknown = 'UNKNOWN',
    Disabled = 'DISABLED',
    TargetingMatch = 'TARGETING_MATCH',
    Default = 'DEFAULT'
}

