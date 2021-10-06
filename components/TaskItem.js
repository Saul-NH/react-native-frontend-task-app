import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TaskItem = ({ task, handleDelete }) => {
    
    const navigation = useNavigation()
    
    
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen', {id: task.id})}>
                <Text style={styles.itemTitle}>{task.title}</Text>
                <Text style={styles.itemTitle}>{task.description}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(task.id)}
            >
                <Text style={styles.itemTitle}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#333',
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemTitle: {
        color: '#fff',
    },
    deleteButton: {
        backgroundColor: '#ee5253',
        padding: 7,
        borderRadius: 5,
    },
});

export default TaskItem;
