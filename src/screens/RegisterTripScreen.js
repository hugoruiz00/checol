import { View, Text, StyleSheet } from 'react-native'
import React, { useCallback, useState } from 'react'
import StyledButton from '../components/StyledButton';
import SelectBox from 'react-native-multi-selectbox';
import { getDbConnection, getUsers, insertTrip } from '../utils/db';
import StyledTextInput from '../components/StyledTextInput';
import { exists, isNumeric } from '../validations/validation';
import ErrorMessage from '../components/ErrorMessage';
import { useFocusEffect } from '@react-navigation/native';

const RegisterTripScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [userErrorMsg, setUserErrorMsg] = useState('');
    const [priceErrorMsg, setPriceErrorMsg] = useState('');
    const [tripInfo, setTripInfo] = React.useState({
        user: '',
        price: null,
    });

    const focusEffect = useCallback(() => {
        const fetchDb = async () => {
            const db = await getDbConnection();
            const usersFromDb = await getUsers(db);
            setUsers(usersFromDb);
            db.close();
        }
        fetchDb();
    }, []);

    useFocusEffect(focusEffect);

    const onChangeUserInput = (val) => {
        setTripInfo({
            ...tripInfo,
            user: val,
        });
        setUserErrorMsg("");
    }

    const onChangePriceInput = (val) => {
        setTripInfo({
            ...tripInfo,
            price: val,
        });
        setPriceErrorMsg(exists(val, 'El precio del viaje es obligatorio'));
        setPriceErrorMsg(isNumeric(val, 'El precio del viaje debe ser un número'));
    }

    const handleSave = async () => {
        const errorUserExists = exists(tripInfo.user, 'El nombre de la persona es obligatorio');
        const errorPriceExists = exists(tripInfo.price, 'El precio del viaje es obligatorio');

        if (errorUserExists === '' && errorPriceExists === '' && priceErrorMsg === '') {
            try {
                const db = await getDbConnection();
                const trip = await insertTrip(db, tripInfo.price, tripInfo.user.id);
                db.close();
                navigation.navigate('Home');
            } catch (error) {
                console.log(error);
                Alert.alert(
                    "Error",
                    "Ha ocurrido un error, inténtelo nuevamente",
                    [{ text: "Aceptar", onPress: () => console.log("OK Pressed") }]
                );
            }
        } else {
            setUserErrorMsg(exists(tripInfo.user, 'El nombre de la persona es obligatorio'));
            setPriceErrorMsg(exists(tripInfo.price, 'El precio del viaje es obligatorio'));
        }
    }

    return (
        <View style={styles.viewStyle}>
            <View style={styles.select}>
                <SelectBox
                    label=""
                    options={users}
                    value={tripInfo.user}
                    onChange={(val) => onChangeUserInput(val)}
                    hideInputFilter={false}
                    inputPlaceholder="Nombre del cliente"
                />
                {userErrorMsg && <ErrorMessage msg={userErrorMsg} />}
            </View>

            <StyledTextInput
                type={"numeric"}
                action={(val) => onChangePriceInput(val)}
                placeholder={"Precio del viaje"}
                value={tripInfo.price}
                errorMsg={priceErrorMsg}>
            </StyledTextInput>

            <StyledButton
                text={'Guardar'}
                action={handleSave}
                customStyles={{ backgroundColor: "#2b50aa" }}>
            </StyledButton>

            <Text style={styles.textSeparator}>O registrar...</Text>

            <StyledButton
                text={'Nuevo cliente'}
                action={() => navigation.navigate('RegisterClient')}
                customStyles={{ backgroundColor: "#6e6e6e", height: 35 }}>
            </StyledButton>
        </View >
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        margin: 12,
    },
    select: {
        marginBottom: 20,
    },
    textSeparator: {
        alignSelf: 'center',
        color: '#1a1a1a',
        fontSize: 16,
        marginBottom: 8,
    }
});

export default RegisterTripScreen