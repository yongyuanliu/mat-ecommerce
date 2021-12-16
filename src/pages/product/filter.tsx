import React from "react";
import { Chip } from "../../components/chip";
import Ripples from "../../components/ripple";
import TabGrop from "../../components/tab/tab-group";
import FormSelect from "../../components/select";

import "./filter.css";
import { Cdk } from "../../components/cdk";

function FiltersTabWrapper() {
    const textLabel = [
        <span>Show all</span>,
        <span>Auction</span>,
        <span>Buy now</span>
    ];

    const iconLabel = [
        <i className="set-icon">
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{
                width: "20px",
                height: "100%"
            }}><path d="M199.798545 665.537905 10.1271 665.537905 10.1271 856.343991c0 3.38699 2.257993 5.644983 5.644983 5.644983l184.032106 0L199.80419 665.537905z" p-id="1349"></path><path d="M252.296891 665.537905 252.296891 861.988975l755.863286 0c3.38699 0 5.644983-2.257993 5.644983-5.644983l0-190.806086L252.296891 665.537905z" p-id="1350"></path><path d="M252.296891 417.158633l761.508269 0 0 195.880926-761.508269 0 0-195.880926Z" p-id="1351"></path><path d="M10.1271 417.158633l189.677089 0 0 195.880926-189.677089 0 0-195.880926Z" p-id="1352"></path><path d="M199.798545 172.171996 15.772084 172.171996c-3.38699 0-5.644983 2.252348-5.644983 5.644983l0 186.848953 189.677089 0L199.80419 172.171996z" p-id="1353" data-spm-anchor-id="a313x.7781069.0.i3" className="selected"></path><path d="M1008.724675 172.171996l-756.427784 0 0 192.493936 761.508269 0L1013.80516 177.816979C1014.369658 174.424344 1011.547166 172.171996 1008.724675 172.171996z" p-id="1354"></path></svg>
        </i>,
        <i className="set-icon">
            <svg xmlns="http://www.w3.org/2000/svg" style={{
                width: "16px",
                height: "100%"
            }} viewBox="0 0 16 16">
                <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z" />
            </svg>
        </i>
    ];

    return (
        <div className="filters__tabs-wrapper">
            <TabGrop content={textLabel}></TabGrop>
            <TabGrop className="mat-segmented-2-tab-group" content={iconLabel}></TabGrop>
        </div>
    );
}

function FiltersAdditional() {
    const chips = ["全球购", "50元内", "小猫", "塑料塞", "pucker鞋", "打字机"];
    return (
        <div className="filters__additional mat-chip-list">
            <div className="mat-chip-list-wrapper">
                <span>Related</span>
                {
                    chips.map((text, i) => {
                        return (
                            <Chip key={i.toString()} onClick={
                                (ev) => {
                                    ev.currentTarget.classList.toggle("mat-chip-selected");
                                }
                            }>
                                <Ripples className="mat-ripple-element">{text}</Ripples>
                            </Chip>
                        );
                    })
                }
            </div>
        </div>
    );
}

interface ProductFilterProps {

}

type ProductFilterState = Readonly<{
    selectPanel: {
        hidden: boolean;
        top: number;
        left: number;
        transformX: number;
        transformY: number;
    }
}>;

class ProductFilter extends React.Component<ProductFilterProps, ProductFilterState> {

    constructor(props: ProductFilterProps) {
        super(props);

        this.state = {
            selectPanel: {
                hidden: true,
                top: 0,
                left: 0,
                transformX: 0,
                transformY: 0
            }
        }
    }

    selectOnClick = (ev: React.MouseEvent<HTMLDivElement>) => {
        const { top, left } = ev.currentTarget.getBoundingClientRect();
        let { selectPanel } = this.state;
        selectPanel.top = top;
        selectPanel.left = left;
        selectPanel.hidden = false;
        this.setState({ selectPanel });
    }

    optionOnClick = () => {
        let { selectPanel } = this.state;
        selectPanel.hidden = true;
        this.setState({ selectPanel });
    }

    render(): React.ReactNode {
        let { selectPanel } = this.state;
        return (
            <div className="filters__wrapper">
                <div className="filters__main">
                    <div className="filters__fields-wrapper">
                        <FormSelect
                            htmlId="mat-select-01" placeHolder="Useless first" sortHelper="Sort by"
                            onClick={this.selectOnClick}
                        ></FormSelect>
                        <FormSelect
                            htmlId="mat-select-02" placeHolder="Condition" className="mat-form-field-should-float"
                            onClick={this.selectOnClick}
                        ></FormSelect>
                        <FormSelect
                            htmlId="mat-select-03" placeHolder="Delivery options"
                            onClick={this.selectOnClick}
                        ></FormSelect>
                        <Cdk
                            hidden={selectPanel.hidden}
                            top={selectPanel.top}
                            left={selectPanel.left}
                            transformX={selectPanel.transformX}
                            transformY={selectPanel.transformY}
                        >
                            <div className="mat-select-panel-wrap" onClick={this.optionOnClick}>
                                <div className="mat-select-panel">
                                    <div id="mat-option-12" className="mat-option" role="option" defaultValue="option1" tabIndex={0} aria-disabled="false">
                                        <span className="mat-option-text">Useless first</span>
                                        <div className="mat-ripple mat-option-ripple"></div>
                                    </div>
                                    <div id="mat-option-13" className="mat-option" role="option" defaultValue="option1" tabIndex={0} aria-disabled="false">
                                        <span className="mat-option-text">Necessary second</span>
                                        <div className="mat-ripple mat-option-ripple"></div>
                                    </div>
                                    <div id="mat-option-14" className="mat-option" role="option" defaultValue="option1" tabIndex={0} aria-disabled="false">
                                        <span className="mat-option-text">Useful third</span>
                                        <div className="mat-ripple mat-option-ripple"></div>
                                    </div>
                                    <div id="mat-option-15" className="mat-option" role="option" defaultValue="option1" tabIndex={0} aria-disabled="false">
                                        <span className="mat-option-text">Something fourth</span>
                                        <div className="mat-ripple mat-option-ripple"></div>
                                    </div>
                                </div>
                            </div>
                        </Cdk>
                    </div>
                    <FiltersTabWrapper />
                </div>
                <FiltersAdditional />
            </div>
        );
    }
}

export { ProductFilter };