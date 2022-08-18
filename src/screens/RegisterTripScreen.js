import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import StyledButton from '../components/StyledButton';
import SelectBox from 'react-native-multi-selectbox';

const RegisterTripScreen = ({ navigation }) => {
    const [tripInfo, setTripInfo] = React.useState({
        user: '',
        isValidUser: true,
        price: null,
        isValidPrice: true
    });

    const onChangeUserInput = (val) => {
        setTripInfo({
            ...tripInfo,
            user: val,
            isValidUser: true,
        });
    }

    const onChangePriceInput = (val) => {
        if (val) {
            setTripInfo({
                ...tripInfo,
                price: val,
                isValidPrice: true,
            });
        } else {
            setTripInfo({
                ...tripInfo,
                price: val,
                isValidPrice: true,
            });
        }

        console.log(tripInfo);
    }

    const handleSave = () => {
        if (!tripInfo.user) {
            setTripInfo({
                ...tripInfo,
                isValidUser: false,
            });
            return;
        }
        if (!tripInfo.price) {
            setTripInfo({
                ...tripInfo,
                isValidPrice: false,
            });
            return;
        }
        if (isNaN(tripInfo.price)) {
            setTripInfo({
                ...tripInfo,
                price: null,
                isValidPrice: false,
            });
            return;
        }
        navigation.navigate('Home');
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
                value={tripInfo.user}
                onChange={(val) => onChangeUserInput(val)}
                hideInputFilter={false}
                inputPlaceholder="Seleccionar"
            />
            {tripInfo.isValidUser || <Text style={styles.errorMsg}>El nombre de la persona es obligatorio</Text>}

            <TextInput
                style={styles.priceInput}
                onChangeText={(val) => onChangePriceInput(val)}
                placeholder="Precio del viaje"
                keyboardType="numeric"
                value={tripInfo.price}>
            </TextInput>
            {tripInfo.isValidPrice || <Text style={styles.errorMsg}>El precio del viaje es obligatorio</Text>}

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
    },
    errorMsg: {
        color: 'red',
        fontSize: 15,
        marginBottom: 15,
    }
});

export default RegisterTripScreen