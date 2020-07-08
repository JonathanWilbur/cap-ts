/*
    BEGIN_MODULE CAP-1-2
    OID: itu-t.recommendation.x.cap.version1-2
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import alertToXML from "./toXML";
import alertFromXML from "./fromXML";
import * as asn1 from "asn1-ts";
import * as XSD from "./XSD";
import * as __utils from "./__utils";
export {
    AnyURI,
    DateTime,
    Decimal,
    Language,
    String,
    _decode_AnyURI,
    _decode_DateTime,
    _decode_Decimal,
    _decode_Language,
    _decode_String,
    _encode_AnyURI,
    _encode_DateTime,
    _encode_Decimal,
    _encode_Language,
    _encode_String,
} from "./XSD";

export enum Alert_status {
    actual = 0,
    draft = 1,
    exercise = 2,
    system = 3,
    test = 4,
}
export function _to_string_Alert_status (value: Alert_status): string {
    return [
        "Actual",
        "Draft",
        "Exercise",
        "System",
        "Test",
    ][value];
}
export function _from_string_Alert_status (str: string): Alert_status | undefined {
    return (new Map<string, Alert_status>([
        [ "actual", Alert_status.actual ],
        [ "draft", Alert_status.draft ],
        [ "exercise", Alert_status.exercise ],
        [ "system", Alert_status.system ],
        [ "test", Alert_status.test ],
    ])).get(str.toLowerCase());
}
export const Alert_status_actual: Alert_status =
    Alert_status.actual; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_status_draft: Alert_status =
    Alert_status.draft; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_status_exercise: Alert_status =
    Alert_status.exercise; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_status_system: Alert_status =
    Alert_status.system; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_status_test: Alert_status =
    Alert_status.test; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_Alert_status: __utils.ASN1Decoder<
    Alert_status
> | null = null;
let _cached_encoder_for_Alert_status: __utils.ASN1Encoder<
    Alert_status
> | null = null;
export function _decode_Alert_status(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Alert_status) {
        _cached_decoder_for_Alert_status = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Alert_status(el);
}
export function _encode_Alert_status(
    value: Alert_status,
    elGetter: __utils.ASN1Encoder<Alert_status>
) {
    if (!_cached_encoder_for_Alert_status) {
        _cached_encoder_for_Alert_status = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Alert_status(value, elGetter);
}

export enum Alert_msgType {
    ack = 0,
    alert = 1,
    cancel = 2,
    error = 3,
    update = 4,
}
export function _to_string_Alert_msgType (value: Alert_msgType): string {
    return [
        "Ack",
        "Alert",
        "Cancel",
        "Error",
        "Update",
    ][value];
}
export function _from_string_Alert_msgType (str: string): Alert_msgType | undefined {
    return (new Map<string, Alert_msgType>([
        [ "ack", Alert_msgType.ack ],
        [ "alert", Alert_msgType.alert ],
        [ "cancel", Alert_msgType.cancel ],
        [ "error", Alert_msgType.error ],
        [ "update", Alert_msgType.update ],
    ])).get(str.toLowerCase());
}
export const Alert_msgType_ack: Alert_msgType =
    Alert_msgType.ack; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_msgType_alert: Alert_msgType =
    Alert_msgType.alert; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_msgType_cancel: Alert_msgType =
    Alert_msgType.cancel; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_msgType_error: Alert_msgType =
    Alert_msgType.error; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_msgType_update: Alert_msgType =
    Alert_msgType.update; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_Alert_msgType: __utils.ASN1Decoder<
    Alert_msgType
> | null = null;
let _cached_encoder_for_Alert_msgType: __utils.ASN1Encoder<
    Alert_msgType
> | null = null;
export function _decode_Alert_msgType(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Alert_msgType) {
        _cached_decoder_for_Alert_msgType = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Alert_msgType(el);
}
export function _encode_Alert_msgType(
    value: Alert_msgType,
    elGetter: __utils.ASN1Encoder<Alert_msgType>
) {
    if (!_cached_encoder_for_Alert_msgType) {
        _cached_encoder_for_Alert_msgType = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Alert_msgType(value, elGetter);
}

export enum Alert_scope {
    private_ = 0,
    public_ = 1,
    restricted = 2,
}
export function _to_string_Alert_scope (value: Alert_scope): string {
    return [
        "Private",
        "Public",
        "Restricted",
    ][value];
}
export function _from_string_Alert_scope (str: string): Alert_scope | undefined {
    return (new Map<string, Alert_scope>([
        [ "private", Alert_scope.private_ ],
        [ "public", Alert_scope.public_ ],
        [ "restricted", Alert_scope.restricted ],
    ])).get(str.toLowerCase());
}
export const Alert_scope_private_: Alert_scope =
    Alert_scope.private_; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_scope_public_: Alert_scope =
    Alert_scope.public_; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_scope_restricted: Alert_scope =
    Alert_scope.restricted; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_Alert_scope: __utils.ASN1Decoder<
    Alert_scope
> | null = null;
let _cached_encoder_for_Alert_scope: __utils.ASN1Encoder<
    Alert_scope
> | null = null;
export function _decode_Alert_scope(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Alert_scope) {
        _cached_decoder_for_Alert_scope = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Alert_scope(el);
}
export function _encode_Alert_scope(
    value: Alert_scope,
    elGetter: __utils.ASN1Encoder<Alert_scope>
) {
    if (!_cached_encoder_for_Alert_scope) {
        _cached_encoder_for_Alert_scope = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Alert_scope(value, elGetter);
}

export enum Alert_info_list_info_category_list_category {
    cBRNE = 0,
    env = 1,
    fire = 2,
    geo = 3,
    health = 4,
    infra = 5,
    met = 6,
    other = 7,
    rescue = 8,
    safety = 9,
    security = 10,
    transport = 11,
}
export function _to_string_Alert_info_list_info_category_list_category (value: Alert_info_list_info_category_list_category): string {
    return [
        "CBRNE",
        "Env",
        "Fire",
        "Geo",
        "Health",
        "Infra",
        "Met",
        "Other",
        "Rescue",
        "Safety",
        "Security",
        "Transport",
    ][value];
}
export function _from_string_Alert_info_list_info_category_list_category (str: string): Alert_info_list_info_category_list_category | undefined {
    return (new Map<string, Alert_info_list_info_category_list_category>([
        [ "cbrne", Alert_info_list_info_category_list_category.cBRNE ],
        [ "env", Alert_info_list_info_category_list_category.env ],
        [ "fire", Alert_info_list_info_category_list_category.fire ],
        [ "geo", Alert_info_list_info_category_list_category.geo ],
        [ "health", Alert_info_list_info_category_list_category.health ],
        [ "infra", Alert_info_list_info_category_list_category.infra ],
        [ "met", Alert_info_list_info_category_list_category.met ],
        [ "other", Alert_info_list_info_category_list_category.other ],
        [ "rescue", Alert_info_list_info_category_list_category.rescue ],
        [ "safety", Alert_info_list_info_category_list_category.safety ],
        [ "security", Alert_info_list_info_category_list_category.security ],
        [ "transport", Alert_info_list_info_category_list_category.transport ],
    ])).get(str.toLowerCase());
}
export const Alert_info_list_info_category_list_category_cBRNE: Alert_info_list_info_category_list_category =
    Alert_info_list_info_category_list_category.cBRNE; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_category_list_category_env: Alert_info_list_info_category_list_category =
    Alert_info_list_info_category_list_category.env; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_category_list_category_fire: Alert_info_list_info_category_list_category =
    Alert_info_list_info_category_list_category.fire; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_category_list_category_geo: Alert_info_list_info_category_list_category =
    Alert_info_list_info_category_list_category.geo; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_category_list_category_health: Alert_info_list_info_category_list_category =
    Alert_info_list_info_category_list_category.health; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_category_list_category_infra: Alert_info_list_info_category_list_category =
    Alert_info_list_info_category_list_category.infra; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_category_list_category_met: Alert_info_list_info_category_list_category =
    Alert_info_list_info_category_list_category.met; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_category_list_category_other: Alert_info_list_info_category_list_category =
    Alert_info_list_info_category_list_category.other; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_category_list_category_rescue: Alert_info_list_info_category_list_category =
    Alert_info_list_info_category_list_category.rescue; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_category_list_category_safety: Alert_info_list_info_category_list_category =
    Alert_info_list_info_category_list_category.safety; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_category_list_category_security: Alert_info_list_info_category_list_category =
    Alert_info_list_info_category_list_category.security; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_category_list_category_transport: Alert_info_list_info_category_list_category =
    Alert_info_list_info_category_list_category.transport; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_Alert_info_list_info_category_list_category: __utils.ASN1Decoder<
    Alert_info_list_info_category_list_category
> | null = null;
let _cached_encoder_for_Alert_info_list_info_category_list_category: __utils.ASN1Encoder<
    Alert_info_list_info_category_list_category
> | null = null;
export function _decode_Alert_info_list_info_category_list_category(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_Alert_info_list_info_category_list_category) {
        _cached_decoder_for_Alert_info_list_info_category_list_category =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Alert_info_list_info_category_list_category(el);
}
export function _encode_Alert_info_list_info_category_list_category(
    value: Alert_info_list_info_category_list_category,
    elGetter: __utils.ASN1Encoder<Alert_info_list_info_category_list_category>
) {
    if (!_cached_encoder_for_Alert_info_list_info_category_list_category) {
        _cached_encoder_for_Alert_info_list_info_category_list_category =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Alert_info_list_info_category_list_category(
        value,
        elGetter
    );
}

export enum Alert_info_list_info_responseType_list_responseType {
    allClear = 0,
    assess = 1,
    avoid = 2,
    evacuate = 3,
    execute = 4,
    monitor = 5,
    none = 6,
    prepare = 7,
    shelter = 8,
}
export function _to_string_Alert_info_list_info_responseType_list_responseType (value: Alert_info_list_info_responseType_list_responseType): string {
    return [
        "AllClear",
        "Assess",
        "Avoid",
        "Evacuate",
        "Execute",
        "Monitor",
        "None",
        "Prepare",
        "Shelter",
    ][value];
}
export function _from_string_Alert_info_list_info_responseType_list_responseType (str: string): Alert_info_list_info_responseType_list_responseType | undefined {
    return (new Map<string, Alert_info_list_info_responseType_list_responseType>([
        [ "allclear", Alert_info_list_info_responseType_list_responseType.allClear ],
        [ "assess", Alert_info_list_info_responseType_list_responseType.assess ],
        [ "avoid", Alert_info_list_info_responseType_list_responseType.avoid ],
        [ "evacuate", Alert_info_list_info_responseType_list_responseType.evacuate ],
        [ "execute", Alert_info_list_info_responseType_list_responseType.execute ],
        [ "monitor", Alert_info_list_info_responseType_list_responseType.monitor ],
        [ "none", Alert_info_list_info_responseType_list_responseType.none ],
        [ "prepare", Alert_info_list_info_responseType_list_responseType.prepare ],
        [ "shelter", Alert_info_list_info_responseType_list_responseType.shelter ],
    ])).get(str.toLowerCase());
}
export const Alert_info_list_info_responseType_list_responseType_allClear: Alert_info_list_info_responseType_list_responseType =
    Alert_info_list_info_responseType_list_responseType.allClear; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_responseType_list_responseType_assess: Alert_info_list_info_responseType_list_responseType =
    Alert_info_list_info_responseType_list_responseType.assess; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_responseType_list_responseType_avoid: Alert_info_list_info_responseType_list_responseType =
    Alert_info_list_info_responseType_list_responseType.avoid; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_responseType_list_responseType_evacuate: Alert_info_list_info_responseType_list_responseType =
    Alert_info_list_info_responseType_list_responseType.evacuate; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_responseType_list_responseType_execute: Alert_info_list_info_responseType_list_responseType =
    Alert_info_list_info_responseType_list_responseType.execute; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_responseType_list_responseType_monitor: Alert_info_list_info_responseType_list_responseType =
    Alert_info_list_info_responseType_list_responseType.monitor; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_responseType_list_responseType_none: Alert_info_list_info_responseType_list_responseType =
    Alert_info_list_info_responseType_list_responseType.none; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_responseType_list_responseType_prepare: Alert_info_list_info_responseType_list_responseType =
    Alert_info_list_info_responseType_list_responseType.prepare; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_responseType_list_responseType_shelter: Alert_info_list_info_responseType_list_responseType =
    Alert_info_list_info_responseType_list_responseType.shelter; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_Alert_info_list_info_responseType_list_responseType: __utils.ASN1Decoder<
    Alert_info_list_info_responseType_list_responseType
> | null = null;
let _cached_encoder_for_Alert_info_list_info_responseType_list_responseType: __utils.ASN1Encoder<
    Alert_info_list_info_responseType_list_responseType
> | null = null;
export function _decode_Alert_info_list_info_responseType_list_responseType(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_Alert_info_list_info_responseType_list_responseType
    ) {
        _cached_decoder_for_Alert_info_list_info_responseType_list_responseType =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Alert_info_list_info_responseType_list_responseType(
        el
    );
}
export function _encode_Alert_info_list_info_responseType_list_responseType(
    value: Alert_info_list_info_responseType_list_responseType,
    elGetter: __utils.ASN1Encoder<
        Alert_info_list_info_responseType_list_responseType
    >
) {
    if (
        !_cached_encoder_for_Alert_info_list_info_responseType_list_responseType
    ) {
        _cached_encoder_for_Alert_info_list_info_responseType_list_responseType =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Alert_info_list_info_responseType_list_responseType(
        value,
        elGetter
    );
}

export enum Alert_info_list_info_urgency {
    expected = 0,
    future = 1,
    immediate = 2,
    past = 3,
    unknown = 4,
}
export function _to_string_Alert_info_list_info_urgency (value: Alert_info_list_info_urgency): string {
    return [
        "Expected",
        "Future",
        "Immediate",
        "Past",
        "Unknown",
    ][value];
}
export function _from_string_Alert_info_list_info_urgency (str: string): Alert_info_list_info_urgency | undefined {
    return (new Map<string, Alert_info_list_info_urgency>([
        [ "expected", Alert_info_list_info_urgency.expected ],
        [ "future", Alert_info_list_info_urgency.future ],
        [ "immediate", Alert_info_list_info_urgency.immediate ],
        [ "past", Alert_info_list_info_urgency.past ],
        [ "unknown", Alert_info_list_info_urgency.unknown ],
    ])).get(str.toLowerCase());
}
export const Alert_info_list_info_urgency_expected: Alert_info_list_info_urgency =
    Alert_info_list_info_urgency.expected; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_urgency_future: Alert_info_list_info_urgency =
    Alert_info_list_info_urgency.future; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_urgency_immediate: Alert_info_list_info_urgency =
    Alert_info_list_info_urgency.immediate; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_urgency_past: Alert_info_list_info_urgency =
    Alert_info_list_info_urgency.past; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_urgency_unknown: Alert_info_list_info_urgency =
    Alert_info_list_info_urgency.unknown; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_Alert_info_list_info_urgency: __utils.ASN1Decoder<
    Alert_info_list_info_urgency
> | null = null;
let _cached_encoder_for_Alert_info_list_info_urgency: __utils.ASN1Encoder<
    Alert_info_list_info_urgency
> | null = null;
export function _decode_Alert_info_list_info_urgency(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Alert_info_list_info_urgency) {
        _cached_decoder_for_Alert_info_list_info_urgency =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Alert_info_list_info_urgency(el);
}
export function _encode_Alert_info_list_info_urgency(
    value: Alert_info_list_info_urgency,
    elGetter: __utils.ASN1Encoder<Alert_info_list_info_urgency>
) {
    if (!_cached_encoder_for_Alert_info_list_info_urgency) {
        _cached_encoder_for_Alert_info_list_info_urgency =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Alert_info_list_info_urgency(value, elGetter);
}

export enum Alert_info_list_info_severity {
    extreme = 0,
    minor = 1,
    moderate = 2,
    severe = 3,
    unknown = 4,
}
export function _to_string_Alert_info_list_info_severity (value: Alert_info_list_info_severity): string {
    return [
        "Extreme",
        "Minor",
        "Moderate",
        "Severe",
        "Unknown",
    ][value];
}
export function _from_string_Alert_info_list_info_severity (str: string): Alert_info_list_info_severity | undefined {
    return (new Map<string, Alert_info_list_info_severity>([
        [ "extreme", Alert_info_list_info_severity.extreme ],
        [ "minor", Alert_info_list_info_severity.minor ],
        [ "moderate", Alert_info_list_info_severity.moderate ],
        [ "severe", Alert_info_list_info_severity.severe ],
        [ "unknown", Alert_info_list_info_severity.unknown ],
    ])).get(str.toLowerCase());
}
export const Alert_info_list_info_severity_extreme: Alert_info_list_info_severity =
    Alert_info_list_info_severity.extreme; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_severity_minor: Alert_info_list_info_severity =
    Alert_info_list_info_severity.minor; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_severity_moderate: Alert_info_list_info_severity =
    Alert_info_list_info_severity.moderate; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_severity_severe: Alert_info_list_info_severity =
    Alert_info_list_info_severity.severe; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_severity_unknown: Alert_info_list_info_severity =
    Alert_info_list_info_severity.unknown; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_Alert_info_list_info_severity: __utils.ASN1Decoder<
    Alert_info_list_info_severity
> | null = null;
let _cached_encoder_for_Alert_info_list_info_severity: __utils.ASN1Encoder<
    Alert_info_list_info_severity
> | null = null;
export function _decode_Alert_info_list_info_severity(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Alert_info_list_info_severity) {
        _cached_decoder_for_Alert_info_list_info_severity =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Alert_info_list_info_severity(el);
}
export function _encode_Alert_info_list_info_severity(
    value: Alert_info_list_info_severity,
    elGetter: __utils.ASN1Encoder<Alert_info_list_info_severity>
) {
    if (!_cached_encoder_for_Alert_info_list_info_severity) {
        _cached_encoder_for_Alert_info_list_info_severity =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Alert_info_list_info_severity(value, elGetter);
}

export enum Alert_info_list_info_certainty {
    likely = 0,
    observed = 1,
    possible = 2,
    unknown = 3,
    unlikely = 4,
}
export function _to_string_Alert_info_list_info_certainty (value: Alert_info_list_info_certainty): string {
    return [
        "Likely",
        "Observed",
        "Possible",
        "Unknown",
        "Unlikely",
    ][value];
}
export function _from_string_Alert_info_list_info_certainty (str: string): Alert_info_list_info_certainty | undefined {
    return (new Map<string, Alert_info_list_info_certainty>([
        [ "likely", Alert_info_list_info_certainty.likely ],
        [ "observed", Alert_info_list_info_certainty.observed ],
        [ "possible", Alert_info_list_info_certainty.possible ],
        [ "unknown", Alert_info_list_info_certainty.unknown ],
        [ "unlikely", Alert_info_list_info_certainty.unlikely ],
    ])).get(str.toLowerCase());
}
export const Alert_info_list_info_certainty_likely: Alert_info_list_info_certainty =
    Alert_info_list_info_certainty.likely; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_certainty_observed: Alert_info_list_info_certainty =
    Alert_info_list_info_certainty.observed; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_certainty_possible: Alert_info_list_info_certainty =
    Alert_info_list_info_certainty.possible; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_certainty_unknown: Alert_info_list_info_certainty =
    Alert_info_list_info_certainty.unknown; /* LONG_NAMED_ENUMERATED_VALUE */
