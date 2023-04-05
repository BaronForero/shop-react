const Section = (props) => {
    return ( 
        <div>
            <p>{props.img}</p>
            <p>{props.name}</p>
            <p>{props.preis}</p>
            <button>Buy now</button>
        </div>
    );
}

export default Section;