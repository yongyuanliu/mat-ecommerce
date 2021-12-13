import React from "react";

import "./chip.css";

interface Props {
    onClick?: (ev: React.MouseEvent<HTMLSpanElement>) => any;
}

class Chip extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactNode {
        const { onClick, children } = this.props;
        return (
            <span className="mat-chip" onClick={onClick}>{children}</span>
        );
    }
}

export { Chip };