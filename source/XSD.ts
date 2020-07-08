/*
    BEGIN_MODULE XSD
    OID: joint-iso-itu-t.asn1.specification.modules.xsd-module.version2
    IRI: /ASN.1/Specification/Modules/XSD-Module/Version2
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";

export type XMLCompatibleString = asn1.UTF8String; // UTF8String
let _cached_decoder_for_XMLCompatibleString: __utils.ASN1Decoder<
    XMLCompatibleString
> | null = null;
let _cached_encoder_for_XMLCompatibleString: __utils.ASN1Encoder<
    XMLCompatibleString
> | null = null;
export function _decode_XMLCompatibleString(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_XMLCompatibleString) {
        _cached_decoder_for_XMLCompatibleString = __utils._decodeUTF8String;
    }
    return _cached_decoder_for_XMLCompatibleString(el);
}
export function _encode_XMLCompatibleString(
    value: XMLCompatibleString,
    elGetter: __utils.ASN1Encoder<XMLCompatibleString>
) {
    if (!_cached_encoder_for_XMLCompatibleString) {
        _cached_encoder_for_XMLCompatibleString = __utils._encodeUTF8String;
    }
    return _cached_encoder_for_XMLCompatibleString(value, elGetter);
}

export type AnySimpleType = XMLCompatibleString; // DefinedType
let _cached_decoder_for_AnySimpleType: __utils.ASN1Decoder<
    AnySimpleType
> | null = null;
let _cached_encoder_for_AnySimpleType: __utils.ASN1Encoder<
    AnySimpleType
> | null = null;
export function _decode_AnySimpleType(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AnySimpleType) {
        _cached_decoder_for_AnySimpleType = _decode_XMLCompatibleString;
    }
    return _cached_decoder_for_AnySimpleType(el);
}
export function _encode_AnySimpleType(
    value: AnySimpleType,
    elGetter: __utils.ASN1Encoder<AnySimpleType>
) {
    if (!_cached_encoder_for_AnySimpleType) {
        _cached_encoder_for_AnySimpleType = _encode_XMLCompatibleString;
    }
    return _cached_encoder_for_AnySimpleType(value, elGetter);
}

export type String = XMLCompatibleString; // DefinedType
let _cached_decoder_for_String: __utils.ASN1Decoder<String> | null = null;
let _cached_encoder_for_String: __utils.ASN1Encoder<String> | null = null;
export function _decode_String(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_String) {
        _cached_decoder_for_String = _decode_XMLCompatibleString;
    }
    return _cached_decoder_for_String(el);
}
export function _encode_String(
    value: String,
    elGetter: __utils.ASN1Encoder<String>
) {
    if (!_cached_encoder_for_String) {
        _cached_encoder_for_String = _encode_XMLCompatibleString;
    }
    return _cached_encoder_for_String(value, elGetter);
}

export class AnyType {
    constructor(
        readonly embed_values: String[],
        readonly attr: String[],
        readonly elem_list: String[]
    ) {}
}
export const _root_component_type_list_1_spec_for_AnyType: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "embed-values",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attr",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "elem-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AnyType: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AnyType: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AnyType: __utils.ASN1Decoder<AnyType> | null = null;
let _cached_encoder_for_AnyType: __utils.ASN1Encoder<AnyType> | null = null;
export function _decode_AnyType(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AnyType) {
        _cached_decoder_for_AnyType = function (el: asn1.ASN1Element): AnyType {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "AnyType contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "embed-values";
            sequence[1].name = "attr";
            sequence[2].name = "elem-list";
            let embed_values!: String[];
            let attr!: String[];
            let elem_list!: String[];
            embed_values = __utils._decodeSequenceOf<String>(
                () => _decode_String
            )(sequence[0]);
            attr = __utils._decodeSequenceOf<String>(() => _decode_String)(
                sequence[1]
            );
            elem_list = __utils._decodeSequenceOf<String>(() => _decode_String)(
                sequence[2]
            );
            // TODO: Validate values.
            return new AnyType(embed_values, attr, elem_list);
        };
    }
    return _cached_decoder_for_AnyType(el);
}
export function _encode_AnyType(
    value: AnyType,
    elGetter: __utils.ASN1Encoder<AnyType>
) {
    if (!_cached_encoder_for_AnyType) {
        _cached_encoder_for_AnyType = function (
            value: AnyType,
            elGetter: __utils.ASN1Encoder<AnyType>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeSequenceOf<String>(
                            () => _encode_String,
                            __utils.BER
                        )(value.embed_values, __utils.BER),
                        /* REQUIRED   */ __utils._encodeSequenceOf<String>(
                            () => _encode_String,
                            __utils.BER
                        )(value.attr, __utils.BER),
                        /* REQUIRED   */ __utils._encodeSequenceOf<String>(
                            () => _encode_String,
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
    return _cached_encoder_for_AnyType(value, elGetter);
}

export class AnyType_nillable_content {
    constructor(readonly elem_list: String[]) {}
}
export const _root_component_type_list_1_spec_for_AnyType_nillable_content: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "elem-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AnyType_nillable_content: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AnyType_nillable_content: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AnyType_nillable_content: __utils.ASN1Decoder<
    AnyType_nillable_content
> | null = null;
let _cached_encoder_for_AnyType_nillable_content: __utils.ASN1Encoder<
    AnyType_nillable_content
