import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    Select,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Chip,
    Slider,
    Typography,
    Divider,
    Button,
    ButtonGroup,
    withStyles

} from '@material-ui/core';
import { serialize } from '../../utils'

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
        minWidth: 120,
        fontSize: '8px',
        width: '100%'
    },
    small:{
        fontSize:  12
    },
    inline: {
        padding: '0px',
        display: 'flex',
        alignItems: 'center',
    },
    spaceBetween:{
        display: 'flex',
        justifyContent: 'space-between'
    },
    divider: {
        height: 28,
        margin: 4,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 1,
        textTransform: 'uppercase',
        padding: 1
    },
    slider:{
        marginTop: theme.spacing(1)
    },
    sliderPlaceholder:{
        fontSize: 11,
        color: 'rgba(0, 0, 0, 0.54)'
    }
});

class AdvanceSearchWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filters:{
                term: '',
                transaction: '',
                property:'',
                subproperties:[],
                amenities: [],
                status:'',
                furnishing:'',
                bedrooms:[],
                bathrooms:[],
                budgetUnit: 'LAKH',
                budgetRange:[1, 100],
                areaUnit: 'SQFT',
                areaRange:[1, 10000]
            },
            dataSet: {
                transaction: ['any','buy','rent'],
                property: ['any', 'residential','commercial'],
                subproperties:['house', 'villa', 'flat'],
                amenities: ['gym','club','school','hospital','swiming pool','market', 'park', 'power backup'],
                status:['any','new','resale'],
                furnishing:['any','furnished','semi-furnished','un-furnished'],
                bedrooms:[1,2,3,4,5,6,7,8],
                bathrooms:[1,2,3,4,5],
                budgetUnit: ['THOUSAND','LAKH','CRORE'],
                budgetRange:[1, 100],
                areaUnit: ['SQFT','SQYD','ACRE'],
                areaRange:[1, 10000]
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleBudgetRange = this.handleBudgetRange.bind(this);
        this.handleAreaRange = this.handleAreaRange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetFilters = this.resetFilters.bind(this);
    }

    componentWillReceiveProps(props){
        let filters = this.state.filters;
        for( let filter in filters) {
            if(props.filters.hasOwnProperty(filter)){
                filters[filter] = Array.isArray(filters[filter]) 
                    ? (props.filters[filter].length ? props.filters[filter].split(',') : []) 
                    : props.filters[filter];
            }
        }
        this.setState({filters});
    }

    handleChange(e) {
        let filters = this.state.filters;
        filters[e.target.name] = e.target.value;
        this.setState({ filters });
    }

    handleBudgetRange(e, newVal) {
        let filters = this.state.filters;
        filters.budgetRange = newVal;
        this.setState({ filters });
    }

    handleAreaRange(e, newVal) {
        let filters = this.state.filters;
        filters.areaRange = newVal;
        this.setState({ filters });
    }

    resetFilters(e){
        e.preventDefault();
        this.props.history.push('/search-results?term=');
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.history.push('/search-results?'+serialize(this.state.filters));
    }

    render(){
        const { classes } = this.props;
        const {filters, dataSet} = this.state;
        return (
            <div>
                <div>ADVANCED FILTERS</div>
                <TextField
                    fullWidth
                    label="Locality, Developer, Property"
                    type="search"
                    margin="dense"
                    className={classes.small}
                    InputProps={{classes:{input:classes.small},name: 'term', id: 'term' }}
                    value={filters.term}
                    onChange={this.handleChange}
                />
                <div className={classes.inline}>
                    <FormControl margin="dense" className={classes.formControl}>
                        <InputLabel className={!filters.transaction.length ? classes.small: ''}htmlFor="transaction">Transaction Type</InputLabel>
                        <Select
                            inputProps={{ name: 'transaction',id: 'transaction'}}
                            value={filters.transaction}
                            onChange={this.handleChange}
                            className={classes.small}
                        >
                            {dataSet.transaction.map(val=><MenuItem key={val} value={val}>{val.toUpperCase()}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <Divider className={classes.divider} orientation="vertical" />
                    <FormControl  margin="dense" className={classes.formControl}>
                        <InputLabel className={!filters.property.length ? classes.small: ''} htmlFor="property">Property Type</InputLabel>
                        <Select
                            inputProps={{ name: 'property',id: 'property'}}
                            value={filters.property}
                            onChange={this.handleChange}
                            className={classes.small}
                        >
                            {dataSet.property.map(val=><MenuItem key={val} value={val}>{val.toUpperCase()}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <FormControl margin="dense" className={classes.formControl}>
                    <InputLabel className={!filters.subproperties.length ? classes.small: ''} htmlFor="subproperties">Sub Property Type</InputLabel>
                    <Select
                        multiple
                        inputProps={{ name: 'subproperties',id: 'subproperties'}}
                        value={filters.subproperties}
                        renderValue={selected => (
                            <div className={classes.chips}>
                                {selected.map(value => (
                                <Chip key={value} label={value} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        onChange={this.handleChange}
                        className={classes.small}
                    >
                        {dataSet.subproperties.map(val=><MenuItem key={val} value={val}>{val.toUpperCase()}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl margin="dense" className={classes.formControl}>
                    <InputLabel htmlFor="amenities" className={!filters.amenities.length ? classes.small: '' }>Amenities</InputLabel>
                    <Select
                        multiple
                        inputProps={{ name: 'amenities',id: 'amenities'}}
                        value={filters.amenities}
                        renderValue={selected => (
                            <div className={classes.chips}>
                                {selected.map(value => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        onChange={this.handleChange}
                        className={classes.small}
                    >
                        {dataSet.amenities.map(val=><MenuItem key={val} value={val}>{val.toUpperCase()}</MenuItem>)}
                    </Select>
                </FormControl>
                <div className={classes.inline}>
                    <FormControl margin="dense" className={classes.formControl}>
                        <InputLabel className={!filters.status.length ? classes.small: ''} htmlFor="status">Status</InputLabel>
                        <Select
                            inputProps={{ name: 'status',id: 'status'}}
                            value={filters.status}
                            onChange={this.handleChange}
                            className={classes.small}
                        >
                            {dataSet.status.map(val=><MenuItem key={val} value={val}>{val.toUpperCase()}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <Divider className={classes.divider} orientation="vertical" />
                    <FormControl  margin="dense" className={classes.formControl}>
                        <InputLabel className={!filters.furnishing.length ? classes.small: ''} htmlFor="furnishing">Furnishing</InputLabel>
                        <Select
                            inputProps={{ name: 'furnishing',id: 'furnishing'}}
                            value={filters.furnishing}
                            onChange={this.handleChange}
                            className={classes.small}
                        >
                            {dataSet.furnishing.map(val=><MenuItem key={val} value={val}>{val.toUpperCase()}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <FormControl margin="dense" className={classes.formControl}>
                    <InputLabel htmlFor="bedrooms" className={!filters.bedrooms.length ? classes.small: '' }>Bedrooms</InputLabel>
                    <Select
                        multiple
                        inputProps={{ name: 'bedrooms',id: 'bedrooms'}}
                        value={filters.bedrooms}
                        renderValue={selected => (
                            <div className={classes.chips}>
                                {selected.map(value => (
                                    <Chip key={value} label={value + ' BHK'} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        onChange={this.handleChange}
                        className={classes.small}
                    >
                        {dataSet.bedrooms.map(val=><MenuItem key={val} value={val}>{val + ' BHK'}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl margin="dense" className={classes.formControl}>
                    <InputLabel htmlFor="bathrooms" className={!filters.bathrooms.length ? classes.small: '' }>Bathrooms</InputLabel>
                    <Select
                        multiple
                        inputProps={{ name: 'bathrooms',id: 'bathrooms'}}
                        value={filters.bathrooms}
                        renderValue={selected => (
                            <div className={classes.chips}>
                                {selected.map(value => (
                                    <Chip key={value} label={value + ' BATH'} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        onChange={this.handleChange}
                        className={classes.small}
                    >
                        {dataSet.bathrooms.map(val=><MenuItem key={val} value={val}>{val + ' BATH'}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl margin="dense" className={classes.formControl}>
                    <InputLabel className={!filters.budgetUnit.length ? classes.small: ''} htmlFor="budgetUnit">Budget Unit</InputLabel>
                    <Select
                        inputProps={{ name: 'budgetUnit',id: 'budgetUnit'}}
                        value={filters.budgetUnit}
                        onChange={this.handleChange}
                        className={classes.small}
                    >
                        {dataSet.budgetUnit.map(val=><MenuItem key={val} value={val}>{val}</MenuItem>)}
                    </Select>
                </FormControl>
                <div className={classes.slider}>
                    <Typography id="budget" className={classes.sliderPlaceholder} gutterBottom>
                        Budget Range ({filters.budgetUnit})
                    </Typography>
                    <Slider
                        value={filters.budgetRange}
                        onChange={this.handleBudgetRange}
                        valueLabelDisplay="auto"
                        name='budgetRange'
                        id='budgetRange'
                        min={1}
                        max={100}
                        aria-labelledby="budget"
                    />
                </div>
                <FormControl margin="dense" className={classes.formControl}>
                    <InputLabel className={!filters.areaUnit.length ? classes.small: ''} htmlFor="areaUnit">Area Unit</InputLabel>
                    <Select
                        inputProps={{ name: 'areaUnit',id: 'areaUnit'}}
                        value={filters.areaUnit}
                        onChange={this.handleChange}
                        className={classes.small}
                    >
                        {dataSet.areaUnit.map(val=><MenuItem key={val} value={val}>{val}</MenuItem>)}
                    </Select>
                </FormControl>
                <div className={classes.slider}>
                    <Typography id="area" className={classes.sliderPlaceholder} gutterBottom>
                        Area Range ({filters.areaUnit})
                    </Typography>
                    <Slider
                        value={filters.areaRange}
                        onChange={this.handleAreaRange}
                        valueLabelDisplay="auto"
                        name='areaRange'
                        min={1}
                        max={10000}
                        id='areaRange'
                        aria-labelledby="area"
                    />
                </div>
                <ButtonGroup fullWidth>
                    <Button 
                        variant="contained"
                        color="secondary"
                        onClick={this.resetFilters}
                    >Reset</Button>
                    <Button 
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}
                    >Search</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default withStyles(styles)(withRouter(AdvanceSearchWidget));