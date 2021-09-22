import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

import Feather from 'react-native-vector-icons/Feather';

import {
    VerticalBar,

    VerticalBarContent,

    VerticalBarItem,
    VerticalBarItemText,

} from './styles';

function VerticalBarComponent (props) {
    const [itemSelected, setItemSelected] = useState('refrigerator');
    const navigation = useNavigation();

    useEffect(() => {
        props.setFilter('refrigerator');
    }, [])

    function setItem (item) {
        setItemSelected(item);
        props.setFilter(item);
    }

    return(
        <VerticalBar>
            <TouchableOpacity onPress={() => navigation.navigate('search')} >
                <Feather name="search" color="#000" size={25} />
            </TouchableOpacity>
            
            <VerticalBarContent>
                <VerticalBarItem style={{ transform: [{ rotate: '270deg'}] }} onPress={() => setItem('refrigerator')} >
                    <VerticalBarItemText bold={itemSelected === 'refrigerator' ? 'bold' : 'normal'} style={{width: 220}}>What i have Refrigerator</VerticalBarItemText>
                </VerticalBarItem>

                <VerticalBarItem style={{ transform: [{ rotate: '270deg'}] }} onPress={() => setItem('snack')}>
                    <VerticalBarItemText bold={itemSelected === 'snack' ? 'bold' : 'normal'}>Snacks</VerticalBarItemText>
                </VerticalBarItem>

                <VerticalBarItem style={{ transform: [{ rotate: '270deg'}] }} onPress={() => setItem('drink')}>
                    <VerticalBarItemText bold={itemSelected === 'drink' ? 'bold' : 'normal'}>Drinks</VerticalBarItemText>
                </VerticalBarItem>

                <VerticalBarItem style={{ transform: [{ rotate: '270deg'}] }} onPress={() => setItem('food')}>
                    <VerticalBarItemText bold={itemSelected === 'food' ? 'bold' : 'normal'}>Food</VerticalBarItemText>
                </VerticalBarItem>
            </VerticalBarContent>
        </VerticalBar>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter:(filter)=>dispatch({type:'SET_FILTER', payload: {filter}}),    // Seta o nome do usuário com redux
    };
}

export default connect(null, mapDispatchToProps) (VerticalBarComponent);