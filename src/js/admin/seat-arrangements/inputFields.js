import { useSeatsArrangementContext } from "js/context/seatArrangementContext";

export const InputFields = () => {
    const { seatDetail } = useSeatsArrangementContext();
    return (
        <h1>
            {`Seating Arrangements ${ seatDetail?.seatCount ?? ""}`}
        </h1>

    );
};