> | null = null;
export function _decode_AnyType_nillable_content(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AnyType_nillable_content) {
        _cached_decoder_for_AnyType_nillable_content = function (
            el: asn1.ASN1Element
        ): AnyType_nillable_content {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "AnyType-nillable-content contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "elem-list";
            let elem_list!: String[];
            elem_list = __utils._decodeSequenceOf<String>(() => _decode_String)(
                sequence[0]
            );
            // TODO: Validate values.
            return new AnyType_nillable_content(elem_list);
        };
    }
    return _cached_decoder_for_AnyType_nillable_content(el);
}
export function _encode_AnyType_nillable_content(
    value: AnyType_nillable_content,
    elGetter: __utils.ASN1Encoder<AnyType_nillable_content>
) {
    if (!_cached_encoder_for_AnyType_nillable_content) {
        _cached_encoder_for_AnyType_nillable_content = function (
            value: AnyType_nillable_content,
            elGetter: __utils.ASN1Encoder<AnyType_nillable_content>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeSequenceOf<String>(
                            () => _encode_String,
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
    return _cached_encoder_for_AnyType_nillable_content(value, elGetter);
}

export class AnyType_nillable {
    constructor(
        readonly embed_values: String[],
        readonly attr: String[],
        readonly content: asn1.OPTIONAL<AnyType_nillable_content>
    ) {}
}
export const _root_component_type_list_1_spec_for_AnyType_nillable: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "embed-values",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attr",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "content",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AnyType_nillable: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AnyType_nillable: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AnyType_nillable: __utils.ASN1Decoder<
    AnyType_nillable
> | null = null;
let _cached_encoder_for_AnyType_nillable: __utils.ASN1Encoder<
    AnyType_nillable
> | null = null;
export function _decode_AnyType_nillable(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AnyType_nillable) {
        _cached_decoder_for_AnyType_nillable = function (
            el: asn1.ASN1Element
        ): AnyType_nillable {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let embed_values!: String[];
            let attr!: String[];
            let content: asn1.OPTIONAL<AnyType_nillable_content>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "embed-values": (_el: asn1.ASN1Element): void => {
                    embed_values = __utils._decodeSequenceOf<String>(
                        () => _decode_String
                    )(_el);
                },
                attr: (_el: asn1.ASN1Element): void => {
                    attr = __utils._decodeSequenceOf<String>(
                        () => _decode_String
                    )(_el);
                },
                content: (_el: asn1.ASN1Element): void => {
                    content = _decode_AnyType_nillable_content(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AnyType_nillable,
                _extension_additions_list_spec_for_AnyType_nillable,
                _root_component_type_list_2_spec_for_AnyType_nillable,
                undefined
            );
            return new AnyType_nillable /* SEQUENCE_CONSTRUCTOR_CALL */(
                embed_values,
                attr,
                content
            );
        };
    }
    return _cached_decoder_for_AnyType_nillable(el);
}
export function _encode_AnyType_nillable(
    value: AnyType_nillable,
    elGetter: __utils.ASN1Encoder<AnyType_nillable>
) {
    if (!_cached_encoder_for_AnyType_nillable) {
        _cached_encoder_for_AnyType_nillable = function (
            value: AnyType_nillable,
            elGetter: __utils.ASN1Encoder<AnyType_nillable>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeSequenceOf<String>(
                            () => _encode_String,
                            __utils.BER
                        )(value.embed_values, __utils.BER),
                        /* REQUIRED   */ __utils._encodeSequenceOf<String>(
                            () => _encode_String,
                            __utils.BER
                        )(value.attr, __utils.BER),
                        /* IF_ABSENT  */ value.content === undefined
                            ? undefined
                            : _encode_AnyType_nillable_content(
                                  value.content,
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
    return _cached_encoder_for_AnyType_nillable(value, elGetter);
}

export type GenericTimeTypeChoice<BasicType, Alternative> =
    | { asn1supportedvalue: BasicType } /* CHOICE_ALT_ROOT */
    | { othervalues: Alternative } /* CHOICE_ALT_ROOT */;
export function _get_decoder_for_GenericTimeTypeChoice<BasicType, Alternative>(
    _decode_BasicType: __utils.ASN1Decoder<BasicType>,
    _decode_Alternative: __utils.ASN1Decoder<Alternative>
) {
    return __utils._decode_inextensible_choice<
        GenericTimeTypeChoice<BasicType, Alternative>
    >({
        "CONTEXT 0": ["asn1supportedvalue", _decode_BasicType],
        "CONTEXT 1": ["othervalues", _decode_Alternative],
    });
}
export function _get_encoder_for_GenericTimeTypeChoice<BasicType, Alternative>(
    _encode_BasicType: __utils.ASN1Encoder<BasicType>,
    _encode_Alternative: __utils.ASN1Encoder<Alternative>
) {
    return __utils._encode_choice<
        GenericTimeTypeChoice<BasicType, Alternative>
    >(
        {
            asn1supportedvalue: _encode_BasicType,
            othervalues: _encode_Alternative,
        },
        __utils.BER
    );
}

export type Date = GenericTimeTypeChoice<asn1.TIME, asn1.VisibleString>; // DefinedType
let _cached_decoder_for_Date: __utils.ASN1Decoder<Date> | null = null;
let _cached_encoder_for_Date: __utils.ASN1Encoder<Date> | null = null;
export function _decode_Date(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Date) {
        _cached_decoder_for_Date = _get_decoder_for_GenericTimeTypeChoice<
            asn1.TIME,
            asn1.VisibleString
        >(__utils._decodeTime, __utils._decodeVisibleString);
    }
    return _cached_decoder_for_Date(el);
}
export function _encode_Date(value: Date, elGetter: __utils.ASN1Encoder<Date>) {
    if (!_cached_encoder_for_Date) {
        _cached_encoder_for_Date = _get_encoder_for_GenericTimeTypeChoice<
            asn1.TIME,
            asn1.VisibleString
        >(__utils._encodeTime, __utils._encodeVisibleString);
    }
    return _cached_encoder_for_Date(value, elGetter);
}

export type DateTime = asn1.TIME; // TimeType
let _cached_decoder_for_DateTime: __utils.ASN1Decoder<DateTime> | null = null;
let _cached_encoder_for_DateTime: __utils.ASN1Encoder<DateTime> | null = null;
export function _decode_DateTime(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DateTime) {
        _cached_decoder_for_DateTime = __utils._decodeTime;
    }
    return _cached_decoder_for_DateTime(el);
}
export function _encode_DateTime(
    value: DateTime,
    elGetter: __utils.ASN1Encoder<DateTime>
) {
    if (!_cached_encoder_for_DateTime) {
        _cached_encoder_for_DateTime = __utils._encodeTime;
    }
    return _cached_encoder_for_DateTime(value, elGetter);
}

export type Decimal = asn1.REAL; // RealType
let _cached_decoder_for_Decimal: __utils.ASN1Decoder<Decimal> | null = null;
let _cached_encoder_for_Decimal: __utils.ASN1Encoder<Decimal> | null = null;
export function _decode_Decimal(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Decimal) {
        _cached_decoder_for_Decimal = __utils._decodeReal;
    }
    return _cached_decoder_for_Decimal(el);
}
export function _encode_Decimal(
    value: Decimal,
    elGetter: __utils.ASN1Encoder<Decimal>
) {
    if (!_cached_encoder_for_Decimal) {
        _cached_encoder_for_Decimal = __utils._encodeReal;
    }
    return _cached_encoder_for_Decimal(value, elGetter);
}

export type Double = asn1.REAL; // RealType
let _cached_decoder_for_Double: __utils.ASN1Decoder<Double> | null = null;
let _cached_encoder_for_Double: __utils.ASN1Encoder<Double> | null = null;
export function _decode_Double(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Double) {
        _cached_decoder_for_Double = __utils._decodeReal;
    }
    return _cached_decoder_for_Double(el);
}
export function _encode_Double(
    value: Double,
    elGetter: __utils.ASN1Encoder<Double>
) {
    if (!_cached_encoder_for_Double) {
        _cached_encoder_for_Double = __utils._encodeReal;
    }
    return _cached_encoder_for_Double(value, elGetter);
}

export type Duration = GenericTimeTypeChoice<asn1.DURATION, asn1.VisibleString>; // DefinedType
let _cached_decoder_for_Duration: __utils.ASN1Decoder<Duration> | null = null;
let _cached_encoder_for_Duration: __utils.ASN1Encoder<Duration> | null = null;
export function _decode_Duration(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Duration) {
        _cached_decoder_for_Duration = _get_decoder_for_GenericTimeTypeChoice<
            asn1.DURATION,
            asn1.VisibleString
        >(__utils._decodeDuration, __utils._decodeVisibleString);
    }
    return _cached_decoder_for_Duration(el);
}
export function _encode_Duration(
    value: Duration,
    elGetter: __utils.ASN1Encoder<Duration>
) {
    if (!_cached_encoder_for_Duration) {
        _cached_encoder_for_Duration = _get_encoder_for_GenericTimeTypeChoice<
            asn1.DURATION,
            asn1.VisibleString
        >(__utils._encodeDuration, __utils._encodeVisibleString);
    }
    return _cached_encoder_for_Duration(value, elGetter);
}

export type NormalizedString = String; // DefinedType
let _cached_decoder_for_NormalizedString: __utils.ASN1Decoder<
    NormalizedString
> | null = null;
let _cached_encoder_for_NormalizedString: __utils.ASN1Encoder<
    NormalizedString
> | null = null;
export function _decode_NormalizedString(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NormalizedString) {
        _cached_decoder_for_NormalizedString = _decode_String;
    }
    return _cached_decoder_for_NormalizedString(el);
}
export function _encode_NormalizedString(
    value: NormalizedString,
    elGetter: __utils.ASN1Encoder<NormalizedString>
) {
    if (!_cached_encoder_for_NormalizedString) {
        _cached_encoder_for_NormalizedString = _encode_String;
    }
    return _cached_encoder_for_NormalizedString(value, elGetter);
}

