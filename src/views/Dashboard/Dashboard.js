import React, { Component } from 'react';
import {Bar, Doughnut, Line, Pie, Polar, Radar} from "react-chartjs-2";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import '../css/Table.css';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

import {
    Badge,
    Row,
    Col,
    Progress,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardHeader,
    CardBlock,
    CardFooter,
    CardTitle,
    Button,
    ButtonToolbar,
    ButtonGroup,
    ButtonDropdown,
    Label,
    Input,
    Table
} from "reactstrap";

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

// Card Chart 1
const cardChartData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: brandPrimary,
            borderColor: 'rgba(255,255,255,.55)',
            data: [65, 59, 84, 84, 51, 55, 40]
        }
    ],
};

const cardChartOpts1 = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent'
            },
            ticks: {
                fontSize: 2,
                fontColor: 'transparent',
            }

        }],
        yAxes: [{
            display: false,
            ticks: {
                display: false,
                min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
                max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
            }
        }],
    },
    elements: {
        line: {
            borderWidth: 1
        },
        point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4,
        },
    }
}

// Card Chart 2
const cardChartData2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: brandInfo,
            borderColor: 'rgba(255,255,255,.55)',
            data: [1, 18, 9, 17, 34, 22, 11]
        }
    ],
};

const cardChartOpts2 = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent'
            },
            ticks: {
                fontSize: 2,
                fontColor: 'transparent',
            }

        }],
        yAxes: [{
            display: false,
            ticks: {
                display: false,
                min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
                max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
            }
        }],
    },
    elements: {
        line: {
            tension: 0.00001,
            borderWidth: 1
        },
        point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4,
        },
    }
}

// Card Chart 3
const cardChartData3 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: [78, 81, 80, 45, 34, 12, 40]
        }
    ],
};

const cardChartOpts3 = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            display: false
        }],
        yAxes: [{
            display: false
        }],
    },
    elements: {
        line: {
            borderWidth: 2
        },
        point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
        },
    }
}

// Card Chart 4
const cardChartData4 = {
    labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,.3)',
            borderColor: 'transparent',
            data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
        }
    ],
};

const cardChartOpts4 = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            display: false,
            barPercentage: 0.6,
        }],
        yAxes: [{
            display: false,
        }]
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

const doughnut = {
    labels: [
        'CL/WTI',
        'MB',
        'Others'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

//
const jobTypes = [ 'Bid','Offer' ];

// Main Chart

// convert Hex to RGBA
function convertHex(hex, opacity) {
    hex = hex.replace('#', '');
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    return result;
}

//Random Numbers
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
    data1.push(random(50, 200));
    data2.push(random(80, 100));
    data3.push(65);
}

const mainChart = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
        {
            label: 'CL/WTI Oil',
            backgroundColor: convertHex(brandInfo, 10),
            borderColor: brandInfo,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: data1
        },
        {
            label: 'MB Oil',
            backgroundColor: 'transparent',
            borderColor: brandSuccess,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: data2
        },
        // {
        //     label: '',
        //     backgroundColor: 'transparent',
        //     borderColor: brandDanger,
        //     pointHoverBackgroundColor: '#fff',
        //     borderWidth: 1,
        //     borderDash: [8, 5],
        //     data: data3
        // }
    ]
};

const mainChartOpts = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false,
            }
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                stepSize: Math.ceil(250 / 5),
                max: 250
            }
        }]
    },
    elements: {
        point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
        }
    }
};

var products = [{
    id: 1,
    name: "Item name 1",
    price: 100
},{
    id: 2,
    name: "Item name 2",
    price: 100
}];


