import React from "react";

export function Select(props: {name: string,
    options: Array<{name: string}>,
    selected: number|string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void})
{
    const {name, options, selected, onChange} = props
    return (
        <label>
            {name}
            <select data-testid={name} value={selected} onChange={onChange}>
                {options.map((o, i)=>(
                    <option data-testid="select-option" key = {i} value = {i}> {o.name} </option>
                ))}
            </select>
        </label>
    )
}