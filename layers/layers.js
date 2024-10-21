var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_TNRP_Lcc_LOU_2 = new ol.format.GeoJSON();
var features_TNRP_Lcc_LOU_2 = format_TNRP_Lcc_LOU_2.readFeatures(json_TNRP_Lcc_LOU_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TNRP_Lcc_LOU_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TNRP_Lcc_LOU_2.addFeatures(features_TNRP_Lcc_LOU_2);
var lyr_TNRP_Lcc_LOU_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TNRP_Lcc_LOU_2, 
                style: style_TNRP_Lcc_LOU_2,
                popuplayertitle: "TNRP_Lcc_LOU",
                interactive: true,
                title: '<img src="styles/legend/TNRP_Lcc_LOU_2.png" /> TNRP_Lcc_LOU'
            });
var format_TNRPLatestCampStation_3 = new ol.format.GeoJSON();
var features_TNRPLatestCampStation_3 = format_TNRPLatestCampStation_3.readFeatures(json_TNRPLatestCampStation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TNRPLatestCampStation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TNRPLatestCampStation_3.addFeatures(features_TNRPLatestCampStation_3);
var lyr_TNRPLatestCampStation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TNRPLatestCampStation_3, 
                style: style_TNRPLatestCampStation_3,
                popuplayertitle: "TNRP Latest Camp Station",
                interactive: true,
                title: '<img src="styles/legend/TNRPLatestCampStation_3.png" /> TNRP Latest Camp Station'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_TNRP_Lcc_LOU_2.setVisible(true);lyr_TNRPLatestCampStation_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_TNRP_Lcc_LOU_2,lyr_TNRPLatestCampStation_3];
lyr_TNRP_Lcc_LOU_2.set('fieldAliases', {'SR_': 'SR_', 'SD_SR_': 'SD_SR_', 'NAME': 'NAME', 'LEVELS': 'LEVELS', 'EST_YEAR': 'EST_YEAR', 'SQ_MILE': 'SQ_MILE', 'ACRES': 'ACRES', 'LOCATION': 'LOCATION', 'TOWNSHIP': 'TOWNSHIP', 'FOREST_TYP': 'FOREST_TYP', 'STATUS_': 'STATUS_', 'NOTI_NO': 'NOTI_NO', 'NOTI_DATE': 'NOTI_DATE', 'LATD_': 'LATD_', 'LONG_': 'LONG_', 'BIO_UNIT': 'BIO_UNIT', 'BIO_UNIT_N': 'BIO_UNIT_N', 'MANAGED_BY': 'MANAGED_BY', 'MGT_STATUS': 'MGT_STATUS', 'KEY_SPECIE': 'KEY_SPECIE', 'ASEAN': 'ASEAN', 'ECOSITE': 'ECOSITE', 'EVALUATED': 'EVALUATED', 'EVAL_YEAR': 'EVAL_YEAR', 'EVAL_SR_': 'EVAL_SR_', 'CON_VALUE': 'CON_VALUE', 'EVA_STATUS': 'EVA_STATUS', 'DOCUMENT': 'DOCUMENT', 'UPDATE': 'UPDATE', 'MM_NAME': 'MM_NAME', 'PERMISSION': 'PERMISSION', 'RAMSAR': 'RAMSAR', 'Acre': 'Acre', 'Name_1': 'Name_1', });
lyr_TNRPLatestCampStation_3.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'name_mya': 'name_mya', });
lyr_TNRP_Lcc_LOU_2.set('fieldImages', {'SR_': 'Range', 'SD_SR_': 'Range', 'NAME': 'TextEdit', 'LEVELS': 'TextEdit', 'EST_YEAR': 'TextEdit', 'SQ_MILE': 'TextEdit', 'ACRES': 'TextEdit', 'LOCATION': 'TextEdit', 'TOWNSHIP': 'TextEdit', 'FOREST_TYP': 'TextEdit', 'STATUS_': 'TextEdit', 'NOTI_NO': 'TextEdit', 'NOTI_DATE': 'TextEdit', 'LATD_': 'TextEdit', 'LONG_': 'TextEdit', 'BIO_UNIT': 'TextEdit', 'BIO_UNIT_N': 'TextEdit', 'MANAGED_BY': 'TextEdit', 'MGT_STATUS': 'TextEdit', 'KEY_SPECIE': 'TextEdit', 'ASEAN': 'TextEdit', 'ECOSITE': 'TextEdit', 'EVALUATED': 'TextEdit', 'EVAL_YEAR': 'Range', 'EVAL_SR_': 'Range', 'CON_VALUE': 'TextEdit', 'EVA_STATUS': 'TextEdit', 'DOCUMENT': 'TextEdit', 'UPDATE': 'TextEdit', 'MM_NAME': 'TextEdit', 'PERMISSION': 'TextEdit', 'RAMSAR': 'TextEdit', 'Acre': 'TextEdit', 'Name_1': 'TextEdit', });
lyr_TNRPLatestCampStation_3.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'name_mya': 'TextEdit', });
lyr_TNRP_Lcc_LOU_2.set('fieldLabels', {'SR_': 'no label', 'SD_SR_': 'no label', 'NAME': 'no label', 'LEVELS': 'no label', 'EST_YEAR': 'no label', 'SQ_MILE': 'no label', 'ACRES': 'no label', 'LOCATION': 'no label', 'TOWNSHIP': 'no label', 'FOREST_TYP': 'no label', 'STATUS_': 'no label', 'NOTI_NO': 'no label', 'NOTI_DATE': 'no label', 'LATD_': 'no label', 'LONG_': 'no label', 'BIO_UNIT': 'no label', 'BIO_UNIT_N': 'no label', 'MANAGED_BY': 'no label', 'MGT_STATUS': 'no label', 'KEY_SPECIE': 'no label', 'ASEAN': 'no label', 'ECOSITE': 'no label', 'EVALUATED': 'no label', 'EVAL_YEAR': 'no label', 'EVAL_SR_': 'no label', 'CON_VALUE': 'no label', 'EVA_STATUS': 'no label', 'DOCUMENT': 'no label', 'UPDATE': 'no label', 'MM_NAME': 'inline label - always visible', 'PERMISSION': 'no label', 'RAMSAR': 'no label', 'Acre': 'no label', 'Name_1': 'no label', });
lyr_TNRPLatestCampStation_3.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', 'name_mya': 'inline label - always visible', });
lyr_TNRPLatestCampStation_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});