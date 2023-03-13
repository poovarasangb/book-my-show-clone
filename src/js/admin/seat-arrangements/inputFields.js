import { Container } from '@mui/material';
import { EventSeat } from '@mui/icons-material';

import { useSeatsArrangementContext } from "js/context/seatArrangementContext";

export const InputFields = () => {
    const { seatDetail } = useSeatsArrangementContext();
    return (
        <Container fixed>
            <div className='baseContainer'>
                <EventSeat />
                <div>
                    {`Seating Arrangements ${seatDetail?.seatCount ?? ""}`}
                </div>
                <EventSeat />
            </div>
        </Container>
    );
};