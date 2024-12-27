import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useTheme } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { ESCREEN } from '@eLearning/types/screenName';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ELearningHeader from '@eLearning/base/ELearningHeader/ELearningHeader';
import { useStore } from '@eLearning/store/StoreContext';

const Home = () => {
    const theme = useTheme()
     const { top } = useSafeAreaInsets();
    const {navigate} = useNavigation()
    const toggleDarkMode = () => {
      navigate(ESCREEN.COURSE_DETAIL)
    }
    const { courseStore } = useStore();
    
    console.log(courseStore);
    
  return (
    <View style={{  top: top}}>
       <View style={{ marginHorizontal: 12, marginVertical: 12 }}>
        <ELearningHeader
          showLeftIcon={false}
          headerText="Home"
          headerContainerStyle={{flexDirection: 'row', alignSelf: 'center'}}
          textStyle={{ textAlign: "center", alignSelf: 'center' }}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
      {/* <ELearningCourseCard />  */}
      {/* <ELearningCourseCard />  */}
      </View>
      
      {/* <ELearningCourseCard />  */}
      </View>
  )
}

export default Home

const styles = StyleSheet.create({})