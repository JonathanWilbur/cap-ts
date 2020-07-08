// import * as x from "xml2js";
import {
    Alert,
    _to_string_Alert_msgType,
    _to_string_Alert_scope,
    _to_string_Alert_status,
    _to_string_Alert_info_list_info_category_list_category,
    _to_string_Alert_info_list_info_certainty,
    _to_string_Alert_info_list_info_responseType_list_responseType,
    _to_string_Alert_info_list_info_severity,
    _to_string_Alert_info_list_info_urgency,
    Alert_info_list_info,
} from "./CAP-1-2";
import * as xmlbuilder2 from "xmlbuilder2";
import { XMLBuilder } from "xmlbuilder2/lib/interfaces";

// <?xml version = "1.0" encoding = "UTF-8"?>
// <alert xmlns = "urn:oasis:names:tc:emergency:cap:1.2">
//   <identifier>43b080713727</identifier>
//   <sender>hsas@dhs.gov</sender>
//   <sent>2003-04-02T14:39:01-05:00</sent>
//   <status>Actual</status>
//   <msgType>Alert</msgType>
//   <scope>Public</scope>
//   <info>
//     <category>Security</category>
//     <event>Homeland Security Advisory System Update</event>
//     <urgency>Immediate</urgency>
//     <severity>Severe</severity>
//     <certainty>Likely</certainty>
//     <senderName>U.S. Government, Department of Homeland Security</senderName>
//     <headline>Homeland Security Sets Code ORANGE</headline>
//     <description>The Department of Homeland Security has elevated the Homeland Security Advisory System threat level to ORANGE / High in response to intelligence which may indicate a heightened threat of terrorism.</description>
//     <instruction> A High Condition is declared when there is a high risk of terrorist attacks. In addition to the Protective Measures taken in the previous Threat Conditions, Federal departments and agencies should consider agency-specific Protective Measures in accordance with their existing plans.</instruction>
//     <web>http://www.dhs.gov/dhspublic/display?theme=29</web>
//     <parameter>
//       <valueName>HSAS</valueName>
//       <value>ORANGE</value>
//     </parameter>
//     <resource>
//       <resourceDesc>Image file (GIF)</resourceDesc>
//       <mimeType>image/gif</mimeType>
//       <uri>http://www.dhs.gov/dhspublic/getAdvisoryImage</uri>
//     </resource>
//     <area>
//       <areaDesc>U.S. nationwide and interests worldwide</areaDesc>
//     </area>
//   </info>
// </alert>

