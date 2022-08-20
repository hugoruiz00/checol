import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import StyledButton from '../components/StyledButton';
import SelectBox from 'react-native-multi-selectbox';
import { getDbConnection, getUsers, insertTrip } from '../utils/db';
import StyledTextInput from '../components/StyledTextInput';

const RegisterTripScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [userErrorMsg, setUserErrorMsg] = useState('');
    const [priceErrorMsg, setpriceErrorMsg] = useState('');

    useEffect(() => {
        const fetchDb = async () => {
            const db = await getDbConnection();
            const usersFromDb = await getUsers(db);
            setUsers(usersFromDb);
        }
        fetchDb();
    }, [])

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
    }

    const handleSave = async () => {
        if (!tripInfo.user) {
            setTripInfo({
                ...tripInfo,
                isValidUser: false,
            });
            setUserErrorMsg('El nombre de la persona es obligatorio');
            return;
        }
        if (!tripInfo.price) {
            setTripInfo({
                ...tripInfo,
                isValidPrice: false,
            });
            setpriceErrorMsg('El precio del viaje es obligatorio');
            return;
        }
        if (isNaN(tripInfo.price)) {
            setTripInfo({
                ...tripInfo,
                isValidPrice: false,
            });
            setpriceErrorMsg('El precio del viaje debe ser un número');
            return;
        }

        try {
            const db = await getDbConnection();
            const user = await insertTrip(db, tripInfo.price, tripInfo.user.id);
            db.close();
            navigation.navigate('Home');
        } catch (error) {
            console.log(error);
            navigation.navigate('Home');
        }
    }

    return (
        <View style={styles.viewStyle}>
            <SelectBox
                label=""
                options={users}
                value={tripInfo.user}
                onChange={(val) => onChangeUserInput(val)}
                hideInputFilter={false}
                inputPlaceholder="Nombre"
            />
            {tripInfo.isValidUser || <Text style={styles.errorMsg}>{userErrorMsg}</Text>}

            <StyledTextInput
                type={"numeric"}
                action={(val) => onChangePriceInput(val)}
                placeholder={"Precio del viaje"}
                value={tripInfo.price}
                isValid={tripInfo.isValidPrice}
                errorMsg={priceErrorMsg}>
            </StyledTextInput>

            <StyledButton text={'Guardar'} action={handleSave}>
            </StyledButton>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        margin: 12,
    },
    errorMsg: {
        color: 'red',
        fontSize: 15,
        marginBottom: 15,
    }
});

export default RegisterTripScreen