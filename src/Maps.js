import React from "react";
import { Map, Marker, Overlay } from 'pigeon-maps'

export default function Maps(){

const map = (
  <Map defaultCenter={[50.879, 4.6997]} defaultZoom={12} width={600} height={400}>
    <Marker anchor={[50.874, 4.6947]} payload={1} onClick={({ event, anchor, payload }) => {}} />

    <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
      <img src='pigeon.jpg' width={240} height={158} alt='' />
    </Overlay>
  </Map>
)

render(
    {map}
)
}