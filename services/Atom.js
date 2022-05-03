import { atom } from 'recoil';


const localStorageEffect = key => ({ setSelf, onSet }) => {

    if (typeof window !== 'undefined') {
        // Perform localStorage action
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue))
    }
    onSet(newValue => {
        localStorage.setItem(key, JSON.stringify(newValue))
    })
      }
    
}
// edu-onboard-v1-auth
export const userAuth = atom({
    key: 'auth', // Unique state identifier
    default: { token: null }, // Default state value
    effects_UNSTABLE: [
        localStorageEffect('auth-edu-onboard'),
    ],
});