let trades = [
    {
        bidoffer:' ',
        date:'02-02-2018',
        position:'bid',
        quantity:'500',
        minquantity:'40',
        price:'$64.78',
        TLP:'$68.33',
        WDL:'$67.33',
        LDT:'$.64.55',

},
    {
        bidoffer:' ',
        date:'03-02-2018',
        position:'offer',
        quantity:'400',
        minquantity:'20',
        price:'$63.78',
        TLP:'$64.33',
        WDL:'$65.33',
        LDT:'$.64.55',

},    {
        bidoffer:' ',
        date:'02-02-2018',
        position:'bid',
        quantity:'500',
        minquantity:'40',
        price:'$64.78',
        TLP:'$68.33',
        WDL:'$67.33',
        LDT:'$.64.55',

    },
    {
        bidoffer:' ',
        date:'03-02-2018',
        position:'offer',
        quantity:'400',
        minquantity:'20',
        price:'$63.78',
        TLP:'$64.33',
        WDL:'$65.33',
        LDT:'$.64.55',

    }
,    {
        bidoffer:' ',
        date:'02-02-2018',
        position:'bid',
        quantity:'500',
        minquantity:'40',
        price:'$64.78',
        TLP:'$68.33',
        WDL:'$67.33',
        LDT:'$.64.55',

    },
    {
        bidoffer:' ',
        date:'03-02-2018',
        position:'offer',
        quantity:'400',
        minquantity:'20',
        price:'$63.78',
        TLP:'$64.33',
        WDL:'$65.33',
        LDT:'$.64.55',

    }




];


const selectRowProp = {
    mode: 'radio'
};

// It's a data format example.
function priceFormatter(cell, row){
    return ` ${cell}`;
}

function modalAdd(cell){

    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}


function beforeClose(e) {
    alert(`[Custom Event]: Before modal close event triggered!`);
}

function handleModalClose(closeModal) {

    closeModal();
}

class Dashboard extends Component {


    createCustomModalHeader  (closeModal, save)  {
        return (
            <InsertModalHeader
                className='my-custom-class'
                title='This is my custom title'
                beforeClose={this.beforeClose}
                onModalClose={() => this.handleModalClose(closeModal)}/>
            // hideClose={ true } to hide the close button
        );
    }



