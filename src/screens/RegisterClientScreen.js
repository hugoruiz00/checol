import { View, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import StyledButton from '../components/StyledButton';
import { getDbConnection, getUsers, insertUser } from '../utils/db';
import StyledTextInput from '../components/StyledTextInput';
import { exists } from '../validations/validation';

const RegisterClientScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [nameErrorMsg, setNameErrorMsg] = useState('');

    useEffect(() => {
        const fetchDb = async () => {
            const db = await getDbConnection();
            const usersFromDb = await getUsers(db);
            setUsers(usersFromDb);
        }
        fetchDb();
    }, []);

    const onChangeNameInput = (val) => {
        setName(val);
        setNameErrorMsg(exists(val, 'El nombre es obligatorio'));
    }

    const handleSave = async () => {
        const errorNameExists = exists(name, 'El nombre es obligatorio');

        if (errorNameExists === '') {
            const foundName = users.find((user) => user.item == name);
            if (foundName) {
                setNameErrorMsg('Este nombre ya existe, ingrese otro nombre');
                return;
            }

            try {
                const db = await getDbConnection();
                const user = await insertUser(db, name);
                db.close();
                navigation.navigate('Home');
            } catch (error) {
                Alert.alert(
                    "Error",
                    "Ha ocurrido un error, inténtelo nuevamente",
                    [{ text: "Aceptar", onPress: () => console.log("OK Pressed") }]
                );
            }
        } else {
            setNameErrorMsg(exists(name, 'El nombre es obligatorio'));
        }
    }

    return (
        <View style={styles.viewStyle}>
            <StyledTextInput
                type={"default"}
                action={(val) => onChangeNameInput(val)}
                placeholder={"Nombre"}
                value={name}
                errorMsg={nameErrorMsg}>
            </StyledTextInput>

            <StyledButton
                text={'Guardar'}
                action={handleSave}
                customStyles={{ backgroundColor: "#2b50aa" }}>
            </StyledButton>
        </View >
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        margin: 12,
    },
});

export default RegisterClientScreen