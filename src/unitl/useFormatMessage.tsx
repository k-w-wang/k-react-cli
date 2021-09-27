import { useIntl } from 'react-intl'

export function useFormatMessage(messageId: any) {
    return useIntl().formatMessage({ id: messageId })
}