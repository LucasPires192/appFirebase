import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSizze: 24,
        fontWight: 'bold',
        marginBottom: 10
    },
    info: {
        fontSize: 18,
        marginBottom: 5
    },
    input: {
        width: '100%',
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
        fontSize: 16,
        borderRadius: 5
    },
    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    }
});