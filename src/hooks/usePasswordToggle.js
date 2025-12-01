import React, { useState } from "react";
import {IoIosEye,IoIosEyeOff} from 'react-icons/io'

const usePasswordToggle = () => {
    const [visible, setVisibility] = useState(false);

    const Icon = visible ? (
        <IoIosEye onClick={() => setVisibility(visibility => !visibility)}/>)
        : (
        <IoIosEyeOff onClick={() => setVisibility(visibility => !visibility)}/>
    );


    const InputType = visible ? "text" : "password";

    return [InputType, Icon];
};

export default usePasswordToggle;