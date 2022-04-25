// import React from "react"

// class Destination extends React.Component {
//     render() {
//         return <main>
//             <h1>Destination</h1>
//         </main>
//     }
// }

// export default Destination

import SelectPlanet from "../../components/SelectPlanet/SelectPlanet"
import moon from '../../../src/images/moon.png'
import mars from '../../../src/images/mars.png'
import europa from '../../../src/images/europa.png'
import titan from '../../../src/images/titan.png'

import CrewSlider from "../../components/CrewSlider/CrewSlider"


const Destination = () => {
    return <main>
        <h1>Destination</h1>
        <SelectPlanet img={moon} text="moon" />
        <SelectPlanet img={mars} text="mars" />
        <SelectPlanet img={europa} text="europa" />
        <SelectPlanet img={titan} text="titan" />


        <CrewSlider />
    </main>
}
export default Destination


