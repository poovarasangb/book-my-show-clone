import { Container } from '@mui/material';

import { useSeatsArrangementContext } from "js/context/seatArrangementContext";

export const InputFields = () => {
    const { seatDetail } = useSeatsArrangementContext();
    return (
        <Container fixed>

            {`Seating Arrangements ${ seatDetail?.seatCount ?? ""}`}
        </Container>
    );
};