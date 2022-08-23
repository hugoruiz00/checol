import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import StyledButton from '../components/StyledButton';
import SelectBox from 'react-native-multi-selectbox';
import { getDbConnection, getUsers, insertTrip } from '../utils/db';
import StyledTextInput from '../components/StyledTextInput';
import { exists, isNumeric } from '../validations/validation';

const RegisterTripScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [userErrorMsg, setUserErrorMsg] = useState('');
    const [priceErrorMsg, setPriceErrorMsg] = useState('');
    const [tripInfo, setTripInfo] = React.useState({
        user: '',
        price: null,
    });

    useEffect(() => {
        const fetchDb = async () => {
            const db = await getDbConnection();
            const usersFromDb = await getUsers(db);
            setUsers(usersFromDb);
        }
        fetchDb();
    }, []);

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
                navigation.navigate('Home');
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
                    inputPlaceholder="Nombre"
                />
                {userErrorMsg && <Text style={styles.errorMsg}>{userErrorMsg}</Text>}
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

            <StyledButton
                text={'Registrar nuevo cliente'}
                action={() => navigation.navigate('RegisterUser')}
                customStyles={{ backgroundColor: "#3D71F5", height: 35 }}>
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
    errorMsg: {
        color: 'red',
        fontSize: 15,
    }
});

export default RegisterTripScreen