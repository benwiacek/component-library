import classnames from "classnames"
import clsx from 'clsx'
import { FaCheckCircle } from "react-icons/fa"
import { FaExclamationTriangle } from "react-icons/fa"
import { FaCircleXmark } from "react-icons/fa6"
import { HiInformationCircle } from "react-icons/hi"



export default function Banner({ variant, children }) {

    const success = variant === "success"? true : false
    const warning = variant === "warning"? true : false
    const error = variant === "error"? true : false
    const neutral = variant === "neutral"? true : false

    function renderBanner() {

        const headlineClass = clsx("headline", {
            "head-success": success,
            "head-warning": warning,
            "head-error": error,
            "head-neutral": neutral
        })

        const iconClass = clsx("icon", {
            "green-mark": success,
            "warning-tri": warning,
            "red-cross": error,
            "blue-icon": neutral
        })

            return (
                <>
                    {success && <FaCheckCircle className={iconClass}/>}
                    {warning && <FaExclamationTriangle className={iconClass}/>}
                    {error && <FaCircleXmark className={iconClass}/>}
                    {neutral && <HiInformationCircle className={iconClass}/>}
                    
                    <div>
                        <span className={headlineClass}>
                            {success && "Congratulations!"}
                            {warning && "Attention"}
                            {error && "There is a problem with your application"}
                            {neutral && "Update available"}
                        </span>
                        {children && <p>{children}</p>}
                    </div>
                </>
            )
    }

    return (
        <div className={classnames(variant, "banner")}>
            {renderBanner()}
        </div>
    )
}