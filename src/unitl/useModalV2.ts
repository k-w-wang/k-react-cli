import _ from "lodash"
import { useReducer } from "react"

/*
 *  传入参数
 *  目的为封装一个弹窗
 *  title: 弹窗标题，
 *  visible：是否显示，
 *  loading：状态（如发送请求可设置为true）
 *  data，弹窗数据
 *  *  返回参数
 *  {
 *      modalConfig:  {title, visible, loading, data},
 *      showModal: 显示弹窗，
 *      hideModal：关闭弹窗，
 *      setTitle： 设置窗口名称，
 *      setLoading：设置家在状态，
 *      setData：设置弹窗数据
 *  }
*/

interface IModalConfig {
    visible: boolean;
    title?: string;
    loading?: boolean;
    data?: any;
}
const reducer = (state: IModalConfig, action) => {
    switch (action.type) {
        case "hideModal":
            return {
                ...state, visible: false
            };
        case "showModal":
            return {
                ...state, visible: true
            };
        case "setTitle":
            return {
                ...state, title: action.title
            }
        case "setLoading":
            return {
                ...state, loading: action.loading
            }
        case "setData":
            return {
                ...state, data: action.data
            }
        default:
            break;
    }
}


const useModal: (title?: string, visible?: boolean, loading?: boolean, data?: any) => {
    modalConfig: IModalConfig;
    showModal: () => void;
    hideModal: () => void;
    setTitle: (title: string) => void;
    setLoading: (isLoading: boolean) => void;
    setData: (data: any) => void;
} = (title?: string, visible: boolean = false, loading: boolean = false, data?: any) => {
    const [modalConfig, dispatch] = useReducer(reducer, {
        title,
        visible,
        loading,
        data,
    })
    const showModal = () => {
        !modalConfig.visible && dispatch({ type: "showModal" })
    }
    const hideModal = () => {
        modalConfig.visible && dispatch({ type: "hideModal" })
    }
    const setTitle = (title: string) => {
        modalConfig.title !== title && dispatch({ type: "setTitle", title })
    }
    const setLoading = (isLoading: boolean) => {
        modalConfig.loading !== isLoading && dispatch({ type: "setLoading", loading: isLoading })
    }
    const setData = (data: any) => {
        !_.isEqual(modalConfig.data, data) && dispatch({ type: "setData", data })
    }
    return { modalConfig, showModal, hideModal, setTitle, setLoading, setData }
}
export default useModal