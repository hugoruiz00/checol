import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import StyledButton from '../components/StyledButton';
import SelectBox from 'react-native-multi-selectbox';

const RegisterTripScreen = () => {
    const [tripInfo, setTripInfo] = React.useState({
        userName:'',
        isValidUserName:true,
        price: null,
        isValidPrice: true
    });

    const onChangePriceInput = (val) => {
        setTripInfo({
            ...tripInfo,
            price: val,
            isValidPrice: true,
        });

        console.log(tripInfo);
    }

    const handleSave = () => {
        console.log('test');
    }

    return (
        <View style={styles.viewStyle}>
            <SelectBox
                label="Nombre de la persona"
                options={[
                    {
                        item: 'Juan',
                        id: '001',
                    },
                    {
                        item: 'Louis',
                        id: '002',
                    },]}
                value={tripInfo.userName}
                onChange={()=>{}}
                hideInputFilter={false}
            />
            <TextInput
                style={styles.priceInput}
                onChangeText={(val) => onChangePriceInput(val)}
                placeholder="Precio del viaje"
                keyboardType="numeric">
            </TextInput>
            <StyledButton text={'Guardar'} action={handleSave}>
            </StyledButton>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        margin: 12,
    },
    priceInput: {
        height: 40,
        borderWidth: 0.4,
        padding: 10,
        marginBottom: 10,
    },
});

export default RegisterTripScreen