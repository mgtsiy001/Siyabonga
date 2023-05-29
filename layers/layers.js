var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Suburbs_1 = new ol.format.GeoJSON();
var features_Suburbs_1 = format_Suburbs_1.readFeatures(json_Suburbs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburbs_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Suburbs_1.addFeatures(features_Suburbs_1);var lyr_Suburbs_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suburbs_1, 
                style: style_Suburbs_1,
                title: '<img src="styles/legend/Suburbs_1.png" /> Suburbs'
            });var format_Boreholes_2 = new ol.format.GeoJSON();
var features_Boreholes_2 = format_Boreholes_2.readFeatures(json_Boreholes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boreholes_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Boreholes_2.addFeatures(features_Boreholes_2);var lyr_Boreholes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boreholes_2, 
                style: style_Boreholes_2,
                title: '<img src="styles/legend/Boreholes_2.png" /> Boreholes'
            });var format_Rainfall_3 = new ol.format.GeoJSON();
var features_Rainfall_3 = format_Rainfall_3.readFeatures(json_Rainfall_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rainfall_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Rainfall_3.addFeatures(features_Rainfall_3);var lyr_Rainfall_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rainfall_3, 
                style: style_Rainfall_3,
    title: 'Rainfall<br />\
    <img src="styles/legend/Rainfall_3_0.png" /> 29.0000 - 41.9060<br />\
    <img src="styles/legend/Rainfall_3_1.png" /> 41.9060 - 54.8120<br />\
    <img src="styles/legend/Rainfall_3_2.png" /> 54.8120 - 67.7180<br />\
    <img src="styles/legend/Rainfall_3_3.png" /> 67.7180 - 80.6240<br />\
    <img src="styles/legend/Rainfall_3_4.png" /> 80.6240 - 93.5300<br />'
        });var format_Dams_4 = new ol.format.GeoJSON();
var features_Dams_4 = format_Dams_4.readFeatures(json_Dams_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dams_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Dams_4.addFeatures(features_Dams_4);var lyr_Dams_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dams_4, 
                style: style_Dams_4,
                title: '<img src="styles/legend/Dams_4.png" /> Dams'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Suburbs_1.setVisible(true);lyr_Boreholes_2.setVisible(true);lyr_Rainfall_3.setVisible(true);lyr_Dams_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Suburbs_1,lyr_Boreholes_2,lyr_Rainfall_3,lyr_Dams_4];
lyr_Suburbs_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OFC_SBRB_N': 'OFC_SBRB_N', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Boreholes_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Location': 'Location', 'Depth_m_': 'Depth_m_', 'x': 'x', 'y': 'y', 'Reporting_': 'Reporting_', 'Site_type': 'Site_type', 'Site_statu': 'Site_statu', 'Coord_accu': 'Coord_accu', 'Survey_Met': 'Survey_Met', 'Field10': 'Field10', 'Field11': 'Field11', 'Field12': 'Field12', 'Field13': 'Field13', 'Field14': 'Field14', 'Field15': 'Field15', 'Field16': 'Field16', 'Field17': 'Field17', 'Field18': 'Field18', });
lyr_Rainfall_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ClimNo': 'ClimNo', 'StasName': 'StasName', 'y': 'y', 'x': 'x', 'DateT': 'DateT', 'Rain__mm_': 'Rain__mm_', 'Avg_Rain_m': 'Avg_Rain_m', });
lyr_Dams_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Country': 'Country', 'Dam_name': 'Dam_name', 'Province': 'Province', 'City': 'City', 'River': 'River', 'Major_basi': 'Major_basi', 'Sub_basin': 'Sub_basin', 'Completed_': 'Completed_', 'Dam_height': 'Dam_height', 'Reservoir_': 'Reservoir_', 'Sedimentat': 'Sedimentat', 'Irrigation': 'Irrigation', 'Water_supp': 'Water_supp', 'Food_contr': 'Food_contr', 'Hydroelect': 'Hydroelect', 'y': 'y', 'x': 'x', 'Field18': 'Field18', 'Field19': 'Field19', });
lyr_Suburbs_1.set('fieldImages', {'OBJECTID': 'Range', 'OFC_SBRB_N': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Boreholes_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Location': 'TextEdit', 'Depth_m_': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Reporting_': 'TextEdit', 'Site_type': 'TextEdit', 'Site_statu': 'TextEdit', 'Coord_accu': 'TextEdit', 'Survey_Met': 'TextEdit', 'Field10': 'TextEdit', 'Field11': 'TextEdit', 'Field12': 'TextEdit', 'Field13': 'TextEdit', 'Field14': 'TextEdit', 'Field15': 'TextEdit', 'Field16': 'TextEdit', 'Field17': 'TextEdit', 'Field18': 'TextEdit', });
lyr_Rainfall_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ClimNo': 'TextEdit', 'StasName': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'DateT': 'TextEdit', 'Rain__mm_': 'TextEdit', 'Avg_Rain_m': 'TextEdit', });
lyr_Dams_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Country': 'TextEdit', 'Dam_name': 'TextEdit', 'Province': 'TextEdit', 'City': 'TextEdit', 'River': 'TextEdit', 'Major_basi': 'TextEdit', 'Sub_basin': 'TextEdit', 'Completed_': 'TextEdit', 'Dam_height': 'TextEdit', 'Reservoir_': 'TextEdit', 'Sedimentat': 'TextEdit', 'Irrigation': 'TextEdit', 'Water_supp': 'TextEdit', 'Food_contr': 'TextEdit', 'Hydroelect': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Field18': 'TextEdit', 'Field19': 'TextEdit', });
lyr_Suburbs_1.set('fieldLabels', {'OBJECTID': 'no label', 'OFC_SBRB_N': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Boreholes_2.set('fieldLabels', {'OBJECTID': 'no label', 'Location': 'no label', 'Depth_m_': 'no label', 'x': 'no label', 'y': 'no label', 'Reporting_': 'no label', 'Site_type': 'no label', 'Site_statu': 'no label', 'Coord_accu': 'no label', 'Survey_Met': 'no label', 'Field10': 'no label', 'Field11': 'no label', 'Field12': 'no label', 'Field13': 'no label', 'Field14': 'no label', 'Field15': 'no label', 'Field16': 'no label', 'Field17': 'no label', 'Field18': 'no label', });
lyr_Rainfall_3.set('fieldLabels', {'OBJECTID': 'no label', 'ClimNo': 'no label', 'StasName': 'no label', 'y': 'no label', 'x': 'no label', 'DateT': 'no label', 'Rain__mm_': 'no label', 'Avg_Rain_m': 'no label', });
lyr_Dams_4.set('fieldLabels', {'OBJECTID': 'no label', 'Country': 'no label', 'Dam_name': 'no label', 'Province': 'no label', 'City': 'no label', 'River': 'no label', 'Major_basi': 'no label', 'Sub_basin': 'no label', 'Completed_': 'no label', 'Dam_height': 'no label', 'Reservoir_': 'no label', 'Sedimentat': 'no label', 'Irrigation': 'no label', 'Water_supp': 'no label', 'Food_contr': 'no label', 'Hydroelect': 'no label', 'y': 'no label', 'x': 'no label', 'Field18': 'no label', 'Field19': 'no label', });
lyr_Dams_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});