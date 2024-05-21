 const elements = [
    {
        title : "Bike",
        type : "drop",
        elements:  [
            {
                head: "Accessories",
                innerElements:[]
            },
            {
                head: "Bike",
                innerElements:[ ]
            },
            {
                head: "Shoes",
                innerElements:[ ]
            }
        ]
    },
    {
        title : "Gear",
        type : "drop",
        elements:  [
            {
                head: "Accessories",
                innerElements:[ "Children's"]
            },
            {
                head: "Bike",
                innerElements:[ "Children's", "Commuter/Urban", "Cyclocross", "Hybrid", "Mountain" , "Road"]
            },
            {
                head: "Shoes",
                innerElements:["Road"]
            },
            {
                head: "Uncategorized",
                innerElements:["Road"]
            }
        ]
    },
    {
        title : "Apparel",
        type : "drop",
        elements:  [
            {
                head: "Accessories",
                innerElements:[ "Children's", "Commuter/Urban", "Hybrid" ]
            },
            {
                head: "Bike",
                innerElements:[ "Children's", "Commuter/Urban", "Hybrid" ]
            }
        ]
    },
    {
        title : "Brand",
        type : "check",
        elements:  [
            {
                text: "Electra",
                count: 2
            },
            {
                text: "Giant",
                count: 2
            },
            {
                text: "Liv",
                count: 2
            },
            {
                text: "Mountain",
                count: 2
            },
            {
                text: "Opus",
                count: 3
            },
            {
                text: "Rocky",
                count: 2
            },
            {
                text: "Specialized",
                count: 1
            },
            {
                text: "Trek",
                count: 1
            },
        ]
    }
]
export default elements;