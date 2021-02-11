import '../css/Card.css'

const Card = ({header,subhead,desc}) => {
    return(
        <div className="card">
           <h3>{header}</h3>
           <h4>{subhead}</h4>
           <p>{desc}</p>
        </div>
    )
}

export default Card