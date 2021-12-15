import React from "react";
import { TabInkBar, TabInkBarProps } from "./tab-inkbar";
import { TabLabel } from "./tab-label";

import "./tab.css";

interface TabGroupProps {
    content: React.ReactNode[];
    className?: string;
}

interface TabGroupLabelStatus {
    id: number;
    active: boolean;
}

type TabGroupState = Readonly<{
    labelStatus?: TabGroupLabelStatus[];
    inkBarStatus?: TabInkBarProps;
}>;


class TabGrop extends React.PureComponent<TabGroupProps, TabGroupState> {
    constructor(props: TabGroupProps) {
        super(props);

        const { content } = this.props;
        const labelLength = content.length;
        const itemStatus = Array(labelLength);
        for (let i = 0; i < labelLength; i++) {
            let temp: TabGroupLabelStatus = {
                id: i,
                active: false,
            };
            itemStatus.push(temp);
        }

        this.state = {
            labelStatus: itemStatus,
        }
    }
    
    onLabelClick = (ev: React.MouseEvent<HTMLDivElement>, labelId: number) => {
        console.log("labelId: %d active", labelId);
        const labelStatus = this.state.labelStatus;
        const newLabelStatus = labelStatus?.map(e => {
            e.active = e.id === labelId;
            return e;
        });

        let element = ev.currentTarget;
        const inkBarStatus: TabInkBarProps = {
            left: element.offsetLeft,
            width: element.offsetWidth,
            height: element.offsetHeight
        };

        this.setState({ labelStatus: newLabelStatus, inkBarStatus });
    }

    render(): React.ReactNode {
        const { labelStatus, inkBarStatus } = this.state;
        const { content, className } = this.props;
        return (
            <div className={`mat-tab-group ${className ? className : ""}`}>
                <div className="mat-tab-header">
                    <div className="mat-tab-header-pagination mat-tab-header-pagination-before">
                        <div className="mat-tab-header-pagination-chevron"></div>
                    </div>
                    <div className="mat-tab-label-container">
                        <div className="mat-tab-list">
                            <div className="mat-tab-labels">
                                {labelStatus?.map((label) => {
                                    return (
                                        <TabLabel
                                            onClick={this.onLabelClick}
                                            active={label.active}
                                            key={label.id.toString()}
                                            labelId={label.id}
                                        >{content[label.id]}</TabLabel>
                                    );
                                })}
                            </div>
                            <TabInkBar left={inkBarStatus?.left} width={inkBarStatus?.width} height={inkBarStatus?.height} />
                        </div>
                    </div>
                    <div className="mat-tab-header-pagination mat-tab-header-pagination-after">
                        <div className="mat-tab-header-pagination-chevron"></div>
                    </div>
                </div>
                <div className="mat-tab-body-wrapper"></div>
            </div>
        );
    }
}

export default TabGrop;