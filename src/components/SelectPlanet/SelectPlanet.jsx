import './SelectPlanet.css'


const SelectPlanet = (props) => {

    return <section className='destination'>
        <img className='destination__img' src={props.img} alt="moon" />
        <p>
            {
                props.text
            }
        </p>
    </section>
}

export default SelectPlanet

