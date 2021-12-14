import React from "react";
import Ripples from "../../components/ripple";

export interface TreeNodeProps {
    onClick?: (ev: React.MouseEvent<HTMLDivElement>) => any;
    className?: string;
    expanded?: boolean;
    title?: string;
    helperText?: string;
}

type TreeNodeState = Readonly<{
    expanded?: boolean;
}>;

function getAndCheckHelperTextNode(helperText?: string) {
    if (Object.is(helperText, undefined) || helperText?.trim().length === 0) {
        return;
    }
    return (
        <div className="set-text-helper">
            <p className="set-text-helper-content">{helperText}</p>
        </div>
    );
}

class TreeNode extends React.PureComponent<TreeNodeProps, TreeNodeState>{
    constructor(props: TreeNodeProps) {
        super(props);

        //set expanded
        this.state = {
            expanded: props.expanded
        }
    }

    onClick = (ev: React.MouseEvent<HTMLDivElement>) => {
        const { onClick } = this.props;

        this.setState(state => {
            return {
                expanded: !state.expanded
            };
        });

        if (onClick) {
            onClick(ev);
        }
    }

    render(): React.ReactNode {
        const { className, title, helperText, children } = this.props;
        const { expanded } = this.state;
        let hasChild = children != 0;
        let helperElement = getAndCheckHelperTextNode(helperText);
        return (
            <div className="mat-nested-tree-node">
                <li>
                    <div
                        className={
                            `mat-tree-node ${expanded ? "tree-node-expanded" : ""} ${className ? className.trim() : ""}`
                        }
                        onClick={
                            hasChild ? this.onClick : undefined
                        }
                    >
                        <button className="mat-icon-button" style={
                            {
                                visibility: `${hasChild ? "unset" : "hidden"}`
                            }
                        }>
                            <Ripples className="mat-ripple-element">
                                <span className="mat-button-wrapper">
                                    <i className="set-icon">
                                        <svg version="1.1" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" role="img"><path className="set-i-solid set-i-solid-path-1" fill="none" d="M0 0h24v24H0V0z"></path><path className="set-i-solid set-i-solid-path-2" d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path><path className="set-i-outline set-i-outline-path-1" fill="none" d="M0 0h24v24H0V0z"></path><path className="set-i-outline set-i-outline-path-2" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path></svg>
                                    </i>
                                </span>
                            </Ripples>
                        </button>
                        <div className="tree-node-title">
                            {title}
                            {helperElement}
                        </div>
                    </div>
                </li>
                <ul className={expanded ? "" : "tree-invisible"}>
                    {children}
                </ul>
            </div>
        );
    }
}

export { TreeNode };