import React, {Component} from 'react';
import {FacilityForm} from "./FacilityForm";


const entity = {
    identifierEntity: {value: "value", organization: "organization"},
    identifierList: [
        {value: "first val", organization: "first org"},
        {value: "second val", organization: "second org"}
    ]
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