export type Token = NormalizedString; // DefinedType
let _cached_decoder_for_Token: __utils.ASN1Decoder<Token> | null = null;
let _cached_encoder_for_Token: __utils.ASN1Encoder<Token> | null = null;
export function _decode_Token(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Token) {
        _cached_decoder_for_Token = _decode_NormalizedString;
    }
    return _cached_decoder_for_Token(el);
}
export function _encode_Token(
    value: Token,
    elGetter: __utils.ASN1Encoder<Token>
) {
    if (!_cached_encoder_for_Token) {
        _cached_encoder_for_Token = _encode_NormalizedString;
    }
    return _cached_encoder_for_Token(value, elGetter);
}

export type Name = Token; // DefinedType
let _cached_decoder_for_Name: __utils.ASN1Decoder<Name> | null = null;
let _cached_encoder_for_Name: __utils.ASN1Encoder<Name> | null = null;
export function _decode_Name(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Name) {
        _cached_decoder_for_Name = _decode_Token;
    }
    return _cached_decoder_for_Name(el);
}
export function _encode_Name(value: Name, elGetter: __utils.ASN1Encoder<Name>) {
    if (!_cached_encoder_for_Name) {
        _cached_encoder_for_Name = _encode_Token;
    }
    return _cached_encoder_for_Name(value, elGetter);
}

