import React from 'react';
import '../css/Field.css';
import '../css/main.css';
import {FlexboxGrid} from 'rsuite';

const Field = () => {

    return (<>
        <FlexboxGrid>
            <FlexboxGrid.Item id='grid-1'>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item id='grid-2' />
        </FlexboxGrid>
        <FlexboxGrid>
            <FlexboxGrid.Item id='grid-3' />
            <FlexboxGrid.Item id='grid-4' />
            <FlexboxGrid.Item id='grid-5' />
        </FlexboxGrid>
    </>)
}

export default Field;