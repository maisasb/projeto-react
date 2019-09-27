import React from 'react';
import classes from './SearchFilter.module.scss';
import Checkbox from '../../UI/Checkbox/Checkbox';
import CheckboxAll from '../../UI/CheckboxAll/CheckboxAll';
import Input from '../../UI/Input/Input';

interface Props {
    filters: {[key: string]: boolean;},
    addFilters: () => {},
    changeCheckHandler: (event: React.ChangeEvent<HTMLInputElement>, tipo: string) => {},
    startYear: string,
    endYear: string,
    changeStartYearHandler: () => {},
    changeEndYearHandler: () => {}
}

const SearchFilter: React.FC<Props> = props => {

    return (
        <div className={classes.SearchFilter}>
            <div className={classes.BoxHeader}>Filtros</div>
            <div className={classes.Box}>  
                <div className={classes.FilterLabel}>Fontes</div>
                <CheckboxAll checks={props.filters} setChecks={props.addFilters} />
                <div className={classes.Row}>
                    <div className={classes.Column}>                    
                        <Checkbox changed={(event) => props.changeCheckHandler(event, "acordao")} checked={props.filters.acordao} label="Acórdão" />
                        <Checkbox changed={(event) => props.changeCheckHandler(event, "comunicado")} checked={props.filters.comunicado} label="Comunicado"/>
                        <Checkbox changed={(event) => props.changeCheckHandler(event, "contribuinte")} checked={props.filters.contribuinte} label="Consulta de Contribuinte"/>
                    </div>
                    <div className={classes.Column}>                
                        <Checkbox changed={(event) => props.changeCheckHandler(event, "decreto")} checked={props.filters.decreto} label="Decreto"/>
                        <Checkbox changed={(event) => props.changeCheckHandler(event, "normativa")} checked={props.filters.normativa} label="Instrução Normativa"/>
                        <Checkbox changed={(event) => props.changeCheckHandler(event, "lei")} checked={props.filters.lei} label="Lei"/>
                    </div>
                    <div className={classes.Column}>                
                        <Checkbox changed={(event) => props.changeCheckHandler(event, "tributaria")} checked={props.filters.tributaria} label="Orientação Tributária"/>
                        <Checkbox changed={(event) => props.changeCheckHandler(event, "portaria")} checked={props.filters.portaria} label="Portaria"/>
                        <Checkbox changed={(event) => props.changeCheckHandler(event, "resolucao")} checked={props.filters.resolucao} label="Resolução"/>
                    </div>
                </div>
                <div className={classes.FilterLabel}>Por Ano</div>
                <div className={classes.Row}>                    
                    <Input width="21%" height='big' type="text" value={props.startYear} change={props.changeStartYearHandler} label="De" placeholder="XXXX"/>
                    <Input width="20%" height='big' type="text" value={props.endYear} change={props.changeEndYearHandler} label="a" placeholder="XXXX"/>
                </div>
            
            </div>
        </div>
    );
}

export default SearchFilter;