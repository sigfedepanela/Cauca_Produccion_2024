var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 0.660000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamento_Cauca_1 = new ol.format.GeoJSON();
var features_Departamento_Cauca_1 = format_Departamento_Cauca_1.readFeatures(json_Departamento_Cauca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamento_Cauca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_Cauca_1.addFeatures(features_Departamento_Cauca_1);
var lyr_Departamento_Cauca_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamento_Cauca_1, 
                style: style_Departamento_Cauca_1,
                popuplayertitle: 'Departamento_Cauca',
                interactive: true,
    title: 'Departamento_Cauca<br />\
    <img src="styles/legend/Departamento_Cauca_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Departamento_Cauca_1_1.png" /> 1 - 351<br />\
    <img src="styles/legend/Departamento_Cauca_1_2.png" /> 351 - 1138<br />\
    <img src="styles/legend/Departamento_Cauca_1_3.png" /> 1138 - 2903<br />\
    <img src="styles/legend/Departamento_Cauca_1_4.png" /> 2903 - 12760<br />\
    <img src="styles/legend/Departamento_Cauca_1_5.png" /> 12760 - 17098<br />' });
var group_Departamentos_Capas = new ol.layer.Group({
                                layers: [lyr_Departamento_Cauca_1,],
                                fold: 'open',
                                title: 'Departamentos_Capas'});

lyr_GoogleHybrid_0.setVisible(true);lyr_Departamento_Cauca_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_Departamentos_Capas];
lyr_Departamento_Cauca_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'No.': 'No.', 'MpCodigo': 'Código del municipio', 'MpNombre': 'Nombre del municipio', 'MpArea': 'MpArea', 'MpNorma': 'MpNorma', 'MpCategor': 'MpCategor', 'MpAltitud': 'MpAltitud', 'Restriccion': 'Restriccion', 'Depto': 'Depto', ' Área_Sembrada_(ha)': 'Área Sembrada (hectáreas)', ' Área_Cosechada_(ha)': 'Área Cosechada (hectáreas)', 'Producción_(ton)': 'Producción (toneladas)', 'Rendimiento_(ton/ha)': 'Rendimiento (toneladas/hectárea)', });
lyr_Departamento_Cauca_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'No.': 'Range', 'MpCodigo': 'TextEdit', 'MpNombre': 'TextEdit', 'MpArea': 'TextEdit', 'MpNorma': 'TextEdit', 'MpCategor': 'Range', 'MpAltitud': 'Range', 'Restriccion': 'TextEdit', 'Depto': 'TextEdit', ' Área_Sembrada_(ha)': 'TextEdit', ' Área_Cosechada_(ha)': 'TextEdit', 'Producción_(ton)': 'TextEdit', 'Rendimiento_(ton/ha)': 'TextEdit', });
lyr_Departamento_Cauca_1.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'No.': 'hidden field', 'MpCodigo': 'inline label - visible with data', 'MpNombre': 'inline label - visible with data', 'MpArea': 'hidden field', 'MpNorma': 'hidden field', 'MpCategor': 'hidden field', 'MpAltitud': 'hidden field', 'Restriccion': 'hidden field', 'Depto': 'hidden field', ' Área_Sembrada_(ha)': 'hidden field', ' Área_Cosechada_(ha)': 'hidden field', 'Producción_(ton)': 'inline label - visible with data', 'Rendimiento_(ton/ha)': 'hidden field', });
lyr_Departamento_Cauca_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});