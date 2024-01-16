import React from "react";
import Card from 'react-bootstrap/Card';

function Education() {
    return(
        <div className="education">
            <Card>
                <Card.Body
                 alignItems="center"
                >
                    <div className="University">
                        <span>B.Eng., Spec. Hons. Computer Engineering, York University - Toronto, ON Expected Graduation Feb.2024</span>
                    </div>

                    <div className="Relavant Cources">
                        <button>Relavant Cources</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Education;