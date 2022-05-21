import react from "react";

function Childr({heading,desc,bottomdesc,imgA,head,cls}){
    return (<div className="mainbox">
    <div className="box1">
        <h2>{head}</h2>
        <h1>{heading}</h1><br/>
       <div> <p>{desc}</p></div>
        <h3>{bottomdesc}</h3><br/>
    </div>
    <div className="rightbox">
        <img className={cls} src={imgA} alt="Unavailable"></img>
    </div>
</div>
    )
}
export default Childr;