export const Alert_info_list_info_certainty_unlikely: Alert_info_list_info_certainty =
    Alert_info_list_info_certainty.unlikely; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_Alert_info_list_info_certainty: __utils.ASN1Decoder<
    Alert_info_list_info_certainty
> | null = null;
let _cached_encoder_for_Alert_info_list_info_certainty: __utils.ASN1Encoder<
    Alert_info_list_info_certainty
> | null = null;
export function _decode_Alert_info_list_info_certainty(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Alert_info_list_info_certainty) {
        _cached_decoder_for_Alert_info_list_info_certainty =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Alert_info_list_info_certainty(el);
}
export function _encode_Alert_info_list_info_certainty(
    value: Alert_info_list_info_certainty,
    elGetter: __utils.ASN1Encoder<Alert_info_list_info_certainty>
) {
    if (!_cached_encoder_for_Alert_info_list_info_certainty) {
        _cached_encoder_for_Alert_info_list_info_certainty =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Alert_info_list_info_certainty(value, elGetter);
}

export type ValueName = XSD.String; // DefinedType
let _cached_decoder_for_ValueName: __utils.ASN1Decoder<ValueName> | null = null;
let _cached_encoder_for_ValueName: __utils.ASN1Encoder<ValueName> | null = null;
export function _decode_ValueName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ValueName) {
        _cached_decoder_for_ValueName = XSD._decode_String;
    }
    return _cached_decoder_for_ValueName(el);
}
export function _encode_ValueName(
    value: ValueName,
    elGetter: __utils.ASN1Encoder<ValueName>
) {
    if (!_cached_encoder_for_ValueName) {
        _cached_encoder_for_ValueName = XSD._encode_String;
    }
    return _cached_encoder_for_ValueName(value, elGetter);
}

