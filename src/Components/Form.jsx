import React from "react";
import "../styles/form.css";

const Form = props => {
    return(
        <div className="container">
            <form onSubmit={props.loadweather} >
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country" />
                    </div>
                    <div className="col-md-2 mt-md-0 mt-4">
                        <button className="px-4 py-2">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;