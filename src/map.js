import React, { useState, useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

function WorldMap(props) {
  const [map, setMap] = useState();
  const mapElement = useRef();
  
  useEffect(() => {
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 0
      })
    });
    setMap(initialMap);
  }, []);

  return (
    <div className="mapRow">
      <div ref={mapElement} className="map-container" />
    </div>
  );
}

export default WorldMap;