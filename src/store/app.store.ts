import { IUser } from "src/app/auth.service"

export interface AppSate {
    count: number
    users: IUser[] | null
}

export const intialState: AppSate = {
    count: 0,
    users: null
}