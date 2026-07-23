export * from '../models/Authentication';
export * from '../models/AuthorizeURLResponse';
export * from '../models/BatchEvaluationRequest';
export * from '../models/BatchEvaluationResponse';
export * from '../models/BooleanEvaluationResponse';
export * from '../models/BulkEvaluationResponse';
export * from '../models/CacheInvalidation';
export * from '../models/CallbackResponse';
export * from '../models/Capabilities';
export * from '../models/Constraint';
export * from '../models/CreateConstraintRequest';
export * from '../models/CreateDistributionRequest';
export * from '../models/CreateFlagRequest';
export * from '../models/CreateNamespaceRequest';
export * from '../models/CreateRolloutRequest';
export * from '../models/CreateRuleRequest';
export * from '../models/CreateSegmentRequest';
export * from '../models/CreateTokenRequest';
export * from '../models/CreateTokenResponse';
export * from '../models/CreateVariantRequest';
export * from '../models/Distribution';
export * from '../models/ErrorEvaluationResponse';
export * from '../models/EvaluateBulkRequest';
export * from '../models/EvaluateFlagRequest';
export * from '../models/EvaluatedFlag';
export * from '../models/EvaluationRequest';
export * from '../models/EvaluationResponse';
export * from '../models/Flag';
export * from '../models/FlagEvaluation';
export * from '../models/FlagList';
export * from '../models/GetProviderConfigurationResponse';
export * from '../models/ListAuthenticationsResponse';
export * from '../models/Namespace';
export * from '../models/NamespaceList';
export * from '../models/OrderRolloutsRequest';
export * from '../models/OrderRulesRequest';
export * from '../models/Polling';
export * from '../models/Rollout';
export * from '../models/RolloutList';
export * from '../models/RolloutSegment';
export * from '../models/RolloutThreshold';
export * from '../models/Rule';
export * from '../models/RuleList';
export * from '../models/Segment';
export * from '../models/SegmentList';
export * from '../models/UpdateConstraintRequest';
export * from '../models/UpdateDistributionRequest';
export * from '../models/UpdateFlagRequest';
export * from '../models/UpdateNamespaceRequest';
export * from '../models/UpdateRolloutRequest';
export * from '../models/UpdateRuleRequest';
export * from '../models/UpdateSegmentRequest';
export * from '../models/UpdateVariantRequest';
export * from '../models/Variant';
export * from '../models/VariantEvaluationResponse';
export * from '../models/VerifyServiceAccountRequest';
export * from '../models/VerifyServiceAccountResponse';

import { Authentication , AuthenticationMethodEnum       } from '../models/Authentication';
import { AuthorizeURLResponse } from '../models/AuthorizeURLResponse';
import { BatchEvaluationRequest } from '../models/BatchEvaluationRequest';
import { BatchEvaluationResponse } from '../models/BatchEvaluationResponse';
import { BooleanEvaluationResponse , BooleanEvaluationResponseReasonEnum       } from '../models/BooleanEvaluationResponse';
import { BulkEvaluationResponse } from '../models/BulkEvaluationResponse';
import { CacheInvalidation } from '../models/CacheInvalidation';
import { CallbackResponse } from '../models/CallbackResponse';
import { Capabilities } from '../models/Capabilities';
import { Constraint  , ConstraintTypeEnum          } from '../models/Constraint';
import { CreateConstraintRequest , CreateConstraintRequestTypeEnum        } from '../models/CreateConstraintRequest';
import { CreateDistributionRequest } from '../models/CreateDistributionRequest';
import { CreateFlagRequest     , CreateFlagRequestTypeEnum    } from '../models/CreateFlagRequest';
import { CreateNamespaceRequest } from '../models/CreateNamespaceRequest';
import { CreateRolloutRequest } from '../models/CreateRolloutRequest';
import { CreateRuleRequest     , CreateRuleRequestSegmentOperatorEnum   } from '../models/CreateRuleRequest';
import { CreateSegmentRequest   , CreateSegmentRequestMatchTypeEnum    } from '../models/CreateSegmentRequest';
import { CreateTokenRequest } from '../models/CreateTokenRequest';
import { CreateTokenResponse } from '../models/CreateTokenResponse';
import { CreateVariantRequest } from '../models/CreateVariantRequest';
import { Distribution } from '../models/Distribution';
import { ErrorEvaluationResponse  , ErrorEvaluationResponseReasonEnum   } from '../models/ErrorEvaluationResponse';
import { EvaluateBulkRequest } from '../models/EvaluateBulkRequest';
import { EvaluateFlagRequest } from '../models/EvaluateFlagRequest';
import { EvaluatedFlag , EvaluatedFlagReasonEnum      } from '../models/EvaluatedFlag';
import { EvaluationRequest } from '../models/EvaluationRequest';
import { EvaluationResponse, EvaluationResponseTypeEnum      } from '../models/EvaluationResponse';
import { Flag        , FlagTypeEnum     } from '../models/Flag';
import { FlagEvaluation } from '../models/FlagEvaluation';
import { FlagList } from '../models/FlagList';
import { GetProviderConfigurationResponse } from '../models/GetProviderConfigurationResponse';
import { ListAuthenticationsResponse } from '../models/ListAuthenticationsResponse';
import { Namespace } from '../models/Namespace';
import { NamespaceList } from '../models/NamespaceList';
import { OrderRolloutsRequest } from '../models/OrderRolloutsRequest';
import { OrderRulesRequest } from '../models/OrderRulesRequest';
import { Polling } from '../models/Polling';
import { Rollout   , RolloutTypeEnum         } from '../models/Rollout';
import { RolloutList } from '../models/RolloutList';
import { RolloutSegment   , RolloutSegmentSegmentOperatorEnum   } from '../models/RolloutSegment';
import { RolloutThreshold } from '../models/RolloutThreshold';
import { Rule         , RuleSegmentOperatorEnum   } from '../models/Rule';
import { RuleList } from '../models/RuleList';
import { Segment      , SegmentMatchTypeEnum    } from '../models/Segment';
import { SegmentList } from '../models/SegmentList';
import { UpdateConstraintRequest  , UpdateConstraintRequestTypeEnum        } from '../models/UpdateConstraintRequest';
import { UpdateDistributionRequest } from '../models/UpdateDistributionRequest';
import { UpdateFlagRequest } from '../models/UpdateFlagRequest';
import { UpdateNamespaceRequest } from '../models/UpdateNamespaceRequest';
import { UpdateRolloutRequest } from '../models/UpdateRolloutRequest';
import { UpdateRuleRequest     , UpdateRuleRequestSegmentOperatorEnum   } from '../models/UpdateRuleRequest';
import { UpdateSegmentRequest   , UpdateSegmentRequestMatchTypeEnum    } from '../models/UpdateSegmentRequest';
import { UpdateVariantRequest } from '../models/UpdateVariantRequest';
import { Variant } from '../models/Variant';
import { VariantEvaluationResponse  , VariantEvaluationResponseReasonEnum         } from '../models/VariantEvaluationResponse';
import { VerifyServiceAccountRequest } from '../models/VerifyServiceAccountRequest';
import { VerifyServiceAccountResponse } from '../models/VerifyServiceAccountResponse';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "AuthenticationMethodEnum",
    "BooleanEvaluationResponseReasonEnum",
    "ConstraintTypeEnum",
    "CreateConstraintRequestTypeEnum",
    "CreateFlagRequestTypeEnum",
    "CreateRuleRequestSegmentOperatorEnum",
    "CreateSegmentRequestMatchTypeEnum",
    "ErrorEvaluationResponseReasonEnum",
    "EvaluatedFlagReasonEnum",
    "EvaluationResponseTypeEnum",
    "FlagTypeEnum",
    "RolloutTypeEnum",
    "RolloutSegmentSegmentOperatorEnum",
    "RuleSegmentOperatorEnum",
    "SegmentMatchTypeEnum",
    "UpdateConstraintRequestTypeEnum",
    "UpdateRuleRequestSegmentOperatorEnum",
    "UpdateSegmentRequestMatchTypeEnum",
    "VariantEvaluationResponseReasonEnum",
]);

