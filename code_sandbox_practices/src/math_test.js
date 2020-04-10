    import React from "react";
    import ReactDOM from "react-dom";
    import * as pi from "./math";

    ReactDOM.render(
    <div>
        <ul>
        <li>{pi.default}</li>
        <li>{pi.doublePI()}</li>
        <li>{pi.thiplePI()}</li>
        </ul>
    </div>,
    document.querySelector("#root")
    );