export type NCName = Name; // DefinedType
let _cached_decoder_for_NCName: __utils.ASN1Decoder<NCName> | null = null;
let _cached_encoder_for_NCName: __utils.ASN1Encoder<NCName> | null = null;
export function _decode_NCName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NCName) {
        _cached_decoder_for_NCName = _decode_Name;
    }
    return _cached_decoder_for_NCName(el);
}
export function _encode_NCName(
    value: NCName,
    elGetter: __utils.ASN1Encoder<NCName>
) {
    if (!_cached_encoder_for_NCName) {
        _cached_encoder_for_NCName = _encode_Name;
    }
    return _cached_encoder_for_NCName(value, elGetter);
}

export type ENTITY = NCName; // DefinedType
let _cached_decoder_for_ENTITY: __utils.ASN1Decoder<ENTITY> | null = null;
let _cached_encoder_for_ENTITY: __utils.ASN1Encoder<ENTITY> | null = null;
export function _decode_ENTITY(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ENTITY) {
        _cached_decoder_for_ENTITY = _decode_NCName;
    }
    return _cached_decoder_for_ENTITY(el);
}
export function _encode_ENTITY(
    value: ENTITY,
    elGetter: __utils.ASN1Encoder<ENTITY>
) {
    if (!_cached_encoder_for_ENTITY) {
        _cached_encoder_for_ENTITY = _encode_NCName;
    }
    return _cached_encoder_for_ENTITY(value, elGetter);
}

export type ENTITIES = ENTITY[]; // SequenceOfType
let _cached_decoder_for_ENTITIES: __utils.ASN1Decoder<ENTITIES> | null = null;
let _cached_encoder_for_ENTITIES: __utils.ASN1Encoder<ENTITIES> | null = null;
export function _decode_ENTITIES(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ENTITIES) {
        _cached_decoder_for_ENTITIES = __utils._decodeSequenceOf<ENTITY>(
            () => _decode_ENTITY
        );
    }
    return _cached_decoder_for_ENTITIES(el);
}
export function _encode_ENTITIES(
    value: ENTITIES,
    elGetter: __utils.ASN1Encoder<ENTITIES>
) {
    if (!_cached_encoder_for_ENTITIES) {
        _cached_encoder_for_ENTITIES = __utils._encodeSequenceOf<ENTITY>(
            () => _encode_ENTITY,
            __utils.BER
        );
    }
    return _cached_encoder_for_ENTITIES(value, elGetter);
}

export type Float = asn1.REAL; // RealType
let _cached_decoder_for_Float: __utils.ASN1Decoder<Float> | null = null;
let _cached_encoder_for_Float: __utils.ASN1Encoder<Float> | null = null;
export function _decode_Float(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Float) {
        _cached_decoder_for_Float = __utils._decodeReal;
    }
    return _cached_decoder_for_Float(el);
}
export function _encode_Float(
    value: Float,
    elGetter: __utils.ASN1Encoder<Float>
) {
    if (!_cached_encoder_for_Float) {
        _cached_encoder_for_Float = __utils._encodeReal;
    }
    return _cached_encoder_for_Float(value, elGetter);
}

export type DateTimeType = asn1.VisibleString; // VisibleString
let _cached_decoder_for_DateTimeType: __utils.ASN1Decoder<
    DateTimeType
> | null = null;
let _cached_encoder_for_DateTimeType: __utils.ASN1Encoder<
    DateTimeType
> | null = null;
export function _decode_DateTimeType(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DateTimeType) {
        _cached_decoder_for_DateTimeType = __utils._decodeVisibleString;
    }
    return _cached_decoder_for_DateTimeType(el);
}
export function _encode_DateTimeType(
    value: DateTimeType,
    elGetter: __utils.ASN1Encoder<DateTimeType>
) {
    if (!_cached_encoder_for_DateTimeType) {
        _cached_encoder_for_DateTimeType = __utils._encodeVisibleString;
    }
    return _cached_encoder_for_DateTimeType(value, elGetter);
}

export type GDay = DateTimeType; // DefinedType
let _cached_decoder_for_GDay: __utils.ASN1Decoder<GDay> | null = null;
let _cached_encoder_for_GDay: __utils.ASN1Encoder<GDay> | null = null;
export function _decode_GDay(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GDay) {
        _cached_decoder_for_GDay = _decode_DateTimeType;
    }
    return _cached_decoder_for_GDay(el);
}
export function _encode_GDay(value: GDay, elGetter: __utils.ASN1Encoder<GDay>) {
    if (!_cached_encoder_for_GDay) {
        _cached_encoder_for_GDay = _encode_DateTimeType;
    }
    return _cached_encoder_for_GDay(value, elGetter);
}

