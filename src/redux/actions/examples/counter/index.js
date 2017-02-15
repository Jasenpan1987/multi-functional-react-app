import { INC_CTR, DEC_CTR } from "../types";

export const incCtrAct = () => ({ type: INC_CTR });
export const decCtrAct = () => ({ type: DEC_CTR });