export type Value = XSD.String; // DefinedType
let _cached_decoder_for_Value: __utils.ASN1Decoder<Value> | null = null;
let _cached_encoder_for_Value: __utils.ASN1Encoder<Value> | null = null;
export function _decode_Value(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Value) {
        _cached_decoder_for_Value = XSD._decode_String;
    }
    return _cached_decoder_for_Value(el);
}
export function _encode_Value(
    value: Value,
    elGetter: __utils.ASN1Encoder<Value>
) {
    if (!_cached_encoder_for_Value) {
        _cached_encoder_for_Value = XSD._encode_String;
    }
    return _cached_encoder_for_Value(value, elGetter);
}

export class Alert_info_list_info_eventCode_list_eventCode {
    constructor(readonly valueName: ValueName, readonly value: Value) {}
}
export const _root_component_type_list_1_spec_for_Alert_info_list_info_eventCode_list_eventCode: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "valueName",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Alert_info_list_info_eventCode_list_eventCode: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Alert_info_list_info_eventCode_list_eventCode: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Alert_info_list_info_eventCode_list_eventCode: __utils.ASN1Decoder<
    Alert_info_list_info_eventCode_list_eventCode
> | null = null;
let _cached_encoder_for_Alert_info_list_info_eventCode_list_eventCode: __utils.ASN1Encoder<
    Alert_info_list_info_eventCode_list_eventCode
