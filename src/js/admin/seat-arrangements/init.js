import { useState } from "react";
import { SeatsArrangementContext } from "js/context/seatArrangementContext";
import { InputFields } from "./inputFields";

const AdminSeatArrangement = () => {

    const [seatDetail, setSeatDetails] = useState(() => ({}));

    const context = {
        seatDetail,
        setSeatDetails
    };

    return (
        <SeatsArrangementContext.Provider value={context}>
            <InputFields />
        </SeatsArrangementContext.Provider>
    );

};

export default AdminSeatArrangement;