export type GMonth = DateTimeType; // DefinedType
let _cached_decoder_for_GMonth: __utils.ASN1Decoder<GMonth> | null = null;
let _cached_encoder_for_GMonth: __utils.ASN1Encoder<GMonth> | null = null;
export function _decode_GMonth(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GMonth) {
        _cached_decoder_for_GMonth = _decode_DateTimeType;
    }
    return _cached_decoder_for_GMonth(el);
}
export function _encode_GMonth(
    value: GMonth,
    elGetter: __utils.ASN1Encoder<GMonth>
) {
    if (!_cached_encoder_for_GMonth) {
        _cached_encoder_for_GMonth = _encode_DateTimeType;
    }
    return _cached_encoder_for_GMonth(value, elGetter);
}

export type GMonthDay = DateTimeType; // DefinedType
let _cached_decoder_for_GMonthDay: __utils.ASN1Decoder<GMonthDay> | null = null;
let _cached_encoder_for_GMonthDay: __utils.ASN1Encoder<GMonthDay> | null = null;
export function _decode_GMonthDay(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GMonthDay) {
        _cached_decoder_for_GMonthDay = _decode_DateTimeType;
    }
    return _cached_decoder_for_GMonthDay(el);
}
export function _encode_GMonthDay(
    value: GMonthDay,
    elGetter: __utils.ASN1Encoder<GMonthDay>
) {
    if (!_cached_encoder_for_GMonthDay) {
        _cached_encoder_for_GMonthDay = _encode_DateTimeType;
    }
    return _cached_encoder_for_GMonthDay(value, elGetter);
}

export type GYear = GenericTimeTypeChoice<asn1.TIME, asn1.VisibleString>; // DefinedType
let _cached_decoder_for_GYear: __utils.ASN1Decoder<GYear> | null = null;
let _cached_encoder_for_GYear: __utils.ASN1Encoder<GYear> | null = null;
export function _decode_GYear(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GYear) {
        _cached_decoder_for_GYear = _get_decoder_for_GenericTimeTypeChoice<
            asn1.TIME,
            asn1.VisibleString
        >(__utils._decodeTime, __utils._decodeVisibleString);
    }
    return _cached_decoder_for_GYear(el);
}
export function _encode_GYear(
    value: GYear,
    elGetter: __utils.ASN1Encoder<GYear>
) {
    if (!_cached_encoder_for_GYear) {
        _cached_encoder_for_GYear = _get_encoder_for_GenericTimeTypeChoice<
            asn1.TIME,
            asn1.VisibleString
        >(__utils._encodeTime, __utils._encodeVisibleString);
    }
    return _cached_encoder_for_GYear(value, elGetter);
}

export type GYearMonth = GenericTimeTypeChoice<asn1.TIME, asn1.VisibleString>; // DefinedType
let _cached_decoder_for_GYearMonth: __utils.ASN1Decoder<
    GYearMonth
> | null = null;
let _cached_encoder_for_GYearMonth: __utils.ASN1Encoder<
    GYearMonth
> | null = null;
export function _decode_GYearMonth(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GYearMonth) {
        _cached_decoder_for_GYearMonth = _get_decoder_for_GenericTimeTypeChoice<
            asn1.TIME,
            asn1.VisibleString
        >(__utils._decodeTime, __utils._decodeVisibleString);
    }
    return _cached_decoder_for_GYearMonth(el);
}
export function _encode_GYearMonth(
    value: GYearMonth,
    elGetter: __utils.ASN1Encoder<GYearMonth>
) {
    if (!_cached_encoder_for_GYearMonth) {
        _cached_encoder_for_GYearMonth = _get_encoder_for_GenericTimeTypeChoice<
            asn1.TIME,
            asn1.VisibleString
        >(__utils._encodeTime, __utils._encodeVisibleString);
    }
    return _cached_encoder_for_GYearMonth(value, elGetter);
}

export type ID = NCName; // DefinedType
let _cached_decoder_for_ID: __utils.ASN1Decoder<ID> | null = null;
let _cached_encoder_for_ID: __utils.ASN1Encoder<ID> | null = null;
export function _decode_ID(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ID) {
        _cached_decoder_for_ID = _decode_NCName;
    }
    return _cached_decoder_for_ID(el);
}
export function _encode_ID(value: ID, elGetter: __utils.ASN1Encoder<ID>) {
    if (!_cached_encoder_for_ID) {
        _cached_encoder_for_ID = _encode_NCName;
    }
    return _cached_encoder_for_ID(value, elGetter);
}

export type IDREF = NCName; // DefinedType
let _cached_decoder_for_IDREF: __utils.ASN1Decoder<IDREF> | null = null;
let _cached_encoder_for_IDREF: __utils.ASN1Encoder<IDREF> | null = null;
export function _decode_IDREF(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IDREF) {
        _cached_decoder_for_IDREF = _decode_NCName;
    }
    return _cached_decoder_for_IDREF(el);
}
export function _encode_IDREF(
    value: IDREF,
    elGetter: __utils.ASN1Encoder<IDREF>
) {
    if (!_cached_encoder_for_IDREF) {
        _cached_encoder_for_IDREF = _encode_NCName;
    }
    return _cached_encoder_for_IDREF(value, elGetter);
}

