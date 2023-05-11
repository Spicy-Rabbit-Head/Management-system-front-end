interface VerificationInterface {
    state: boolean;
    message?: string;
}

interface PasswordResetInterface {
    Current: number;
    resetState: boolean;
    tagState: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';
}


export
{
    VerificationInterface,
    PasswordResetInterface
}