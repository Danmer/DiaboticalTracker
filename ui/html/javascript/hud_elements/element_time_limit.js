global_onload_callbacks.push(function(){


    const hud_elem = new HUD_element('time_limit', //Name
    "",     //Editor Text
    {       //Default values
        "fontSize": "3",
        "shadow": "1",
    },   
    [       //Editor settings
        defaultPivot,
        defaultX,
        defaultY,
        defaultFontSize,
        defaultAlign,
        defaultFontFamily,
        defaultColor,
        {"inputType": "toggle", "type": "shadow", "text": "Text Shadow"},
    ]
    , "#hud_time_limit");  //Template Name
    hud_elements.push(hud_elem);
    
    
});