export type IDREFS = IDREF[]; // SequenceOfType
let _cached_decoder_for_IDREFS: __utils.ASN1Decoder<IDREFS> | null = null;
let _cached_encoder_for_IDREFS: __utils.ASN1Encoder<IDREFS> | null = null;
export function _decode_IDREFS(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IDREFS) {
        _cached_decoder_for_IDREFS = __utils._decodeSequenceOf<IDREF>(
            () => _decode_IDREF
        );
    }
    return _cached_decoder_for_IDREFS(el);
}
export function _encode_IDREFS(
    value: IDREFS,
    elGetter: __utils.ASN1Encoder<IDREFS>
) {
    if (!_cached_encoder_for_IDREFS) {
        _cached_encoder_for_IDREFS = __utils._encodeSequenceOf<IDREF>(
            () => _encode_IDREF,
            __utils.BER
        );
    }
    return _cached_encoder_for_IDREFS(value, elGetter);
}

export type Int = asn1.INTEGER;
let _cached_decoder_for_Int: __utils.ASN1Decoder<Int> | null = null;
let _cached_encoder_for_Int: __utils.ASN1Encoder<Int> | null = null;
export function _decode_Int(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Int) {
        _cached_decoder_for_Int = __utils._decodeInteger;
    }
    return _cached_decoder_for_Int(el);
}
export function _encode_Int(value: Int, elGetter: __utils.ASN1Encoder<Int>) {
    if (!_cached_encoder_for_Int) {
        _cached_encoder_for_Int = __utils._encodeInteger;
    }
    return _cached_encoder_for_Int(value, elGetter);
}

export type Language = asn1.VisibleString; // VisibleString
let _cached_decoder_for_Language: __utils.ASN1Decoder<Language> | null = null;
let _cached_encoder_for_Language: __utils.ASN1Encoder<Language> | null = null;
export function _decode_Language(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Language) {
        _cached_decoder_for_Language = __utils._decodeVisibleString;
    }
    return _cached_decoder_for_Language(el);
}
export function _encode_Language(
    value: Language,
    elGetter: __utils.ASN1Encoder<Language>
) {
    if (!_cached_encoder_for_Language) {
        _cached_encoder_for_Language = __utils._encodeVisibleString;
    }
    return _cached_encoder_for_Language(value, elGetter);
}

export type Long = asn1.INTEGER;
let _cached_decoder_for_Long: __utils.ASN1Decoder<Long> | null = null;
let _cached_encoder_for_Long: __utils.ASN1Encoder<Long> | null = null;
export function _decode_Long(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Long) {
        _cached_decoder_for_Long = __utils._decodeInteger;
    }
    return _cached_decoder_for_Long(el);
}
export function _encode_Long(value: Long, elGetter: __utils.ASN1Encoder<Long>) {
    if (!_cached_encoder_for_Long) {
        _cached_encoder_for_Long = __utils._encodeInteger;
    }
    return _cached_encoder_for_Long(value, elGetter);
}

export type NMTOKEN = Token; // DefinedType
let _cached_decoder_for_NMTOKEN: __utils.ASN1Decoder<NMTOKEN> | null = null;
let _cached_encoder_for_NMTOKEN: __utils.ASN1Encoder<NMTOKEN> | null = null;
export function _decode_NMTOKEN(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NMTOKEN) {
        _cached_decoder_for_NMTOKEN = _decode_Token;
    }
    return _cached_decoder_for_NMTOKEN(el);
}
export function _encode_NMTOKEN(
    value: NMTOKEN,
    elGetter: __utils.ASN1Encoder<NMTOKEN>
) {
    if (!_cached_encoder_for_NMTOKEN) {
        _cached_encoder_for_NMTOKEN = _encode_Token;
    }
    return _cached_encoder_for_NMTOKEN(value, elGetter);
}

export type NMTOKENS = NMTOKEN[]; // SequenceOfType
let _cached_decoder_for_NMTOKENS: __utils.ASN1Decoder<NMTOKENS> | null = null;
let _cached_encoder_for_NMTOKENS: __utils.ASN1Encoder<NMTOKENS> | null = null;
export function _decode_NMTOKENS(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NMTOKENS) {
        _cached_decoder_for_NMTOKENS = __utils._decodeSequenceOf<NMTOKEN>(
            () => _decode_NMTOKEN
        );
    }
    return _cached_decoder_for_NMTOKENS(el);
}
export function _encode_NMTOKENS(
    value: NMTOKENS,
    elGetter: __utils.ASN1Encoder<NMTOKENS>
) {
    if (!_cached_encoder_for_NMTOKENS) {
        _cached_encoder_for_NMTOKENS = __utils._encodeSequenceOf<NMTOKEN>(
            () => _encode_NMTOKEN,
            __utils.BER
        );
    }
    return _cached_encoder_for_NMTOKENS(value, elGetter);
}

export type XMLStringWithNoCRLFHT = asn1.UTF8String; // UTF8String
let _cached_decoder_for_XMLStringWithNoCRLFHT: __utils.ASN1Decoder<
    XMLStringWithNoCRLFHT
> | null = null;
let _cached_encoder_for_XMLStringWithNoCRLFHT: __utils.ASN1Encoder<
    XMLStringWithNoCRLFHT
> | null = null;
export function _decode_XMLStringWithNoCRLFHT(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_XMLStringWithNoCRLFHT) {
        _cached_decoder_for_XMLStringWithNoCRLFHT = __utils._decodeUTF8String;
    }
    return _cached_decoder_for_XMLStringWithNoCRLFHT(el);
}
export function _encode_XMLStringWithNoCRLFHT(
    value: XMLStringWithNoCRLFHT,
    elGetter: __utils.ASN1Encoder<XMLStringWithNoCRLFHT>
) {
    if (!_cached_encoder_for_XMLStringWithNoCRLFHT) {
        _cached_encoder_for_XMLStringWithNoCRLFHT = __utils._encodeUTF8String;
    }
    return _cached_encoder_for_XMLStringWithNoCRLFHT(value, elGetter);
}

