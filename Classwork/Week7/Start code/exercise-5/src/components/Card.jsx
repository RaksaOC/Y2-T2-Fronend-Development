const Card=({props})=>{
    return(
        <div id="card">
            <img src={props.src}/>
            <h1>{props.name}</h1>
            <h2>{props.gender}</h2>
            <p>{props.classroom}</p>
        </div>
    )
}
export default Card;