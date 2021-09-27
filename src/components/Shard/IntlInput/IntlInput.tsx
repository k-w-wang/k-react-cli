import { Input, InputProps } from 'antd';
import React from 'react';
import { injectIntl } from 'react-intl';
interface IProps extends InputProps {
    intl?: any;
}
const intlInput = ({ intl, ...props }: IProps) => {
    const placeholder = intl.formatMessage({ id: 'username' });
    return (
        <Input {...props} placeholder={placeholder} />
    );
}
const IntlInput: any = injectIntl(intlInput);
export default IntlInput