  render() {

      const options = {
          insertModalHeader: this.createCustomModalHeader
      };



      return (
      <div className="animated fadeIn">
          <Row>
            <Col xs="12" sm="6" lg="3">
              <Card className="text-white bg-primary">
                <CardBlock className="card-body pb-0">
                  <ButtonGroup className="float-right">
                    {/*<ButtonDropdown id='card1' isOpen={this.state.card1}*/}
                                    {/*toggle={() => { this.setState({ card1: !this.state.card1 }); }}>*/}
                      {/*<DropdownToggle caret className="p-0" color="transparent">*/}
                        <i className="icon-settings"></i>
                      {/*</DropdownToggle>*/}
                      {/*<DropdownMenu className={this.state.card1 ? "show" : ""} right>*/}
                        {/*<DropdownItem>Action</DropdownItem>*/}
                        {/*<DropdownItem>Another action</DropdownItem>*/}
                        {/*<DropdownItem disabled>Disabled action</DropdownItem>*/}
                        {/*<DropdownItem>Something else here</DropdownItem>*/}
                      {/*</DropdownMenu>*/}
                    {/*</ButtonDropdown>*/}
                  </ButtonGroup>
                  <h4 className="mb-0">823</h4>
                  <p>Current User online</p>
                </CardBlock>
                <div className="chart-wrapper px-3" style={{height:'70px'}}>
                  <Line data={cardChartData1} options={cardChartOpts1} height={70}/>
                </div>
              </Card>
            </Col>

            <Col xs="12" sm="6" lg="3">
              <Card className="text-white bg-info">
                <CardBlock className="card-body pb-0">
                  <ButtonGroup className="float-right">
                    {/*<Dropdown id='card2' isOpen={this.state.card2}*/}
                              {/*toggle={() => { this.setState({ card2: !this.state.card2 }); }}>*/}
                      {/*<DropdownToggle caret className="p-0" color="transparent">*/}
                        <i className="icon-settings"></i>
                      {/*</DropdownToggle>*/}
                      {/*<DropdownMenu className={this.state.card2 ? "show" : ""} right>*/}
                        {/*<DropdownItem>Action</DropdownItem>*/}
                        {/*<DropdownItem>Another action</DropdownItem>*/}
                        {/*<DropdownItem>Something else here</DropdownItem>*/}
                      {/*</DropdownMenu>*/}
                    {/*</Dropdown>*/}
                  </ButtonGroup>
                  <h4 className="mb-0">Activity </h4>
                  <p>Bid/Offer</p>
                </CardBlock>
                <div className="chart-wrapper px-3" style={{height:'70px'}}>
                  <Line data={cardChartData2} options={cardChartOpts2} height={70}/>
                </div>
              </Card>
            </Col>

            <Col xs="12" sm="6" lg="3">
              <Card className="text-white bg-warning">
                <CardBlock className="card-body pb-0">
                  <ButtonGroup className="float-right">
                    {/*<Dropdown id='card3' isOpen={this.state.card3}*/}
                              {/*toggle={() => { this.setState({ card3: !this.state.card3 }); }}>*/}
                      {/*<DropdownToggle caret className="p-0" color="transparent">*/}
                        <i className="icon-settings"></i>
                      {/*</DropdownToggle>*/}
                      {/*<DropdownMenu className={this.state.card3 ? "show" : ""} right>*/}
                        {/*<DropdownItem>Action</DropdownItem>*/}
                        {/*<DropdownItem>Another action</DropdownItem>*/}
                        {/*<DropdownItem>Something else here</DropdownItem>*/}
                      {/*</DropdownMenu>*/}
                    {/*</Dropdown>*/}
                  </ButtonGroup>
                  <h4 className="mb-0">9823</h4>
                  <p>Total Volume Traded </p>
                </CardBlock>
                <div className="chart-wrapper px-0" style={{height:'70px'}}>
                  <Line data={cardChartData3} options={cardChartOpts3} height={70}/>
                </div>
              </Card>
            </Col>

            <Col xs="12" sm="6" lg="3">
              <Card className="text-white bg-danger">
                <CardBlock className="card-body pb-0">
                  <ButtonGroup className="float-right">
                    {/*<ButtonDropdown id='card4' isOpen={this.state.card4}*/}
                                    {/*toggle={() => { this.setState({ card4: !this.state.card4 }); }}>*/}
                      {/*<DropdownToggle caret className="p-0" color="transparent">*/}
                        <i className="icon-settings"></i>
                      {/*</DropdownToggle>*/}
                      {/*<DropdownMenu className={this.state.card4 ? "show" : ""} right>*/}
                        {/*<DropdownItem>Action</DropdownItem>*/}
                        {/*<DropdownItem>Another action</DropdownItem>*/}
                        {/*<DropdownItem>Something else here</DropdownItem>*/}
                      {/*</DropdownMenu>*/}
                    {/*</ButtonDropdown>*/}
                  </ButtonGroup>
                  <h4 className="mb-0">23</h4>
                  <p>Trade Today</p>
                </CardBlock>
                <div className="chart-wrapper px-3" style={{height:'70px'}}>
                  <Bar data={cardChartData4} options={cardChartOpts4} height={70}/>
                </div>
              </Card>
            </Col>
          </Row>

          <Row>
              <Col xs="12" sm="6" lg="6">
                  <Card>
                      <CardBlock className="card-body">
                          <Row>
                              <Col sm="5">
                                  <CardTitle className="mb-0">CL / MB Price Overview </CardTitle>
                                  <div className="small text-muted">Jan 2018</div>
                              </Col>
                              <Col sm="7" className="d-none d-sm-inline-block">
                                  <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                                  <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                                      <ButtonGroup className="mr-3" data-toggle="buttons" aria-label="First group">
                                          <Label htmlFor="option1" className="btn btn-outline-secondary">
                                              <Input type="radio" name="options" id="option1"/> Day
                                          </Label>
                                          <Label htmlFor="option2" className="btn btn-outline-secondary active">
                                              <Input type="radio" name="options" id="option2" defaultChecked/> Month
                                          </Label>
                                          <Label htmlFor="option3" className="btn btn-outline-secondary">
                                              <Input type="radio" name="options" id="option3"/> Year
                                          </Label>
                                      </ButtonGroup>
                                  </ButtonToolbar>
                              </Col>
                          </Row>
                          <div className="chart-wrapper" style={{height: 300 + 'px', marginTop: 40 + 'px'}}>
                              <Line data={mainChart} options={mainChartOpts} height={300}/>
                          </div>
                      </CardBlock>
                      {/*<CardFooter>*/}
                          {/*<ul>*/}
                              {/*<li>*/}
                                  {/*<div className="text-muted">Visits</div>*/}
                                  {/*<strong>29.703 Users (40%)</strong>*/}
                                  {/*<Progress className="progress-xs mt-2" color="success" value="40"/>*/}
                              {/*</li>*/}
                              {/*<li className="d-none d-md-table-cell">*/}
                                  {/*<div className="text-muted">Unique</div>*/}
                                  {/*<strong>24.093 Users (20%)</strong>*/}
                                  {/*<Progress className="progress-xs mt-2" color="info" value="20"/>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                                  {/*<div className="text-muted">Pageviews</div>*/}
                                  {/*<strong>78.706 Views (60%)</strong>*/}
                                  {/*<Progress className="progress-xs mt-2" color="warning" value="60"/>*/}
                              {/*</li>*/}
                              {/*<li className="d-none d-md-table-cell">*/}
                                  {/*<div className="text-muted">New Users</div>*/}
                                  {/*<strong>22.123 Users (80%)</strong>*/}
                                  {/*<Progress className="progress-xs mt-2" color="danger" value="80"/>*/}
                              {/*</li>*/}
                              {/*<li className="d-none d-md-table-cell">*/}
                                  {/*<div className="text-muted">Bounce Rate</div>*/}
                                  {/*<strong>Average 40.15%</strong>*/}
                                  {/*<Progress className="progress-xs mt-2" color="primary" value="40"/>*/}
                              {/*</li>*/}
                          {/*</ul>*/}
                      {/*</CardFooter>*/}
                  </Card>
              </Col>
            <Col xs="12" sm="6" lg="6">
              <Card>
                  <Col sm="5">
                      <CardTitle className="mt-3">Today's Contract </CardTitle>
                      <div className="small text-muted">11-Jan-2018</div>
                  </Col>
                  <CardBlock className="card-body">
                      <div className="chart-wrapper">
                          <Doughnut data={doughnut}/>
                      </div>
                  </CardBlock>
              </Card>
            </Col>
          </Row>

    <Row>
        <Col>
            <CardTitle className="mt-3">Trade Information </CardTitle>

            <BootstrapTable data={trades} striped={true} hover={true} options={ options } insertRow selectRow={ selectRowProp }>

                <TableHeaderColumn dataField='bidoffer' >

                </TableHeaderColumn>
                <TableHeaderColumn isKey dataField='date'>
                    Date
                </TableHeaderColumn>

                <TableHeaderColumn dataField='position'  >Position</TableHeaderColumn>

                <TableHeaderColumn dataField='quantity'>
                    Quantity
                </TableHeaderColumn>
                <TableHeaderColumn dataField='minquantity'>
                    Min. Quantity
                </TableHeaderColumn>
                <TableHeaderColumn dataField='price'>
                    Show Price
                </TableHeaderColumn>
                <TableHeaderColumn dataField='TLP'>
                    Trade Limit Price
                </TableHeaderColumn>
                <TableHeaderColumn dataField='WDL'>
                    WTI Diff Price
                </TableHeaderColumn>
                <TableHeaderColumn dataField='LDT' dataFormat={priceFormatter}>
                    Limit Diff Trade
                </TableHeaderColumn>
            </BootstrapTable>

            {/*<BootstrapTable data={products} striped={true} hover={true}>*/}
                {/*<TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>*/}
                {/*<TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>*/}
                {/*<TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>*/}
            {/*</BootstrapTable>,*/}


        </Col>
    </Row>

      </div>
    )
  }
}

export default Dashboard;
