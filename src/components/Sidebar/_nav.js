export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
        },
        {
            title: true,
            name: 'Navigation',
            wrapper: {            // optional wrapper object
                element: "span",      // required valid HTML5 element tag
                attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
            },
            class: ""             // optional class names space delimited list for title item ex: "text-center"
        },
        {
            name: 'Account',
            url: '/Account',
            icon: 'icon-puzzle',

        },
        {
            name: 'Setting',
            url: '/setting',
            icon: 'icon-star',

        },
        {
            name: 'History',
            url: '/history',
            icon: 'icon-calculator',

        },
        {
            name: 'Realtime Data',
            url: '/realtime',
            icon: 'icon-pie-chart'
        },
        {
            name: 'User Activity',
            url: '/activity',
            icon: 'icon-people'
        },
        {
            divider: true
        }

    ]
};
