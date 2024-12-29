import { action, observable } from "mobx";
import RootStore from "./rootStore";
import { IUserModel } from "@eLearning/models/user.model";
import { ESCREEN } from "@eLearning/types/screenName";

export class UserStore implements IUserModel {
    rootStore: typeof RootStore; // Reference to the RootStore

    @observable userId: number = undefined;
    @observable userName: string = undefined;
    @observable userEmail: string = undefined;
    @observable password: string = undefined;
    @observable isShownOnboardingFlow: boolean = false;
    @observable isLoginErrorStatus: boolean = false;

    constructor(rootStore: typeof RootStore) {
        this.rootStore = rootStore;
    }

    @action
    getUserName(name: string) {
        this.userName = name;
    }

    @action
    getUserEmail(email: string) {
        console.log("email", email);
        
        this.userEmail = email;
    }

    @action
    getUserPassword(password: string) {
        console.log("passowrd", password);
        
        this.password = password;
    }

    @action
    isLoginError(status: boolean) {
        this.isLoginErrorStatus = status;
    }

    
    onSignup: () => void;
}
