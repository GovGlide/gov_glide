import "./Citation.css"
import gates from "./images/gates.png"
import citation from "./images/citation.png"
import crown from "./images/crown.png"
function Citation() {
    return (
        <div className="citation">
            <div className="citation_container">
                <img src={gates} alt="gates" width="780px"/>
                <div className="citation_right">
                    <div className="citation_text"> <span>“</span>Если вас нет в Интернете,  вас нет в бизнесе <span>,,</span></div>
                    <hr/>
                    <div className="citation_gates"><img src={citation} alt="" style={{marginRight:"20px"}}/>Билл Гейтс.</div>
                </div>
                <img src={crown} alt="crown" className="citation_crown"/>
            </div>
        </div>
    )
}


export default Citation;