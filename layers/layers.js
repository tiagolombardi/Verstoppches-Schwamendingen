ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([953624.723972, 6008572.095267, 954511.751625, 6009187.171926]);
var wms_layers = [];

var lyr_BASEMAP_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'BASEMAP<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BASEMAP_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [951739.254796, 6005412.325034, 957382.254796, 6011055.325034]
        })
    });
var lyr_GRID_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'GRID<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/GRID_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [951739.254796, 6005412.325034, 957382.254796, 6011055.325034]
        })
    });

lyr_BASEMAP_0.setVisible(true);lyr_GRID_1.setVisible(true);
var layersList = [lyr_BASEMAP_0,lyr_GRID_1];
