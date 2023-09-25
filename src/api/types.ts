export type ResponseData<T> = {
    code: number,
    message: string,
    status: boolean,
    data: T
}