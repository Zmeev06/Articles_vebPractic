
import React, {useState} from "react";
import style from "./IconButton.module.scss";
import classNames from "classnames";

interface IIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    className?: string,
    width?: number,
    bgColor?: string,

export const IconButton = (props: IIconButtonProps) => {
    const {
        Icon,

        className,
        width = 30,
        bgColor = "#c4c4c4",
        ...otherProps
    } = props;

    const [isHover, setIsHover] = useState(false);

    return (
        <button
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{backgroundColor: !isHover ? bgColor : `${bgColor}80`}}
            className={classNames(style.btn, className)} {...otherProps}>

            <Icon width={`${width}px`} className={className}/>
        </button>
    );
};