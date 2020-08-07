import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, useState, useEffect } from 'react'
import classnames from 'classnames'

export type AlertType = 'success' | 'error' | 'warning' | 'info'
interface AlertProps  {
    message?: string,
    description?: string,
    baseType?: AlertType
}
type NativeAlertProps = AlertProps & ButtonHTMLAttributes<HTMLElement>
type AnchorAlertProps = AlertProps & AnchorHTMLAttributes<HTMLElement>
export type baseProps = Partial<NativeAlertProps & AnchorAlertProps>

const Alert: React.FC<baseProps> = (props) => {
    const {message,description,baseType} = props
    const classes = classnames('alert',{
        [`alert-${baseType}`]:baseType,
    })
    //定时器三秒隐藏
    const [showAlert,setShow] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
            setShow(false)
        },3000)        
    },[showAlert])
    return (
        <>
            {
                showAlert?<div className="alert_box">
                    <div className={classes}>
                        <h1>{message}<span onClick={()=>{
                            setShow(false)
                        }}>x</span></h1>
                        {description?<h2>{description}</h2>:null}
                    </div>
                </div>:null
            }
        </>
    )
}

Alert.defaultProps = {
    message:'',
    baseType:'info'
}
export default Alert