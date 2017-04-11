import * as React from 'react';

interface ITextInputProps {
    name: string,
    label: string,
    onChange?: React.EventHandler<React.ChangeEvent<HTMLInputElement>>,
    placeholder?: string,
    value: string,
    error: string
}

export const TextInput: React.SFC<ITextInputProps> = ({ name, label, onChange, placeholder, value, error }: ITextInputProps) => {
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass = `${wrapperClass} has-error`;
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
}