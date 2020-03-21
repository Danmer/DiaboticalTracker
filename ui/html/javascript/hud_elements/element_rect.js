global_onload_callbacks.push(function(){
     const element = new HUD_element('rect', "", 
    {
        "width": "30",
        "height": "20",
        "bRadius": "3",
        "cCode": "15",
        "skewX": "0",
        "skewY": "0",
        "bWidth": "0",
        "bCCustom": "#ffffff",
        "bgC": "custom",
        "bgCCustom": "rgba(0,0,0,0.5)",
        "hide_dead": "1",
        "advanced": "",
    },
    [
        defaultPivot,
        defaultX,
        defaultY,
        defaultWidth,
        defaultHeight,
        {"inputType": "float", "type": "bWidth", "text": "Border Width"},
        {"inputType": "color", "type": "bCCustom", "text": "Border Color"},
        {"inputType": "float", "type": "bRadius", "text": "Corner Radius"},
        {"inputType": "float", "type": "cCode", "text": "Corner Bitmask"},
        {"inputType": "float", "type": "skewX", "text": "SkewX"},
        {"inputType": "float", "type": "skewY", "text": "SkewY"},
        {"inputType": "list",  "type": "bgC", "text": "Background Color", "listValues":
            [
                {"name": "Custom", "value": "custom"},
                {"name": "Team Color", "value": "team"},
                {"name": "Team Color Dark", "value": "team_dark"},
                {"name": "Team Color Darker", "value": "team_darker"},
                {"name": "Weapon Color", "value": "weapon"},
            ]
        },
        {"inputType": "color", "type": "bgCCustom", "text": "Background Color Custom"},
        {"inputType": "toggle", "type": "hide_dead", "text": "Hide on death"},
        {"inputType": "advanced", "type": "advanced"},
    ]
    , "#hud_rect");
    hud_elements.push(element);
});

 