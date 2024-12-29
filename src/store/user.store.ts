import { action, observable } from "mobx";
import RootStore from "./rootStore";
import { IUserModel } from "@eLearning/models/user.model";
import { ESCREEN } from "@eLearning/types/screenName";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';
import { replace } from "@eLearning/navigations/Rootnavigation";
import { getBooleanItem } from "@eLearning/service/storageService/storage.service";

export class UserStore implements IUserModel {
    rootStore: typeof RootStore; // Reference to the RootStore

    @observable userId: number = undefined;
    @observable userName: string = undefined;
    @observable userEmail: string = undefined;
    @observable password: string = undefined;
    @observable isShownOnboardingFlow: boolean = false;
    @observable isLoginErrorStatus: boolean = false;
    @observable isLoading: boolean = false
    @observable userImage: string = undefined;

    constructor(rootStore: typeof RootStore) {
        this.rootStore = rootStore;
    }

    @action
    getUserName(name: string) {
        this.userName = name;
    }

    @action
    getUserEmail(email: string) {
        this.userEmail = email;
    }

    @action
    getUserPassword(password: string) {
        this.password = password;
    }

    @action
    isLoginError(status: boolean) {
        this.isLoginErrorStatus = status;
    }

    @action
    onLoading(status: boolean){
        this.isLoading = status
    }

    @action
    onUserImage(img:string){
        this.userImage = img
    }

    @action
    shownOnboardingValue(){
        this.isShownOnboardingFlow = getBooleanItem('onboarding-shown');
        return this.isShownOnboardingFlow
    }

    onGoogleButtonPress = async () => {
        this.onLoading(true)
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const signInResult = await GoogleSignin.signIn();
            if (signInResult?.data?.idToken) {
                const googleCredential = auth.GoogleAuthProvider.credential(signInResult.data?.idToken);
                const data = await auth().signInWithCredential(googleCredential);
               
                
                if (data) {
                    const email = signInResult?.data?.user?.email;
                    const name = signInResult?.data?.user?.name;
                    const img = signInResult.data.user.photo

                    if (email) this.getUserEmail(email);
                    if (name) this.getUserName(name);
                    if(img) this.onUserImage(img)

                    replace(ESCREEN.BOTTOM_NAVIGATION, {
                        screen: ESCREEN.HOME_SCREEN
                    })
                    this.onLoading(false)
                }
            } else {
                console.log('No ID token found');
                this.onLoading(false)
                return
            }
        } catch (error) {
            console.error('Google Sign-In error:');
            this.onLoading(false)
            return
        }
    };

    onSignup: () => void;
}