let typeMap: {[index: string]: any} = {
    "Authentication": Authentication,
    "AuthorizeURLResponse": AuthorizeURLResponse,
    "BatchEvaluationRequest": BatchEvaluationRequest,
    "BatchEvaluationResponse": BatchEvaluationResponse,
    "BooleanEvaluationResponse": BooleanEvaluationResponse,
    "BulkEvaluationResponse": BulkEvaluationResponse,
    "CacheInvalidation": CacheInvalidation,
    "CallbackResponse": CallbackResponse,
    "Capabilities": Capabilities,
    "Constraint": Constraint,
    "CreateConstraintRequest": CreateConstraintRequest,
    "CreateDistributionRequest": CreateDistributionRequest,
    "CreateFlagRequest": CreateFlagRequest,
    "CreateNamespaceRequest": CreateNamespaceRequest,
    "CreateRolloutRequest": CreateRolloutRequest,
    "CreateRuleRequest": CreateRuleRequest,
    "CreateSegmentRequest": CreateSegmentRequest,
    "CreateTokenRequest": CreateTokenRequest,
    "CreateTokenResponse": CreateTokenResponse,
    "CreateVariantRequest": CreateVariantRequest,
    "Distribution": Distribution,
    "ErrorEvaluationResponse": ErrorEvaluationResponse,
    "EvaluateBulkRequest": EvaluateBulkRequest,
    "EvaluateFlagRequest": EvaluateFlagRequest,
    "EvaluatedFlag": EvaluatedFlag,
    "EvaluationRequest": EvaluationRequest,
    "EvaluationResponse": EvaluationResponse,
    "Flag": Flag,
    "FlagEvaluation": FlagEvaluation,
    "FlagList": FlagList,
    "GetProviderConfigurationResponse": GetProviderConfigurationResponse,
    "ListAuthenticationsResponse": ListAuthenticationsResponse,
    "Namespace": Namespace,
    "NamespaceList": NamespaceList,
    "OrderRolloutsRequest": OrderRolloutsRequest,
    "OrderRulesRequest": OrderRulesRequest,
    "Polling": Polling,
    "Rollout": Rollout,
    "RolloutList": RolloutList,
    "RolloutSegment": RolloutSegment,
    "RolloutThreshold": RolloutThreshold,
    "Rule": Rule,
    "RuleList": RuleList,
    "Segment": Segment,
    "SegmentList": SegmentList,
    "UpdateConstraintRequest": UpdateConstraintRequest,
    "UpdateDistributionRequest": UpdateDistributionRequest,
    "UpdateFlagRequest": UpdateFlagRequest,
    "UpdateNamespaceRequest": UpdateNamespaceRequest,
    "UpdateRolloutRequest": UpdateRolloutRequest,
    "UpdateRuleRequest": UpdateRuleRequest,
    "UpdateSegmentRequest": UpdateSegmentRequest,
    "UpdateVariantRequest": UpdateVariantRequest,
    "Variant": Variant,
    "VariantEvaluationResponse": VariantEvaluationResponse,
    "VerifyServiceAccountRequest": VerifyServiceAccountRequest,
    "VerifyServiceAccountResponse": VerifyServiceAccountResponse,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
