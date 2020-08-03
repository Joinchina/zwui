import React, {  FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react'
import classnames from 'classnames'

export type AlertType = 'success' | 'error' | 'warning' | 'info'
interface AlertProps  {
    message?: string,
    description?: string,
    type?: AlertType
}
const Alert: React.FC<AlertProps> = (props) => {
    const {message,description,type} = props
    const classes = classnames('alert',{
        [`alert-${type}`]:type,
    })
    return (
        <div className="alert_box">
            <div className={classes}>
                <h1>{message}</h1>
                {description?<h2>{description}</h2>:null}
            </div>
            <div className={classes}>
                x
            </div>
        </div>
    )
}
Alert.defaultProps = {
    message:'',
    type:'info'
}
export default Alert