import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
    series: [{
        name: 'کاربران آنلاین',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'کاربران آفلاین',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['فروردین', 'خرداد', 'مرداد', 'شهریور', 'ابان', 'آذر', 'بهمن', 'اسفند']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'کاربر',
        'مجموعه فعالیت ها',
        ' مجموعه زمان'
    ],
    body: [
        {
            "username": "عباس  ",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "یاسر",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "یوسف",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "یونس",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "جابر",
            "order": "80",
            "price": "$8,840"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "شناسه",
        "کاربر",
        "مجموعه زمان",
        "تاریخ",
        "وضعیت"
    ],
    body: [
        {
            id: "#OD1711",
            user: "محمد رنج بر",
            date: "1402/12/11",
            price: "00:10:00",
            status: "دریافتی"
        },
        {
            id: "#OD1711",
            user: "محمد رنج بر",
            date: "1402/12/11",
            price: "00:10:00",
            status: "بی پاسخ"
        },
        {
            id: "#OD1711",
            user: "محمد رنج بر",
            date: "1402/12/11",
            price: "00:10:00",
            status: "گرفته شده"
        },
        {
            id: "#OD1711",
            user: "محمد رنج بر",
            date: "1402/12/11",
            price: "00:10:00",
            status: "بی پاسخ"
        },
        {
            id: "#OD1711",
            user: "محمد رنج بر",
            date: "1402/12/11",
            price: "00:10:00",
            status: "refund"
        }
    ]
}

const orderStatus = {
    "دریافتی": "primary",
    "گرفته شده": "warning",
    "بی پاسخ": "danger",

}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">داشبورد</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>آخرین تماس ها</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>مشاهده همه</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