export type AnyURI = XMLStringWithNoCRLFHT; // DefinedType
let _cached_decoder_for_AnyURI: __utils.ASN1Decoder<AnyURI> | null = null;
let _cached_encoder_for_AnyURI: __utils.ASN1Encoder<AnyURI> | null = null;
export function _decode_AnyURI(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AnyURI) {
        _cached_decoder_for_AnyURI = _decode_XMLStringWithNoCRLFHT;
    }
    return _cached_decoder_for_AnyURI(el);
}
export function _encode_AnyURI(
    value: AnyURI,
    elGetter: __utils.ASN1Encoder<AnyURI>
) {
    if (!_cached_encoder_for_AnyURI) {
        _cached_encoder_for_AnyURI = _encode_XMLStringWithNoCRLFHT;
    }
    return _cached_encoder_for_AnyURI(value, elGetter);
}

export class QName {
    constructor(readonly uri: asn1.OPTIONAL<AnyURI>, readonly name: NCName) {}
}
export const _root_component_type_list_1_spec_for_QName: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "uri",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "name",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_QName: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_QName: __utils.ComponentSpec[] = [];
let _cached_decoder_for_QName: __utils.ASN1Decoder<QName> | null = null;
let _cached_encoder_for_QName: __utils.ASN1Encoder<QName> | null = null;
export function _decode_QName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_QName) {
        _cached_decoder_for_QName = function (el: asn1.ASN1Element): QName {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let uri: asn1.OPTIONAL<AnyURI>;
            let name!: NCName;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                uri: (_el: asn1.ASN1Element): void => {
                    uri = _decode_AnyURI(_el);
                },
                name: (_el: asn1.ASN1Element): void => {
                    name = _decode_NCName(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_QName,
                _extension_additions_list_spec_for_QName,
                _root_component_type_list_2_spec_for_QName,
                undefined
            );
            return new QName /* SEQUENCE_CONSTRUCTOR_CALL */(uri, name);
        };
    }
    return _cached_decoder_for_QName(el);
}
export function _encode_QName(
    value: QName,
    elGetter: __utils.ASN1Encoder<QName>
) {
    if (!_cached_encoder_for_QName) {
        _cached_encoder_for_QName = function (
            value: QName,
            elGetter: __utils.ASN1Encoder<QName>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.uri === undefined
                            ? undefined
                            : _encode_AnyURI(value.uri, __utils.BER),
                        /* REQUIRED   */ _encode_NCName(
                            value.name,
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
    return _cached_encoder_for_QName(value, elGetter);
}

export type NOTATION = QName; // DefinedType
let _cached_decoder_for_NOTATION: __utils.ASN1Decoder<NOTATION> | null = null;
let _cached_encoder_for_NOTATION: __utils.ASN1Encoder<NOTATION> | null = null;
export function _decode_NOTATION(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NOTATION) {
        _cached_decoder_for_NOTATION = _decode_QName;
    }
    return _cached_decoder_for_NOTATION(el);
}
export function _encode_NOTATION(
    value: NOTATION,
    elGetter: __utils.ASN1Encoder<NOTATION>
) {
    if (!_cached_encoder_for_NOTATION) {
        _cached_encoder_for_NOTATION = _encode_QName;
    }
    return _cached_encoder_for_NOTATION(value, elGetter);
}

export type Short = asn1.INTEGER;
let _cached_decoder_for_Short: __utils.ASN1Decoder<Short> | null = null;
let _cached_encoder_for_Short: __utils.ASN1Encoder<Short> | null = null;
export function _decode_Short(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Short) {
        _cached_decoder_for_Short = __utils._decodeInteger;
    }
    return _cached_decoder_for_Short(el);
}
export function _encode_Short(
    value: Short,
    elGetter: __utils.ASN1Encoder<Short>
) {
    if (!_cached_encoder_for_Short) {
        _cached_encoder_for_Short = __utils._encodeInteger;
    }
    return _cached_encoder_for_Short(value, elGetter);
}

export type Time = asn1.TIME; // TimeType
let _cached_decoder_for_Time: __utils.ASN1Decoder<Time> | null = null;
let _cached_encoder_for_Time: __utils.ASN1Encoder<Time> | null = null;
export function _decode_Time(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Time) {
        _cached_decoder_for_Time = __utils._decodeTime;
    }
    return _cached_decoder_for_Time(el);
}
export function _encode_Time(value: Time, elGetter: __utils.ASN1Encoder<Time>) {
    if (!_cached_encoder_for_Time) {
        _cached_encoder_for_Time = __utils._encodeTime;
    }
    return _cached_encoder_for_Time(value, elGetter);
}

export type UnsignedInt = asn1.INTEGER;
let _cached_decoder_for_UnsignedInt: __utils.ASN1Decoder<
    UnsignedInt
> | null = null;
let _cached_encoder_for_UnsignedInt: __utils.ASN1Encoder<
    UnsignedInt
