import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { saveTask, getTask, updateTask } from '../api';
import Layout from '../components/Layout';

const TaskFormScreen = ({ navigation, route }) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
    });

    const [editing, setEditing] = useState(false);

    /**
     *  Funtion to hand the incomming text of the input
     */
    const handleChange = (name, value) => setTask({ ...task, [name]: value });

    /**
     *  Function to handle the submit event
     */
    const handleSubmit = () => {
        try {
            if (!editing) {
                saveTask(task);
            } else {
                updateTask(route.params.id, task);
            }
            navigation.navigate('Home');
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (route.params && route.params.id) {
            navigation.setOptions({ headerTitle: 'Updating Task' });
            setEditing(true);
            (async () => {
                const task = await getTask(route.params.id);
                setTask({ title: task.title, description: task.description });
            })();
        }
    }, []);

    return (
        <Layout>
            <TextInput
                style={styles.input}
                placeholder="Write a Title"
                placeholderTextColor="#546574"
                onChangeText={(text) => handleChange('title', text)}
                value={task.title}
            />
            <TextInput
                style={styles.input}
                placeholder="Write a Description"
                placeholderTextColor="#546574"
                onChangeText={(text) => handleChange('description', text)}
                value={task.description}
            />

            {!editing ? (
                <TouchableOpacity
                    style={styles.bottonSave}
                    onPress={handleSubmit}
                >
                    <Text style={styles.bottonText}>Save Task</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={styles.bottonUpdate}
                    onPress={handleSubmit}
                >
                    <Text style={styles.bottonText}>Update Task</Text>
                </TouchableOpacity>
            )}
        </Layout>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '90%',
        marginTop: 7,
        fontSize: 14,
        height: 35,
        color: '#fff',
        borderColor: '#10ac84',
        borderWidth: 1,
        textAlign: 'center',
        borderRadius: 5,
    },
    bottonSave: {
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5,
        width: '90%',
        backgroundColor: '#10ac84',
    },
    bottonText: {
        textAlign: 'center',
        color: '#fff',
    },
    bottonUpdate: {
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#e58e26',
        width: '90%',
    },
});

export default TaskFormScreen;
