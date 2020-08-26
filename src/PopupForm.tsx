import React, { useState } from "react";
import {Formik} from "formik";

export const PopupForm = ({...props }: any) => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    return(
        <>
        <div style={{display: isPopupOpen? "":"none"}}>
            <Formik initialValues={props.entity} onSubmit={()=>console.log("submiting popup")}>
                <form>
                    <input/>
                </form>
            </Formik>
        </div>

        <button onClick={()=> setPopupOpen(!isPopupOpen)}>Open Popup</button> 
        </>
    );
}