> | null = null;
export function _decode_UnsignedInt(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UnsignedInt) {
        _cached_decoder_for_UnsignedInt = __utils._decodeInteger;
    }
    return _cached_decoder_for_UnsignedInt(el);
}
export function _encode_UnsignedInt(
    value: UnsignedInt,
    elGetter: __utils.ASN1Encoder<UnsignedInt>
) {
    if (!_cached_encoder_for_UnsignedInt) {
        _cached_encoder_for_UnsignedInt = __utils._encodeInteger;
    }
    return _cached_encoder_for_UnsignedInt(value, elGetter);
}

export type UnsignedLong = asn1.INTEGER;
let _cached_decoder_for_UnsignedLong: __utils.ASN1Decoder<
    UnsignedLong
> | null = null;
let _cached_encoder_for_UnsignedLong: __utils.ASN1Encoder<
    UnsignedLong
> | null = null;
export function _decode_UnsignedLong(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UnsignedLong) {
        _cached_decoder_for_UnsignedLong = __utils._decodeInteger;
    }
    return _cached_decoder_for_UnsignedLong(el);
}
export function _encode_UnsignedLong(
    value: UnsignedLong,
    elGetter: __utils.ASN1Encoder<UnsignedLong>
) {
    if (!_cached_encoder_for_UnsignedLong) {
        _cached_encoder_for_UnsignedLong = __utils._encodeInteger;
    }
    return _cached_encoder_for_UnsignedLong(value, elGetter);
}

export type UnsignedShort = asn1.INTEGER;
let _cached_decoder_for_UnsignedShort: __utils.ASN1Decoder<
    UnsignedShort
> | null = null;
let _cached_encoder_for_UnsignedShort: __utils.ASN1Encoder<
    UnsignedShort
> | null = null;
export function _decode_UnsignedShort(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UnsignedShort) {
        _cached_decoder_for_UnsignedShort = __utils._decodeInteger;
    }
    return _cached_decoder_for_UnsignedShort(el);
}
export function _encode_UnsignedShort(
    value: UnsignedShort,
    elGetter: __utils.ASN1Encoder<UnsignedShort>
) {
    if (!_cached_encoder_for_UnsignedShort) {
        _cached_encoder_for_UnsignedShort = __utils._encodeInteger;
    }
    return _cached_encoder_for_UnsignedShort(value, elGetter);
}

export type XMLStringWithNoWhitespace = asn1.UTF8String; // UTF8String
let _cached_decoder_for_XMLStringWithNoWhitespace: __utils.ASN1Decoder<
    XMLStringWithNoWhitespace
> | null = null;
let _cached_encoder_for_XMLStringWithNoWhitespace: __utils.ASN1Encoder<
    XMLStringWithNoWhitespace
> | null = null;
export function _decode_XMLStringWithNoWhitespace(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_XMLStringWithNoWhitespace) {
        _cached_decoder_for_XMLStringWithNoWhitespace =
            __utils._decodeUTF8String;
    }
    return _cached_decoder_for_XMLStringWithNoWhitespace(el);
}
export function _encode_XMLStringWithNoWhitespace(
    value: XMLStringWithNoWhitespace,
    elGetter: __utils.ASN1Encoder<XMLStringWithNoWhitespace>
) {
    if (!_cached_encoder_for_XMLStringWithNoWhitespace) {
        _cached_encoder_for_XMLStringWithNoWhitespace =
            __utils._encodeUTF8String;
    }
    return _cached_encoder_for_XMLStringWithNoWhitespace(value, elGetter);
}

export type Day = DateTimeType; // DefinedType
let _cached_decoder_for_Day: __utils.ASN1Decoder<Day> | null = null;
let _cached_encoder_for_Day: __utils.ASN1Encoder<Day> | null = null;
export function _decode_Day(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Day) {
        _cached_decoder_for_Day = _decode_DateTimeType;
    }
    return _cached_decoder_for_Day(el);
}
export function _encode_Day(value: Day, elGetter: __utils.ASN1Encoder<Day>) {
    if (!_cached_encoder_for_Day) {
        _cached_encoder_for_Day = _encode_DateTimeType;
    }
    return _cached_encoder_for_Day(value, elGetter);
}

export type Month = DateTimeType; // DefinedType
let _cached_decoder_for_Month: __utils.ASN1Decoder<Month> | null = null;
let _cached_encoder_for_Month: __utils.ASN1Encoder<Month> | null = null;
export function _decode_Month(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Month) {
        _cached_decoder_for_Month = _decode_DateTimeType;
    }
    return _cached_decoder_for_Month(el);
}
export function _encode_Month(
    value: Month,
    elGetter: __utils.ASN1Encoder<Month>
) {
    if (!_cached_encoder_for_Month) {
        _cached_encoder_for_Month = _encode_DateTimeType;
    }
    return _cached_encoder_for_Month(value, elGetter);
}

export type MonthDay = DateTimeType; // DefinedType
let _cached_decoder_for_MonthDay: __utils.ASN1Decoder<MonthDay> | null = null;
let _cached_encoder_for_MonthDay: __utils.ASN1Encoder<MonthDay> | null = null;
export function _decode_MonthDay(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MonthDay) {
        _cached_decoder_for_MonthDay = _decode_DateTimeType;
    }
    return _cached_decoder_for_MonthDay(el);
}
export function _encode_MonthDay(
    value: MonthDay,
    elGetter: __utils.ASN1Encoder<MonthDay>
) {
    if (!_cached_encoder_for_MonthDay) {
        _cached_encoder_for_MonthDay = _encode_DateTimeType;
    }
    return _cached_encoder_for_MonthDay(value, elGetter);
}

/* END_MODULE XSD */
