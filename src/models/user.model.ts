export interface IUserModel  {
    onSignup: () => void;
    getUserName:(name:string) => void;
    getUserEmail:(email:string) => void;
    getUserPassword: (password: string | number) => void;
    isLoginError:(status: boolean) => void
}