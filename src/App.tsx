import React, {Component} from 'react';
import {FacilityForm} from "./FacilityForm";


const entity = {
    identifierEntity: {value: "asds", organization: "edsd"},
    identifierList: [{value: "asds", organization: "edsd"},{value: "asds", organization: "edsd"}]
};


export class App extends Component {
  render() {
    return (
        <div>
            <FacilityForm initialValues={entity}/>
        </div>
    );
  }
}

