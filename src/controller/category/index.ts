interface Category {
    id: number,
    name: string,
    helper: string,
    children: Category[]
}

let categories: Category[] = [
    {
        id: 0,
        name: "All Categories",
        helper: "Ecommerce patterns",
        children: [
            {
                id: 1,
                name: "Electronics",
                helper: "",
                children: [
                    {
                        id: 2,
                        name: "Cell Phones & Smartphones",
                        helper: "",
                        children: [
                            {
                                id: 3,
                                name: "Cell Phone Accessories",
                                helper: "",
                                children: []
                            },
                            {
                                id: 4,
                                name: "Cell Phone Gatgets",
                                helper: "",
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                id: 5,
                name: "Business & Industrial",
                helper: "",
                children: [
                    {
                        id: 6,
                        name: "Business & Industrial",
                        helper: "",
                        children: []
                    },
                    {
                        id: 7,
                        name: "Component Acceleration Sensors",
                        helper: "",
                        children: []
                    },
                    {
                        id: 8,
                        name: "Component Fiber Optic Sensors",
                        helper: "",
                        children: []
                    },
                    {
                        id: 9,
                        name: "Metalworking Finishing Machines",
                        helper: "",
                        children: []
                    },
                ]
            }
        ]
    }
];


function listAll() {
    return categories;
};

export { listAll };
export type { Category };