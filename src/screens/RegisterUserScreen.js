import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import StyledButton from '../components/StyledButton';
import { getDbConnection, getUsers, insertUser } from '../utils/db';
import StyledTextInput from '../components/StyledTextInput';
import { exists } from '../validations/validation';

const RegisterUserScreen = ({ navigation }) => {
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
        errorNameExists = exists(name, 'El nombre es obligatorio');

        if (errorNameExists === '') {
            try {
                const db = await getDbConnection();
                const user = await insertUser(db, name);
                db.close();
                navigation.navigate('Home');
            } catch (error) {
                console.log(error);
                navigation.navigate('Home');
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
                placeholder={"Nombre de la persona"}
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

export default RegisterUserScreen