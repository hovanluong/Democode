import { View, Text, Platform } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView, ScrollView } from 'react-native'

const ios = Platform.OS == 'ios';
export default function CustomeKeyboardView({children}) {
  return (
    <KeyboardAvoidingView
        behavior={ios? 'padding':'height'}
        style={{flex: 1}}
        >
        <ScrollView 
            style={{flex: 1}}
            bounces={false}
            showsVerticalScrollIndicator={false}
        >
            {
                children
            }
        </ScrollView>
    </KeyboardAvoidingView>
  )
}