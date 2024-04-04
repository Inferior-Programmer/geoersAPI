const GeoJsonGeometriesLookup = require('geojson-geometries-lookup');
const geoJson = require('./Barangays.json');

function geos(lat, long) {
  const glookup = new GeoJsonGeometriesLookup(geoJson)

  const point = {type: "Point", coordinates: [long, lat]}
  const containersCount = glookup.countContainers(point)

  if(containersCount == 0){
    // no barangays found
    return null
  }else{
    // coordinate is inside a polygon
    let result = glookup.getContainers(point)
    return result
  }
}

module.exports = { geos }