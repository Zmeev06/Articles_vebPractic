import React from "react";

interface IIconButtonProps {
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const IconButton = (props: IIconButtonProps) => {
    const {
        Icon,
    } = props;

    return (
        <button className="text-5xl">
            тестинг
            {/*<Icon color="red" width="100px"/>*/}
        </button>
    );
};