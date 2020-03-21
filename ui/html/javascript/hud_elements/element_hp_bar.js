function init_element_hp_bar() {
    const elment = new HUD_element('hp_bar', "",
    {
        "width": "25",
        "height": "2",
        "gap": "4",
        "color": "rgb(44, 216, 107)",
        "bC": "rgba(0, 0, 0, 0.2)",
        "threshold": "30",
        "thresholdColor": "red",
        "segments": "8",
        "boxShadow": "1",
        "bRadius": "0.2",
        "cCode": "15",
        "skewX": "0",
        "skewY": "0",
        "advanced": "",
    },
    [
        defaultPivot,
        defaultX,
        defaultY,
        defaultWidth,
        defaultHeight,
        {"inputType": "float", "type": "segments", "text": "Num of Segments"},
        {"inputType": "float", "type": "gap", "text": "Segment Gap Width"},
        {"inputType": "float", "type": "threshold", "text": "Low HP Threshold"},
        {"inputType": "color", "type": "thresholdColor", "text": "Low HP Color"},
        defaultColor,
        {"inputType": "color", "type": "bC", "text": "Background Color"},
        {"inputType": "toggle", "type": "rightToLeft", "text": "Fill Leftwards"},
        {"inputType": "toggle", "type": "boxShadow", "text": "Segment Shadow"},
        {"inputType": "float", "type": "bRadius", "text": "Segment Corner Radius"},
        {"inputType": "float", "type": "cCode", "text": "Segment Corner Bitmask"},
        {"inputType": "float", "type": "skewX", "text": "SkewX"},
        {"inputType": "float", "type": "skewY", "text": "SkewY"},
        {"inputType": "advanced", "type": "advanced"},
    ]
    , "#hud_hp_bar");

    hud_elements.push(elment);
}
