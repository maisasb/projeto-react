import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { Filter } from '../../utils/interfaces';

interface Props {
    checks:  Filter,
    setChecks: (filer: Filter) => {}
}

const CheckboxAll: React.FC<Props> = props => {

    const [checkAll, setCheckAll] = useState(false);

    const changeCheckAllHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

        let finalFilter: Filter = {};
        let filter = "";
        for (filter in props.checks){            
            finalFilter[filter] =  event.target.checked;
        }

        props.setChecks(finalFilter);
        setCheckAll(event.target.checked);
    }

    return (
        <Checkbox changed={(event) => changeCheckAllHandler(event)} checked={checkAll} label="Marcar todas" bold/>                    
    );

}

export default CheckboxAll;