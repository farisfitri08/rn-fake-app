import React from 'react'
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Child({childToParent}) {
    const data = "This is data from Child Component to the Parent Component."
    return (
        <View>
            <Button onPress={() => childToParent(data)} title="Click Child"></Button>
        </View>
    )
}