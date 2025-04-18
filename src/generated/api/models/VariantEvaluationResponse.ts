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

export class VariantEvaluationResponse {
    'match'?: boolean;
    'segmentKeys'?: Array<string>;
    'reason'?: VariantEvaluationResponseReasonEnum;
    'variantKey'?: string;
    'variantAttachment'?: string;
    'requestId'?: string;
    'requestDurationMillis'?: number;
    'timestamp'?: Date;
    'flagKey'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "match",
            "baseName": "match",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "segmentKeys",
            "baseName": "segmentKeys",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "VariantEvaluationResponseReasonEnum",
            "format": "enum"
        },
        {
            "name": "variantKey",
            "baseName": "variantKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "variantAttachment",
            "baseName": "variantAttachment",
            "type": "string",
            "format": ""
        },
        {
            "name": "requestId",
            "baseName": "requestId",
            "type": "string",
            "format": ""
        },
        {
            "name": "requestDurationMillis",
            "baseName": "requestDurationMillis",
            "type": "number",
            "format": "double"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "flagKey",
            "baseName": "flagKey",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VariantEvaluationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum VariantEvaluationResponseReasonEnum {
    UnknownEvaluationReason = 'UNKNOWN_EVALUATION_REASON',
    FlagDisabledEvaluationReason = 'FLAG_DISABLED_EVALUATION_REASON',
    MatchEvaluationReason = 'MATCH_EVALUATION_REASON',
    DefaultEvaluationReason = 'DEFAULT_EVALUATION_REASON'
}

