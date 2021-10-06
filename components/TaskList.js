import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useIsFocused } from '@react-navigation/native'
import TaskItem from './TaskItem';
import { getTasks, deleteTask } from '../api';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const loadTasks = async () => {
        const data = await getTasks();
        const newData = data.map((task) => {
            task.id = task.id.toString();
            return task;
        });

        setTasks(newData);
    };

    const isFocused = useIsFocused();

    useEffect(() => {
        loadTasks();
    }, [isFocused]);

    const handleDelete = async (id) => {
        await deleteTask(id);
        await loadTasks();
    };

    const renderItem = ({ item }) => {
        return <TaskItem task={item} handleDelete={handleDelete} />;
    };

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await loadTasks();
        setRefreshing(false);
    });

    return (
        <FlatList
            style={{ width: '100%' }}
            data={tasks}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    colors={['#78e08f']}
                    progressBackgroundColor="#0a3d62"
                    onRefresh={onRefresh}
                />
            }
        />
    );
};

export default TaskList;
