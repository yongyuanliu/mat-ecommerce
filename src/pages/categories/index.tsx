import React from "react";
import { Category, listAll } from "../../controller/category";
import Ripples from "../../components/ripple";
import "./categories.css";

function iconButton() {
    return (
        <button className="mat-icon-button">
            <Ripples className="mat-ripple-element">
                <span className="mat-button-wrapper">
                    <i className="set-icon">
                        <svg version="1.1" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" role="img"><path className="set-i-solid set-i-solid-path-1" fill="none" d="M0 0h24v24H0V0z"></path><path className="set-i-solid set-i-solid-path-2" d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path><path className="set-i-outline set-i-outline-path-1" fill="none" d="M0 0h24v24H0V0z"></path><path className="set-i-outline set-i-outline-path-2" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path></svg>
                    </i>
                </span>
            </Ripples>
        </button>
    );
}

function treeNodeTitle(name: string, helper: string) {
    return (
        <div className="tree-node-title">
            {name}
            {helperText(helper)}
        </div>
    );
}

function helperText(helper: string) {
    if (helper) {
        return (
            <div className="set-text-helper">
                <p className="set-text-helper-content">{helper}</p>
            </div>
        );
    }
    return <></>;
}

function nestedTreeNode(nestedCategory: Category) {
    return (
        <div
            key={nestedCategory.id.toString()}
            className="mat-nested-tree-node"
        >
            <li>
                <div className="mat-tree-node">
                    {nestedCategory.children.length != 0 ? iconButton() : ""}
                    {treeNodeTitle(nestedCategory.name, nestedCategory.helper)}
                </div>
            </li>
            {
                nestedCategory.children.length != 0
                    ? <ul className="tree-invisible">
                        {nestedCategory.children.map(category => nestedTreeNode(category))}
                    </ul>
                    : ""
            }
        </div>
    );
}

export default function Categories() {
    let elements = listAll().map(category => nestedTreeNode(category));
    return (
        <div className="tree-wrapper">
            <div className="mat-tree">
                {elements}
            </div>
        </div>
    );
}