export
function alertInfoToXML (info: Alert_info_list_info, doc: XMLBuilder): void {
    const alertInfoDoc = doc.ele("info");
    if (info.language) {
        alertInfoDoc.ele("language").txt(info.language).up();
    }
    info.category_list.forEach((cl): void => {
        alertInfoDoc.ele("category")
            .txt(_to_string_Alert_info_list_info_category_list_category(cl)).up();
    });
    alertInfoDoc.ele("event").txt(info.event).up();
    info.responseType_list.forEach((rt): void => {
        alertInfoDoc.ele("responseType")
            .txt(_to_string_Alert_info_list_info_responseType_list_responseType(rt)).up();
    });
    alertInfoDoc.ele("urgency").txt(_to_string_Alert_info_list_info_urgency(info.urgency)).up();
    alertInfoDoc.ele("severity").txt(_to_string_Alert_info_list_info_severity(info.severity)).up();
    alertInfoDoc.ele("certainty").txt(_to_string_Alert_info_list_info_certainty(info.certainty)).up();
    if (info.audience) {
        alertInfoDoc.ele("audience").txt(info.audience).up();
    }
    info.eventCode_list.forEach((ec) => {
        alertInfoDoc.ele("eventCode")
            .ele("valueName").txt(ec.valueName).up()
            .ele("value").txt(ec.value).up()
        .up();
    });
    if (info.effective) {
        alertInfoDoc.ele("effective").txt(info.effective).up();
    }
    if (info.onset) {
        alertInfoDoc.ele("onset").txt(info.onset).up();
    }
    if (info.expires) {
        alertInfoDoc.ele("expires").txt(info.expires).up();
    }
    if (info.senderName) {
        alertInfoDoc.ele("senderName").txt(info.senderName).up();
    }
    if (info.headline) {
        alertInfoDoc.ele("headline").txt(info.headline).up();
    }
    if (info.description) {
        alertInfoDoc.ele("description").txt(info.description).up();
    }
    if (info.instruction) {
        alertInfoDoc.ele("instruction").txt(info.instruction).up();
    }
    if (info.web) {
        alertInfoDoc.ele("web").txt(info.web).up();
    }
    if (info.contact) {
        alertInfoDoc.ele("contact").txt(info.contact).up();
    }
    info.parameter_list.forEach((parameter) => {
        alertInfoDoc.ele("parameter")
            .ele("valueName").txt(parameter.valueName).up()
            .ele("value").txt(parameter.value).up()
        .up();
    });
    info.resource_list.forEach((resource) => {
        alertInfoDoc.ele("resource")
            .ele("resourceDesc").txt(resource.resourceDesc).up()
            .ele("mimeType").txt(resource.mimeType).up();
        if (resource.size) {
            alertInfoDoc.ele("size").txt(resource.size.toString()).up();
        }
        if (resource.uri) {
            alertInfoDoc.ele("uri").txt(resource.uri).up();
        }
        if (resource.derefUri) {
            alertInfoDoc.ele("derefUri").txt(resource.derefUri).up();
        }
        if (resource.digest) {
            alertInfoDoc.ele("digest").txt(resource.digest).up();
        }
        alertInfoDoc.up();
    });
    info.area_list.forEach((area) => {
        alertInfoDoc.ele("area")
            .ele("areaDesc").txt(area.areaDesc).up();
        area.polygon_list.forEach((polygon) => {
            alertInfoDoc.ele("polygon").txt(polygon).up();
        });
        area.circle_list.forEach((circle) => {
            alertInfoDoc.ele("circle").txt(circle).up();
        });
        area.geocode_list.forEach((geocode) => {
            alertInfoDoc.ele("geocode")
                .ele("valueName").txt(geocode.valueName).up()
                .ele("value").txt(geocode.value).up()
            .up();
        });
        if (area.altitude) {
            alertInfoDoc.ele("altitude").txt(area.altitude.toString(10)).up();
        }
        if (area.ceiling) {
            alertInfoDoc.ele("ceiling").txt(area.ceiling.toString(10)).up();
        }
        alertInfoDoc.up();
    });
    alertInfoDoc.up();
}

export default
function alertToXML (alert: Alert): string {
    const alertStatus = _to_string_Alert_status(alert.status);
    const alertMsgType = _to_string_Alert_msgType(alert.msgType);
    const alertScope = _to_string_Alert_scope(alert.scope);
    const doc = xmlbuilder2.create({ version: "1.0", encoding: "UTF-8" })
        .ele("alert", { xmlns: "urn:oasis:names:tc:emergency:cap:1.2" })
            .ele("identifier").txt(alert.identifier).up()
            .ele("sender").txt(alert.sender).up()
            .ele("sent").txt(alert.sent).up()
            .ele("status").txt(alertStatus).up()
            .ele("msgType").txt(alertMsgType).up();
    if (alert.source) {
        doc.ele("source").txt(alert.source).up();
    }
    doc.ele("scope").txt(alertScope).up();
    if (alert.restriction) {
        doc.ele("restriction").txt(alert.restriction).up();
    }
    if (alert.addresses) {
        doc.ele("addresses").txt(alert.addresses).up();
    }
    if (alert.code_list && (alert.code_list.length > 0)) {
        alert.code_list.forEach((code) => {
            doc.ele("code").txt(code).up();
        });
    }
    if (alert.note) {
        doc.ele("note").txt(alert.note).up();
    }
    if (alert.references) {
        doc.ele("references").txt(alert.references).up();
    }
    if (alert.incidents) {
        doc.ele("incidents").txt(alert.incidents).up();
    }
    alert.info_list.forEach((info) => alertInfoToXML(info, doc));
    alert.elem_list.forEach((elem) => {
        doc.ele("elem").txt(elem).up();
    });
    doc.up();
    return doc.end({ prettyPrint: true });
}
