import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'
import { useAuth } from '../context/authContext'
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ActivityIndicator } from 'react-native-web';
import ChatList from '../../components/ChatList';

export default function home() {
  const {logout, user} = useAuth();
  const[users, setUsers] = useState([]);
  useEffect(() => {
    if(user?.uid)
    getUsers();
  }, [])
  const getUsers= async () => {

  }
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />

     {
      users.length>0?(
        <Chat0List users={users} />
      ):(
        <View  className="flex items-center" style={{top: hp(30)}}>
          <ActivityIndicator size="large" />
        </View>
      )
     }
    </View>
  )
}