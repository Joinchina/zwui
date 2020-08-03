import React, {  FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react'
import classnames from 'classnames'
//创建尺寸
// export enum ButtonSize {
//     large = 'lg',
//     Small = 'sm',
// }
// //创建类型
// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link'
// }
export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
//创建数据的interface
interface BaseButtonProps{
    className?: string,
    disabled?: boolean,
    size?: ButtonSize,
    btnType?: ButtonType,
    children: React.ReactNode,
    href?: string
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
//创建主题
const Button: React.FC<ButtonProps> = (props) => {
    const {
        btnType,
        disabled,
        size,
        children,
        href,
        ...restProps
    } = props
    //btn btn-lg btn-primary
    const classes = classnames('btn',{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled':(btnType === 'link') && disabled
    })
    if(btnType === 'link' && href){
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >{children}</a>
        )
    }else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >{children}</button>
        )
    }
}

Button.defaultProps = {
    disabled:false,
    btnType:'default'
}
export default Button