import React from "react";
import { Category, listAll } from "../../controller/category";
import "./categories.css";
import { TreeNode } from "../../components/mat-tree";

function nestedTreeNode(category: Category) {
    return (
        <TreeNode key={category.name} title={category.name} helperText={category.helper}>
            {
                category.children.map(child => nestedTreeNode(child))
            }
        </TreeNode>
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