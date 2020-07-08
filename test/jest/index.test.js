const cap = require("../../dist/node/index");
const { Alert } = require("../../dist/node/CAP-1-2");

const exampleXML1 = `<?xml version="1.0"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>hey bigboi</identifier>
  <sender>bigboi</sender>
  <sent>bigboi</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <source>my brain</source>
  <scope>Public</scope>
  <restriction>shhh big secret</restriction>
  <addresses>123 redwood rd.</addresses>
  <note>hey</note>
  <references>hey</references>
  <incidents>hey</incidents>
  <info>
    <language>en_US</language>
    <category>Fire</category>
    <event>the big event</event>
    <responseType>Evacuate</responseType>
    <urgency>Immediate</urgency>
    <severity>Extreme</severity>
    <certainty>Observed</certainty>
    <audience>gamers</audience>
    <effective>right meow</effective>
    <onset>yesterday</onset>
    <expires>okay</expires>
    <senderName>big J</senderName>
    <headline>BREAKING NEWS</headline>
    <description>desc</description>
    <instruction>get out</instruction>
    <web>https://github.com</web>
    <contact>Jonathan Wilbur</contact>
  </info>
  <info>
    <language>en_US</language>
    <category>Fire</category>
    <event>the big event</event>
    <responseType>Evacuate</responseType>
    <urgency>Immediate</urgency>
    <severity>Extreme</severity>
    <certainty>Observed</certainty>
    <audience>gamers</audience>
    <effective>right meow</effective>
    <onset>yesterday</onset>
    <expires>okay</expires>
    <senderName>big J</senderName>
    <headline>BREAKING NEWS</headline>
    <description>desc</description>
    <instruction>get out</instruction>
    <web>https://github.com</web>
    <contact>Jonathan Wilbur</contact>
  </info>
</alert>
`;

const alert = new cap.CAP_1_2.Alert(
    "hey bigboi",
    "bigboi",
    "bigboi",
    cap.CAP_1_2.Alert_status_actual,
    cap.CAP_1_2.Alert_msgType_alert,
    "my brain",
    cap.CAP_1_2.Alert_scope_public_,
    "shhh big secret",
    "123 redwood rd.",
    [],
    "hey",
    "hey",
    "hey",
    [
        new cap.CAP_1_2.Alert_info_list_info(
            "en_US",
            [
                cap.CAP_1_2.Alert_info_list_info_category_list_category.fire,
            ],
            "the big event",
            [ cap.CAP_1_2.Alert_info_list_info_responseType_list_responseType.evacuate ],
            cap.CAP_1_2.Alert_info_list_info_urgency.immediate,
            cap.CAP_1_2.Alert_info_list_info_severity.extreme,
            cap.CAP_1_2.Alert_info_list_info_certainty.observed,
            "gamers",
            [],
            "right meow",
            "yesterday",
            "okay",
            "big J",
            "BREAKING NEWS",
            "desc",
            "get out",
            "https://github.com",
            "Jonathan Wilbur",
            [],
            [],
            [],
        ),
    ],
    [],
);

test("encodes correctly", () => {
    expect(() => alert.toXML()).not.toThrow();
});

test("encodes and decodes correctly", async () => {
    const a = await Alert.fromXML(exampleXML1);
    expect(() => a.toXML()).not.toThrow();
});
