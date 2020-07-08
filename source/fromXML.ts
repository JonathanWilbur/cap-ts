import {
    // Alert,
    _from_string_Alert_msgType,
    _from_string_Alert_scope,
    _from_string_Alert_status,
    _from_string_Alert_info_list_info_category_list_category,
    _from_string_Alert_info_list_info_certainty,
    _from_string_Alert_info_list_info_responseType_list_responseType,
    _from_string_Alert_info_list_info_severity,
    _from_string_Alert_info_list_info_urgency,
    Alert,
    Alert_info_list_info,
    Alert_info_list_info_eventCode_list_eventCode,
    Alert_info_list_info_parameter_list_parameter,
    Alert_info_list_info_resource_list_resource,
    Alert_info_list_info_area_list_area,
    Alert_info_list_info_area_list_area_geocode_list_geocode,
} from "./CAP-1-2";
import * as x from "xml2js";

function alertInfoFromXML (doc: any): Alert_info_list_info {
    return new Alert_info_list_info(
        doc.language ? doc.language[0] : undefined,
        (doc.category as Array<string>).map((cat) => {
            return _from_string_Alert_info_list_info_category_list_category(cat)
                ?? (() => { throw new Error(`Invalid alert info category '${cat}'.`); })();
        }),
        doc.event[0],
        (doc.responseType as Array<string>).map((rt) => {
            return _from_string_Alert_info_list_info_responseType_list_responseType(rt)
                ?? (() => { throw new Error(`Invalid alert info responseType '${rt}'.`); })();
        }),
        _from_string_Alert_info_list_info_urgency(doc.urgency[0])
            ?? (() => { throw new Error(`Invalid alert info urgency '${doc.urgency[0]}'.`); })(),
        _from_string_Alert_info_list_info_severity(doc.severity[0])
            ?? (() => { throw new Error(`Invalid alert info severity '${doc.severity[0]}'.`); })(),
        _from_string_Alert_info_list_info_certainty(doc.certainty[0])
            ?? (() => { throw new Error(`Invalid alert info certainty '${doc.certainty[0]}'.`); })(),
        doc.audience[0],
        ((doc.eventCode ?? []) as Array<any>).map((ec): Alert_info_list_info_eventCode_list_eventCode => {
            return new Alert_info_list_info_eventCode_list_eventCode(
                ec.valueName[0],
                ec.value[0],
            );
        }),
        doc.effective ? doc.effective[0] : undefined,
        doc.onset ? doc.onset[0] : undefined,
        doc.expires ? doc.expires[0] : undefined,
        doc.senderName ? doc.senderName[0] : undefined,
        doc.headline ? doc.headline[0] : undefined,
        doc.description ? doc.description[0] : undefined,
        doc.instruction ? doc.instruction[0] : undefined,
        doc.web ? doc.web[0] : undefined,
        doc.contact ? doc.contact[0] : undefined,
        ((doc.parameter ?? []) as Array<any>).map((parameter): Alert_info_list_info_parameter_list_parameter => {
            return new Alert_info_list_info_parameter_list_parameter(
                parameter.valueName[0],
                parameter.value[0],
            );
        }),
        ((doc.resource ?? []) as Array<any>).map((resource): Alert_info_list_info_resource_list_resource => {
            return new Alert_info_list_info_resource_list_resource(
                resource.resourceDesc[0],
                resource.mimeType[0],
                resource.size ? Number.parseInt(resource.size[0], 10) : undefined,
                resource.uri ? resource.uri[0] : undefined,
                resource.derefUri ? resource.derefUri[0] : undefined,
                resource.digest ? resource.digest[0] : undefined,
            );
        }),
        ((doc.area ?? []) as Array<any>).map((area): Alert_info_list_info_area_list_area => {
            return new Alert_info_list_info_area_list_area(
                area.areaDesc[0],
                area.polygon,
                area.circle,
                ((area.geocode ?? []) as Array<any>).map((geocode): Alert_info_list_info_area_list_area_geocode_list_geocode => {
                    return new Alert_info_list_info_area_list_area_geocode_list_geocode(
                        geocode.valueName[0],
                        geocode.value[0],
                    );
                }),
                area.altitude ? Number.parseFloat(area.altitude) : undefined,
                area.ceiling ? Number.parseFloat(area.ceiling) : undefined,
            );
        }),
    );
}

export default
async function alertFromXML (str: string): Promise<Alert> {
    // TODO: Validate.
    const parser = new x.Parser();
    const doc: any = await parser.parseStringPromise(str);
    const alertDoc = doc.alert;
    return new Alert(
        alertDoc.identifier[0],
        alertDoc.sender[0],
        alertDoc.sent[0],
        _from_string_Alert_status(alertDoc.status[0])
            ?? (() => { throw new Error(`Invalid alert status '${alertDoc.status[0]}'.`); })(),
        _from_string_Alert_msgType(alertDoc.msgType[0])
            ?? (() => { throw new Error(`Invalid alert msgType '${alertDoc.msgType[0]}'.`); })(),
        alertDoc.source[0],
        _from_string_Alert_scope(alertDoc.scope[0])
            ?? (() => { throw new Error(`Invalid alert scope '${alertDoc.scope[0]}'.`); })(),
        alertDoc.restriction[0],
        alertDoc.addresses ? alertDoc.addresses[0] : undefined,
        alertDoc.code ? alertDoc.code[0] : undefined,
        alertDoc.note[0],
        alertDoc.references[0],
        alertDoc.incidents[0],
        (alertDoc.info as Array<any>).map(alertInfoFromXML),
        alertDoc.elem ?? [],
    );
}
