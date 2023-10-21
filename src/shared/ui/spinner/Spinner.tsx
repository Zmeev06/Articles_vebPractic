import style from "./Spinner.module.scss";

interface ISpinnerProps {
    size?: string,
}

export const Spinner = (props: ISpinnerProps) => {
    const {
        size = "50px",
    } = props;
    
    return(
        <span style={{width: size, height: size}} className={style.loader}></span>
    )
}