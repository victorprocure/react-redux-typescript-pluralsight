import * as React from 'react';

interface ISelectInputProps {
    name: string,
    label: string,
    onChange?: React.EventHandler<React.ChangeEvent<HTMLSelectElement>>,
    defaultOption: string,
    value: string,
    error: any,
    options: any[]
}

export const SelectInput: React.SFC<ISelectInputProps> = ({ name, label, onChange, defaultOption, value, error, options }: ISelectInputProps) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-control">
                    <option value="">{defaultOption}</option>
                    {options.map(option => <option key={option.value} value={option.value}>{option.text}</option>)}}
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
}