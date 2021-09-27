import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// eslint-disable-next-line react-hooks/rules-of-hooks
export const dispatch = useDispatch()
