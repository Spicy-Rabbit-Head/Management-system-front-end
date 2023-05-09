interface VerificationInterface {
    state: boolean;
    message?: string;
}

interface PasswordResetInterface {
    resetStatus: number;
    username: string;
    password: string;
}


export
{
    VerificationInterface,
    PasswordResetInterface
}