> | null = null;
export function _decode_Alert_info_list_info_eventCode_list_eventCode(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_Alert_info_list_info_eventCode_list_eventCode) {
        _cached_decoder_for_Alert_info_list_info_eventCode_list_eventCode = function (
            el: asn1.ASN1Element
        ): Alert_info_list_info_eventCode_list_eventCode {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "Alert-info-list-info-eventCode-list-eventCode contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "valueName";
            sequence[1].name = "value";
            let valueName!: ValueName;
            let value!: Value;
            valueName = _decode_ValueName(sequence[0]);
            value = _decode_Value(sequence[1]);
            // TODO: Validate values.
            return new Alert_info_list_info_eventCode_list_eventCode(
                valueName,
                value
            );
        };
    }
    return _cached_decoder_for_Alert_info_list_info_eventCode_list_eventCode(
        el
    );
}
export function _encode_Alert_info_list_info_eventCode_list_eventCode(
    value: Alert_info_list_info_eventCode_list_eventCode,
    elGetter: __utils.ASN1Encoder<Alert_info_list_info_eventCode_list_eventCode>
) {
    if (!_cached_encoder_for_Alert_info_list_info_eventCode_list_eventCode) {
        _cached_encoder_for_Alert_info_list_info_eventCode_list_eventCode = function (
            value: Alert_info_list_info_eventCode_list_eventCode,
            elGetter: __utils.ASN1Encoder<
                Alert_info_list_info_eventCode_list_eventCode
            >
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ValueName(
                            value.valueName,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Value(
                            value.value,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Alert_info_list_info_eventCode_list_eventCode(
        value,
        elGetter
    );
}

export class Alert_info_list_info_parameter_list_parameter {
    constructor(readonly valueName: ValueName, readonly value: Value) {}
}
export const _root_component_type_list_1_spec_for_Alert_info_list_info_parameter_list_parameter: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "valueName",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Alert_info_list_info_parameter_list_parameter: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Alert_info_list_info_parameter_list_parameter: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Alert_info_list_info_parameter_list_parameter: __utils.ASN1Decoder<
    Alert_info_list_info_parameter_list_parameter
> | null = null;
let _cached_encoder_for_Alert_info_list_info_parameter_list_parameter: __utils.ASN1Encoder<
    Alert_info_list_info_parameter_list_parameter
> | null = null;
export function _decode_Alert_info_list_info_parameter_list_parameter(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_Alert_info_list_info_parameter_list_parameter) {
        _cached_decoder_for_Alert_info_list_info_parameter_list_parameter = function (
            el: asn1.ASN1Element
        ): Alert_info_list_info_parameter_list_parameter {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "Alert-info-list-info-parameter-list-parameter contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "valueName";
            sequence[1].name = "value";
            let valueName!: ValueName;
            let value!: Value;
            valueName = _decode_ValueName(sequence[0]);
            value = _decode_Value(sequence[1]);
            // TODO: Validate values.
            return new Alert_info_list_info_parameter_list_parameter(
                valueName,
                value
            );
        };
    }
    return _cached_decoder_for_Alert_info_list_info_parameter_list_parameter(
        el
    );
}
export function _encode_Alert_info_list_info_parameter_list_parameter(
    value: Alert_info_list_info_parameter_list_parameter,
    elGetter: __utils.ASN1Encoder<Alert_info_list_info_parameter_list_parameter>
) {
    if (!_cached_encoder_for_Alert_info_list_info_parameter_list_parameter) {
        _cached_encoder_for_Alert_info_list_info_parameter_list_parameter = function (
            value: Alert_info_list_info_parameter_list_parameter,
            elGetter: __utils.ASN1Encoder<
                Alert_info_list_info_parameter_list_parameter
            >
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ValueName(
                            value.valueName,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Value(
                            value.value,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Alert_info_list_info_parameter_list_parameter(
        value,
        elGetter
    );
}

export class Alert_info_list_info_resource_list_resource {
    constructor(
        readonly resourceDesc: XSD.String,
        readonly mimeType: XSD.String,
        readonly size: asn1.OPTIONAL<asn1.INTEGER>,
        readonly uri: asn1.OPTIONAL<XSD.AnyURI>,
        readonly derefUri: asn1.OPTIONAL<XSD.String>,
        readonly digest: asn1.OPTIONAL<XSD.String>
    ) {}
}
export const _root_component_type_list_1_spec_for_Alert_info_list_info_resource_list_resource: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "resourceDesc",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "mimeType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "size",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "uri",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "derefUri",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digest",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Alert_info_list_info_resource_list_resource: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Alert_info_list_info_resource_list_resource: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Alert_info_list_info_resource_list_resource: __utils.ASN1Decoder<
    Alert_info_list_info_resource_list_resource
> | null = null;
let _cached_encoder_for_Alert_info_list_info_resource_list_resource: __utils.ASN1Encoder<
    Alert_info_list_info_resource_list_resource
> | null = null;
export function _decode_Alert_info_list_info_resource_list_resource(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_Alert_info_list_info_resource_list_resource) {
        _cached_decoder_for_Alert_info_list_info_resource_list_resource = function (
            el: asn1.ASN1Element
        ): Alert_info_list_info_resource_list_resource {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let resourceDesc!: XSD.String;
            let mimeType!: XSD.String;
            let size: asn1.OPTIONAL<asn1.INTEGER>;
            let uri: asn1.OPTIONAL<XSD.AnyURI>;
            let derefUri: asn1.OPTIONAL<XSD.String>;
            let digest: asn1.OPTIONAL<XSD.String>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                resourceDesc: (_el: asn1.ASN1Element): void => {
                    resourceDesc = XSD._decode_String(_el);
                },
                mimeType: (_el: asn1.ASN1Element): void => {
                    mimeType = XSD._decode_String(_el);
                },
                size: (_el: asn1.ASN1Element): void => {
                    size = __utils._decodeInteger(_el);
                },
                uri: (_el: asn1.ASN1Element): void => {
                    uri = XSD._decode_AnyURI(_el);
                },
                derefUri: (_el: asn1.ASN1Element): void => {
                    derefUri = XSD._decode_String(_el);
                },
                digest: (_el: asn1.ASN1Element): void => {
                    digest = XSD._decode_String(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Alert_info_list_info_resource_list_resource,
                _extension_additions_list_spec_for_Alert_info_list_info_resource_list_resource,
                _root_component_type_list_2_spec_for_Alert_info_list_info_resource_list_resource,
                undefined
            );
            return new Alert_info_list_info_resource_list_resource /* SEQUENCE_CONSTRUCTOR_CALL */(
                resourceDesc,
                mimeType,
                size,
                uri,
                derefUri,
                digest
            );
        };
    }
    return _cached_decoder_for_Alert_info_list_info_resource_list_resource(el);
}
export function _encode_Alert_info_list_info_resource_list_resource(
    value: Alert_info_list_info_resource_list_resource,
    elGetter: __utils.ASN1Encoder<Alert_info_list_info_resource_list_resource>
) {
    if (!_cached_encoder_for_Alert_info_list_info_resource_list_resource) {
        _cached_encoder_for_Alert_info_list_info_resource_list_resource = function (
            value: Alert_info_list_info_resource_list_resource,
            elGetter: __utils.ASN1Encoder<
                Alert_info_list_info_resource_list_resource
            >
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ XSD._encode_String(
                            value.resourceDesc,
                            __utils.BER
                        ),
                        /* REQUIRED   */ XSD._encode_String(
                            value.mimeType,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.size === undefined
                            ? undefined
                            : __utils._encodeInteger(value.size, __utils.BER),
                        /* IF_ABSENT  */ value.uri === undefined
                            ? undefined
                            : XSD._encode_AnyURI(value.uri, __utils.BER),
                        /* IF_ABSENT  */ value.derefUri === undefined
                            ? undefined
                            : XSD._encode_String(value.derefUri, __utils.BER),
                        /* IF_ABSENT  */ value.digest === undefined
                            ? undefined
                            : XSD._encode_String(value.digest, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Alert_info_list_info_resource_list_resource(
        value,
        elGetter
    );
}

export class Alert_info_list_info_area_list_area_geocode_list_geocode {
    constructor(readonly valueName: ValueName, readonly value: Value) {}
}
export const _root_component_type_list_1_spec_for_Alert_info_list_info_area_list_area_geocode_list_geocode: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "valueName",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Alert_info_list_info_area_list_area_geocode_list_geocode: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Alert_info_list_info_area_list_area_geocode_list_geocode: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Alert_info_list_info_area_list_area_geocode_list_geocode: __utils.ASN1Decoder<
    Alert_info_list_info_area_list_area_geocode_list_geocode
> | null = null;
let _cached_encoder_for_Alert_info_list_info_area_list_area_geocode_list_geocode: __utils.ASN1Encoder<
    Alert_info_list_info_area_list_area_geocode_list_geocode
> | null = null;
export function _decode_Alert_info_list_info_area_list_area_geocode_list_geocode(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_Alert_info_list_info_area_list_area_geocode_list_geocode
    ) {
        _cached_decoder_for_Alert_info_list_info_area_list_area_geocode_list_geocode = function (
            el: asn1.ASN1Element
        ): Alert_info_list_info_area_list_area_geocode_list_geocode {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "Alert-info-list-info-area-list-area-geocode-list-geocode contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "valueName";
            sequence[1].name = "value";
            let valueName!: ValueName;
            let value!: Value;
            valueName = _decode_ValueName(sequence[0]);
            value = _decode_Value(sequence[1]);
            // TODO: Validate values.
            return new Alert_info_list_info_area_list_area_geocode_list_geocode(
                valueName,
                value
            );
        };
    }
    return _cached_decoder_for_Alert_info_list_info_area_list_area_geocode_list_geocode(
        el
    );
}
export function _encode_Alert_info_list_info_area_list_area_geocode_list_geocode(
    value: Alert_info_list_info_area_list_area_geocode_list_geocode,
    elGetter: __utils.ASN1Encoder<
        Alert_info_list_info_area_list_area_geocode_list_geocode
    >
) {
    if (
        !_cached_encoder_for_Alert_info_list_info_area_list_area_geocode_list_geocode
    ) {
        _cached_encoder_for_Alert_info_list_info_area_list_area_geocode_list_geocode = function (
            value: Alert_info_list_info_area_list_area_geocode_list_geocode,
            elGetter: __utils.ASN1Encoder<
                Alert_info_list_info_area_list_area_geocode_list_geocode
            >
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ValueName(
                            value.valueName,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Value(
                            value.value,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Alert_info_list_info_area_list_area_geocode_list_geocode(
        value,
        elGetter
    );
}

export class Alert_info_list_info_area_list_area {
    constructor(
        readonly areaDesc: XSD.String,
        readonly polygon_list: XSD.String[],
        readonly circle_list: XSD.String[],
        readonly geocode_list: Alert_info_list_info_area_list_area_geocode_list_geocode[],
        readonly altitude: asn1.OPTIONAL<XSD.Decimal>,
        readonly ceiling: asn1.OPTIONAL<XSD.Decimal>
    ) {}
}
export const _root_component_type_list_1_spec_for_Alert_info_list_info_area_list_area: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "areaDesc",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "polygon-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "circle-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "geocode-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "altitude",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "ceiling",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Alert_info_list_info_area_list_area: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Alert_info_list_info_area_list_area: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Alert_info_list_info_area_list_area: __utils.ASN1Decoder<
    Alert_info_list_info_area_list_area
> | null = null;
let _cached_encoder_for_Alert_info_list_info_area_list_area: __utils.ASN1Encoder<
    Alert_info_list_info_area_list_area
> | null = null;
export function _decode_Alert_info_list_info_area_list_area(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_Alert_info_list_info_area_list_area) {
        _cached_decoder_for_Alert_info_list_info_area_list_area = function (
            el: asn1.ASN1Element
        ): Alert_info_list_info_area_list_area {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let areaDesc!: XSD.String;
            let polygon_list!: XSD.String[];
            let circle_list!: XSD.String[];
            let geocode_list!: Alert_info_list_info_area_list_area_geocode_list_geocode[];
            let altitude: asn1.OPTIONAL<XSD.Decimal>;
            let ceiling: asn1.OPTIONAL<XSD.Decimal>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                areaDesc: (_el: asn1.ASN1Element): void => {
                    areaDesc = XSD._decode_String(_el);
                },
                "polygon-list": (_el: asn1.ASN1Element): void => {
                    polygon_list = __utils._decodeSequenceOf<XSD.String>(
                        () => XSD._decode_String
                    )(_el);
                },
                "circle-list": (_el: asn1.ASN1Element): void => {
                    circle_list = __utils._decodeSequenceOf<XSD.String>(
                        () => XSD._decode_String
                    )(_el);
                },
                "geocode-list": (_el: asn1.ASN1Element): void => {
                    geocode_list = __utils._decodeSequenceOf<
                        Alert_info_list_info_area_list_area_geocode_list_geocode
                    >(
                        () =>
                            _decode_Alert_info_list_info_area_list_area_geocode_list_geocode
                    )(_el);
                },
                altitude: (_el: asn1.ASN1Element): void => {
                    altitude = XSD._decode_Decimal(_el);
                },
                ceiling: (_el: asn1.ASN1Element): void => {
                    ceiling = XSD._decode_Decimal(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Alert_info_list_info_area_list_area,
                _extension_additions_list_spec_for_Alert_info_list_info_area_list_area,
                _root_component_type_list_2_spec_for_Alert_info_list_info_area_list_area,
                undefined
            );
            return new Alert_info_list_info_area_list_area /* SEQUENCE_CONSTRUCTOR_CALL */(
                areaDesc,
                polygon_list,
                circle_list,
                geocode_list,
                altitude,
                ceiling
            );
        };
    }
    return _cached_decoder_for_Alert_info_list_info_area_list_area(el);
}
export function _encode_Alert_info_list_info_area_list_area(
    value: Alert_info_list_info_area_list_area,
    elGetter: __utils.ASN1Encoder<Alert_info_list_info_area_list_area>
) {
    if (!_cached_encoder_for_Alert_info_list_info_area_list_area) {
        _cached_encoder_for_Alert_info_list_info_area_list_area = function (
            value: Alert_info_list_info_area_list_area,
            elGetter: __utils.ASN1Encoder<Alert_info_list_info_area_list_area>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ XSD._encode_String(
                            value.areaDesc,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeSequenceOf<XSD.String>(
                            () => XSD._encode_String,
                            __utils.BER
                        )(value.polygon_list, __utils.BER),
                        /* REQUIRED   */ __utils._encodeSequenceOf<XSD.String>(
                            () => XSD._encode_String,
                            __utils.BER
                        )(value.circle_list, __utils.BER),
                        /* REQUIRED   */ __utils._encodeSequenceOf<
                            Alert_info_list_info_area_list_area_geocode_list_geocode
                        >(
                            () =>
                                _encode_Alert_info_list_info_area_list_area_geocode_list_geocode,
                            __utils.BER
                        )(value.geocode_list, __utils.BER),
                        /* IF_ABSENT  */ value.altitude === undefined
                            ? undefined
                            : XSD._encode_Decimal(value.altitude, __utils.BER),
                        /* IF_ABSENT  */ value.ceiling === undefined
                            ? undefined
                            : XSD._encode_Decimal(value.ceiling, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Alert_info_list_info_area_list_area(
        value,
        elGetter
    );
}

export class Alert_info_list_info {
    constructor(
        readonly language: asn1.OPTIONAL<XSD.Language>,
        readonly category_list: Alert_info_list_info_category_list_category[],
        readonly event: XSD.String,
        readonly responseType_list: Alert_info_list_info_responseType_list_responseType[],
        readonly urgency: Alert_info_list_info_urgency,
        readonly severity: Alert_info_list_info_severity,
        readonly certainty: Alert_info_list_info_certainty,
        readonly audience: asn1.OPTIONAL<XSD.String>,
        readonly eventCode_list: Alert_info_list_info_eventCode_list_eventCode[],
        readonly effective: asn1.OPTIONAL<XSD.DateTime>,
        readonly onset: asn1.OPTIONAL<XSD.DateTime>,
        readonly expires: asn1.OPTIONAL<XSD.DateTime>,
        readonly senderName: asn1.OPTIONAL<XSD.String>,
        readonly headline: asn1.OPTIONAL<XSD.String>,
        readonly description: asn1.OPTIONAL<XSD.String>,
        readonly instruction: asn1.OPTIONAL<XSD.String>,
        readonly web: asn1.OPTIONAL<XSD.AnyURI>,
        readonly contact: asn1.OPTIONAL<XSD.String>,
        readonly parameter_list: Alert_info_list_info_parameter_list_parameter[],
        readonly resource_list: Alert_info_list_info_resource_list_resource[],
        readonly area_list: Alert_info_list_info_area_list_area[]
    ) {}
}
export const _root_component_type_list_1_spec_for_Alert_info_list_info: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "language",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "category-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "event",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "responseType-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "urgency",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "severity",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certainty",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "audience",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "eventCode-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "effective",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 9),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "onset",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "expires",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 11),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "senderName",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 12),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "headline",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 13),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "description",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 14),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "instruction",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 15),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "web",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contact",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "parameter-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 18),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "resource-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 19),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "area-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 20),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Alert_info_list_info: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Alert_info_list_info: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Alert_info_list_info: __utils.ASN1Decoder<
    Alert_info_list_info
> | null = null;
let _cached_encoder_for_Alert_info_list_info: __utils.ASN1Encoder<
    Alert_info_list_info
> | null = null;
export function _decode_Alert_info_list_info(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Alert_info_list_info) {
        _cached_decoder_for_Alert_info_list_info = function (
            el: asn1.ASN1Element
        ): Alert_info_list_info {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let language: asn1.OPTIONAL<XSD.Language>;
            let category_list!: Alert_info_list_info_category_list_category[];
            let event!: XSD.String;
            let responseType_list!: Alert_info_list_info_responseType_list_responseType[];
            let urgency!: Alert_info_list_info_urgency;
            let severity!: Alert_info_list_info_severity;
            let certainty!: Alert_info_list_info_certainty;
            let audience: asn1.OPTIONAL<XSD.String>;
            let eventCode_list!: Alert_info_list_info_eventCode_list_eventCode[];
            let effective: asn1.OPTIONAL<XSD.DateTime>;
            let onset: asn1.OPTIONAL<XSD.DateTime>;
            let expires: asn1.OPTIONAL<XSD.DateTime>;
            let senderName: asn1.OPTIONAL<XSD.String>;
            let headline: asn1.OPTIONAL<XSD.String>;
            let description: asn1.OPTIONAL<XSD.String>;
            let instruction: asn1.OPTIONAL<XSD.String>;
            let web: asn1.OPTIONAL<XSD.AnyURI>;
            let contact: asn1.OPTIONAL<XSD.String>;
            let parameter_list!: Alert_info_list_info_parameter_list_parameter[];
            let resource_list!: Alert_info_list_info_resource_list_resource[];
            let area_list!: Alert_info_list_info_area_list_area[];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                language: (_el: asn1.ASN1Element): void => {
                    language = XSD._decode_Language(_el);
                },
                "category-list": (_el: asn1.ASN1Element): void => {
                    category_list = __utils._decodeSequenceOf<
                        Alert_info_list_info_category_list_category
                    >(
                        () =>
                            _decode_Alert_info_list_info_category_list_category
                    )(_el);
                },
                event: (_el: asn1.ASN1Element): void => {
                    event = XSD._decode_String(_el);
                },
                "responseType-list": (_el: asn1.ASN1Element): void => {
                    responseType_list = __utils._decodeSequenceOf<
                        Alert_info_list_info_responseType_list_responseType
                    >(
                        () =>
                            _decode_Alert_info_list_info_responseType_list_responseType
                    )(_el);
                },
                urgency: (_el: asn1.ASN1Element): void => {
                    urgency = _decode_Alert_info_list_info_urgency(_el);
                },
                severity: (_el: asn1.ASN1Element): void => {
                    severity = _decode_Alert_info_list_info_severity(_el);
                },
                certainty: (_el: asn1.ASN1Element): void => {
                    certainty = _decode_Alert_info_list_info_certainty(_el);
                },
                audience: (_el: asn1.ASN1Element): void => {
                    audience = XSD._decode_String(_el);
                },
                "eventCode-list": (_el: asn1.ASN1Element): void => {
                    eventCode_list = __utils._decodeSequenceOf<
                        Alert_info_list_info_eventCode_list_eventCode
                    >(
                        () =>
                            _decode_Alert_info_list_info_eventCode_list_eventCode
                    )(_el);
                },
                effective: (_el: asn1.ASN1Element): void => {
                    effective = XSD._decode_DateTime(_el);
                },
                onset: (_el: asn1.ASN1Element): void => {
                    onset = XSD._decode_DateTime(_el);
                },
                expires: (_el: asn1.ASN1Element): void => {
                    expires = XSD._decode_DateTime(_el);
                },
                senderName: (_el: asn1.ASN1Element): void => {
                    senderName = XSD._decode_String(_el);
                },
                headline: (_el: asn1.ASN1Element): void => {
                    headline = XSD._decode_String(_el);
                },
                description: (_el: asn1.ASN1Element): void => {
                    description = XSD._decode_String(_el);
                },
                instruction: (_el: asn1.ASN1Element): void => {
                    instruction = XSD._decode_String(_el);
                },
                web: (_el: asn1.ASN1Element): void => {
                    web = XSD._decode_AnyURI(_el);
                },
                contact: (_el: asn1.ASN1Element): void => {
                    contact = XSD._decode_String(_el);
                },
                "parameter-list": (_el: asn1.ASN1Element): void => {
                    parameter_list = __utils._decodeSequenceOf<
                        Alert_info_list_info_parameter_list_parameter
                    >(
                        () =>
                            _decode_Alert_info_list_info_parameter_list_parameter
                    )(_el);
                },
                "resource-list": (_el: asn1.ASN1Element): void => {
                    resource_list = __utils._decodeSequenceOf<
                        Alert_info_list_info_resource_list_resource
                    >(
                        () =>
                            _decode_Alert_info_list_info_resource_list_resource
                    )(_el);
                },
                "area-list": (_el: asn1.ASN1Element): void => {
                    area_list = __utils._decodeSequenceOf<
                        Alert_info_list_info_area_list_area
                    >(() => _decode_Alert_info_list_info_area_list_area)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Alert_info_list_info,
                _extension_additions_list_spec_for_Alert_info_list_info,
                _root_component_type_list_2_spec_for_Alert_info_list_info,
                undefined
            );
            return new Alert_info_list_info /* SEQUENCE_CONSTRUCTOR_CALL */(
                language,
                category_list,
                event,
                responseType_list,
                urgency,
                severity,
                certainty,
                audience,
                eventCode_list,
                effective,
                onset,
                expires,
                senderName,
                headline,
                description,
                instruction,
                web,
                contact,
                parameter_list,
                resource_list,
                area_list
            );
        };
    }
    return _cached_decoder_for_Alert_info_list_info(el);
}
export function _encode_Alert_info_list_info(
    value: Alert_info_list_info,
    elGetter: __utils.ASN1Encoder<Alert_info_list_info>
) {
    if (!_cached_encoder_for_Alert_info_list_info) {
        _cached_encoder_for_Alert_info_list_info = function (
            value: Alert_info_list_info,
            elGetter: __utils.ASN1Encoder<Alert_info_list_info>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.language === undefined
                            ? undefined
                            : XSD._encode_Language(value.language, __utils.BER),
                        /* REQUIRED   */ __utils._encodeSequenceOf<
                            Alert_info_list_info_category_list_category
                        >(
                            () =>
                                _encode_Alert_info_list_info_category_list_category,
                            __utils.BER
                        )(value.category_list, __utils.BER),
                        /* REQUIRED   */ XSD._encode_String(
                            value.event,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeSequenceOf<
                            Alert_info_list_info_responseType_list_responseType
                        >(
                            () =>
                                _encode_Alert_info_list_info_responseType_list_responseType,
                            __utils.BER
                        )(value.responseType_list, __utils.BER),
                        /* REQUIRED   */ _encode_Alert_info_list_info_urgency(
                            value.urgency,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Alert_info_list_info_severity(
                            value.severity,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Alert_info_list_info_certainty(
                            value.certainty,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.audience === undefined
                            ? undefined
                            : XSD._encode_String(value.audience, __utils.BER),
                        /* REQUIRED   */ __utils._encodeSequenceOf<
                            Alert_info_list_info_eventCode_list_eventCode
                        >(
                            () =>
                                _encode_Alert_info_list_info_eventCode_list_eventCode,
                            __utils.BER
                        )(value.eventCode_list, __utils.BER),
                        /* IF_ABSENT  */ value.effective === undefined
                            ? undefined
                            : XSD._encode_DateTime(
                                  value.effective,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.onset === undefined
                            ? undefined
                            : XSD._encode_DateTime(value.onset, __utils.BER),
                        /* IF_ABSENT  */ value.expires === undefined
                            ? undefined
                            : XSD._encode_DateTime(value.expires, __utils.BER),
                        /* IF_ABSENT  */ value.senderName === undefined
                            ? undefined
                            : XSD._encode_String(value.senderName, __utils.BER),
                        /* IF_ABSENT  */ value.headline === undefined
                            ? undefined
                            : XSD._encode_String(value.headline, __utils.BER),
                        /* IF_ABSENT  */ value.description === undefined
                            ? undefined
                            : XSD._encode_String(
                                  value.description,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.instruction === undefined
                            ? undefined
                            : XSD._encode_String(
                                  value.instruction,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.web === undefined
                            ? undefined
                            : XSD._encode_AnyURI(value.web, __utils.BER),
                        /* IF_ABSENT  */ value.contact === undefined
                            ? undefined
                            : XSD._encode_String(value.contact, __utils.BER),
                        /* REQUIRED   */ __utils._encodeSequenceOf<
                            Alert_info_list_info_parameter_list_parameter
                        >(
                            () =>
                                _encode_Alert_info_list_info_parameter_list_parameter,
                            __utils.BER
                        )(value.parameter_list, __utils.BER),
                        /* REQUIRED   */ __utils._encodeSequenceOf<
                            Alert_info_list_info_resource_list_resource
                        >(
                            () =>
                                _encode_Alert_info_list_info_resource_list_resource,
                            __utils.BER
                        )(value.resource_list, __utils.BER),
                        /* REQUIRED   */ __utils._encodeSequenceOf<
                            Alert_info_list_info_area_list_area
                        >(
                            () => _encode_Alert_info_list_info_area_list_area,
                            __utils.BER
                        )(value.area_list, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Alert_info_list_info(value, elGetter);
}

export class Alert {
    constructor(
        readonly identifier: XSD.String,
        readonly sender: XSD.String,
        readonly sent: XSD.DateTime,
        readonly status: Alert_status,
        readonly msgType: Alert_msgType,
        readonly source: asn1.OPTIONAL<XSD.String>,
        readonly scope: Alert_scope,
        readonly restriction: asn1.OPTIONAL<XSD.String>,
        readonly addresses: asn1.OPTIONAL<XSD.String>,
        readonly code_list: XSD.String[],
        readonly note: asn1.OPTIONAL<XSD.String>,
        readonly references: asn1.OPTIONAL<XSD.String>,
        readonly incidents: asn1.OPTIONAL<XSD.String>,
        readonly info_list: Alert_info_list_info[],
        readonly elem_list: XSD.String[]
    ) {}

    public toXML (): string {
        return alertToXML(this);
    }

    public static async fromXML (str: string): Promise<Alert> {
        return alertFromXML(str);
    }
}
export const _root_component_type_list_1_spec_for_Alert: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sender",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sent",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "msgType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "source",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "scope",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "restriction",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "addresses",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "code-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 9),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "note",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "references",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 11),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "incidents",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 12),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "info-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 13),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "elem-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 14),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Alert: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Alert: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Alert: __utils.ASN1Decoder<Alert> | null = null;
let _cached_encoder_for_Alert: __utils.ASN1Encoder<Alert> | null = null;
export function _decode_Alert(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Alert) {
        _cached_decoder_for_Alert = function (el: asn1.ASN1Element): Alert {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let identifier!: XSD.String;
            let sender!: XSD.String;
            let sent!: XSD.DateTime;
            let status!: Alert_status;
            let msgType!: Alert_msgType;
            let source: asn1.OPTIONAL<XSD.String>;
            let scope!: Alert_scope;
            let restriction: asn1.OPTIONAL<XSD.String>;
            let addresses: asn1.OPTIONAL<XSD.String>;
            let code_list!: XSD.String[];
            let note: asn1.OPTIONAL<XSD.String>;
            let references: asn1.OPTIONAL<XSD.String>;
            let incidents: asn1.OPTIONAL<XSD.String>;
            let info_list!: Alert_info_list_info[];
            let elem_list!: XSD.String[];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                identifier: (_el: asn1.ASN1Element): void => {
                    identifier = XSD._decode_String(_el);
                },
                sender: (_el: asn1.ASN1Element): void => {
                    sender = XSD._decode_String(_el);
                },
                sent: (_el: asn1.ASN1Element): void => {
                    sent = XSD._decode_DateTime(_el);
                },
                status: (_el: asn1.ASN1Element): void => {
                    status = _decode_Alert_status(_el);
                },
                msgType: (_el: asn1.ASN1Element): void => {
                    msgType = _decode_Alert_msgType(_el);
                },
                source: (_el: asn1.ASN1Element): void => {
                    source = XSD._decode_String(_el);
                },
                scope: (_el: asn1.ASN1Element): void => {
                    scope = _decode_Alert_scope(_el);
                },
                restriction: (_el: asn1.ASN1Element): void => {
                    restriction = XSD._decode_String(_el);
                },
                addresses: (_el: asn1.ASN1Element): void => {
                    addresses = XSD._decode_String(_el);
                },
                "code-list": (_el: asn1.ASN1Element): void => {
                    code_list = __utils._decodeSequenceOf<XSD.String>(
                        () => XSD._decode_String
                    )(_el);
                },
                note: (_el: asn1.ASN1Element): void => {
                    note = XSD._decode_String(_el);
                },
                references: (_el: asn1.ASN1Element): void => {
                    references = XSD._decode_String(_el);
                },
                incidents: (_el: asn1.ASN1Element): void => {
                    incidents = XSD._decode_String(_el);
                },
                "info-list": (_el: asn1.ASN1Element): void => {
                    info_list = __utils._decodeSequenceOf<Alert_info_list_info>(
                        () => _decode_Alert_info_list_info
                    )(_el);
                },
                "elem-list": (_el: asn1.ASN1Element): void => {
                    elem_list = __utils._decodeSequenceOf<XSD.String>(
                        () => XSD._decode_String
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Alert,
                _extension_additions_list_spec_for_Alert,
                _root_component_type_list_2_spec_for_Alert,
                undefined
            );
            return new Alert /* SEQUENCE_CONSTRUCTOR_CALL */(
                identifier,
                sender,
                sent,
                status,
                msgType,
                source,
                scope,
                restriction,
                addresses,
                code_list,
                note,
                references,
                incidents,
                info_list,
                elem_list
            );
        };
    }
    return _cached_decoder_for_Alert(el);
}
export function _encode_Alert(
    value: Alert,
    elGetter: __utils.ASN1Encoder<Alert>
) {
    if (!_cached_encoder_for_Alert) {
        _cached_encoder_for_Alert = function (
            value: Alert,
            elGetter: __utils.ASN1Encoder<Alert>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ XSD._encode_String(
                            value.identifier,
                            __utils.BER
                        ),
                        /* REQUIRED   */ XSD._encode_String(
                            value.sender,
                            __utils.BER
                        ),
                        /* REQUIRED   */ XSD._encode_DateTime(
                            value.sent,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Alert_status(
                            value.status,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Alert_msgType(
                            value.msgType,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.source === undefined
                            ? undefined
                            : XSD._encode_String(value.source, __utils.BER),
                        /* REQUIRED   */ _encode_Alert_scope(
                            value.scope,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.restriction === undefined
                            ? undefined
                            : XSD._encode_String(
                                  value.restriction,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.addresses === undefined
                            ? undefined
                            : XSD._encode_String(value.addresses, __utils.BER),
                        /* REQUIRED   */ __utils._encodeSequenceOf<XSD.String>(
                            () => XSD._encode_String,
                            __utils.BER
                        )(value.code_list, __utils.BER),
                        /* IF_ABSENT  */ value.note === undefined
                            ? undefined
                            : XSD._encode_String(value.note, __utils.BER),
                        /* IF_ABSENT  */ value.references === undefined
                            ? undefined
                            : XSD._encode_String(value.references, __utils.BER),
                        /* IF_ABSENT  */ value.incidents === undefined
                            ? undefined
                            : XSD._encode_String(value.incidents, __utils.BER),
                        /* REQUIRED   */ __utils._encodeSequenceOf<
                            Alert_info_list_info
                        >(() => _encode_Alert_info_list_info, __utils.BER)(
                            value.info_list,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeSequenceOf<XSD.String>(
                            () => XSD._encode_String,
                            __utils.BER
                        )(value.elem_list, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Alert(value, elGetter);
}

/* END_MODULE CAP-1-2 */
