import "./Branch.css";
import cube from "./images/cube.png";
import line from "./images/line.png";

function Branch() {
    return (
        <div className="branch">
            <div className="branch_container">
                <div className="branch_section">
                    <img src={cube} alt="cube" className="branch_cube" />
                    <div className="branch_text">Web Development</div>
                </div>
                <div className="branch_section">
                    <img src={cube} alt="cube" className="branch_cube" />
                    <div className="branch_text">Mobile Applications</div>
                </div>
                <div className="branch_section">
                    <img src={cube} alt="cube" className="branch_cube" />
                    <div className="branch_text">Design</div>
                </div>
            </div>
            <div className="branch_line_container">
                <img src={line} alt="line" className="branch_line" />
            </div>
        </div>
    );
}

export default Branch;
