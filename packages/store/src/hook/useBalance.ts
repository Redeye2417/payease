import { useRecoilValue } from "recoil"
import { balanceAtom } from "../atom/balance.ts"

export const useBalance = () => {
    const value = useRecoilValue(balanceAtom);
    return value;
}   