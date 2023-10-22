import style from "./NotFound.module.scss";
import notFoundImg from "shared/assets/img/not_found.png";

const NotFoundPage = () => {

    return(
        <div className={style.page}>
            <img src={notFoundImg} alt="not found image" />
        </div>
    )
}

export default NotFoundPage;