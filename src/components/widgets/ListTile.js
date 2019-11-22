import React from 'react'

const classes = {
    list: {
        item: {
            flex: 'auto',
            width: '100%',
            position: 'relative',
            padding: 10,
            boxSizing: 'border-box',
            background: '#fff',
            boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
            borderRadius: 4,
            marginBottom: 10
        }
    },
    grid: {
        item: {
            height: 250,
            flexBasis: '20%',
            flex: 'auto',
            width: 250,
            position: 'relative',
            padding: 10,
            boxSizing: 'border-box',
            background: '#fff',
            boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
            borderRadius: 4,
            marginBottom: 10
        }
    },
};
class ListTile extends React.Component {
    render(){
        const { view, data } = this.props;
        const styles = classes[view];
        return (
            <div style={styles.item}>
                {data.title}
            </div>
        );
    }
}

export default ListTile;
