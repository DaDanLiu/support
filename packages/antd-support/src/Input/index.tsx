import React from 'react'
import { Input } from 'antd'

const valToNumber = (val: string) => val?.replace(/\D/g, "");

export interface LimitInputNumberProps {
    value: string | number | any,
    onChange: (val: any) => void
}

export const LimitInputNumber: React.FC<LimitInputNumberProps> = ({ value, onChange, ...prop }) => {
    let val = valToNumber(typeof value === "number" ? `${value}` : value);

    const receiveOnChange = (e: any) => {
        let val = e?.target?.value;
        val = val?.replace(/\D/g, "");
        onChange(val);
    };

    return <Input value={val} onChange={receiveOnChange} {...prop} />;
};
