import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV()

export const setItem = (key: string, value: any) => {
    storage.set(key, value)
}

export const getBooleanItem = (key: string) => {
   return storage.getBoolean(key)
}